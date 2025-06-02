import React, { useEffect, useRef } from 'react';
import { Mail, Twitter, Github } from 'lucide-react';

const Contact: React.FC = () => {
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
      id="contact" 
      className="py-20 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white"
      style={{ background: 'linear-gradient(135deg, #0a0f0d 0%, #1a2a28 100%)' }}
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 max-w-5xl opacity-0 transition-opacity duration-1000"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Want to <span style={{ color: '#ff5959' }}>Learn More?</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="flex-1 bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-primary-500/20 rounded-full mr-3">
                <Mail size={24} style={{ color: '#ff5959' }} />
              </div>
              <h3 className="text-xl font-semibold">Email</h3>
            </div>
            <p className="mb-4 text-neutral-300">
              Questions, feedback, or partnership inquiries? Drop us a line.
            </p>
            <a 
              href="mailto:hello@datamate.network" 
              className="inline-block text-primary-400 hover:text-primary-300 transition-colors"
              style={{ color: '#ff7a7a' }}
            >
              wenjiaqi8255@outlook.com
            </a>
          </div>
          
          <div className="flex-1 bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-primary-500/20 rounded-full mr-3">
                <Twitter size={24} style={{ color: '#ff5959' }} />
              </div>
              <h3 className="text-xl font-semibold">Twitter</h3>
            </div>
            <p className="mb-4 text-neutral-300">
              Follow us for updates, insights, and the latest on AI and data.
            </p>
            <a 
              href="https://x.com/JiaqiWen74083" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-primary-400 hover:text-primary-300 transition-colors"
              style={{ color: '#ff7a7a' }}
            >
              @datamate_ai
            </a>
          </div>
          
          <div className="flex-1 bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-primary-500/20 rounded-full mr-3">
                <Github size={24} style={{ color: '#ff5959' }} />
              </div>
              <h3 className="text-xl font-semibold">GitHub</h3>
            </div>
            <p className="mb-4 text-neutral-300">
              Check out our code, contribute, or star our project.
            </p>
            <a 
              href="https://github.com/datamate" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-primary-400 hover:text-primary-300 transition-colors"
              style={{ color: '#ff7a7a' }}
            >
              github.com/datamate
            </a>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">We're looking for</h3>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="px-6 py-3 bg-primary-500/20 rounded-lg">
              <span className="font-medium">Early customers</span>
            </div>
            <div className="px-6 py-3 bg-primary-500/20 rounded-lg">
              <span className="font-medium">Technical partners</span>
            </div>
            <div className="px-6 py-3 bg-primary-500/20 rounded-lg">
              <span className="font-medium">Seed funding</span>
            </div>
          </div>
          
          <div>
            <a 
              href="mailto:wenjiaqi8255@outlook.com" 
              className="inline-flex items-center px-8 py-3 bg-primary-500 text-white rounded-lg font-medium transition-all hover:bg-primary-600 hover:shadow-lg"
              style={{ backgroundColor: '#ff5959' }}
            >
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;