import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="fixed inset-0 -z-10 opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.18),transparent_30%),radial-gradient(circle_at_10%_90%,rgba(14,165,233,0.15),transparent_30%)]" />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer className="border-t border-white/10 py-10 text-center text-sm text-blue-200/60">
        © {new Date().getFullYear()} Your Name — B.Tech (Information Technology)
      </footer>
    </div>
  )
}

export default App
