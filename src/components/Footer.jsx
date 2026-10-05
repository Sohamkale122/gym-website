import { Link } from 'react-scroll'
import { FaDumbbell, FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Programs', to: 'programs' },
    { name: 'Pricing', to: 'membership' },
    { name: 'Trainers', to: 'trainers' },
    { name: 'Contact', to: 'contact' },
  ]

  const programs = ['Strength Training', 'Boxing & MMA', 'Yoga & Flexibility', 'HIIT Cardio', 'Indoor Cycling', 'CrossFit']

  const socials = [
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaFacebook />, href: '#', label: 'Facebook' },
    { icon: <FaYoutube />, href: '#', label: 'YouTube' },
  ]

  return (
    <footer className="bg-dark-light border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg">
                <FaDumbbell className="text-white text-lg" />
              </div>
              <div>
                <span className="text-lg font-black text-white">JERAI</span>
                <span className="text-lg font-black gradient-text"> FITNESS</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Transform your body, transform your life. Join 15,000+ members and start your fitness journey today.
            </p>
            <div className="flex gap-3">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="text-gray-500 hover:text-primary text-sm cursor-pointer transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-bold mb-5">Programs</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program}>
                  <span className="text-gray-500 text-sm">{program}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-5">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-4">Subscribe for tips, workout plans, and exclusive offers.</p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-dark border border-white/10 rounded-xl text-white text-sm placeholder-gray-600 focus:outline-none focus:border-primary transition-all duration-300"
              />
              <button className="w-full py-3 bg-gradient-to-r from-primary to-accent text-white text-sm font-bold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © 2024 Jerai Fitness. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-1">
            Made with <FaHeart className="text-primary text-xs" /> by Soham Kale
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
