import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Dancing_Script } from "next/font/google";
import "./globals.css";
import { OrderProvider } from "@/context/OrderContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OrderModal } from "@/components/OrderModal";
import { LogoSplash } from "@/components/LogoSplash";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SJS Bakers | Homemade Custom Cakes",
  description:
    "SJS Bakers creates homemade custom cakes made to your specification for birthdays, celebrations and special moments.",
  keywords: [
    "SJS Bakers",
    "Custom Cakes",
    "Homemade Cakes",
    "Birthday Cakes",
    "Red Velvet Cake",
    "Chocolate Truffle Cake",
    "Custom Bakery",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} ${dancing.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FFFDF9] text-[#4A2412] selection:bg-[#F8EBD9] selection:text-[#4A2412]">
        <LogoSplash />
        <OrderProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <OrderModal />
          <Footer />
        </OrderProvider>
      </body>
    </html>
  );
}

