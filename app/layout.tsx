import type { Metadata } from "next";
import { Baloo_2 } from "next/font/google";
import "./globals.css";
import Header from "./layouts/Header";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Footer from "@/app/layouts/Footer";

const baloo = Baloo_2({
  subsets: ["vietnamese", "latin"],
  weight: "800",
  variable: "--font-baloo",
});

export const metadata: Metadata = {
  title: "My Gao Chu",
  description: "San Pham Cua Moi Gia Dinh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="grid min-h-screen grid-rows-[1fr_auto]"
        style={{ fontFamily: baloo.style.fontFamily }}
      >
        <main>
          <Header />
          <MainLayout>{children}</MainLayout>
        </main>
        <Footer />
      </body>
    </html>
  );
}
