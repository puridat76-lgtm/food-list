import "./globals.css";
import { Itim } from "next/font/google";

const itim = Itim({
  subsets: ["thai", "latin"],
  weight: "400",
});

export const metadata = {
  title: "wisawa-salmon",
  icons: {
    icon: "/favicon.ico",
  },
  description: "menu view-only",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className={itim.className}>{children}</body>
    </html>
  );
}
