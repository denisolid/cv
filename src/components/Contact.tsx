import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:text-center mb-16 animate-fade-in">
          <h2 className="section-heading mb-4">Get in Touch</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            Looking for new opportunities! Let's connect and discuss how I can contribute to your team.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="grid grid-cols-1 gap-6">
            {[
              { icon: Mail, text: 'denissolid@gmail.com', href: 'mailto:denissolid@gmail.com' },
              { icon: Github, text: 'github.com/denisolid', href: 'https://github.com/denisolid' },
              { icon: Linkedin, text: 'linkedin.com/in/denis-solid', href: 'https://linkedin.com/in/denis-solid' }
            ].map(({ icon: Icon, text, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center space-x-3 px-6 py-4 bg-gray-800/30 backdrop-blur-sm rounded-xl hover:bg-gray-800/50 transition-all card-hover"
              >
                <Icon className="h-6 w-6 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-white transition-colors">{text}</span>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block p-4 rounded-xl bg-blue-500/10 backdrop-blur-sm">
              <p className="text-blue-400 font-medium">Available for full-time positions and freelance projects</p>
              <p className="mt-2 text-gray-300">Open to Remote Work</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;