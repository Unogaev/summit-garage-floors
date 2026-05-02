import "./globals.css";

export const metadata = {
  title: "Summit Garage Floors",
  description: "Luxury garage floor coating systems for premium Montana homes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
