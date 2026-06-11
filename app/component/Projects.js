export default function Projects() {
  // PERSONALIZATION: Update this array with your own 3 projects
  const projectList = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with a shopping cart, payment integration, and user authentication.",
      tags: ["Next.js", "Node.js", "Stripe"],
      imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Task Management Dashboard",
      description: "A productivity app featuring drag-and-drop task boards, calendar views, and team collaboration tools.",
      tags: ["React", "Firebase", "Tailwind"],
      imgUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "AI Image Generator",
      description: "An innovative application interacting with neural network APIs to generate art from textual descriptions.",
      tags: ["Python", "Next.js", "OpenAI API"],
      imgUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&q=80",
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Featured Projects</h2>
          <p className="text-slate-400">A selection of recent projects I've built from scratch.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div key={index} className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
              <div>
                <img src={project.imgUrl} alt={project.title} className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity" />
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-sm text-slate-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="text-xs bg-slate-900 text-teal-400 px-2.5 py-1 rounded-md border border-slate-800">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0 flex space-x-4">
                <a href="#" className="text-sm font-semibold text-teal-400 hover:text-teal-300">Live Demo →</a>
                <a href="#" className="text-sm font-semibold text-slate-400 hover:text-slate-300">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}