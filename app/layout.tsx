import "./globals.css";
import type { Metadata } from "next";
import { Itim } from "next/font/google";

// ✅ ฟอนต์ไอติม (Itim)
const itim = Itim({
  subsets: ["thai", "latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Food list",
  description: "Menu view-only",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={itim.className}>{children}</body>
    </html>
  );
}
