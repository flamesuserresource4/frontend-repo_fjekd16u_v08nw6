import { Menu, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="font-bold text-white text-lg tracking-tight">
              <span className="text-blue-400">IT</span> Portfolio
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-blue-100/80 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-blue-100/80 hover:text-white">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-blue-100/80 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 transition-colors">
                <Mail size={16} />
                Contact
              </a>
            </div>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-blue-100/80 hover:text-white"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10">
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-blue-100/80 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
