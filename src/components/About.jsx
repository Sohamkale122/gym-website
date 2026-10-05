import { FaDumbbell, FaHeartbeat, FaUsers, FaTrophy } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const features = [
    { icon: <FaDumbbell />, title: 'Modern Equipment', desc: 'State-of-the-art machines and free weights for every fitness level.' },
    { icon: <FaHeartbeat />, title: 'Personal Training', desc: 'Certified trainers create customized plans to reach your goals.' },
    { icon: <FaUsers />, title: 'Group Classes', desc: 'High-energy group sessions from yoga to HIIT and spinning.' },
    { icon: <FaTrophy />, title: 'Proven Results', desc: '15,000+ transformations and counting. Your success is our mission.' },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Grid */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-48">
                  <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&q=80" alt="Weight training" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="rounded-2xl overflow-hidden h-64">
                  <img src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400&q=80" alt="Cardio" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden h-64">
                  <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80" alt="Stretching" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="rounded-2xl overflow-hidden h-48">
                  <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&q=80" alt="Boxing" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass-card rounded-2xl px-8 py-4 text-center glow-orange">
              <div className="text-3xl font-black gradient-text">10+</div>
              <div className="text-sm text-gray-400">Years of Excellence</div>
            </div>
          </div>

          {/* Right - Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">About Us</span>
            <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-6">
              We Help You <span className="gradient-text">Build</span> The Body Of Your <span className="gradient-text">Dreams</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              At Jerai Fitness, we believe fitness is more than just working out — it's a lifestyle. 
              Our world-class facility combines cutting-edge equipment with expert guidance to help you 
              achieve results that last. Whether you're a beginner or a seasoned athlete, we have 
              everything you need to succeed.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group glass-card rounded-xl p-5 hover:border-primary/30 transition-all duration-300 hover-glow cursor-default"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-3 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-500">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
