import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

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
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-6 p-0 mt-0">
          <aside className="bg-gray-100 p-4 rounded-lg order-2">
            <Sidebar />
          </aside>
          <main className="order-1 md:order-2">{children}</main>
          <aside className="bg-gray-100 p-4 rounded-lg order-3">
              Right Sidebar
          </aside>
        </div>
      </body>
    </html>
  );
}
