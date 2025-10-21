import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Face Recognition Attendance System',
      description: 'Automated attendance marking system using facial recognition technology with real-time detection and high accuracy.',
      tech: ['Python', 'OpenCV', 'Face Recognition', 'Flask'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Chatbot using NLP',
      description: 'Intelligent conversational AI chatbot trained on FAQs using natural language processing and deep learning techniques.',
      tech: ['Python', 'NLP', 'TensorFlow', 'NLTK'],
      github: '#',
      demo: '#',
    },
    {
      title: 'AI-Powered Disease Prediction',
      description: 'Machine learning model that predicts possible diseases based on symptoms with high accuracy using ensemble methods.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Image Classifier using CNN',
      description: 'Convolutional Neural Network for classifying various objects and foods with transfer learning for improved accuracy.',
      tech: ['Python', 'TensorFlow', 'Keras', 'CNN'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Stock Price Predictor',
      description: 'LSTM-based model for predicting future stock prices using historical data and technical indicators.',
      tech: ['Python', 'LSTM', 'PyTorch', 'Data Analysis'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing innovative AI solutions and machine learning applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 gradient-card border-border hover:border-primary/50 transition-smooth hover:glow-primary group animate-fade-in flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-primary/10 border border-primary/30 rounded text-xs font-medium text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-primary/30 hover:bg-primary/10"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-primary hover:bg-primary/90"
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
