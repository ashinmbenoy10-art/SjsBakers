"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, Cake as CakeIcon, Calendar, Phone, User, MessageSquare, Sparkles, Upload, Mail, MessageCircle } from "lucide-react";
import { useOrderModal } from "@/context/OrderContext";

export const OrderModal = () => {
  const { isOpen, selectedCake, closeOrderModal } = useOrderModal();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    cakeType: selectedCake || "Custom Cake",
    cakeSize: "1 kg",
    preferredDate: "",
    isEggless: false,
    message: "",
  });

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedCake) {
      setFormData((prev) => ({ ...prev, cakeType: selectedCake }));
    }
  }, [selectedCake]);

  if (!isOpen) return null;

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
Cake Type: ${formData.cakeType}
Weight / Size: ${formData.cakeSize}
Delivery Date: ${formData.preferredDate || "As soon as possible"}
Eggless Required: ${formData.isEggless ? "Yes (100% Eggless)" : "Standard"}
Message / Specifications: ${formData.message || "N/A"}
${selectedImage ? `Attached Image: ${selectedImage.name}` : "Attached Image: None"}

Location: Edakkattukunnu, S N Puram P.O, Pampady, Kottayam
Sent via SJS Bakers Custom Cake Request Form`;

    return `mailto:${recipient}?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
  };

  const getWhatsAppLink = () => {
    const phone = "919400467088";
    const text = `Hi SJS Bakers! I would like to make a Custom Cake Request:
-----------------------------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Cake Type:* ${formData.cakeType}
*Weight/Size:* ${formData.cakeSize}
*Date:* ${formData.preferredDate || "As soon as possible"}
*Eggless:* ${formData.isEggless ? "Yes (100% Eggless)" : "Standard"}
*Specifications:* ${formData.message || "N/A"}
${selectedImage ? `*Reference Image:* Attached (${selectedImage.name})` : ""}`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Open mailto trigger to send to aleyammamm9@gmail.com
    window.location.href = getEmailLink();

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    handleRemoveImage();
    closeOrderModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      
      {/* Modal Container */}
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#E8D4C0] my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="bg-[#F8EBD9] px-6 py-5 border-b border-[#E8D4C0] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-[#FAF2E8] border border-[#E8D4C0]">
              <CakeIcon className="w-5 h-5 text-[#C47A20]" />
            </div>
            <div>
              <h3 className="font-serif-header text-xl md:text-2xl font-bold text-[#4A2412]">
                Custom Cake Request
              </h3>
              <p className="text-xs md:text-sm text-[#7A5C4A]">
                Request sent directly to aleyammamm9@gmail.com
              </p>
            </div>
          </div>

          <button
            onClick={closeOrderModal}
            className="p-2 rounded-full text-[#4A2412] hover:bg-[#FAF2E8] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {submitted ? (
            /* SUCCESS STATE */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-[#FAF2E8] text-[#C47A20] rounded-full flex items-center justify-center mx-auto border-2 border-[#C47A20]">
                <CheckCircle className="w-10 h-10 text-[#C47A20]" />
              </div>
              <h4 className="font-serif-header text-2xl font-bold text-[#4A2412]">
                Custom Cake Request Prepared!
              </h4>
              <p className="text-[#7A5C4A] max-w-md mx-auto text-sm md:text-base">
                Thank you <span className="font-semibold text-[#4A2412]">{formData.name}</span>! Your request heading <strong className="text-[#4A2412]">"Custom Cake request section"</strong> is ready to be sent to <span className="font-semibold text-[#C47A20]">aleyammamm9@gmail.com</span>.
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

              <div className="bg-[#FAF2E8] p-4 rounded-2xl text-xs md:text-sm text-[#4A2412] max-w-sm mx-auto space-y-1 text-left border border-[#E8D4C0]">
                <p><strong>To:</strong> aleyammamm9@gmail.com</p>
                <p><strong>Subject:</strong> Custom Cake request section</p>
                <p><strong>Phone:</strong> {formData.phone}</p>
                <p><strong>Size:</strong> {formData.cakeSize}</p>
                <p><strong>Date:</strong> {formData.preferredDate || "As soon as possible"}</p>
                <p><strong>Eggless:</strong> {formData.isEggless ? "Yes (100% Eggless)" : "Standard"}</p>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={getEmailLink()}
                  className="w-full sm:w-auto px-5 py-3 bg-[#4A2412] hover:bg-[#35180B] text-white rounded-full font-medium text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#E09B3E]" />
                  <span>Send Email Now</span>
                </a>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full font-medium text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>Send via WhatsApp (+91 94004 67088)</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="text-xs text-[#7A5C4A] underline hover:text-[#4A2412]"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            /* ORDER FORM */
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name Field */}
              <div>
                <label className="block text-xs md:text-sm font-semibold text-[#4A2412] mb-1">
                  Your Full Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#7A5C4A]">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#E8D4C0] bg-[#FFFDF9] text-[#4A2412] text-sm focus:outline-none focus:ring-2 focus:ring-[#C47A20] transition-all"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-xs md:text-sm font-semibold text-[#4A2412] mb-1">
                  Phone / WhatsApp Number *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#7A5C4A]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    required
                    placeholder="+91 94004 67088"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#E8D4C0] bg-[#FFFDF9] text-[#4A2412] text-sm focus:outline-none focus:ring-2 focus:ring-[#C47A20] transition-all"
                  />
                </div>
              </div>

              {/* Grid: Cake Type & Size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-[#4A2412] mb-1">
                    Cake Design Type *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter cake type manually (e.g. Birthday, Chocolate Truffle, Theme...)"
                    value={formData.cakeType}
                    onChange={(e) => setFormData({ ...formData, cakeType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8D4C0] bg-[#FFFDF9] text-[#4A2412] text-sm focus:outline-none focus:ring-2 focus:ring-[#C47A20]"
                  />
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-semibold text-[#4A2412] mb-1">
                    Cake Weight / Size *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter size manually (e.g. 1 kg, 500g, 2.5 kg...)"
                    value={formData.cakeSize}
                    onChange={(e) => setFormData({ ...formData, cakeSize: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8D4C0] bg-[#FFFDF9] text-[#4A2412] text-sm focus:outline-none focus:ring-2 focus:ring-[#C47A20]"
                  />
                </div>
              </div>

              {/* Grid: Date & Eggless Toggle */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-[#4A2412] mb-1">
                    Preferred Delivery Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#7A5C4A]">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#E8D4C0] bg-[#FFFDF9] text-[#4A2412] text-sm focus:outline-none focus:ring-2 focus:ring-[#C47A20]"
                    />
                  </div>
                </div>

                <div className="pt-4 sm:pt-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.isEggless}
                      onChange={(e) => setFormData({ ...formData, isEggless: e.target.checked })}
                      className="w-4 h-4 text-[#C47A20] rounded border-[#E8D4C0] focus:ring-[#C47A20]"
                    />
                    <span className="text-xs md:text-sm font-semibold text-[#4A2412]">
                      100% Eggless Preparation Required
                    </span>
                  </label>
                </div>
              </div>

              {/* IMAGE UPLOAD SECTION */}
              <div>
                <label className="block text-xs md:text-sm font-semibold text-[#4A2412] mb-1.5 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Upload className="w-4 h-4 text-[#C47A20]" />
                    <span>Upload Design Reference Image (Optional)</span>
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
                        ✓ Image Attached
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
                      Upload a cake picture or sketch you want us to recreate
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

              {/* Custom Message / Specification */}
              <div>
                <label className="block text-xs md:text-sm font-semibold text-[#4A2412] mb-1">
                  Message / Custom Specification
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none text-[#7A5C4A]">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <textarea
                    rows={3}
                    placeholder="Describe inscription text, flavor preferences, color palette, or custom design idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#E8D4C0] bg-[#FFFDF9] text-[#4A2412] text-sm focus:outline-none focus:ring-2 focus:ring-[#C47A20]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#4A2412] hover:bg-[#35180B] text-white rounded-full font-semibold text-base transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Sending to aleyammamm9@gmail.com...</span>
                  ) : (
                    <>
                      <Mail className="w-4 h-4 text-[#E09B3E]" />
                      <span>Send Request to aleyammamm9@gmail.com</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>

    </div>
  );
};
