import React from 'react'

function About() {
  return (
    <section id="about" className="bg-slate-900 text-white px-6 py-24">
      <div className="max-w-7xl mx-auto">

        <div className="max-w-3xl mb-12">
          <p className="text-sky-400 font-semibold uppercase tracking-widest text-sm mb-3">
            About Me
          </p>

          <h2 className="text-4xl sm:text-5xl font-black">
            Building With Technology, Driven By People
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* About */}
          <div>
            <p className="text-slate-300 leading-8 mb-6">
              I am a Full-Stack Web Developer with a background in
              customer service and administrative support. My professional
              experience has helped me develop strong communication,
              problem-solving, organization and teamwork skills.
            </p>

            <p className="text-slate-300 leading-8 mb-6">
              I am passionate about using technology to create practical,
              responsive and user-focused web applications. I work with
              technologies such as React, JavaScript, Tailwind CSS, Python,
              Django, SQL and relational databases.
            </p>

            <p className="text-slate-300 leading-8">
              My approach to development combines technical problem-solving
              with an understanding of users and their needs. I enjoy
              learning new technologies, building projects and continuously
              improving my development skills.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 gap-5">

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">
                Full-Stack Development
              </h3>

              <p className="text-slate-400 leading-7">
                Building responsive frontend interfaces and developing
                structured backend applications and database systems.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">
                Problem Solving
              </h3>

              <p className="text-slate-400 leading-7">
                I enjoy breaking problems into smaller parts and creating
                practical solutions through technology.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">
                Communication
              </h3>

              <p className="text-slate-400 leading-7">
                My customer-service background strengthened my ability to
                communicate clearly, understand people and handle requests
                professionally.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">
                Continuous Learning
              </h3>

              <p className="text-slate-400 leading-7">
                I continuously build projects and expand my knowledge across
                frontend, backend and database technologies.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default About









// import React from 'react'

// function About() {
//   return (
//     <main className='bg-gray-900 text-gray-200 accent-amber-400 px-8 py-20  grid md:grid-cols-2 items-center gap-16 min-h-screen '>


//       <div className='flex justify-center md:justify-start'>
//         <h1 className='font-extrabold text-5xl text-blue-300 flex animate-bounce'>About me</h1>
//       </div>

//       <div className='space-y-6'>
//         <p className='text-lg leading-8'>I'm a Frontend Developer passionate about creating beautiful and responsive web applications.
//           I enjoy learning new technologies, solving real-world problems, and building user-friendly interfaces with React, JavaScript, and Tailwind CSS.</p>

//         <h2 className='text-3xl font-bold'>My Core Skills</h2>
//         <ul className='space-y-3'>
//           <li>✔ Responsive websites</li>
//           <li>✔ React Applications</li>
//           <li>✔ Mobile-Friendly Design</li>
//           <li>✔ Fast Learner</li>
//           <li>✔ Team Player</li>
//           <li>✔ Problem Solver</li>
//         </ul>

//         <a href="#contact" className='bg-sky-500 hover:bg-sky-800 transition px-7 py-3 rounded-lg font-semibold'>Let's talk</a>

//       </div>
//     </main >
//   )
// }

// export default About;