import React, { useState } from 'react'

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-xl md:text-2xl font-black tracking-wide text-white"
        >
          SAMUEL<span className="text-sky-400">.</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-7">

          <a href="#home" className="text-slate-300 hover:text-sky-400 transition">
            Home
          </a>

          <a href="#about" className="text-slate-300 hover:text-sky-400 transition">
            About
          </a>

          <a href="#skills" className="text-slate-300 hover:text-sky-400 transition">
            Skills
          </a>

          <a href="#projects" className="text-slate-300 hover:text-sky-400 transition">
            Projects
          </a>

          <a href="#experience" className="text-slate-300 hover:text-sky-400 transition">
            Experience
          </a>

          <a href="#contact" className="text-slate-300 hover:text-sky-400 transition">
            Contact
          </a>

          <a
            href="https://github.com/winner4155"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-lg border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-950 transition font-semibold"
          >
            GitHub
          </a>

        </div>

        {/* Mobile button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>

      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800 px-6 py-6">

          <div className="flex flex-col gap-5">

            <a href="#home" onClick={closeMenu} className="text-slate-300">
              Home
            </a>

            <a href="#about" onClick={closeMenu} className="text-slate-300">
              About
            </a>

            <a href="#skills" onClick={closeMenu} className="text-slate-300">
              Skills
            </a>

            <a href="#projects" onClick={closeMenu} className="text-slate-300">
              Projects
            </a>

            <a href="#experience" onClick={closeMenu} className="text-slate-300">
              Experience
            </a>

            <a href="#contact" onClick={closeMenu} className="text-slate-300">
              Contact
            </a>

            <a
              href="https://github.com/winner4155"
              target="_blank"
              rel="noreferrer"
              className="text-center px-5 py-3 rounded-lg bg-sky-500 text-slate-950 font-bold"
            >
              View GitHub
            </a>

          </div>

        </div>
      )}

    </nav>
  )
}

export default Nav