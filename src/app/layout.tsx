import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ApolloWrapper } from "@/lib/ApolloWrapper";

const MontSerrat = localFont({
  src: "./fonts/montserrat-v29-latin-regular.woff2",
  variable: "--font-montserrat",
  weight: "100 300",
});

export const metadata: Metadata = {
  title: "blog",
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
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
