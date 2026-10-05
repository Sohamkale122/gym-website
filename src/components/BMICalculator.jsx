import { useState, useEffect, useRef } from 'react'

const BMICalculator = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState(null)
  const [category, setCategory] = useState('')
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const calculateBMI = (e) => {
    e.preventDefault()
    if (!weight || !height) return
    const heightM = parseFloat(height) / 100
    const bmiVal = (parseFloat(weight) / (heightM * heightM)).toFixed(1)
    setBmi(bmiVal)

    if (bmiVal < 18.5) setCategory('Underweight')
    else if (bmiVal < 25) setCategory('Normal Weight')
    else if (bmiVal < 30) setCategory('Overweight')
    else setCategory('Obese')
  }

  const getCategoryColor = () => {
    switch (category) {
      case 'Underweight': return 'text-blue-400'
      case 'Normal Weight': return 'text-green-400'
      case 'Overweight': return 'text-yellow-400'
      case 'Obese': return 'text-red-400'
      default: return 'text-white'
    }
  }

  const getProgressWidth = () => {
    if (!bmi) return '0%'
    const val = Math.min(parseFloat(bmi), 40)
    return `${(val / 40) * 100}%`
  }

  return (
    <section ref={sectionRef} className="py-24 bg-dark-light relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Info */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">BMI Calculator</span>
            <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-6">
              Know Your <span className="gradient-text">Body Mass</span> Index
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              BMI is a simple measurement that helps indicate if your weight is healthy relative to your height. 
              Use our calculator to check yours and let our experts guide you toward your ideal fitness goal.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-xl p-4 text-center">
                <div className="text-blue-400 font-bold text-lg">{'< 18.5'}</div>
                <div className="text-sm text-gray-400">Underweight</div>
              </div>
              <div className="glass-card rounded-xl p-4 text-center border-green-500/30">
                <div className="text-green-400 font-bold text-lg">18.5 - 24.9</div>
                <div className="text-sm text-gray-400">Normal</div>
              </div>
              <div className="glass-card rounded-xl p-4 text-center">
                <div className="text-yellow-400 font-bold text-lg">25 - 29.9</div>
                <div className="text-sm text-gray-400">Overweight</div>
              </div>
              <div className="glass-card rounded-xl p-4 text-center">
                <div className="text-red-400 font-bold text-lg">{'≥ 30'}</div>
                <div className="text-sm text-gray-400">Obese</div>
              </div>
            </div>
          </div>

          {/* Right - Calculator */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="glass-card rounded-2xl p-8">
              <form onSubmit={calculateBMI} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Weight (kg)</label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Enter your weight"
                    className="w-full px-4 py-3 bg-dark border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Height (cm)</label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="Enter your height"
                    className="w-full px-4 py-3 bg-dark border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300"
                >
                  Calculate BMI
                </button>
              </form>

              {bmi && (
                <div className="mt-8 p-6 bg-dark rounded-xl">
                  <div className="text-center mb-4">
                    <div className="text-4xl font-black gradient-text">{bmi}</div>
                    <div className={`text-lg font-bold mt-1 ${getCategoryColor()}`}>{category}</div>
                  </div>
                  {/* Progress bar */}
                  <div className="h-3 bg-dark-lighter rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 via-green-500 via-yellow-500 to-red-500 rounded-full transition-all duration-1000"
                      style={{ width: getProgressWidth() }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>15</span>
                    <span>20</span>
                    <span>25</span>
                    <span>30</span>
                    <span>40</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BMICalculator
