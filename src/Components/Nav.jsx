import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
  return (

    <nav className='fixed top-0 w-full bg-gray-900 text-white z-30'>
      <div className='max-w-6xl flex justify-between items-center py-5 px-6'>
        <h1 className=' font-extrabold text-sky-400 text-4xl'>SAMUEL WINNER UCHENNA</h1>

        <ul className='hidden md:flex gap-8'>
          <Link to="/" className='hover:text-sky-400'>Home</Link>
          <Link to="/about" className='hover:text-sky-400'>About</Link>
          <Link to="/skills" className='hover:text-sky-400'>Skills</Link>
          <Link to="/contact" className='hover:text-sky-400' >Contact</Link>
          <Link to="/projects" className='hover:text-sky-400'>Projects</Link>
        </ul>

        <button className='md:hidden text-white bg-blue-600'>
        </button>
      </div>


    </nav>

  );
}

export default Nav;