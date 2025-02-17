import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavBar } from "./components/navbar";
import { SideBar } from "./components/sidebar";

const MontSerrat = localFont({
  src: "./fonts/montserrat-v29-latin-regular.woff2",
  variable: "--font-montserrat",
  weight: "100 300",
});

export const metadata: Metadata = {
  title: "Megats.",
  description: "Megat blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${MontSerrat.variable} bg-gray-50`}>
        <div className="flex flex-col h-screen overflow-hidden">
          <NavBar />
          <div className="flex">
            <SideBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
