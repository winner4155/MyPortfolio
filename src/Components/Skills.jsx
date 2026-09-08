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

























import React from 'react'
import Nav from './Nav';

function Skills() {
  return (
    <>

      <section className='bg-slate-950 text-gray-200 accent-violet-400 relative w-full h-175 flex items-center justify-center'>
        <Nav />


        {/* <h1 className='text-4xl font-bold absolute top-0 p-2'>My skills</h1> */}
        {/* <p className='absolute top-10 p-5 text-lg'>Skills and technology I use to build responsive, user friendly and modern web applications.</p> */}
        <div className='w-40 h-30 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-2xl animate-bounce '> My skills</div>

        <div className='absolute top-20 text-lg'>
          <h2 className='text-3xl font-bold text-blue-400'>Frontend</h2>
          <p> ✔ Html </p>
          <p> ✔ CSS</p>
          <p> ✔ TailwindCSS</p>
          <p> ✔ Javascript</p>
          <p> ✔ React</p>
        </div>
        <div className='absolute right-70 text-lg'>
          <h2 className='text-3xl font-bold text-violet-400'>Database</h2>
          <p> ✔ MYSQL </p>
          <p> ✔ sql</p>
        </div>
        <div className='absolute bottom-30 text-lg'>
          <h3 className='text-3xl font-bold text-amber-400'>Tools</h3>
          <p> ✔ Git</p>
          <p> ✔ Github</p>
          <p> ✔ vs-code</p>
          <p> ✔ Canva</p>
        </div>
        <div className='absolute left-60 text-lg'>
          <h3 className='text-3xl font-bold text-rose-400'> Soft Skills</h3>
          <p> ✔ Team collaboration</p>
          <p> ✔ Problem solving</p>
          <p> ✔ Communication</p>
          <p> ✔ Time management</p>
        </div>




      </section>



    </>

  )
}

export default Skills;