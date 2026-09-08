import React from 'react'
import Projects from './ProjectData'

function Project() {
  return (
    <section className='bg-gray-900 text-gray-200 mt-20 py-16'>
      <div className='max-w-7xl mx-auto text-center mb-16 px-6'>
        <h2 className='text-4xl md:text-5xl font-bold text-white'> My Projects </h2>
        <p className='text-gray-400 mt-4'> Here are some projects I've built while learning Full Stack Javascript and React</p>
      </div>

      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6'>
        {Projects.map((project) => (

          <div key={project.id} className='bg-white rounded-2xl overflow-hidden shadow-lg'>
            <img src={project.image} alt={project.title} className='h-56 w-full object-cover' />

            <div className='p-6'>
              <h3 className='text-xl font-bold text-gray-900'> {project.title} </h3>
              <p className='text-gray-600 mt-2'> {project.description} </p>

              <div className='flex flex-wrap gap-2 mt-4'> {project.tech.map((technology) => (
                <span
                  key={technology} className='bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm' > {technology}
                </span>
              ))}
              </div>
              <a href={project.github} className='inline-block mt-5 text-blue-600 font-semibold'>View on GitHub</a>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Project
