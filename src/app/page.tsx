import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import TopPageBtn from "@/components/TopPageBtn";

export default function Home() {
  return (
    <div className="relative w-full">
      <div className="relative" style={{ zIndex: 1 }}>
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>
        <main className="flex flex-col min-h-screen">
          <div id="hero" className="container mx-auto px-4 sm:px-8 lg:px-12 py-4">
            <Hero />
          </div>
          <div id="about" className="container mx-auto px-4 sm:px-8 lg:px-12 py-4">
            <AboutMe />
          </div>
          <div id="projects" className="container mx-auto px-4 sm:px-8 lg:px-12 py-4">
            <Projects />
          </div>
          <div id="contact" className="container mx-auto px-4 sm:px-8 lg:px-12 py-4">
            <Contact />
          </div>
        </main>
        <Footer />
        <div className="fixed bottom-4 right-4 z-50">
          <TopPageBtn />
        </div>
      </div>
    </div>
  );
}
