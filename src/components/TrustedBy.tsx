
export function TrustedBy() {
  const partners = [
    "Acme Inc.", 
    "TechGiant", 
    "MediaPro", 
    "GlobalSoft", 
    "InnovateCo"
  ];
  
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-medium text-gray-200 mb-2">
            Trusted By
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Trusted by businesses across industries to elevate their digital game.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <div className="h-12 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-500 grayscale transition-all duration-300 hover:text-white hover:grayscale-0">
                  {partner}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
