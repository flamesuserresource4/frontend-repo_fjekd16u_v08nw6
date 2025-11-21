export default function Skills() {
  const skills = [
    { name: 'HTML/CSS', level: 'Advanced' },
    { name: 'JavaScript (ES6+)', level: 'Advanced' },
    { name: 'React', level: 'Intermediate' },
    { name: 'Tailwind CSS', level: 'Intermediate' },
    { name: 'Node.js', level: 'Beginner' },
    { name: 'FastAPI / Python', level: 'Beginner' },
    { name: 'MongoDB', level: 'Beginner' },
    { name: 'Git & GitHub', level: 'Intermediate' },
  ];

  return (
    <section id="skills" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_0%_100%,rgba(56,189,248,0.08),transparent_40%),radial-gradient(600px_circle_at_100%_0%,rgba(59,130,246,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white">Skills</h2>
        <p className="mt-2 text-blue-100/80">Technologies I work with</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((s) => (
            <div key={s.name} className="rounded-2xl border border-white/10 bg-slate-800/40 p-5 hover:bg-slate-800/60 transition">
              <p className="font-medium text-white">{s.name}</p>
              <p className="text-sm text-blue-200/70">{s.level}</p>
              <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                <div className={`h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400`} style={{ width: `${s.level === 'Advanced' ? 90 : s.level === 'Intermediate' ? 70 : 50}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
