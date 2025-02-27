import React from 'react'
import { Link } from 'react-router'

function MainNav() {
  return (
    <div>
         <nav className="flex justify-between h-8 bg-green-200 px-4">
        <div className="flex gap-4">
          <Link to = '/'>Home</Link>
          <Link to = 'about'>About</Link>
          <Link to = 'contact'>Contact</Link>
        </div>

        <div className="flex gap-4">
          <Link to = 'login'>Login</Link>
          <Link to = 'register'>Register</Link>
        </div>
      </nav>
    </div>
  )
}

export default MainNav