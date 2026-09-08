// // import { useState } from 'react'
// // import './App.css'
// // import { Routes, Route } from 'react-router-dom'
// // import Home from './Components/Home'
// // import About from './Components/About'
// // import Skills from './Components/Skills'
// // import Contact from './Components/Contact'
// // import Projects from './Components/Projects'
// // import Footer from './Components/Footer'
// // import Nav from './Components/Nav'

// // function App() {

// //   const List = [
// //     { path: "/about", element: <About /> },
// //     { path: "/", element: <Home /> },
// //     { path: "/contact", element: <Contact /> },
// //   ];

// //   return (
// //     <>
// //       <Nav />
// //       <Routes>

// //         <Route path="/" element={<Home />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/skills" element={<Skills />} />
// //         <Route path="/contact" element={<Contact />} />
// //         <Route path='/projects' element={<Projects />} />

// //         {/* <Route path="/" element={<Layout />}></Route>
// //         {List.map((r, idx) => (
// //           <Route key={idx} path={r.path} element={r.element} />
// //        {
// //             List.map((r, idx) => (
// //               <Route key={idx} path={r.path} element={r.element} />
// //             ))
// //           } */}
// //       </Routes>
// //     </>

// //     // <Routes>
// //     // <Route path="/" element={<Layout />}>
// //     //   {List.map((r, idx) => (
// //     //     <Route key={idx} path={r.path} element={r.element} />
// //     //   ))}
// //     // </Route>




// //   );
// // }

// // export default App;



// import './App.css'
// import { Routes, Route } from 'react-router-dom'

// import Home from './Components/Home'
// import About from './Components/About'
// import Skills from './Components/Skills'
// import Contact from './Components/Contact'
// import Projects from './Components/Projects'
// import Nav from './Components/Nav'
// import Experience from './Experience'

// function App() {

//   return (
//     <>
//       <Nav />

//       <Routes>

//         <Route path="/" element={<Home />} />

//         <Route path="/about" element={<About />} />

//         <Route path="/skills" element={<Skills />} />

//         <Route path="/projects" element={<Projects />} />

//         <Route path="/contact" element={<Contact />} />
//         <Route path="/experience" element={<Experience />} />

//       </Routes>
//     </>
//   )
// }

// export default App



import './App.css'
import Nav from './Components/Nav'
import Home from './Components/Home'

function App() {
  return (
    <>
      <Nav />
      <Home />
    </>
  )
}

export default App