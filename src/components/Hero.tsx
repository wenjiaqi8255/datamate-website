import React, { useEffect, useRef } from 'react';
import { Search, BarChart } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (title) {
      title.style.opacity = '0';
      title.style.transform = 'translateY(20px)';
      setTimeout(() => {
        title.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
      }, 100);
    }

    if (subtitle) {
      subtitle.style.opacity = '0';
      subtitle.style.transform = 'translateY(20px)';
      setTimeout(() => {
        subtitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
      }, 300);
    }

    if (cta) {
      cta.style.opacity = '0';
      cta.style.transform = 'translateY(20px)';
      setTimeout(() => {
        cta.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        cta.style.opacity = '1';
        cta.style.transform = 'translateY(0)';
      }, 500);
    }
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #0a0f0d 0%, #1a2a28 100%)`,
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-primary-500 opacity-10 animate-float-slow"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary-500 opacity-10 animate-float-medium"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-primary-500 opacity-5 animate-float-fast"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
        {/* Icon Animation */}
        <div className="flex justify-center mb-8">
          <div className="relative ">
            <img 
              src="/datamate-logo-big-white.svg"
              alt="DataMate Logo"
              className="w-120 h-16 animate-pulse"
              style={{ color: '#ff5959' }}
            />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary-500 rounded-full animate-ping" style={{ backgroundColor: '#3cbbb1' }}></div>
          </div>
        </div>

        {/* Title and subtitle with animation */}
        <h1 
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
          style={{ opacity: 0 }}
        >
          <span className="text-primary-500" style={{ color: '#ff5959' }}>DataMate</span> - Reimagining Enterprise Data Discovery
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed"
          style={{ opacity: 0 }}
        >
          We're using AI Agents to solve the enterprise data silo problem. 
          <span className="block mt-2">Imagine finding any data in your company using natural language.</span>
        </p>
        
        {/* CTA buttons */}
        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
          style={{ opacity: 0 }}
        >
          <a 
            href="#demo" 
            className="px-8 py-3 bg-primary-500 text-white rounded-lg font-medium transition-all hover:bg-primary-600 hover:shadow-lg transform hover:-translate-y-1"
            style={{ backgroundColor: '#ff5959' }}
          >
            Watch Demo
          </a>
          <a 
            href="https://getwaitlist.com/waitlist/28995" 
            className="px-8 py-3 bg-transparent border-2 border-gray-300 text-white rounded-lg font-medium transition-all hover:border-primary-500 hover:text-primary-500 transform hover:-translate-y-1"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="animate-bounce p-2">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-gray-400"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;