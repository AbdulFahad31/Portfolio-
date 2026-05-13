import About from "@/components/sections/About";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abdul Fahad M",
  jobTitle: "Flutter Developer and Full-Stack Developer",
  description:
    "Computer Science Engineering student building Flutter apps, full-stack systems, AI-powered tools, and scalable products.",
  url: "https://abdulfahad31.github.io/Portfolio-",
  sameAs: [
    "https://github.com/AbdulFahad31",
    "https://www.linkedin.com/in/abdul-fahad-m/",
    "https://leetcode.com/u/abdul_fahad/"
  ],
  knowsAbout: ["Flutter", "Firebase", "FastAPI", "React", "CrewAI", "Data Structures"]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
