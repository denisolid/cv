import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            About Me
          </h2>
          <div className="mt-6 text-xl text-gray-300 leading-8 space-y-4 max-w-3xl mx-auto">
            <p>
              I'm a Full Stack Developer with a strong foundation in web development
              technologies. My expertise spans across modern JavaScript frameworks,
              particularly React for front-end and Node.js for back-end development.
            </p>
            <p>
              With experience in building responsive web applications, RESTful APIs,
              and database management, I focus on creating efficient, scalable, and
              maintainable solutions. I'm particularly skilled in React, TypeScript,
              Node.js, and working with various databases.
            </p>
            <p>
              I'm currently seeking full-stack developer opportunities where I can
              contribute to meaningful projects and continue growing as a developer.
              I'm passionate about clean code, best practices, and staying updated
              with the latest technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;