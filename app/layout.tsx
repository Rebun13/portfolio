import type { Metadata } from "next";
import "@/app/globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { primaryFont } from "../components/fonts/fonts";

export const metadata: Metadata = {
  title: "Ruben Gomez Dopazo",
  description: "My online portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${primaryFont.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer title="Rubén Gómez Dopazo @ 2024" />
      </body>
    </html>
  );
}
