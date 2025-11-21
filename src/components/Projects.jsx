export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      desc: 'A modern, responsive personal portfolio to showcase skills and projects.',
      tech: ['React', 'Tailwind CSS'],
      link: '#',
    },
    {
      title: 'Task Manager API',
      desc: 'Simple REST API for managing tasks with FastAPI and MongoDB.',
      tech: ['FastAPI', 'MongoDB'],
      link: '#',
    },
    {
      title: 'Interactive UI Components',
      desc: 'A small library of reusable components with animations.',
      tech: ['React', 'Framer Motion'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_0%,rgba(236,72,153,0.06),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white">Projects</h2>
            <p className="mt-2 text-blue-100/80">Some things I've built recently</p>
          </div>
          <a href="#contact" className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-500 transition">Work with me</a>
        </div>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-2xl border border-white/10 bg-slate-800/40 p-5 hover:bg-slate-800/60 transition flex flex-col">
              <div className="aspect-video rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 mb-4 border border-white/10" />
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-1 text-blue-100/80 flex-1">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-white/10 px-2 py-1 text-blue-200/80 ring-1 ring-white/10">{t}</span>
                ))}
              </div>
              {p.link && (
                <a href={p.link} className="mt-4 inline-flex text-sm text-blue-300 hover:text-white">View Project →</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
