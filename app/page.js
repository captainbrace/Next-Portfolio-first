import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="bg-slate-900 text-slate-100 font-sans antialiased min-h-screen scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-slate-500 border-t border-slate-800">
        <p>&copy; {new Date().getFullYear()} Ethan.Kweku.Andoh All rights reserved.</p>
      </footer>
    </div>
  );
}