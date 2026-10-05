import { Link } from 'react-scroll'
import { FaPlay, FaArrowRight } from 'react-icons/fa'
import { HiStar } from 'react-icons/hi'

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8">
              <HiStar className="text-primary" />
              <span className="text-sm font-medium text-primary">#1 Fitness Center in the City</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
              <span className="text-white">Transform</span>
              <br />
              <span className="text-white">Your </span>
              <span className="gradient-text">Body,</span>
              <br />
              <span className="text-white">Transform</span>
              <br />
              <span className="text-white">Your </span>
              <span className="gradient-text">Life.</span>
            </h1>

            <p className="text-lg text-gray-400 max-w-lg mb-10 leading-relaxed">
              Join Jerai Fitness and unlock your true potential. World-class trainers, 
              cutting-edge equipment, and a community that pushes you to be your best.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="membership"
                smooth={true}
                duration={500}
                className="group px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 cursor-pointer flex items-center gap-2"
              >
                Start Your Journey
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="group flex items-center gap-3 px-6 py-4 text-white font-medium hover:text-primary transition-all duration-300">
                <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                  <FaPlay className="text-sm ml-0.5" />
                </div>
                Watch Video
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-14 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-black gradient-text">15K+</div>
                <div className="text-sm text-gray-500 mt-1">Active Members</div>
              </div>
              <div>
                <div className="text-3xl font-black gradient-text">50+</div>
                <div className="text-sm text-gray-500 mt-1">Expert Trainers</div>
              </div>
              <div>
                <div className="text-3xl font-black gradient-text">10+</div>
                <div className="text-sm text-gray-500 mt-1">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right side decorative card */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full border-2 border-primary/20 flex items-center justify-center animate-pulse-slow">
                <div className="w-60 h-60 rounded-full border-2 border-primary/30 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-orange">
                    <span className="text-4xl font-black text-white">GO!</span>
                  </div>
                </div>
              </div>
              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 glass-card rounded-2xl px-4 py-3 animate-float">
                <div className="text-sm font-bold text-primary">🔥 500+ Calories</div>
                <div className="text-xs text-gray-400">Avg. per session</div>
              </div>
              <div className="absolute -bottom-4 -left-8 glass-card rounded-2xl px-4 py-3 animate-float" style={{animationDelay: '2s'}}>
                <div className="text-sm font-bold text-green-400">✓ 98% Satisfaction</div>
                <div className="text-xs text-gray-400">Member rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
