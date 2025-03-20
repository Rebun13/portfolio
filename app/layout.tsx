import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes';
import { Navbar } from "@/components/ui/navbar/Navbar";
import { Footer } from "@/components/ui/footer/Footer";

import "@/app/globals.css";
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
        suppressHydrationWarning
      >
        <ThemeProvider>
        <span className="wallpaper" />
        <Navbar />
        {children}
        <Footer title={`Rubén Gómez Dopazo @ ${new Date().getFullYear()}`} />
        </ThemeProvider>
      </body>
    </html>
  );
}
