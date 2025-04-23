
import { useState } from "react";

export function Capabilities() {
  const capabilities = [
    {
      title: "Cloud Hosting",
      description: "High-performance, secure hosting with 99.9% uptime guarantee.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: "Real-time Analytics",
      description: "Monitor performance metrics in real-time with custom dashboards.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Marketing Dashboard",
      description: "All your marketing metrics in one centralized, easy-to-use dashboard.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
    {
      title: "Multi-platform Integration",
      description: "Seamlessly connect with all major platforms and marketing tools.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 relative bg-gradient-to-b from-black to-[#050812]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Platform Capabilities</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our technology stack delivers powerful tools to maximize your digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left side - Interactive Cards */}
          <div className="space-y-4">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className={`glass p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                  activeIndex === index
                    ? "border-neon-blue border bg-white/5 shadow-neon-blue/20"
                    : "hover:bg-white/5"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex items-start">
                  <div
                    className={`p-3 rounded-xl mr-4 ${
                      activeIndex === index
                        ? "bg-gradient-to-br from-neon-blue to-neon-purple text-white"
                        : "bg-white/10 text-white/60"
                    }`}
                  >
                    {capability.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {capability.title}
                    </h3>
                    <p className="text-gray-300">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Animated Visual */}
          <div className="hidden lg:block">
            <div className="aspect-square relative">
              {/* Animated graphics representing the capabilities */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 blur-2xl animate-pulse"></div>
              <div className="absolute inset-8 border border-white/10 rounded-full"></div>
              <div className="absolute inset-16 border border-white/20 rounded-full animate-spin" style={{ animationDuration: "30s" }}></div>
              
              {/* Central Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                  {capabilities[activeIndex].icon}
                </div>
              </div>
              
              {/* Orbiting elements */}
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`absolute w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-neon-glow ${
                    activeIndex === i ? "bg-neon-blue/30" : ""
                  }`}
                  style={{
                    top: `${50 + 35 * Math.sin(i * (Math.PI / 2))}%`,
                    left: `${50 + 35 * Math.cos(i * (Math.PI / 2))}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
