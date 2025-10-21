import { Brain, Code, Database, Lightbulb } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Neural Networks', 'Deep Learning'],
    },
    {
      icon: Code,
      title: 'Programming & Tools',
      skills: ['Python', 'NumPy', 'Pandas', 'Flask', 'Streamlit', 'Git'],
    },
    {
      icon: Database,
      title: 'Data & Databases',
      skills: ['Data Preprocessing', 'Model Training', 'SQL', 'Data Analysis', 'Feature Engineering'],
    },
    {
      icon: Lightbulb,
      title: 'Soft Skills',
      skills: ['Problem-solving', 'Teamwork', 'Research Mindset', 'Adaptability', 'Critical Thinking'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent systems and solving complex problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 gradient-card border-border hover:border-primary/50 transition-smooth hover:glow-primary group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-secondary rounded-full text-sm font-medium hover:bg-primary/20 transition-smooth cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
