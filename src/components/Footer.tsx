import React from 'react';
import { Database } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-neutral-900 text-white" style={{ backgroundColor: '#0a0f0d' }}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Database size={24} className="text-primary-500 mr-2" style={{ color: '#ff5959' }} />
            <span className="text-xl font-bold">DataMate</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-6 md:mb-0">
            <a href="#problem" className="text-neutral-400 hover:text-white transition-colors">Problem</a>
            <a href="#solution" className="text-neutral-400 hover:text-white transition-colors">Solution</a>
            <a href="#features" className="text-neutral-400 hover:text-white transition-colors">Features</a>
            <a href="#demo" className="text-neutral-400 hover:text-white transition-colors">Demo</a>
            <a href="#roadmap" className="text-neutral-400 hover:text-white transition-colors">Roadmap</a>
            <a href="#contact" className="text-neutral-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DataMate, Inc. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-neutral-400 italic">
            *DataMate - Let data find you*
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;