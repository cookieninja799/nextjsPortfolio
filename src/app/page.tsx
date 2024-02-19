import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <main className="flex flex-col min-h-screen">
        <div id="hero" className="container mx-auto px-12 py-4">
          <Hero />
        </div>
        <div id="about" className="container mx-auto px-12 py-4">
          <AboutMe />
        </div>
        <div id="projects" className="container mx-auto px-12 py-4">
          <Projects />
        </div>
        <div id="contact" className="container mx-auto px-12 py-4">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
