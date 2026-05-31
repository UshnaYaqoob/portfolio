/**
 * app/page.tsx — Portfolio Home
 *
 * Main entry point composing all portfolio sections in order:
 *  1. Navbar (fixed)
 *  2. Hero
 *  3. Services
 *  4. Credentials
 *  5. Projects
 *  6. About
 *  7. Process (How I Work)
 *  8. Contact
 *  9. Footer
 */

// import Navbar from "@/components/portfolio/Navbar";
// import HeroSection from "@/components/portfolio/HeroSection";
// import ServicesSection from "@/components/portfolio/ServicesSection";
// import CredentialsSection from "@/components/portfolio/CredentialsSection";
// import ProjectsSection from "@/components/portfolio/ProjectsSection";
import AboutSection from "@/components/portfolio/AboutSection";
import Navbar from "@/components/portfolio/NavBar";
import ContactSection from "@/components/portfolio/ContactSection";
import HeroSection from "@/components/portfolio/HeroSection";
import ServicesSection from "@/components/portfolio/ServicesSection";
import CredentialsSection from "@/components/portfolio/CredentialsSection";
import Footer from "@/components/portfolio/Footer";
// import ProcessSection from "@/components/portfolio/ProcessSection";
// import ContactSection from "@/components/portfolio/ContactSection";
// import Footer from "@/components/portfolio/Footer";

export default function Home() {
  return (
      <>
        <Navbar />
        <main>
          <HeroSection />
          <ServicesSection />
          <CredentialsSection />
          {/*<ProjectsSection />*/}
          <AboutSection />
          {/*<ProcessSection />*/}
          <ContactSection />
        </main>
        <Footer />
      </>
  );
}
