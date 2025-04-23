
import { 
  Code, 
  Monitor, 
  Users, 
  FileSearch, 
  DollarSign,
  Facebook,
  FileText 
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Monitor,
    title: "Website Development",
    description: "Fast, responsive, and conversion-focused websites.",
    color: "from-neon-blue to-neon-purple"
  },
  {
    icon: Code,
    title: "App Development",
    description: "iOS & Android apps tailored to user behavior.",
    color: "from-neon-green to-neon-blue"
  },
  {
    icon: Users,
    title: "Social Media Management",
    description: "Engage your audience where they spend their time.",
    color: "from-neon-purple to-neon-pink"
  },
  {
    icon: FileSearch,
    title: "SEO",
    description: "Rank higher, get discovered faster.",
    color: "from-neon-pink to-neon-yellow"
  },
  {
    icon: DollarSign,
    title: "Google Ads",
    description: "Maximize ROI with expertly targeted campaigns.",
    color: "from-neon-yellow to-neon-green"
  },
  {
    icon: Facebook,
    title: "Facebook Ads",
    description: "Reach the right people with engaging visuals.",
    color: "from-neon-blue to-neon-pink"
  },
  {
    icon: FileText,
    title: "Google My Business",
    description: "Own your local search results.",
    color: "from-neon-green to-neon-blue"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Our Expertise</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We deliver results-driven solutions to help your business thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <div className="glass rounded-2xl p-6 h-full transition-transform hover:-translate-y-2 duration-300">
                <div className={`w-12 h-12 mb-6 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                  <service.icon className="text-black" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <Link 
                  to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-neon-blue hover:text-white transition-colors"
                >
                  Learn More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
