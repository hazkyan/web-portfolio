import Features from "@/components/features-2";
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-7";
export default function Home() {
  return(
    <main>
      <HeroHeader/>
      <HeroSection/>
      <Features/>
      <IntegrationsSection/>
      <FooterSection/>
    </main>
  )
}
