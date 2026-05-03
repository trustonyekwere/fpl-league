'use client'

import { useState } from 'react'

const links = ['Home', 'Live', 'Standings', 'Winners']

export default function Navbar() {
  const [active, setActive] = useState('Home')

  return (
    <nav className="sticky top-0 z-50 bg-[#080e1f]/95 backdrop-blur-md border-b border-blue-500/10">
      <div className='mx-auto max-w-6xl w-full flex items-center justify-between h-20'>
        {/* Logo */}
        <div>
          <img src="/logo.png" className='h-12 w-auto py-1' alt="" />
        </div>

        {/* Links */}
        <div className="flex items-center gap-7">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => setActive(link)}
              className={`text-sm font-light tracking-widest transition-colors duration-200 bg-transparent border-none cursor-pointer ${
                active === link
                  ? 'text-blue-400 border-b border-blue-400 pb-0.5'
                  : 'text-snow/40 hover:text-snow/70'
              }`}
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
