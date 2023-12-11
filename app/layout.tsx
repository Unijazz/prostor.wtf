import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prostor | Kafe, Kultura, Komunita",
  description: `Prostor je kavárna, kulturní a komunitní centrum pro širokou
  veřejnost a platforma pro aktivní lidi s chutí a nápadem. Pořádáme koncerty,
  divadla, besedy, výstavy, promítání, akce pro děti a mnohem víc. Vítáme
  každého, kdo se chce připojit s vlastní akcí a vytvářet s námi Prostor
  pro komunitní život, umění, vzdělávání, práci i nezávazné setkávání.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
