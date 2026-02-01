import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "COME सूत्र",
  description: "Join us for a night of fun and celebration!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${playfair.variable} font-body antialiased`}>
        {/* Site-wide background wrapper (style this via globals.css) */}
        <div className="min-h-dvh w-full bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
