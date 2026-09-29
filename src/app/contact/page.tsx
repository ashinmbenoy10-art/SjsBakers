"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle, Clock, Upload, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/Button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cakeType: "",
    message: "",
  });

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
      setImagePreview(null);
    }
  };

  const getEmailLink = () => {
    const recipient = "aleyammamm9@gmail.com";
    const subject = encodeURIComponent("Custom Cake request section");
    const bodyText = `Custom Cake Request Details:
-----------------------------------------
Customer Name: ${formData.name}
Phone / WhatsApp: ${formData.phone}
Customer Email: ${formData.email || "N/A"}
Cake Type / Theme: ${formData.cakeType || "Custom Cake"}
Message / Specifications: ${formData.message}
${selectedImage ? `Attached Image: ${selectedImage.name}` : "Attached Image: None"}

Location: Edakkattukunnu, S N Puram P.O, Pampady, Kottayam
Sent via SJS Bakers Contact & Inquiry Form`;

    return `mailto:${recipient}?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
  };

  const getWhatsAppLink = () => {
    const phone = "919400467088";
    const text = `Hi SJS Bakers! Custom Cake Request:
-----------------------------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || "N/A"}
*Cake Type:* ${formData.cakeType || "Custom Cake"}
*Specifications:* ${formData.message}
${selectedImage ? `*Reference Image:* Attached (${selectedImage.name})` : ""}`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = getEmailLink();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 md:pt-36 bg-[#FFFDF9] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PAGE HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-[#C47A20] uppercase tracking-widest block mb-2">
            Get In Touch
          </span>
          <h1 className="font-serif-header text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#4A2412] tracking-tight mb-3">
            Contact SJS Bakers
          </h1>
          <p className="text-base sm:text-lg text-[#7A5C4A]">
            Have a custom cake inquiry or want to discuss design ideas? Reach out to us directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* CONTACT INFORMATION & GOOGLE MAP CARDS */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAF2E8] p-6 sm:p-8 rounded-3xl border border-[#E8D4C0] space-y-6 shadow-sm">
              
              <h3 className="font-serif-header text-2xl font-bold text-[#4A2412]">
                SJS Bakers Details
              </h3>

              <div className="space-y-5 text-sm sm:text-base">
                
                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-white text-[#C47A20] border border-[#E8D4C0] shrink-0 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#4A2412]">Phone / WhatsApp</h4>
                    <p className="text-[#7A5C4A]">
                      <a href="https://wa.me/919400467088" target="_blank" rel="noopener noreferrer" className="hover:text-[#C47A20] font-medium">
                        +91 94004 67088 (WhatsApp)
                      </a>
                    </p>
                    <p className="text-[#7A5C4A]">
                      <a href="tel:+919946430775" className="hover:text-[#C47A20] font-medium">
                        +91 99464 30775
                      </a>
                    </p>
                    <p className="text-xs text-[#C47A20] pt-1">Quickest response for custom cake orders!</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-white text-[#C47A20] border border-[#E8D4C0] shrink-0 shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#4A2412]">Email Address</h4>
                    <a href="mailto:aleyammamm9@gmail.com" className="text-[#7A5C4A] hover:text-[#C47A20] underline">
                      aleyammamm9@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-white text-[#C47A20] border border-[#E8D4C0] shrink-0 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#4A2412]">Bakery Location</h4>
                    <p className="text-[#7A5C4A]">Edakkattukunnu, S N Puram P.O</p>
                    <p className="text-[#7A5C4A]">Pampady, Kottayam</p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4 pt-3 border-t border-[#E8D4C0]">
                  <div className="p-3 rounded-2xl bg-white text-[#C47A20] border border-[#E8D4C0] shrink-0 shadow-xs">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#4A2412]">Order Hours</h4>
                    <p className="text-[#7A5C4A]">Monday - Sunday: 9:00 AM - 8:00 PM</p>
                  </div>
                </div>

              </div>

            </div>

            {/* GOOGLE MAP EMBED CARD */}
            <div className="bg-white p-4 sm:p-5 rounded-3xl border border-[#F3E6D5] shadow-bakery">
              <h4 className="font-serif-header text-lg font-bold text-[#4A2412] mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C47A20]" />
                <span>Locate SJS Bakers</span>
              </h4>
              <div className="overflow-hidden rounded-2xl border border-[#E8D4C0] shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d308.8407764049133!2d76.65691246779936!3d9.591001454583987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sedkkattukunnu!5e1!3m2!1sen!2sin!4v1790676307021!5m2!1sen!2sin"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="SJS Bakers Location Map"
                  className="w-full"
                />
              </div>
            </div>

          </div>

          {/* CONTACT / INQUIRY FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#F3E6D5] shadow-bakery">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-[#FAF2E8] text-[#C47A20] rounded-full flex items-center justify-center mx-auto border-2 border-[#C47A20]">
                    <CheckCircle className="w-10 h-10 text-[#C47A20]" />
                  </div>
                  <h3 className="font-serif-header text-2xl sm:text-3xl font-bold text-[#4A2412]">
                    Custom Cake Request Prepared!
                  </h3>
                  <p className="text-[#7A5C4A] max-w-md mx-auto text-sm sm:text-base">
                    Thank you <strong className="text-[#4A2412]">{formData.name}</strong>. Your request heading <strong className="text-[#4A2412]">"Custom Cake request section"</strong> is ready to send to <strong className="text-[#C47A20]">aleyammamm9@gmail.com</strong>.
                  </p>
                  
                  {imagePreview && (
                    <div className="flex items-center justify-center gap-3 bg-[#FAF2E8] p-3 rounded-2xl border border-[#E8D4C0] max-w-xs mx-auto">
                      <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-[#C47A20]">
                        <img src={imagePreview} alt="Attached reference photo" className="w-full h-full object-cover" />
                      </div>
                      <div className="text-left text-xs">
                        <p className="font-bold text-[#4A2412]">Reference Photo Attached</p>
                        <p className="text-[11px] text-[#7A5C4A]">{selectedImage?.name}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                    <a
                      href={getEmailLink()}
                      className="px-6 py-3 bg-[#4A2412] hover:bg-[#35180B] text-white rounded-full font-semibold text-sm flex items-center gap-2 shadow-md transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#E09B3E]" />
                      <span>Send Email Now</span>
                    </a>
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full font-semibold text-sm flex items-center gap-2 shadow-md transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-white" />
                      <span>Send via WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-serif-header text-2xl font-bold text-[#4A2412] mb-1">
                    Send Us a Custom Cake Request
                  </h3>
                  <p className="text-xs text-[#7A5C4A] mb-4">
                    Directly emailed to aleyammamm9@gmail.com under "Custom Cake request section"
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-[#4A2412] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E8D4C0] bg-[#FFFDF9] text-[#4A2412] text-sm focus:outline-none focus:ring-2 focus:ring-[#C47A20]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-[#4A2412] mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 94004 67088"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E8D4C0] bg-[#FFFDF9] text-[#4A2412] text-sm focus:outline-none focus:ring-2 focus:ring-[#C47A20]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#4A2412] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="aleyammamm9@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8D4C0] bg-[#FFFDF9] text-[#4A2412] text-sm focus:outline-none focus:ring-2 focus:ring-[#C47A20]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#4A2412] mb-1">
                      Cake Type / Theme
                    </label>
                    <input
                      type="text"
                      placeholder="Enter cake type manually (e.g. Birthday Cake, Custom Theme, Red Velvet...)"
                      value={formData.cakeType}
                      onChange={(e) => setFormData({ ...formData, cakeType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8D4C0] bg-[#FFFDF9] text-[#4A2412] text-sm focus:outline-none focus:ring-2 focus:ring-[#C47A20]"
                    />
                  </div>

                  {/* IMAGE UPLOAD SECTION */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#4A2412] mb-1.5 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Upload className="w-4 h-4 text-[#C47A20]" />
                        <span>Upload Reference Design Image (Optional)</span>
                      </span>
                      <span className="text-[11px] text-[#7A5C4A] font-normal">JPG, PNG, WEBP</span>
                    </label>
                    
                    {imagePreview ? (
                      <div className="relative p-3 bg-[#FAF2E8] border border-[#E8D4C0] rounded-2xl flex items-center gap-4">
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[#C47A20]">
                          <img src={imagePreview} alt="Order reference preview" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-[#4A2412] truncate">{selectedImage?.name}</p>
                          <p className="text-[11px] text-[#7A5C4A]">
                            {selectedImage ? (selectedImage.size / 1024).toFixed(1) + " KB" : ""}
                          </p>
                          <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-100 px-2 py-0.5 rounded-md inline-block mt-1">
                            ✓ Reference Photo Attached
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={handleRemoveImage}
                          className="p-1.5 rounded-full bg-white text-[#7A5C4A] hover:text-rose-600 border border-[#E8D4C0] transition-colors"
                          title="Remove photo"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <label className="border-2 border-dashed border-[#E8D4C0] hover:border-[#C47A20] bg-[#FFFDF9] hover:bg-[#FAF2E8]/60 p-4 rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-colors group text-center">
                        <div className="p-2.5 bg-[#FAF2E8] text-[#C47A20] rounded-full mb-2 group-hover:scale-110 transition-transform">
                          <Upload className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-semibold text-[#4A2412]">
                          Click or drag & drop reference photo here
                        </span>
                        <span className="text-[11px] text-[#7A5C4A] mt-0.5">
                          Upload a cake picture or sketch you want us to bake
                        </span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#4A2412] mb-1">
                      Your Message or Cake Specifications *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about the occasion, desired date, theme, flavor preferences..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8D4C0] bg-[#FFFDF9] text-[#4A2412] text-sm focus:outline-none focus:ring-2 focus:ring-[#C47A20]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#4A2412] hover:bg-[#35180B] text-white font-semibold rounded-full shadow-md transition-colors flex items-center justify-center gap-2 text-base"
                  >
                    <Mail className="w-5 h-5 text-[#E09B3E]" />
                    <span>Send Request to aleyammamm9@gmail.com</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
