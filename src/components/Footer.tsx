
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black/80 pt-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and description */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white">
                <span className="text-gradient">CoderZ</span> Vision
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Innovative digital marketing solutions that drive real business growth.
              We turn visibility into profit with data-driven strategies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {["Home", "Services", "Pricing", "About", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    className="text-gray-400 hover:text-neon-blue transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="mr-3 text-gray-400" size={20} />
                <a href="mailto:hello@coderzvision.com" className="text-gray-400 hover:text-neon-blue transition-colors">
                  hello@coderzvision.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="mr-3 text-gray-400" size={20} />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-neon-blue transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter Signup */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest digital marketing insights.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full py-2.5 px-4 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:border-neon-blue text-white"
                required
              />
              <button
                type="submit"
                className="mt-3 w-full bg-gradient-to-r from-neon-blue to-neon-purple text-black font-medium py-2.5 px-4 rounded-md hover:shadow-neon-blue transition-shadow"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 py-6 text-center md:text-left md:flex md:justify-between md:items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CoderZ Vision. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 text-gray-500 text-sm">
            <a href="#" className="hover:text-gray-300 transition-colors mx-2">Privacy Policy</a>
            <span className="mx-1">|</span>
            <a href="#" className="hover:text-gray-300 transition-colors mx-2">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
