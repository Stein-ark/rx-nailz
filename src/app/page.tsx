import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import GalleryPreview from "@/components/GalleryPreview";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <GalleryPreview />
      <Reviews />
      <CTA />
    </>
  );
}
