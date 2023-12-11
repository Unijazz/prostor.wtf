import type { Metadata } from "next";
import { Footer } from "../components/Footer";

import "./globals.css";
import { LogoType } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Prostor | Kafe, Kultura, Komunita",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

const Header = () => (
  <header className="bg-gravel flex flex-row p-8 mb-10">
    <div className="h-[40px] m-auto">
      <LogoType />
    </div>
  </header>
);
