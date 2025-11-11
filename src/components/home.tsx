import Navigation from "./Navigation";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import TechnicalSummary from "./TechnicalSummary";
import Projects from "./Projects";
import Certifications from "./Certifications";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0025] overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <TechnicalSummary />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}