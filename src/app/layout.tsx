import type { Metadata } from "next";
import "../styles/index.scss";
import { poppins } from "../styles/fonts";

export const metadata: Metadata = {
  title: "CHARTERAG",
  description: "Workspace Frontend task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}
