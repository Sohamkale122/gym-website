import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FaDumbbell } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Programs', to: 'programs' },
    { name: 'Pricing', to: 'membership' },
    { name: 'Trainers', to: 'trainers' },
    { name: 'Contact', to: 'contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-dark/95 backdrop-blur-lg shadow-2xl shadow-black/50 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="hero" smooth={true} duration={500} className="flex items-center gap-2 cursor-pointer group">
            <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <FaDumbbell className="text-white text-xl" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-white">JERAI</span>
              <span className="text-xl font-black tracking-tight gradient-text"> FITNESS</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="text-primary"
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-primary cursor-pointer transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Link
              to="membership"
              smooth={true}
              duration={500}
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-primary to-accent text-white text-sm font-bold rounded-full hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl hover:text-primary transition-colors"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 top-0 bg-dark/98 backdrop-blur-xl transition-all duration-500 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-6">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl hover:text-primary transition-colors"
          >
            <HiX />
          </button>
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-gray-300 hover:text-primary cursor-pointer transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="membership"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="mt-4 px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full cursor-pointer"
          >
            Join Now
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
