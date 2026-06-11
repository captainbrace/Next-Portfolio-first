export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-block px-3 py-1 text-sm font-semibold text-teal-400 bg-teal-950/50 border border-teal-800 rounded-full mb-4">
          Available for Work
        </div>
        {/* PERSONALIZATION: Your Name */}
        <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
          Hi, I'm <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">Alex Morgan</span>
        </h1>
        {/* PERSONALIZATION: Your Title */}
        <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl mx-auto">
          A passionate Full-Stack Web Developer crafting beautiful, high-performing digital experiences.
        </p>
        <div className="flex justify-center space-x-4 pt-4">
          <a href="#projects" className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-slate-900 font-semibold rounded-lg shadow-lg shadow-teal-500/20 transition-all transform hover:-translate-y-0.5">
            View My Work
          </a>
          <a href="#contact" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-lg border border-slate-700 transition-all transform hover:-translate-y-0.5">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}