import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Twitter clone",
  description: "A simple Twitter clone built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {/* every page of the web app will be wrapped here */}
        {children}
      </body>
    </html>
  );
}
