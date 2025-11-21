import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-blue-100 ring-1 ring-white/20 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Open to opportunities
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            B.Tech IT Graduate
          </h1>
          <p className="mt-4 text-blue-100/80 text-lg max-w-xl">
            Fresher with strong fundamentals in data structures, web development, and databases. Passionate about building clean, user-focused solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-lg bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-500 transition-colors">View Projects</a>
            <a href="#contact" className="rounded-lg bg-white/10 px-5 py-3 text-white font-medium ring-1 ring-white/20 hover:bg-white/20 transition-colors">Get in Touch</a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
