import React from 'react'

function Skills() {
  const skillGroups = [
    {
      title: 'Frontend Development',
      description:
        'Building responsive and interactive user interfaces with modern frontend technologies.',
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'React',
        'Tailwind CSS',
        'Bootstrap',
      ],
    },

    {
      title: 'Backend Development',
      description:
        'Developing server-side applications and structured backend systems with Python and Django.',
      skills: [
        'Python',
        'Django',
        'Django Admin',
        'CRUD Operations',
        'REST APIs',
      ],
    },

    {
      title: 'Database',
      description:
        'Working with relational databases, data relationships, queries and structured data management.',
      skills: [
        'PostgreSQL',
        'MySQL',
        'SQL',
        'Database Design',
        'ERD',
        'Migrations',
      ],
    },

    {
      title: 'Tools & Workflow',
      description:
        'Using modern development tools and version control to build, manage and maintain projects.',
      skills: [
        'Git',
        'GitHub',
        'VS Code',
        'Google Workspace',
        'Microsoft Office',
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="bg-slate-950 text-white px-6 py-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="max-w-2xl mb-14">

          <p className="text-sky-400 font-semibold uppercase tracking-widest text-sm mb-3">
            My Expertise
          </p>

          <h2 className="text-4xl sm:text-5xl font-black">
            Technical Skills
          </h2>

          <p className="text-slate-400 mt-5 leading-7">
            I work across frontend and backend development, combining
            responsive interfaces with structured backend systems and
            relational databases.
          </p>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:border-sky-400/50 transition duration-300"
            >

              <h3 className="text-2xl font-bold mb-3">
                {group.title}
              </h3>

              <p className="text-slate-400 leading-7 mb-6">
                {group.description}
              </p>

              <div className="flex flex-wrap gap-3">

                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 rounded-lg bg-slate-800 text-slate-200 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Skills























// import React from 'react'

// function Skills() {
//   return (
//     <section className="bg-slate-950 text-gray-200 min-h-screen px-6 py-20">

//       <div className="max-w-6xl mx-auto">

//         {/* Heading */}
//         <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-400 mb-12">
//           My Skills
//         </h1>

//         {/* Skills Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

//           {/* Frontend */}
//           <div className="bg-slate-900 p-6 rounded-xl shadow-lg">
//             <h2 className="text-2xl font-bold text-blue-400 mb-4">
//               Frontend
//             </h2>

//             <ul className="space-y-2">
//               <li>✔ HTML</li>
//               <li>✔ CSS</li>
//               <li>✔ JavaScript</li>
//               <li>✔ React</li>
//               <li>✔ Tailwind CSS</li>
//             </ul>
//           </div>

//           {/* Database */}
//           <div className="bg-slate-900 p-6 rounded-xl shadow-lg">
//             <h2 className="text-2xl font-bold text-violet-400 mb-4">
//               Database
//             </h2>

//             <ul className="space-y-2">
//               <li>✔ MySQL</li>
//               <li>✔ SQL</li>
//             </ul>
//           </div>

//           {/* Tools */}
//           <div className="bg-slate-900 p-6 rounded-xl shadow-lg">
//             <h2 className="text-2xl font-bold text-amber-400 mb-4">
//               Tools
//             </h2>

//             <ul className="space-y-2">
//               <li>✔ Git</li>
//               <li>✔ GitHub</li>
//               <li>✔ VS Code</li>
//               <li>✔ Canva</li>
//             </ul>
//           </div>

//           {/* Soft Skills */}
//           <div className="bg-slate-900 p-6 rounded-xl shadow-lg">
//             <h2 className="text-2xl font-bold text-rose-400 mb-4">
//               Soft Skills
//             </h2>

//             <ul className="space-y-2">
//               <li>✔ Team Collaboration</li>
//               <li>✔ Problem Solving</li>
//               <li>✔ Communication</li>
//               <li>✔ Time Management</li>
//             </ul>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }

// export default Skills





// import React from 'react'
// import Nav from './Nav';

// function Skills() {
//   return (
//     <>

//       <section className='bg-slate-950 text-gray-200 accent-violet-400 relative w-full h-175 flex items-center justify-center'>
//         <Nav />


//         {/* <h1 className='text-4xl font-bold absolute top-0 p-2'>My skills</h1> */}
//         {/* <p className='absolute top-10 p-5 text-lg'>Skills and technology I use to build responsive, user friendly and modern web applications.</p> */}
//         <div className='lg:w-40 lg:h-30 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold md:text-4xl lg:text-2xl lg:animate-bounce '> My skills</div>

//         <div className='absolute top-20 text-lg'>
//           <h2 className='text-3xl font-bold text-blue-400'>Frontend</h2>
//           <p> ✔ Html </p>
//           <p> ✔ CSS</p>
//           <p> ✔ TailwindCSS</p>
//           <p> ✔ Javascript</p>
//           <p> ✔ React</p>
//         </div>
//         <div className='absolute right-70 text-lg'>
//           <h2 className='text-3xl font-bold text-violet-400'>Database</h2>
//           <p> ✔ MYSQL </p>
//           <p> ✔ sql</p>
//         </div>
//         <div className='absolute bottom-30 text-lg'>
//           <h3 className='text-3xl font-bold text-amber-400'>Tools</h3>
//           <p> ✔ Git</p>
//           <p> ✔ Github</p>
//           <p> ✔ vs-code</p>
//           <p> ✔ Canva</p>
//         </div>
//         <div className='absolute left-60 text-lg'>
//           <h3 className='text-3xl font-bold text-rose-400'> Soft Skills</h3>
//           <p> ✔ Team collaboration</p>
//           <p> ✔ Problem solving</p>
//           <p> ✔ Communication</p>
//           <p> ✔ Time management</p>
//         </div>

//       </section>
//     </>

//   )
// }

// export default Skills;