import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Crypto Tracker',
      description: 'A cryptocurrency price tracking application built with React and CoinGecko API',
      image: 'https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&q=80&w=800',
      technologies: ['React', 'TypeScript', 'CoinGecko API', 'Chart.js'],
      githubUrl: 'https://github.com/denisolid/crypto-tracker',
      liveUrl: 'https://denisolid.github.io/crypto-tracker/'
    },
    {
      title: 'Expense Tracker',
      description: 'Personal finance management app to track income and expenses',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
      technologies: ['React', 'Context API', 'LocalStorage'],
      githubUrl: 'https://github.com/denisolid/expense-tracker',
      liveUrl: 'https://denisolid.github.io/expense-tracker/'
    },
    {
      title: 'Weather App',
      description: 'Real-time weather application using OpenWeatherMap API',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800',
      technologies: ['React', 'OpenWeatherMap API', 'Geolocation'],
      githubUrl: 'https://github.com/denisolid/weather-app',
      liveUrl: 'https://denisolid.github.io/weather-app/'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-800/50 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16 animate-fade-in">
          <h2 className="section-heading mb-4">Featured Projects</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            A selection of my recent work and personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden card-hover animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;