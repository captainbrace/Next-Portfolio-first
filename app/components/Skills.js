export default function Skills() {
  // PERSONALIZATION: Simply update this list to change your displayed skills!
  const skillList = [
    { name: "HTML5 & CSS3", icon: "🌐" },
    { name: "JavaScript", icon: "🟨" },
    { name: "ReactJS / Next.js", icon: "⚛️" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Python", icon: "🐍" },
    { name: "Git & GitHub", icon: "🐙" },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">My Toolbox</h2>
          <p className="text-slate-400">The languages, frameworks, and tools I use to bring ideas to life.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skillList.map((skill, index) => (
            <div key={index} className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col items-center justify-center space-y-3 hover:border-teal-500/50 transition-colors">
              <span className="text-4xl">{skill.icon}</span>
              <span className="font-medium text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}