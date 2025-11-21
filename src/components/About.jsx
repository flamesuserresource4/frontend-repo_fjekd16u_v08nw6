export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_0%_0%,rgba(59,130,246,0.1),transparent_40%),radial-gradient(600px_circle_at_100%_100%,rgba(99,102,241,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white">About Me</h2>
            <p className="mt-4 text-blue-100/80 leading-relaxed">
              I'm a B.Tech graduate in Information Technology with a strong interest in building modern web experiences. I enjoy translating ideas into clean, performant, and accessible interfaces using React, Tailwind CSS, and modern tooling. 
            </p>
            <p className="mt-3 text-blue-100/80 leading-relaxed">
              Beyond the browser, I understand core CS fundamentals like data structures, algorithms, networking basics, and databases. I love learning, collaborating, and shipping projects that solve real problems.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-lg bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/20 hover:bg-white/20 transition">See My Work</a>
              <a href="#contact" className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-500 transition">Hire Me</a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { title: 'Education', desc: 'B.Tech (Information Technology)' },
              { title: 'Focus', desc: 'Frontend • Web Apps • UI/UX' },
              { title: 'Location', desc: 'Open to relocate' },
              { title: 'Soft Skills', desc: 'Teamwork • Ownership • Curiosity' },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-white/10 bg-slate-800/40 p-5">
                <p className="text-sm text-blue-200/70">{c.title}</p>
                <p className="mt-1 font-semibold text-white">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
