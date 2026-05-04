'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

const links = ['Home', 'Live', 'Standings', 'Winners']

export default function Navbar() {
  const [active, setActive] = useState('Home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode !== null) {
      setDarkMode(JSON.parse(savedMode))
    } else {
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <>
      <nav className={`sticky top-0 z-50 ${darkMode ? 'bg-[#080e1f]' : 'bg-white'} backdrop-blur-md border-b px-6 ${darkMode ? 'border-blue-500/10' : 'border-blue-500/20'}`}>
        <div className='mx-auto max-w-6xl w-full flex items-center justify-between h-20'>
          {/* Logo */}
          <div>
            <img src="/logo.png" className='md:h-12 h-10 w-auto md:py-1' alt="" />
          </div>

          {/* Links - Desktop */}
          <div className="md:flex hidden items-center gap-7">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => setActive(link)}
                className={`text-sm font-light tracking-widest transition-colors duration-200 bg-transparent border-none cursor-pointer ${
                  active === link
                    ? darkMode ? 'text-blue-400 border-b border-blue-400 pb-0.5' : 'text-blue-600 border-b border-blue-600 pb-0.5'
                    : darkMode ? 'text-snow/40 hover:text-snow/70' : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {link}
              </button>
            ))}
          </div>

          {/* Dark Mode Toggler & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${darkMode ? 'text-snow/70 hover:text-snow' : 'text-gray-800 hover:text-black'}`}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Auto-scrolling Ticker Bar */}
      <div className={`sticky top-20 z-40 ${darkMode ? 'bg-slate-900 border-b border-blue-500/10' : 'bg-white border-b border-blue-500/30'} overflow-hidden`}>
        {/* Duplicate the ticker content so the scroll always has text */}
        <div className="flex animate-scroll whitespace-nowrap">
          <div className="flex items-center gap-8 px-6 py-3 text-sm">          
            <div className={`${darkMode ? 'text-white' : 'text-blue-600/80'} font-light flex items-center gap-4`}> 
              <div className="flex items-center gap-1.5 bg-red-500/10 border border-red-500/30 rounded px-2.5 py-1">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-[pulse-dot_1.4s_ease-in-out_infinite]" />
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-red-400">Live</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm text-snow/40">Gameweek 34 in progress &middot; 6 of 10 matches played | <span className="text-red-400">Deadline Passed</span></span>
                <span className="text-sm text-snow/25 tracking-wide">Last updated:</span>
                <span className="text-sm text-snow/40 font-medium">12:43 GMT</span>
              </div>
            </div>
          </div>

          {/* repeated copy to ensure continuous text */}
          <div className="flex items-center gap-8 px-6 py-3 text-sm">          
            <div className={`${darkMode ? 'text-white' : 'text-blue-600/80'} font-light flex items-center gap-4`}> 
              <div className="flex items-center gap-1.5 bg-red-500/10 border border-red-500/30 rounded px-2.5 py-1">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-[pulse-dot_1.4s_ease-in-out_infinite]" />
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-red-400">Live</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm text-snow/40">Gameweek 34 in progress &middot; 6 of 10 matches played | <span className="text-red-400">Deadline Passed</span></span>
                <span className="text-sm text-snow/25 tracking-wide">Last updated:</span>
                <span className="text-sm text-snow/40 font-medium">12:43 GMT</span>
              </div>
            </div>
          </div>

          {/* repeated copy to ensure continuous text */}
          <div className="flex items-center gap-8 px-6 py-3 text-sm">          
            <div className={`${darkMode ? 'text-white' : 'text-blue-600/80'} font-light flex items-center gap-4`}> 
              <div className="flex items-center gap-1.5 bg-red-500/10 border border-red-500/30 rounded px-2.5 py-1">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-[pulse-dot_1.4s_ease-in-out_infinite]" />
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-red-400">Live</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm text-snow/40">Gameweek 34 in progress &middot; 6 of 10 matches played | <span className="text-red-400">Deadline Passed</span></span>
                <span className="text-sm text-snow/25 tracking-wide">Last updated:</span>
                <span className="text-sm text-snow/40 font-medium">12:43 GMT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden fixed top-20 left-0 right-0 z-40 ${darkMode ? 'bg-[#080e1f]' : 'bg-white'} border-b ${darkMode ? 'border-blue-500/10' : 'border-blue-500/20'}`}>
          <div className="flex flex-col px-6 pt-6 pb-12 gap-4">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => {
                  setActive(link)
                  setMobileMenuOpen(false)
                }}
                className={`text-left text-sm font-light tracking-widest transition-colors duration-200 py-2 border-l-2 pl-3 ${
                  active === link
                    ? darkMode ? 'text-blue-400 border-blue-400' : 'text-blue-600 border-blue-600'
                    : darkMode ? 'text-snow/40 border-transparent hover:text-snow/70' : 'text-gray-600 border-transparent hover:text-gray-800'
                }`}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </>
  )
}
