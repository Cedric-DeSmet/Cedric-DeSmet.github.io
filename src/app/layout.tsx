import type { Metadata } from "next";
import { Inter, Calistoga } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Cedric De Smet — Independent Website Developer",
  description:
    "Website development and redesign for businesses and independent professionals. Explore selected work and discuss your website project with Cedric De Smet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${calistoga.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
