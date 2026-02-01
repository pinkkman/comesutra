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
  // improve mobile scaling on Android/iOS
  viewport: 'width=device-width,initial-scale=1',
  // status bar colour on Android / PWA hint
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F7F3F0' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0b0b' },
  ],
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
