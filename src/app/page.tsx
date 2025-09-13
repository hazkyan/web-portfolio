import Skills from "@/components/skills";
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-7";
import Projects from "@/components/projects";
import Contact from "@/components/contacts";

export default function Home() {
  return(
    <main>
      <HeroHeader/>
      <HeroSection/>
      <Skills/>
      <IntegrationsSection/>
      <Projects/>
      <Contact/>
      <FooterSection/>
    </main>
  )
}
