import React, { useEffect, useRef } from 'react';
import { Clock, Folder, HelpCircle } from 'lucide-react';

const Problem: React.FC = () => {
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
      id="problem" 
      className="py-20 bg-neutral-50"
      style={{ backgroundColor: '#f8fafa' }}
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 max-w-5xl opacity-0 transition-opacity duration-1000"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          The Problem is <span style={{ color: '#ff5959' }}>Simple</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-primary-100 rounded-full" style={{ backgroundColor: 'rgba(255, 89, 89, 0.1)' }}>
                <Clock size={32} style={{ color: '#ff5959' }} />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Time Wasted</h3>
            <p className="text-neutral-700 text-center">
              Data scientists spend <span className="font-bold">60% of their time</span> finding and preparing data, not analyzing it.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-primary-100 rounded-full" style={{ backgroundColor: 'rgba(255, 89, 89, 0.1)' }}>
                <Folder size={32} style={{ color: '#ff5959' }} />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Hidden Data</h3>
            <p className="text-neutral-700 text-center">
              Most valuable data sits in someone's folder, but nobody knows where.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-primary-100 rounded-full" style={{ backgroundColor: 'rgba(255, 89, 89, 0.1)' }}>
                <HelpCircle size={32} style={{ color: '#ff5959' }} />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Communication Gap</h3>
            <p className="text-neutral-700 text-center">
              Technical and business teams struggle to communicate data needs effectively.
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-neutral-800 p-8 rounded-lg text-white text-center" style={{ backgroundColor: 'rgba(10, 15, 13, 0.95)' }}>
          <p className="text-xl leading-relaxed">
            In the average enterprise, <span className="font-bold text-primary-400" style={{ color: '#ff7a7a' }}>73%</span> of data goes unused for analytics. 
            This represents millions in missed opportunities and wasted resources.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;