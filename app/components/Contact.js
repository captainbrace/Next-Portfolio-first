export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="text-slate-400">Whether you have a question, a project proposal, or just want to say hi, my inbox is always open.</p>
        </div>
        
        {/* PERSONALIZATION: Swap out these details with yours */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 pt-4 text-lg">
          <a href="mailto:kwekuandoh10@gmail.com" className="flex items-center gap-3 px-6 py-4 bg-slate-900 rounded-xl border border-slate-800 hover:border-teal-500/50 transition-colors w-full md:w-auto">
            <span>📧</span>
            <span>kwekuandoh10@gmail.com</span>
          </a>
          <a href="https://linkedin.com/in/kweku-andoh-ethan" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-4 bg-slate-900 rounded-xl border border-slate-800 hover:border-teal-500/50 transition-colors w-full md:w-auto">
            <span>💼</span>
            <span>linkedin.com/in/kweku-andoh-ethan</span>
          </a>
          <a href="https://github.com/captainbrace" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-4 bg-slate-900 rounded-xl border border-slate-800 hover:border-teal-500/50 transition-colors w-full md:w-auto">
            <span>🐙</span>
            <span>github.com/captainbrace</span>
          </a>
        </div>
      </div>
    </section>
  );
}