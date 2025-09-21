"use client";
import { useSearchParams } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Checkout() {
  const params = useSearchParams();
  const name = params.get("name");
  const price = params.get("price");

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const res = await fetch("/api/checkout_sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price }),
    });
    const session = await res.json();
    await stripe.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Checkout</h1>
      {name && (
        <>
          <p>{name} - €{(price / 100).toFixed(2)}</p>
          <button onClick={handleCheckout}>Pay Now</button>
        </>
      )}
    </div>
  );
}
