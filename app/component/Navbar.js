export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* PERSONALIZATION: Replace with your name or logo */}
        <a href="#" className="text-xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
          Developer.Me
        </a>
        <div className="flex space-x-8 text-sm md:text-base">
          <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}