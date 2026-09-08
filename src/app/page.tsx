import { Header } from "@/sections/Header";
import { SurfaceBackground } from "@/components/SurfaceBackground";
import "./direction-preview.css";
import "./material-surface.css";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { ServicesSection } from "@/sections/Services";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <SurfaceBackground />
      <Header />
      <main id="main" tabIndex={-1}>
      <HeroSection />
      <ProjectsSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      </main>
      <Footer />
    </>
  );
}
