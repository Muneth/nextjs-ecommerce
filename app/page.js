import Link from "next/link";

const products = [
  { id: 1, name: "Product A", price: 1999, image: "/p1.jpg" },
  { id: 2, name: "Product B", price: 2999, image: "/p2.jpg" },
  { id: 3, name: "Product C", price: 3999, image: "/p3.jpg" },
  { id: 4, name: "Product D", price: 4999, image: "/p4.jpg" },
  { id: 5, name: "Product E", price: 5999, image: "/p5.jpg" },
];

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>My Store</h1>
      <div style={{ display: "grid", gap: 20, gridTemplateColumns: "1fr 1fr 1fr" }}>
        {products.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ddd", padding: 10 }}>
            <img src={p.image} alt={p.name} width="200" />
            <h3>{p.name}</h3>
            <p>€{(p.price / 100).toFixed(2)}</p>
            <Link href={`/checkout?id=${p.id}&price=${p.price}&name=${p.name}`}>
              <button>Buy</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
