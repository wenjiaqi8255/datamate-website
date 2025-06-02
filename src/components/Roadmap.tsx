import React, { useEffect, useRef } from 'react';
import { CheckCircle2, Clock, Lightbulb } from 'lucide-react';

const Roadmap: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="roadmap" 
      className="py-20 bg-white"
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 max-w-5xl opacity-0 transition-opacity duration-1000"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          What We're <span style={{ color: '#3cbbb1' }}>Building</span>
        </h2>
        
        <p className="text-lg text-center text-neutral-700 mb-16 max-w-2xl mx-auto">
          This started as a hackathon project. We believe AI Agents will completely transform how enterprises collaborate on data.
        </p>
        
        <div className="space-y-12">
          {/* Current Stage */}
          <div className="relative">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <div className="flex items-center md:justify-end">
                  <div className="p-2 bg-success-100 rounded-full mr-3" style={{ backgroundColor: 'rgba(76, 175, 80, 0.1)' }}>
                    <CheckCircle2 size={24} style={{ color: '#4caf50' }} />
                  </div>
                  <h3 className="text-xl font-semibold" style={{ color: '#4caf50' }}>Now</h3>
                </div>
              </div>
              
              <div className="hidden md:block md:w-16 relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-success-500" style={{ backgroundColor: '#4caf50' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-neutral-200"></div>
              </div>
              
              <div className="md:w-7/12">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-success-500" style={{ borderColor: '#4caf50' }}>
                  <h4 className="text-lg font-semibold mb-2">MVP Demo</h4>
                  <p className="text-neutral-700">
                    Our current version is a functioning prototype that demonstrates the core AI agent interaction for data discovery. It can scan local files, match data needs, and provide previews.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-success-100 text-success-800 text-sm rounded-full" style={{ backgroundColor: 'rgba(76, 175, 80, 0.1)', color: '#2e7d32' }}>Prototype</span>
                    <span className="px-3 py-1 bg-success-100 text-success-800 text-sm rounded-full" style={{ backgroundColor: 'rgba(76, 175, 80, 0.1)', color: '#2e7d32' }}>Local Files</span>
                    <span className="px-3 py-1 bg-success-100 text-success-800 text-sm rounded-full" style={{ backgroundColor: 'rgba(76, 175, 80, 0.1)', color: '#2e7d32' }}>Basic UI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Next Stage */}
          <div className="relative">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <div className="flex items-center md:justify-end">
                  <div className="p-2 bg-warning-100 rounded-full mr-3" style={{ backgroundColor: 'rgba(255, 152, 0, 0.1)' }}>
                    <Clock size={24} style={{ color: '#ff9800' }} />
                  </div>
                  <h3 className="text-xl font-semibold" style={{ color: '#ff9800' }}>Next</h3>
                </div>
              </div>
              
              <div className="hidden md:block md:w-16 relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-warning-500" style={{ backgroundColor: '#ff9800' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-neutral-200"></div>
              </div>
              
              <div className="md:w-7/12">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-warning-500" style={{ borderColor: '#ff9800' }}>
                  <h4 className="text-lg font-semibold mb-2">Finding Early Customers and Feedback</h4>
                  <p className="text-neutral-700">
                    We're focused on working with early adopters to refine our solution based on real-world usage. We'll be adding support for common enterprise data sources and enhancing the quality scoring algorithm.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-warning-100 text-warning-800 text-sm rounded-full" style={{ backgroundColor: 'rgba(255, 152, 0, 0.1)', color: '#e65100' }}>Beta Testing</span>
                    <span className="px-3 py-1 bg-warning-100 text-warning-800 text-sm rounded-full" style={{ backgroundColor: 'rgba(255, 152, 0, 0.1)', color: '#e65100' }}>Integrations</span>
                    <span className="px-3 py-1 bg-warning-100 text-warning-800 text-sm rounded-full" style={{ backgroundColor: 'rgba(255, 152, 0, 0.1)', color: '#e65100' }}>Cloud Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Vision Stage */}
          <div className="relative">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <div className="flex items-center md:justify-end">
                  <div className="p-2 bg-primary-100 rounded-full mr-3" style={{ backgroundColor: 'rgba(255, 89, 89, 0.1)' }}>
                    <Lightbulb size={24} style={{ color: '#ff5959' }} />
                  </div>
                  <h3 className="text-xl font-semibold" style={{ color: '#ff5959' }}>Vision</h3>
                </div>
              </div>
              
              <div className="hidden md:block md:w-16 relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary-500" style={{ backgroundColor: '#ff5959' }}></div>
              </div>
              
              <div className="md:w-7/12">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-500" style={{ borderColor: '#ff5959' }}>
                  <h4 className="text-lg font-semibold mb-2">Become the Standard for Enterprise Data Discovery</h4>
                  <p className="text-neutral-700">
                    Our long-term vision is to make DataMate the universal interface for enterprise data discovery, enabling seamless collaboration between teams and eliminating data silos permanently.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full" style={{ backgroundColor: 'rgba(255, 89, 89, 0.1)', color: '#c62828' }}>AI Ecosystem</span>
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full" style={{ backgroundColor: 'rgba(255, 89, 89, 0.1)', color: '#c62828' }}>Enterprise Scale</span>
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full" style={{ backgroundColor: 'rgba(255, 89, 89, 0.1)', color: '#c62828' }}>Data Governance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-neutral-800 text-white rounded-lg font-medium transition-all hover:bg-neutral-900 hover:shadow-lg"
            style={{ backgroundColor: '#0a0f0d' }}
          >
            <span>Join Our Journey</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;