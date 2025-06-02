import React, { useState, useRef, useEffect } from 'react';
import { Code, Play, ExternalLink } from 'lucide-react';

const Demo: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<'video' | 'code'>('video');
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
      id="demo" 
      className="py-20 bg-neutral-50"
      style={{ backgroundColor: '#f8fafa' }}
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 max-w-5xl opacity-0 transition-opacity duration-1000"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          See DataMate in <span style={{ color: '#ff5959' }}>Action</span>
        </h2>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              className={`flex-1 py-4 px-6 text-center font-medium ${
                activeTab === 'video'
                  ? 'border-b-2 border-primary-500 text-primary-500'
                  : 'text-neutral-500 hover:text-neutral-700'
              }`}
              style={{ 
                borderColor: activeTab === 'video' ? '#ff5959' : '',
                color: activeTab === 'video' ? '#ff5959' : ''
              }}
              onClick={() => setActiveTab('video')}
            >
              <div className="flex items-center justify-center">
                <Play size={18} className="mr-2" />
                <span>Watch Demo</span>
              </div>
            </button>
            
            <button
              className={`flex-1 py-4 px-6 text-center font-medium ${
                activeTab === 'code'
                  ? 'border-b-2 border-primary-500 text-primary-500'
                  : 'text-neutral-500 hover:text-neutral-700'
              }`}
              style={{ 
                borderColor: activeTab === 'code' ? '#ff5959' : '',
                color: activeTab === 'code' ? '#ff5959' : '' 
              }}
              onClick={() => setActiveTab('code')}
            >
              <div className="flex items-center justify-center">
                <Code size={18} className="mr-2" />
                <span>Quick Install</span>
              </div>
            </button>
          </div>
          
          {/* Video Content */}
          {activeTab === 'video' && (
            <div className="p-8">
              <div className="relative aspect-video bg-black rounded-md overflow-hidden">
                {!isVideoPlaying ? (
                  <div 
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={() => setIsVideoPlaying(true)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20"></div>
                    {/* <img 
                      src="https://images.pexels.com/photos/7654519/pexels-photo-7654519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="DataMate Demo Preview" 
                      className="absolute inset-0 w-full h-full object-cover opacity-70"
                    /> */}
                    <iframe width="560" height="315" src="" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center z-10 shadow-xl transition-transform transform hover:scale-110">
                      <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center ml-1" style={{ backgroundColor: '#ff5959' }}>
                        <Play size={30} className="text-white ml-1" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-neutral-800 text-white">
                    <p className="text-lg">Video would play here in production</p>
                    {/* In a real implementation, this would be an iframe with the actual video */}
                  </div>
                )}
              </div>
              
              <div className="mt-6 flex justify-center">
                <a 
                  href="https://youtube.com/demo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-primary-500 hover:text-primary-600 font-medium"
                  style={{ color: '#ff5959' }}
                >
                  <span>Watch full 2-minute demo</span>
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          )}
          
          {/* Code Content */}
          {activeTab === 'code' && (
            <div className="p-8">
              <div className="bg-neutral-900 rounded-md overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-neutral-800">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-neutral-400 text-sm">Terminal</span>
                </div>
                
                <div className="p-4 text-green-400 font-mono text-sm overflow-x-auto">
                  <p><span className="text-blue-400">$</span> git clone https://github.com/datamate/</p>
                  <p><span className="text-blue-400">$</span> cd datamate && python setup.py</p>
                  <p className="text-neutral-400"># 3-minute local deployment</p>
                  <p className="mt-2 text-white">
                    <span className="text-blue-400">➜</span> Installation complete! DataMate is running at <span style={{ color: '#ff5959' }}>http://localhost:8000</span>
                  </p>
                </div>
              </div>
              
              {/* <div className="mt-6">
                <h3 className="font-semibold mb-4">System Requirements</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start">
                    <span className="inline-block w-24 font-medium">Python:</span>
                    <span>3.9 or higher</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-24 font-medium">OS:</span>
                    <span>macOS, Linux, or Windows 10+</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-24 font-medium">Storage:</span>
                    <span>2GB minimum</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-24 font-medium">Memory:</span>
                    <span>8GB minimum (16GB recommended)</span>
                  </li>
                </ul>
              </div> */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Demo;