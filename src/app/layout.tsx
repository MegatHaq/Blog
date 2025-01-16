import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavBar } from "./components/navbar";
import { SideBar } from "./components/sidebar";
import { navBarItems } from "@/lib/constants";
import { ApolloWrapper } from "@/lib/ApolloWrapper";

const MontSerrat = localFont({
  src: "./fonts/montserrat-v29-latin-regular.woff2",
  variable: "--font-montserrat",
  weight: "100 300",
});

export const metadata: Metadata = {
  title: "Blog",
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
        <ApolloWrapper>
          <div className="flex flex-col h-screen overflow-hidden">
            <NavBar navBarItems={navBarItems} />
            <div className="flex">
              <SideBar />
              {children}
            </div>
          </div>
        </ApolloWrapper>
      </body>
    </html>
  );
}
