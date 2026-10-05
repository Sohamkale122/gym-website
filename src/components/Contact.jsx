import { useState, useEffect, useRef } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, title: 'Our Location', detail: '123 Fitness Avenue, Downtown, Mumbai 400001' },
    { icon: <FaPhone />, title: 'Phone Number', detail: '+91 98765 43210' },
    { icon: <FaEnvelope />, title: 'Email Address', detail: 'hello@jeraifitness.com' },
    { icon: <FaClock />, title: 'Working Hours', detail: 'Mon-Sat: 5AM-11PM | Sun: 7AM-8PM' },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Get In Touch</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-4">
            Ready To <span className="gradient-text">Start</span>?
          </h2>
          <p className="text-gray-400">Have questions? We'd love to hear from you. Send us a message and we'll get back within 24 hours.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className={`lg:col-span-2 space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {contactInfo.map((item, index) => (
              <div key={index} className="group flex items-start gap-4 glass-card rounded-xl p-5 hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.detail}</p>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden h-48 bg-dark-lighter border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                title="Location Map"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-3 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="glass-card rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">✓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">Thank you for reaching out. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3.5 bg-dark border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3.5 bg-dark border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3.5 bg-dark border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
                    <textarea
                      required
                      rows="5"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your fitness goals..."
                      className="w-full px-4 py-3.5 bg-dark border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
