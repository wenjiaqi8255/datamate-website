import React, { useEffect, useRef, useState } from 'react';
import { Bot, MessageCircle } from 'lucide-react';

const Solution: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animationStep, setAnimationStep] = useState(0);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          startAnimation();
        }
      },
      { threshold: 0.3 }
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

  const startAnimation = () => {
    let step = 0;
    const interval = setInterval(() => {
      if (step < 3) {
        step += 1;
        setAnimationStep(step);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setAnimationStep(0);
          startAnimation();
        }, 3000);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  };

  return (
    <section 
      id="solution" 
      className="py-20"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 max-w-5xl opacity-0 transition-opacity duration-1000"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          The Solution is <span style={{ color: '#3cbbb1' }}>Simpler</span>
        </h2>
        
        <p className="text-xl text-center text-neutral-700 mb-16 max-w-2xl mx-auto">
          Two AI Agents automatically talk to each other to find exactly what you need.
        </p>
        
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-16">
          {/* User Agent */}
          <div className="relative w-full max-w-xs">
            <div className="bg-neutral-100 p-6 rounded-lg shadow-md" style={{ backgroundColor: '#e8eceb' }}>
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary-100 rounded-full mr-3" style={{ backgroundColor: 'rgba(255, 89, 89, 0.1)' }}>
                  <Bot size={24} style={{ color: '#ff5959' }} />
                </div>
                <h3 className="text-lg font-semibold">User Agent</h3>
              </div>
              
              <div className="bg-white p-3 rounded-md shadow-sm mb-3" style={{ opacity: animationStep >= 1 ? 1 : 0.3, transition: 'opacity 0.5s ease' }}>
                <p className="text-neutral-800">
                  "I need e-commerce user behavior data"
                </p>
              </div>
              
              {animationStep >= 3 && (
                <div className="bg-white p-3 rounded-md shadow-sm mt-3">
                  <p className="text-neutral-800">
                    "Great, I'll download it now."
                  </p>
                </div>
              )}
            </div>
            
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-1/2 -right-16 w-16 h-0.5 bg-secondary-300" style={{ backgroundColor: '#5fd9cf' }}></div>
            <div className="hidden md:block absolute top-1/2 -right-16 w-3 h-3 rounded-full bg-secondary-500" style={{ backgroundColor: '#3cbbb1' }}></div>
          </div>
          
          {/* Data Agent */}
          <div className="relative w-full max-w-xs">
            <div className="bg-neutral-100 p-6 rounded-lg shadow-md" style={{ backgroundColor: '#e8eceb' }}>
              <div className="flex items-center mb-4">
                <div className="p-2 bg-secondary-100 rounded-full mr-3" style={{ backgroundColor: 'rgba(60, 187, 177, 0.1)' }}>
                  <Bot size={24} style={{ color: '#3cbbb1' }} />
                </div>
                <h3 className="text-lg font-semibold">Data Agent</h3>
              </div>
              
              {animationStep >= 2 && (
                <div className="bg-white p-3 rounded-md shadow-sm mb-3">
                  <p className="text-neutral-800">
                    "Found it. Here's user purchase path data, quality score 85%"
                  </p>
                </div>
              )}
            </div>
            
            {/* Connecting lines for mobile */}
            <div className="md:hidden mx-auto my-4 h-16 w-0.5 bg-secondary-300" style={{ backgroundColor: '#5fd9cf' }}></div>
            <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-3 h-3 rounded-full bg-secondary-500" style={{ backgroundColor: '#3cbbb1' }}></div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-xl font-medium mb-6" style={{ color: '#0a0f0d' }}>
            That simple.
          </p>
          
          <div className="inline-flex items-center justify-center px-8 py-3 bg-secondary-500 text-white rounded-lg font-medium transition-all hover:bg-secondary-600 hover:shadow-lg cursor-pointer transform hover:-translate-y-1" style={{ backgroundColor: '#3cbbb1' }}>
            <MessageCircle size={20} className="mr-2" />
            <span><a href="#demo">See how it works</a></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;