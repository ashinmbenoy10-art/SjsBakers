import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Heart, Globe, MessageCircle } from "lucide-react";

export const Footer = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Cakes", href: "/cakes" },
    { name: "Recipes", href: "/recipes" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-[#4A2412] text-[#F8EBD9] pt-16 pb-8 border-t border-[#6B351A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#6B351A]/60">
          
          {/* BRAND COLUMN */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative w-12 h-12 bg-white/10 p-0.5 rounded-full border border-[#C47A20]/40 overflow-hidden">
                <Image
                  src="/images/sjs-logo.jpg"
                  alt="SJS Bakers Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-serif-header text-2xl font-bold tracking-tight text-white block leading-none">
                  SJS Bakers
                </span>
                <span className="text-[10px] tracking-widest text-[#E09B3E] uppercase font-semibold">
                  Custom Bakery
                </span>
              </div>
            </Link>
            
            <p className="text-sm text-[#D4B8A5] max-w-sm font-normal leading-relaxed">
              Homemade custom cakes made with love. We turn your sweetest celebrations into custom-baked edible perfection.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#6B351A] hover:bg-[#C47A20] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#6B351A] hover:bg-[#C47A20] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.592 9 4.417V8z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/919400467088"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#6B351A] hover:bg-[#C47A20] text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif-header text-lg font-bold text-white tracking-wide">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#D4B8A5] hover:text-[#E09B3E] transition-colors py-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif-header text-lg font-bold text-white tracking-wide">
              Order Inquiries
            </h4>
            <div className="text-xs sm:text-sm text-[#D4B8A5] space-y-2">
              <p className="flex flex-col">
                <span className="font-semibold text-white">WhatsApp / Phone:</span>
                <a href="https://wa.me/919400467088" target="_blank" rel="noopener noreferrer" className="hover:text-[#E09B3E]">
                  +91 94004 67088 (WhatsApp)
                </a>
                <a href="tel:+919946430775" className="hover:text-[#E09B3E]">
                  +91 99464 30775
                </a>
              </p>
              <p className="flex flex-col">
                <span className="font-semibold text-white">Email:</span>
                <a href="mailto:aleyammamm9@gmail.com" className="hover:text-[#E09B3E] underline">
                  aleyammamm9@gmail.com
                </a>
              </p>
              <p className="flex flex-col">
                <span className="font-semibold text-white">Location:</span>
                <span>Edakkattukunnu, S N Puram P.O,</span>
                <span>Pampady, Kottayam</span>
              </p>
            </div>
          </div>

        </div>

        {/* COPYRIGHT & CREDITS */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#B89885] gap-4">
          <p>© 2026 SJS Bakers. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#C83E3E] fill-[#C83E3E]" />
            <span>for custom cake lovers</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
