import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "ROLL CALL — A 31-Day Gratitude Journey Through the Names of God",
  description:
    "Get the free Day 1 chapter of ROLL CALL by DinahMight Books. She had one meal left. He asked for it first. See what happened next.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://dinahmight-books.kit.com/42e94f10e1/index.js" async data-uid="42e94f10e1"></script>
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
