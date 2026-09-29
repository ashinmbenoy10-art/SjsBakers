"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Copy, Check, MessageCircle, Sparkles } from "lucide-react";
import { useOrderModal } from "@/context/OrderContext";

export const OrderEnquiryBar = () => {
  const { openOrderModal } = useOrderModal();
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  const enquiryInfoText = `SJS Bakers - Custom Cake Order Enquiry Details:
Phone / WhatsApp: +91 94004 67088 / +91 99464 30775
Email: aleyammamm9@gmail.com
Location: Edakkattukunnu, S N Puram P.O, Pampady, Kottayam
Hours: Mon-Sun 9:00 AM - 8:00 PM`;

  return (
    <section className="bg-[#FAF2E8] py-8 border-y border-[#E8D4C0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E8D4C0]">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="p-2.5 bg-[#4A2412] text-[#F8EBD9] rounded-2xl shadow-sm">
              <Sparkles className="w-5 h-5 text-[#E09B3E]" />
            </div>
            <div>
              <h3 className="font-serif-header text-xl md:text-2xl font-bold text-[#4A2412]">
                Quick Order & Enquiry Information
              </h3>
              <p className="text-xs md:text-sm text-[#7A5C4A]">
                Contact SJS Bakers directly or send your custom cake specifications
              </p>
            </div>
          </div>

          {/* Copy All Info Button */}
          <button
            onClick={() => handleCopy(enquiryInfoText, "all")}
            className="px-4 py-2.5 rounded-full bg-white hover:bg-[#F8EBD9] text-[#4A2412] font-semibold text-xs sm:text-sm border border-[#E8D4C0] shadow-xs transition-all flex items-center gap-2"
          >
            {copiedText === "all" ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-bold">Enquiry Info Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#C47A20]" />
                <span>Copy Order Enquiry Info</span>
              </>
            )}
          </button>
        </div>

        {/* 4-GRID INFO CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* 1. PHONE & WHATSAPP */}
          <div className="bg-white p-4 rounded-2xl border border-[#F3E6D5] shadow-xs flex flex-col justify-between space-y-3 group hover:border-[#C47A20] transition-colors">
            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-[#FAF2E8] text-[#C47A20] rounded-xl shrink-0 group-hover:bg-[#C47A20] group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-bold text-[#C47A20] uppercase tracking-wider block">
                  WhatsApp & Phone
                </span>
                <a
                  href="https://wa.me/919400467088"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#4A2412] text-sm block hover:text-[#C47A20] truncate"
                >
                  +91 94004 67088 (WhatsApp)
                </a>
                <a
                  href="tel:+919946430775"
                  className="text-xs text-[#7A5C4A] block hover:text-[#C47A20] truncate"
                >
                  +91 99464 30775
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1 border-t border-[#FAF2E8]">
              <a
                href="https://wa.me/919400467088"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-[11px] font-bold rounded-lg flex items-center justify-center gap-1 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Chat WhatsApp</span>
              </a>
              <button
                onClick={() => handleCopy("+91 94004 67088", "phone")}
                className="p-1.5 bg-[#FAF2E8] hover:bg-[#E8D4C0] text-[#4A2412] rounded-lg transition-colors"
                title="Copy phone number"
              >
                {copiedText === "phone" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#C47A20]" />}
              </button>
            </div>
          </div>

          {/* 2. EMAIL INQUIRY */}
          <div className="bg-white p-4 rounded-2xl border border-[#F3E6D5] shadow-xs flex flex-col justify-between space-y-3 group hover:border-[#C47A20] transition-colors">
            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-[#FAF2E8] text-[#C47A20] rounded-xl shrink-0 group-hover:bg-[#C47A20] group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-bold text-[#C47A20] uppercase tracking-wider block">
                  Email Inquiries
                </span>
                <a
                  href="mailto:aleyammamm9@gmail.com?subject=Custom%20Cake%20request%20section"
                  className="font-semibold text-[#4A2412] text-xs sm:text-sm block hover:text-[#C47A20] underline truncate"
                >
                  aleyammamm9@gmail.com
                </a>
                <span className="text-[11px] text-[#7A5C4A] block truncate">
                  Subject: Custom Cake request section
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1 border-t border-[#FAF2E8]">
              <a
                href="mailto:aleyammamm9@gmail.com?subject=Custom%20Cake%20request%20section"
                className="flex-1 py-1.5 bg-[#FAF2E8] hover:bg-[#F3E6D5] text-[#4A2412] text-[11px] font-bold rounded-lg flex items-center justify-center gap-1 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#C47A20]" />
                <span>Send Email</span>
              </a>
              <button
                onClick={() => handleCopy("aleyammamm9@gmail.com", "email")}
                className="p-1.5 bg-[#FAF2E8] hover:bg-[#E8D4C0] text-[#4A2412] rounded-lg transition-colors"
                title="Copy email address"
              >
                {copiedText === "email" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#C47A20]" />}
              </button>
            </div>
          </div>

          {/* 3. LOCATION ADDRESS */}
          <div className="bg-white p-4 rounded-2xl border border-[#F3E6D5] shadow-xs flex flex-col justify-between space-y-3 group hover:border-[#C47A20] transition-colors">
            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-[#FAF2E8] text-[#C47A20] rounded-xl shrink-0 group-hover:bg-[#C47A20] group-hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-bold text-[#C47A20] uppercase tracking-wider block">
                  Bakery Location
                </span>
                <p className="font-semibold text-[#4A2412] text-xs leading-tight">
                  Edakkattukunnu, S N Puram P.O
                </p>
                <p className="text-xs text-[#7A5C4A]">
                  Pampady, Kottayam
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1 border-t border-[#FAF2E8]">
              <a
                href="/contact"
                className="flex-1 py-1.5 bg-[#FAF2E8] hover:bg-[#F3E6D5] text-[#4A2412] text-[11px] font-bold rounded-lg flex items-center justify-center gap-1 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C47A20]" />
                <span>View Map</span>
              </a>
              <button
                onClick={() => handleCopy("Edakkattukunnu, S N Puram P.O, Pampady, Kottayam", "location")}
                className="p-1.5 bg-[#FAF2E8] hover:bg-[#E8D4C0] text-[#4A2412] rounded-lg transition-colors"
                title="Copy location address"
              >
                {copiedText === "location" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#C47A20]" />}
              </button>
            </div>
          </div>

          {/* 4. ORDER HOURS & ONLINE REQUEST */}
          <div className="bg-white p-4 rounded-2xl border border-[#F3E6D5] shadow-xs flex flex-col justify-between space-y-3 group hover:border-[#C47A20] transition-colors">
            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-[#FAF2E8] text-[#C47A20] rounded-xl shrink-0 group-hover:bg-[#C47A20] group-hover:text-white transition-colors">
                <Clock className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-bold text-[#C47A20] uppercase tracking-wider block">
                  Order Hours
                </span>
                <p className="font-semibold text-[#4A2412] text-xs">
                  Mon - Sun: 9:00 AM - 8:00 PM
                </p>
                <p className="text-[11px] text-emerald-700 font-semibold pt-0.5">
                  ✓ 100% Homemade & Eggless Options
                </p>
              </div>
            </div>

            <div className="pt-1 border-t border-[#FAF2E8]">
              <button
                onClick={() => openOrderModal("Custom Cake")}
                className="w-full py-1.5 bg-[#4A2412] hover:bg-[#35180B] text-white text-[11px] font-bold rounded-lg flex items-center justify-center gap-1 transition-colors shadow-xs"
              >
                <span>Request Custom Cake</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
