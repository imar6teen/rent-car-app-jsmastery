import "./globals.css";
import { Footer, Navbar } from "@/components";

export const metadata = {
  title: "Car Showcase",
  description: "Javascript Mastery Tutorial Next JS 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
