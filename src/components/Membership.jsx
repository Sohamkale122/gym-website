import { useState, useEffect, useRef } from 'react'
import { FaCheck, FaCrown, FaStar, FaBolt } from 'react-icons/fa'

const Membership = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [billingCycle, setBillingCycle] = useState('monthly')
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const plans = [
    {
      name: 'Starter',
      icon: <FaStar className="text-2xl" />,
      monthlyPrice: 29,
      yearlyPrice: 290,
      desc: 'Perfect for beginners starting their fitness journey.',
      features: [
        'Access to gym floor',
        'Basic equipment usage',
        'Locker room access',
        '2 group classes/week',
        'Fitness assessment',
      ],
      notIncluded: ['Personal trainer', 'Sauna & spa', 'Nutrition plan'],
      color: 'from-gray-600 to-gray-500',
      popular: false,
    },
    {
      name: 'Pro',
      icon: <FaCrown className="text-2xl" />,
      monthlyPrice: 59,
      yearlyPrice: 590,
      desc: 'Our most popular plan with everything you need.',
      features: [
        'Full gym access 24/7',
        'All equipment & classes',
        'Personal locker',
        'Unlimited group classes',
        'Monthly fitness assessment',
        '2 PT sessions/month',
        'Sauna & spa access',
      ],
      notIncluded: ['Custom nutrition plan'],
      color: 'from-primary to-accent',
      popular: true,
    },
    {
      name: 'Elite',
      icon: <FaBolt className="text-2xl" />,
      monthlyPrice: 99,
      yearlyPrice: 990,
      desc: 'The ultimate fitness experience with premium perks.',
      features: [
        'Everything in Pro',
        'Unlimited PT sessions',
        'Custom nutrition plan',
        'Recovery & massage',
        'Priority booking',
        'Guest passes (2/month)',
        'Merchandise discount 20%',
        'VIP member events',
      ],
      notIncluded: [],
      color: 'from-purple-600 to-pink-500',
      popular: false,
    },
  ]

  return (
    <section id="membership" ref={sectionRef} className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Pricing Plans</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-4">
            Choose Your <span className="gradient-text">Membership</span>
          </h2>
          <p className="text-gray-400">Invest in your health with a plan that fits your goals and budget.</p>
        </div>

        {/* Billing Toggle */}
        <div className={`flex items-center justify-center gap-4 mb-14 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            className="relative w-14 h-7 bg-dark-lighter rounded-full transition-colors duration-300"
          >
            <div className={`absolute top-1 w-5 h-5 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300 ${billingCycle === 'yearly' ? 'left-8' : 'left-1'}`}></div>
          </button>
          <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-500'}`}>
            Yearly <span className="text-primary text-xs font-bold ml-1">Save 20%</span>
          </span>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${
                plan.popular
                  ? 'glass-card border-primary/40 scale-105 glow-orange'
                  : 'glass-card hover:border-white/20'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${plan.color} flex items-center justify-center text-white mb-5`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-6">{plan.desc}</p>

                <div className="flex items-end gap-1 mb-8">
                  <span className="text-5xl font-black gradient-text">
                    ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="text-gray-500 mb-2">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </div>

                <button className={`w-full py-3.5 rounded-xl font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/30 hover:scale-105'
                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-primary/30'
                }`}>
                  Get Started
                </button>

                <div className="mt-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <FaCheck className="text-primary text-[10px]" />
                      </div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 opacity-40">
                      <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                        <span className="text-[10px] text-gray-500">✕</span>
                      </div>
                      <span className="text-sm text-gray-500 line-through">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Membership
