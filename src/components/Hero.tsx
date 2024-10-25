import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="text-center animate-fade-in">
          <div className="inline-block p-2 px-4 mb-8 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium">
            Available for Full Stack Developer Positions
          </div>
          
          <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl mb-6">
            <span className="block mb-2">Hi, I'm Denis</span>
            <span className="block bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent animate-gradient">
              Full Stack Developer
            </span>
          </h1>
          
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Crafting efficient and scalable web applications with modern technologies.
            Turning complex problems into elegant solutions.
          </p>
          
          <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 transform transition-all hover:scale-105 hover:shadow-glow"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="mt-3 sm:mt-0 w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border-2 border-blue-500/20 text-base font-medium rounded-lg text-blue-400 hover:bg-blue-500/10 transition-all hover:border-blue-500/30"
            >
              View Projects
            </a>
          </div>
          
          <div className="mt-12 flex justify-center space-x-6">
            {[
              { href: 'https://github.com/denisolid', icon: Github },
              { href: 'https://linkedin.com/in/denis-solid', icon: Linkedin },
              { href: 'mailto:denissolid@gmail.com', icon: Mail }
            ].map(({ href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transform transition-all hover:scale-110"
              >
                <Icon size={24} className="hover:stroke-blue-400" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;