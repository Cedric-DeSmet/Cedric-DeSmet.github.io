import type { Metadata } from "next";
import { Inter, Calistoga } from 'next/font/google';
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Cedric De Smet — Developer Portfolio",
  description:
    "Portfolio of Cedric De Smet — building exceptional digital experiences with Python, Java, CSS and Tailwind.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable, 
          calistoga.variable, 
          "bg-gray-900 text-white antialised font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
