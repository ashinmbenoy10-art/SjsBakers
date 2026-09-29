import { Hero } from "@/components/Hero";
import { OrderEnquiryBar } from "@/components/OrderEnquiryBar";
import { CurvedDivider } from "@/components/CurvedDivider";
import { CakeGallery } from "@/components/CakeGallery";
import { Custom800Showcase } from "@/components/Custom800Showcase";
import { Theme1000Showcase } from "@/components/Theme1000Showcase";
import { CustomCakeCTA } from "@/components/CustomCakeCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <OrderEnquiryBar />
      <CurvedDivider />
      <Custom800Showcase />
      <Theme1000Showcase />
      <CakeGallery />
      <CustomCakeCTA />
    </>
  );
}
