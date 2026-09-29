"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Cakes", href: "/cakes" },
    { name: "Recipes", href: "/recipes" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-3 shadow-bakery border-b border-[#E8D4C0]/50"
          : "bg-[#F8EBD9]/90 backdrop-blur-md py-4 md:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LEFT: SJS Bakers Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div 
              className="relative w-11 h-11 md:w-13 md:h-13 transition-transform duration-300 group-hover:scale-105 rounded-lg overflow-hidden border border-[#4A2412]/10 bg-[#2B170E]"
              title="Click to replay logo animation"
              onClick={(e) => {
                // If on homepage, dispatch replay splash event
                if (window.location.pathname === '/') {
                  window.dispatchEvent(new CustomEvent('replay-sjs-splash'));
                }
              }}
            >
              <Image
                src="/images/sjs-logo.jpg"
                alt="SJS Bakers Logo"
                fill
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-header text-xl md:text-2xl font-bold tracking-tight text-[#4A2412] leading-none">
                SJS
              </span>
              <span className="text-[10px] md:text-xs font-semibold tracking-widest text-[#C47A20] uppercase leading-tight">
                BAKERS
              </span>
            </div>
          </Link>

          {/* CENTER: Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm lg:text-base font-medium transition-colors duration-200 relative py-1 ${
                    isActive
                      ? "text-[#4A2412] font-semibold"
                      : "text-[#6B351A] hover:text-[#4A2412]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C47A20] rounded-full animate-fade-in" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* MOBILE: Hamburger Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#4A2412] hover:bg-[#FAF2E8] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F8EBD9] border-b border-[#E8D4C0] px-4 pt-3 pb-6 space-y-3 animate-fade-in">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[#FAF2E8] text-[#4A2412] font-bold border-l-4 border-[#C47A20]"
                      : "text-[#6B351A] hover:bg-[#FAF2E8] hover:text-[#4A2412]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
