import type { Metadata } from "next";
import "../../styles/index.scss";
import { poppins } from "../../styles/fonts";
import Layout from "@/components/Layout";

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
      <body className={poppins.variable}>
        <Layout variant={"primary"}>{children}</Layout>
      </body>
    </html>
  );
}
