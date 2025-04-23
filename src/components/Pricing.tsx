
import { Check } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const plans = [
    {
      name: "Starter",
      price: isAnnual ? 179 : 199,
      description: "Perfect for small businesses just getting started.",
      features: [
        "1 platform management",
        "Basic social media management",
        "Basic SEO optimization",
        "Monthly performance report",
        "Email support"
      ],
      cta: "Select Plan",
      popular: false,
      color: "from-neon-blue to-neon-purple"
    },
    {
      name: "Growth",
      price: isAnnual ? 449 : 499,
      description: "For businesses ready to accelerate their digital presence.",
      features: [
        "3 platform management",
        "Advanced social media management",
        "Full SEO optimization",
        "Google & Facebook Ads",
        "Website updates",
        "Bi-weekly performance reports",
        "Priority email & chat support"
      ],
      cta: "Select Plan",
      popular: true,
      color: "from-neon-green to-neon-blue"
    },
    {
      name: "Pro",
      price: isAnnual ? 799 : 899,
      description: "Comprehensive solution for established businesses.",
      features: [
        "All platforms management",
        "Premium social media management",
        "Advanced SEO & content strategy",
        "Full ad campaign management",
        "Website & app maintenance",
        "Weekly performance reports",
        "Custom marketing dashboard",
        "24/7 priority support",
        "Dedicated account manager"
      ],
      cta: "Select Plan",
      popular: false,
      color: "from-neon-purple to-neon-pink"
    }
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Grow at Your Pace</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Flexible pricing options designed to scale with your business needs.
          </p>
          
          {/* Monthly/Annual Toggle */}
          <div className="mt-8 flex items-center justify-center">
            <span className={`mr-3 ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={isAnnual} 
                onChange={() => setIsAnnual(!isAnnual)} 
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-neon-blue after:border-neon-blue after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white/20"></div>
            </label>
            <span className={`ml-3 flex items-center ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual
              <span className="ml-2 bg-neon-green/20 text-neon-green text-xs px-2 py-0.5 rounded-full">Save 10%</span>
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms`, animationFillMode: "forwards" }}
            >
              <div className={`glass rounded-2xl p-6 h-full ${
                plan.popular ? 'border-2 border-neon-blue shadow-neon-blue/20' : 'border border-white/10'
              }`}>
                {plan.popular && (
                  <span className="bg-gradient-to-r from-neon-blue to-neon-purple text-white text-xs px-3 py-1 rounded-full float-right">
                    Popular
                  </span>
                )}
                
                <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-300 ml-1">/month</span>
                </div>
                
                <p className="text-gray-300 mb-6">{plan.description}</p>
                
                <div className="mt-6 mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className={`p-1 rounded-full mr-2 bg-gradient-to-br ${plan.color}`}>
                          <Check className="w-4 h-4 text-black" />
                        </div>
                        <span className="text-gray-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  to="/contact"
                  className={`w-full py-3 px-4 rounded-md text-center font-medium inline-block transition-all ${
                    plan.popular 
                      ? `bg-gradient-to-r ${plan.color} text-black hover:shadow-neon-blue`
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 opacity-0 animate-fade-in" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
          <p className="text-gray-300">
            Need a custom solution? <Link to="/contact" className="text-neon-blue hover:text-white transition-colors">Contact us</Link> for a tailored package.
          </p>
        </div>
      </div>
    </section>
  );
}
