import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adinda Shafa Najla — Software Engineering Portfolio",
  description:
    "Portfolio of Adinda Shafa Najla, Software Engineering undergraduate at ITS working across software development, AI, QA, and academic technology projects.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Adinda Shafa Najla — Software Engineering Portfolio",
    description:
      "Software engineering, AI, QA, teaching, and selected projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
