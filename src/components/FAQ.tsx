
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs: FAQItem[] = [
    {
      question: "How long does it take to launch a campaign?",
      answer: "Most campaigns can be launched within 7-10 business days after we've gathered all necessary assets and information. Complex projects like website development may take 3-4 weeks depending on scope and requirements."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Absolutely! We specialize in website redesigns that improve both aesthetics and performance. Our team will analyze your current site, identify opportunities for improvement, and implement changes that align with your brand while optimizing for conversions."
    },
    {
      question: "Do you offer monthly reports?",
      answer: "Yes, all our services come with comprehensive monthly reporting. Our Growth and Pro plans include more frequent reporting options. Reports include key metrics, analysis of performance trends, and recommendations for ongoing optimization."
    },
    {
      question: "Is there a minimum contract length?",
      answer: "Our standard agreements are month-to-month with no long-term commitment required. However, we offer discounted rates for clients who commit to 6-month or annual terms, as digital marketing strategies typically yield better results over time."
    },
    {
      question: "What makes CoderZ Vision different from other agencies?",
      answer: "We combine technical expertise with creative marketing strategies to deliver measurable results. Our data-driven approach, transparent reporting, and focus on ROI sets us apart from agencies that prioritize vanity metrics over actual business growth."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Frequently Asked Questions</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about our services and process.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`mb-4 glass rounded-xl overflow-hidden transition-all duration-300 opacity-0 animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 focus:outline-none flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <svg 
                  className={`w-6 h-6 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-300">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 opacity-0 animate-fade-in" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
          <p className="text-gray-300">
            Still have questions? <a href="/contact" className="text-neon-blue hover:text-white transition-colors">Get in touch</a> with our team.
          </p>
        </div>
      </div>
    </section>
  );
}
