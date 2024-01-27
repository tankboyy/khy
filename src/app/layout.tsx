import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "사진사진",
  description: "하이루!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
