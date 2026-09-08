import React from 'react'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Experience from '../Experience'
import Contact from './Contact'
import Footer from './Footer'

function Home() {
  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-24 px-6">

        <div className="max-w-7xl mx-auto w-full">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Hero Text */}
            <div>

              <p className="text-sky-400 font-semibold text-lg mb-4">
                HELLO, I'M
              </p>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
                Samuel Winner
              </h1>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-300 mt-5">
                Full-Stack Web Developer
              </h2>

              <p className="text-slate-400 text-base sm:text-lg leading-8 mt-6 max-w-2xl">
                I build responsive and user-focused web applications using
                modern frontend technologies and backend tools. I work with
                React, JavaScript, Python, Django, SQL and relational databases
                to turn ideas into practical digital solutions.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">

                <a
                  href="#projects"
                  className="text-center bg-sky-500 hover:bg-sky-400 text-slate-950 px-7 py-3.5 rounded-lg font-bold transition"
                >
                  View My Projects
                </a>

                <a
                  href="https://github.com/winner4155"
                  target="_blank"
                  rel="noreferrer"
                  className="text-center border border-slate-600 hover:border-sky-400 hover:text-sky-400 px-7 py-3.5 rounded-lg font-bold transition"
                >
                  View GitHub
                </a>

                <a
                  href="/CV.pdf"
                  download
                  className="text-center border border-slate-600 hover:border-sky-400 hover:text-sky-400 px-7 py-3.5 rounded-lg font-bold transition"
                >
                  Download CV
                </a>

              </div>

              {/* Tech Stack Preview */}
              <div className="flex flex-wrap gap-3 mt-10">

                <span className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-full text-sm text-slate-300">
                  React
                </span>

                <span className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-full text-sm text-slate-300">
                  JavaScript
                </span>

                <span className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-full text-sm text-slate-300">
                  Python
                </span>

                <span className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-full text-sm text-slate-300">
                  Django
                </span>

                <span className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-full text-sm text-slate-300">
                  PostgreSQL
                </span>

              </div>

            </div>

            {/* Hero Image */}
            <div className="flex justify-center lg:justify-end">

              <div className="relative">

                <div className="absolute -inset-4 bg-sky-500/10 rounded-3xl blur-2xl"></div>

                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-3xl overflow-hidden border border-slate-700 bg-slate-900">

                  <img
                    src="/winner.jpg"
                    alt="Samuel Winner"
                    className="w-full h-full object-cover"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Other Sections */}
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />

    </main>
  )
}

export default Home