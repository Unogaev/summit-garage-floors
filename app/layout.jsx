import "./globals.css";

export const metadata = {
  title: "Summit Garage Floors",
  description: "Luxury garage floor coating systems for premium Montana homes.",
  verification: {
    google: "bO3aiXJ5EZs35JxzV8OppTAoGd3DMf_lDLy-KdCSxls",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
