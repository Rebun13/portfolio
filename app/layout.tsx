import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import { Footer } from "@/components/Footer";

const accentFont = localFont({
  src: "./fonts/Mulish.ttf",
  weight: "700",
});
const primaryFont = localFont({
  src: "./fonts/SpaceMono.ttf",
  weight: "400",
});

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
        className={`${accentFont.className} ${primaryFont.className} antialiased`}
      >
        {children}
        <Footer title="Rubén Gómez Dopazo @ 2024" />
      </body>
    </html>
  );
}
