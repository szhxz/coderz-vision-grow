
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
  Code, 
  Monitor, 
  MessageSquare, 
  FileSearch, 
  DollarSign 
} from "lucide-react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050812]">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-neon-blue/10 opacity-20"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center pt-20 md:pt-16">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 opacity-0 animate-fade-in" 
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
            <span className="text-gradient">Be Seen</span>, <span className="text-white">Be Sold</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto opacity-0 animate-fade-in"
             style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            We help brands grow visibility, generate leads, and boost conversions with 
            data-driven digital marketing.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 opacity-0 animate-fade-in"
               style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
            <Link to="/contact" className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-md font-medium text-white hover:shadow-neon-blue transition-shadow w-full sm:w-auto">
              Book a Free Strategy Call
            </Link>
            <Link to="/services" className="px-8 py-3 bg-transparent border border-white/30 rounded-md font-medium text-white hover:bg-white/10 transition-colors w-full sm:w-auto">
              View Services
            </Link>
          </div>

          {/* Service Icons */}
          <div className="relative h-40 sm:h-60 opacity-0 animate-fade-in"
               style={{ animationDelay: "800ms", animationFillMode: "forwards" }}>
            {/* Center Icon */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-neon-green/20 to-neon-blue/20 backdrop-blur-sm flex items-center justify-center">
                <DollarSign size={32} className="text-neon-green animate-glow" />
              </div>
            </div>
            
            {/* Orbiting Icons */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-40 h-40 sm:w-60 sm:h-60 animate-spin" style={{ animationDuration: "30s" }}>
                {[
                  { Icon: Code, color: "text-neon-blue", position: "top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2" },
                  { Icon: Monitor, color: "text-neon-purple", position: "top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2" },
                  { Icon: MessageSquare, color: "text-neon-pink", position: "bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2" },
                  { Icon: FileSearch, color: "text-neon-yellow", position: "top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2" },
                ].map(({ Icon, color, position }, index) => (
                  <div key={index} className={`absolute ${position}`}>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center">
                      <Icon size={24} className={`${color} animate-glow`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
