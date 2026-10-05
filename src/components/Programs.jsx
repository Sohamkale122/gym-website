import { useState, useEffect, useRef } from 'react'
import { GiWeightLiftingUp, GiBoxingGlove, GiMeditation, GiRunningShoe, GiCycling, GiJumpingRope } from 'react-icons/gi'
import { FaArrowRight } from 'react-icons/fa'

const Programs = () => {
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

  const programs = [
    {
      icon: <GiWeightLiftingUp className="text-3xl" />,
      title: 'Strength Training',
      desc: 'Build muscle, increase strength, and sculpt your physique with our comprehensive weight training programs.',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80',
      duration: '60 min',
      level: 'All Levels',
      calories: '400-600',
    },
    {
      icon: <GiBoxingGlove className="text-3xl" />,
      title: 'Boxing & MMA',
      desc: 'Learn self-defense while getting the most intense full-body workout of your life.',
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&q=80',
      duration: '45 min',
      level: 'Intermediate',
      calories: '500-800',
    },
    {
      icon: <GiMeditation className="text-3xl" />,
      title: 'Yoga & Flexibility',
      desc: 'Improve flexibility, reduce stress, and find your inner balance through mindful practice.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
      duration: '50 min',
      level: 'All Levels',
      calories: '200-350',
    },
    {
      icon: <GiRunningShoe className="text-3xl" />,
      title: 'HIIT Cardio',
      desc: 'High-intensity interval training to maximize calorie burn and boost your cardiovascular health.',
      image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=600&q=80',
      duration: '30 min',
      level: 'Advanced',
      calories: '600-900',
    },
    {
      icon: <GiCycling className="text-3xl" />,
      title: 'Indoor Cycling',
      desc: 'Pedal your way to fitness with high-energy spin classes set to motivating music.',
      image: 'https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=600&q=80',
      duration: '45 min',
      level: 'All Levels',
      calories: '400-700',
    },
    {
      icon: <GiJumpingRope className="text-3xl" />,
      title: 'CrossFit',
      desc: 'Functional fitness combining gymnastics, weightlifting, and cardio for total-body conditioning.',
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&q=80',
      duration: '55 min',
      level: 'Intermediate',
      calories: '500-850',
    },
  ]

  return (
    <section id="programs" ref={sectionRef} className="py-24 bg-dark-light relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Programs</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-4">
            Explore Our <span className="gradient-text">Workout</span> Programs
          </h2>
          <p className="text-gray-400">
            From strength training to mind-body wellness, we offer diverse programs designed to help you reach your fitness goals.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/20 group-hover:via-dark/70"></div>
              </div>

              {/* Content */}
              <div className="relative p-6 min-h-[320px] flex flex-col justify-end">
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {program.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{program.desc}</p>

                {/* Tags */}
                <div className="flex gap-2 mb-4">
                  <span className="text-xs px-3 py-1 bg-white/10 rounded-full text-gray-300">{program.duration}</span>
                  <span className="text-xs px-3 py-1 bg-white/10 rounded-full text-gray-300">{program.level}</span>
                  <span className="text-xs px-3 py-1 bg-primary/20 rounded-full text-primary">{program.calories} cal</span>
                </div>

                {/* CTA */}
                <button className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  Learn More <FaArrowRight className="text-xs" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs
