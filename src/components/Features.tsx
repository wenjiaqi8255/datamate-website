import React, { useEffect, useRef } from 'react';
import { MessageSquare, Search, BarChart2, Download, Check } from 'lucide-react';

const Features: React.FC = () => {
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
      id="features" 
      className="py-20 bg-gradient-to-b from-neutral-50 to-white"
      style={{ backgroundColor: '#f8fafa' }}
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 max-w-5xl opacity-0 transition-opacity duration-1000"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          What Works <span style={{ color: '#3cbbb1' }}>Today</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-start mb-4">
              <div className="p-2 mr-4 bg-primary-100 rounded-full" style={{ backgroundColor: 'rgba(255, 89, 89, 0.1)' }}>
                <MessageSquare size={24} style={{ color: '#ff5959' }} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Natural Language Requests</h3>
                <p className="text-neutral-700">
                  Describe data needs in plain English without technical jargon or complex query language.
                </p>
              </div>
            </div>
            
            <div className="mt-6 bg-neutral-50 p-4 rounded border-l-4 border-primary-500" style={{ borderColor: '#ff5959' }}>
              <p className="text-sm italic">
                "I need customer churn data from Q2 with demographic breakdowns"
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-start mb-4">
              <div className="p-2 mr-4 bg-secondary-100 rounded-full" style={{ backgroundColor: 'rgba(60, 187, 177, 0.1)' }}>
                <Search size={24} style={{ color: '#3cbbb1' }} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Automated Data Scanning</h3>
                <p className="text-neutral-700">
                  AI automatically scans local files and databases to find relevant data assets.
                </p>
              </div>
            </div>
            
            <div className="mt-6 bg-neutral-50 p-4 rounded">
              <div className="flex items-center text-sm text-neutral-600">
                <div className="w-4 h-4 rounded-full bg-secondary-500 animate-pulse mr-2" style={{ backgroundColor: '#3cbbb1' }}></div>
                <span>Scanning 3,421 data sources...</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-start mb-4">
              <div className="p-2 mr-4 bg-primary-100 rounded-full" style={{ backgroundColor: 'rgba(255, 89, 89, 0.1)' }}>
                <BarChart2 size={24} style={{ color: '#ff5959' }} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Smart Matching</h3>
                <p className="text-neutral-700">
                  Contextual understanding of data needs with quality scoring for better results.
                </p>
              </div>
            </div>
            
            <div className="mt-6 bg-neutral-50 p-4 rounded">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Relevance Score</span>
                  <span className="text-sm">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: '85%', backgroundColor: '#ff5959' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-start mb-4">
              <div className="p-2 mr-4 bg-secondary-100 rounded-full" style={{ backgroundColor: 'rgba(60, 187, 177, 0.1)' }}>
                <Download size={24} style={{ color: '#3cbbb1' }} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Preview and Download</h3>
                <p className="text-neutral-700">
                  View data previews and download results in your preferred format.
                </p>
              </div>
            </div>
            
            <div className="mt-6 bg-neutral-50 p-4 rounded flex items-center justify-between">
              <span className="text-sm">customer_churn_q2.csv (2.3MB)</span>
              <button className="px-3 py-1 text-sm bg-secondary-500 text-white rounded hover:bg-secondary-600" style={{ backgroundColor: '#3cbbb1' }}>
                Download
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-neutral-800 p-8 rounded-lg text-white text-center" style={{ backgroundColor: 'rgba(10, 15, 13, 0.95)' }}>
          <h3 className="text-xl font-semibold mb-4">Built on Google ADK + A2A Protocol</h3>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
            <div className="flex items-center">
              <Check size={20} className="mr-2 text-secondary-400" style={{ color: '#5fd9cf' }} />
              <span>Secure & compliant</span>
            </div>
            <div className="flex items-center">
              <Check size={20} className="mr-2 text-secondary-400" style={{ color: '#5fd9cf' }} />
              <span>Enterprise-ready</span>
            </div>
            <div className="flex items-center">
              <Check size={20} className="mr-2 text-secondary-400" style={{ color: '#5fd9cf' }} />
              <span>Scales to petabytes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;