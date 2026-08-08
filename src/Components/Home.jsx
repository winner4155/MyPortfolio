import React from 'react'
import Nav from './Nav';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function Home() {
  return (
    <section className=' bg-slate-950 text-white pt-28'>


      <div className='max-w-7xl mx-auto px-6 h-[80vh]'>

        <div className=' grid md:grid-cols-2 items-center gap-12'>
          <div>
            <p className='text-sky-400 font-semibold'>Hi, I'm</p>
            <h1 className='text-5xl md:text-7xl font-blackmt-2'>Samuel Winner</h1>
            <h2 className='text-2xl text-slate-300 mt-4'>Frontend Developer</h2>
            <p className='text-slate-400 mt-6 leading-8'>I build responsive, user-friendly web applications using
              React, Tailwind CSS, and modern JavaScript. I enjoy turning
              ideas into clean and interactive digital experiences.</p>

            <div className='flex gap-5 mt-8'>
              <a href="#projects" view-projects="true" className='bg-sky-500 hover:bg-sky-800 transition px-7 py-3 rounded-lg font-semibold'>
                View projects</a>

              <a href="/CV.pdf" download className='bg-sky-500 hover:bg-sky-800 transition px-7 py-3 rounded-lg font-semibold'>
                Download CV</a>

            </div>
          </div>
          <div className="flex justify-center">

            <div className="w-80 h-80 rounded-xl bg-slate-800 border-4 border-sky-400 flex items-center justify-center">

              <img src="/winner.jpg" alt="Winner" className='w-full h-full object-cover' />

            </div>
          </div>

        </div>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />


    </section>

  )
}
export default Home;