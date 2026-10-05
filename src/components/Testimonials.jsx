import { useState, useEffect, useRef } from 'react'
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      name: 'James Mitchell',
      role: 'Lost 30kg in 6 months',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      text: 'Jerai Fitness completely changed my life. The trainers are incredibly supportive and the community keeps you motivated. I went from 120kg to 90kg and have never felt better!',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Marathon Runner',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&q=80',
      text: 'The HIIT and cardio programs prepared me for my first marathon. The coaches tailored every session to my goals. Best investment in myself ever!',
      rating: 5,
    },
    {
      name: 'David Chen',
      role: 'Bodybuilding Competitor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
      text: 'World-class equipment and expert nutrition guidance helped me prepare for competitions. The Pro membership is worth every penny.',
      rating: 5,
    },
    {
      name: 'Lisa Thompson',
      role: 'Yoga Enthusiast',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
      text: 'The yoga and wellness programs are outstanding. Sarah is the best instructor I have ever had. I feel more balanced, flexible, and at peace.',
      rating: 5,
    },
  ]

  const nextTestimonial = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prevTestimonial = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Testimonials</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-4">
            What Our <span className="gradient-text">Members</span> Say
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative glass-card rounded-3xl p-8 md:p-12">
            <FaQuoteLeft className="text-primary/20 text-5xl mb-6" />
            
            <div className="min-h-[200px] flex flex-col justify-between">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 transition-all duration-500">
                {testimonials[currentIndex].text}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-primary">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 text-sm" />
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={prevTestimonial} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300">
                <FaChevronLeft className="text-sm" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-white/20'}`}
                  />
                ))}
              </div>
              <button onClick={nextTestimonial} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300">
                <FaChevronRight className="text-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
