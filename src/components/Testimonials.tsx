
import { useState, useEffect } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const testimonials: Testimonial[] = [
    {
      quote: "CoderZ Vision transformed our online presence. Their SEO work has increased our organic traffic by 215% in just 3 months. The ROI has been incredible.",
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechSoft Solutions"
    },
    {
      quote: "The website they built for us not only looks stunning but converts visitors at twice the rate of our previous site. Their data-driven approach made all the difference.",
      name: "Michael Chen",
      role: "CEO",
      company: "InnovateCo"
    },
    {
      quote: "Their social media management has helped us build a genuine community around our brand. Engagement is up, and so are sales. I couldn't be happier with the results.",
      name: "Jessica Martinez",
      role: "Brand Manager",
      company: "StyleHub"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);
  
  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsAnimating(false);
      }, 500);
    }
  };
  
  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
        setIsAnimating(false);
      }, 500);
    }
  };
  
  return (
    <section className="py-20 relative bg-gradient-to-b from-black to-[#050812]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-neon-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-neon-blue/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">What Our Clients Say</span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div 
              className={`glass rounded-3xl p-8 md:p-12 transition-opacity duration-500 ${
                isAnimating ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <svg className="w-12 h-12 text-neon-blue mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                
                <blockquote className="text-xl md:text-2xl text-gray-100 mb-6 italic">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple mb-4"></div>
                  <cite className="not-italic">
                    <span className="block font-semibold text-white text-lg">
                      {testimonials[currentIndex].name}
                    </span>
                    <span className="block text-gray-300">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </span>
                  </cite>
                </div>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setCurrentIndex(index);
                      setIsAnimating(false);
                    }, 500);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index ? 'bg-neon-blue w-8' : 'bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button 
              className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-16 bg-white/5 hover:bg-white/10 rounded-full p-3 focus:outline-none hidden md:block"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-16 bg-white/5 hover:bg-white/10 rounded-full p-3 focus:outline-none hidden md:block"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
