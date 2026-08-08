import React from 'react'

function About() {
  return (
    <main className='bg-gray-900 text-gray-200 accent-amber-400 px-8 py-20  grid md:grid-cols-2 items-center gap-16 min-h-screen '>


      <div className='flex justify-center md:justify-start'>
        <h1 className='font-extrabold text-5xl text-blue-300 flex animate-bounce'>About me</h1>
      </div>

      <div className='space-y-6'>
        <p className='text-lg leading-8'>I'm a Frontend Developer passionate about creating beautiful and responsive web applications.
          I enjoy learning new technologies, solving real-world problems, and building user-friendly interfaces with React, JavaScript, and Tailwind CSS.</p>

        <h2 className='text-3xl font-bold'>My Core Skills</h2>
        <ul className='space-y-3'>
          <li>✔ Responsive websites</li>
          <li>✔ React Applications</li>
          <li>✔ Mobile-Friendly Design</li>
          <li>✔ Fast Learner</li>
          <li>✔ Team Player</li>
          <li>✔ Problem Solver</li>
        </ul>

        <a href="#contact" className='bg-sky-500 hover:bg-sky-800 transition px-7 py-3 rounded-lg font-semibold'>Let's talk</a>

      </div>
    </main >
  )
}

export default About;