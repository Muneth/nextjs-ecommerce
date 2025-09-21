export const metadata = {
  title: "My Store",
  description: "Simple Next.js + Stripe Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif", margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
