import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavBar } from "./components/navbar";
import { SideBar } from "./components/sidebar";

const Roboto = localFont({
  src: "./fonts/Roboto-Regular-webfont.woff",
  variable: "--font-roboto",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Roboto.variable} bg-gray-50`}>
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
