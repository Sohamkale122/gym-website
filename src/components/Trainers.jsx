import { useState, useEffect, useRef } from 'react'
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Trainers = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const trainers = [
    {
      name: 'Alex Rivera',
      role: 'Head Strength Coach',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80',
      speciality: 'Powerlifting',
      experience: '12 years',
    },
    {
      name: 'Sarah Chen',
      role: 'Yoga & Wellness',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80',
      speciality: 'Yoga & Meditation',
      experience: '8 years',
    },
    {
      name: 'Marcus Johnson',
      role: 'Boxing Coach',
      image: 'https://images.unsplash.com/photo-1583468982228-19f19164aee2?w=400&q=80',
      speciality: 'Boxing & MMA',
      experience: '15 years',
    },
    {
      name: 'Emily Brooks',
      role: 'CrossFit Trainer',
      image: 'https://images.unsplash.com/photo-1609899464926-209b098e4a7a?w=400&q=80',
      speciality: 'CrossFit & HIIT',
      experience: '10 years',
    },
  ]

  return (
    <section id="trainers" ref={sectionRef} className="py-24 bg-dark-light relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Expert Trainers</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-4">
            Meet Our <span className="gradient-text">Trainers</span>
          </h2>
          <p className="text-gray-400">Our certified professionals are dedicated to helping you achieve your fitness goals.</p>
        </div>

        {/* Trainer Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent"></div>
                
                {/* Social Links */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <a href="#" className="w-9 h-9 bg-primary/90 rounded-full flex items-center justify-center text-white text-sm hover:bg-primary transition-colors">
                    <FaInstagram />
                  </a>
                  <a href="#" className="w-9 h-9 bg-primary/90 rounded-full flex items-center justify-center text-white text-sm hover:bg-primary transition-colors">
                    <FaTwitter />
                  </a>
                  <a href="#" className="w-9 h-9 bg-primary/90 rounded-full flex items-center justify-center text-white text-sm hover:bg-primary transition-colors">
                    <FaLinkedin />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg font-bold text-white">{trainer.name}</h3>
                <p className="text-primary text-sm font-medium">{trainer.role}</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded-full">{trainer.speciality}</span>
                  <span className="text-xs text-gray-400">{trainer.experience}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trainers
