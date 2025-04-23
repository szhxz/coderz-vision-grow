
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 z-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050812] to-black"></div>
        
        {/* Top light beam */}
        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-16 overflow-hidden">
          {/* Glow effects */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-neon-blue/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-neon-green/20 rounded-full blur-3xl"></div>
          
          <div className="relative text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-gradient">Scale</span>?
            </h2>
            
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let's turn your brand into a digital powerhouse. Book a free strategy call and let's grow together.
            </p>
            
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-neon-green to-neon-blue text-black font-semibold rounded-md hover:shadow-neon-glow transition-shadow"
            >
              Schedule a Free Call
            </Link>
            
            <p className="mt-4 text-gray-300 text-sm">
              No obligations. Let's just talk about your goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
