import { AgeRangeSection } from "@/components/home/AgeRangeSection";
import { BestSellers } from "@/components/home/BestSellers";
import { CategoryStrip } from "@/components/home/CategoryStrip";
import { Hero } from "@/components/home/Hero";
import { PromoSection } from "@/components/home/PromoSection";
import { TrustBar } from "@/components/home/TrustBar";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <CategoryStrip />
      <BestSellers />
      <PromoSection />
      <AgeRangeSection />
    </main>
  );
}
