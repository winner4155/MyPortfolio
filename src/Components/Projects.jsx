import React from 'react'

function Projects() {
  return (
    <section className='bg-gray-900 text-gray-200 accent-amber-400 mt-20'>
      <div className='max-w-7xl'>
        <div className='text-center mb-16'></div>
        <h2 className='text-4xl md:text-5xl font-bold text-white'>My Projects</h2>
        <p className='text-gray-400 mt-4 '>Here are some projects i've built while learning Full Stack Javascript and React</p>
      </div>

      <div className=' grid grid-cols-2 lg:grid-cols-3 gap-8'>{Projects.map((Project) =>
      (
        <div key={Project.id} className='bg-white rounded-2xl'>
          <img src={Project.image} alt={Projects.title} className='h-56 w-full object-cover' />

        </div>

      ))}

      </div>




    </section>
  )
}

export default Projects