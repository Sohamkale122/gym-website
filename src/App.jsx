import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Membership from './components/Membership'
import Trainers from './components/Trainers'
import Testimonials from './components/Testimonials'
import BMICalculator from './components/BMICalculator'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="h-screen w-screen bg-dark flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
          </div>
          <h2 className="text-3xl font-bold gradient-text">JERAI FITNESS</h2>
          <p className="text-gray-500 mt-2 text-sm tracking-widest uppercase">Loading your transformation...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Membership />
      <Trainers />
      <BMICalculator />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
