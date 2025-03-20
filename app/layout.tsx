import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes';
import { Navbar } from "@/components/ui/navbar/Navbar";
import { Footer } from "@/components/ui/footer/Footer";

import "@/app/globals.css";
import { primaryFont } from "../components/fonts/fonts";
import { ThemeToggle } from "@/components/ui/theme/ThemeToggle";

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
          <div className="container">
            <span className="wallpaper" />
            <Navbar />
            <ThemeToggle/>
            {children}
            <Footer title={`Rubén Gómez Dopazo @ ${new Date().getFullYear()}`} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
