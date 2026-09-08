import React from 'react'
import projectList from './ProjectData'

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 text-white px-6 py-24 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section heading */}
        <div className="max-w-2xl mb-14">
          <p className="text-sky-400 font-semibold uppercase tracking-widest text-sm mb-3">
            My Work
          </p>

          <h2 className="text-4xl sm:text-5xl font-black">
            Featured Projects
          </h2>

          <p className="text-slate-400 mt-5 leading-7">
            A selection of projects I have built while developing my
            frontend, backend and database development skills.
          </p>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {projectList.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-sky-400/50 transition duration-300"
            >

              {/* Project image */}
              <div className="h-56 overflow-hidden bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Project content */}
              <div className="p-7">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-7 mt-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg text-sm"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mt-6">
                  <h4 className="font-semibold text-white mb-3">
                    Key Features
                  </h4>

                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-slate-400 text-sm flex gap-2"
                      >
                        <span className="text-sky-400">▹</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center border border-slate-700 hover:border-sky-400 hover:text-sky-400 px-5 py-3 rounded-lg font-semibold transition"
                  >
                    GitHub Repository
                  </a>

                  {project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center bg-sky-500 hover:bg-sky-400 text-slate-950 px-5 py-3 rounded-lg font-semibold transition"
                    >
                      Live Demo
                    </a>
                  )}

                </div>

              </div>
            </div>
          ))}

        </div>

        {/* GitHub CTA */}
        <div className="mt-14 text-center bg-slate-900 border border-slate-800 rounded-2xl p-8">

          <h3 className="text-2xl font-bold">
            More projects on GitHub
          </h3>

          <p className="text-slate-400 mt-3 mb-6">
            Explore my repositories, experiments and ongoing development journey.
          </p>

          <a
            href="https://github.com/winner4155"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-sky-500 hover:bg-sky-400 text-slate-950 px-7 py-3 rounded-lg font-bold transition"
          >
            View My GitHub
          </a>

        </div>

      </div>
    </section>
  )
}

export default Projects