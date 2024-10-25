import React from 'react';
import { Code2, Database, Layout, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout className="h-6 w-6" />,
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      title: 'Backend Development',
      icon: <Server className="h-6 w-6" />,
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Python']
    },
    {
      title: 'Database',
      icon: <Database className="h-6 w-6" />,
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
    },
    {
      title: 'Tools & Others',
      icon: <Code2 className="h-6 w-6" />,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Agile']
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16 animate-fade-in">
          <h2 className="section-heading mb-4">Skills & Technologies</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            My technical toolkit and areas of expertise
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 card-hover animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white mx-auto shadow-glow">
                {category.icon}
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-center mb-4 text-blue-400">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center justify-center bg-blue-500/10 rounded-lg py-2 px-4 text-sm font-medium text-gray-300 hover:bg-blue-500/20 transition-colors"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;