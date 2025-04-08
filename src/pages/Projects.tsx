
import { useEffect, useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectType {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
}

const Projects = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  const projects: ProjectType[] = [
    {
      title: "Quran-Playlist-Manager",
      description: "A comprehensive console-based application for managing playlists. This project was developed as part of the 2024 Data Structures course at Zagazig University. It leverages a custom-built Double linked list data structure, showcasing a range of object-oriented programming (OOP) principles. This project provided hands-on experience with data structure design, algorithm efficiency, and OOP concepts, allowing for both learning and practical application of these key software engineering skills.",
      tags: ["C++", "Data Structures", "OOP", "Console Application"],
      github: "https://github.com/username/quran-playlist-manager",
    },
    {
      title: "Contact Book",
      description: "A comprehensive console-based application for managing contact information. This project was developed as part of the 2024 Data Structures course at Zagazig University. It leverages a custom-built array data structure, showcasing a range of object-oriented programming (OOP) principles. This project provided hands-on experience with data structure design, algorithm efficiency, and OOP concepts, allowing for both learning and practical application of these key software engineering skills.",
      tags: ["C++", "Data Structures", "OOP", "Console Application"],
      github: "https://github.com/username/contact-book",
    }
  ];
  
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className={`mb-12 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="section-heading">Projects</h1>
          <p className="text-gray-300 max-w-3xl">
            Showcasing my technical projects and applications that demonstrate my skills and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <Card className="overflow-hidden h-full bg-black/20 backdrop-blur-sm border border-white/10 hover:border-galaxy-accent/40 transition-all duration-300">
                {project.image && (
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                )}
                
                <CardHeader>
                  <h2 className="text-xl font-bold text-white">{project.title}</h2>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-300">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="bg-galaxy-purple/20 text-galaxy-star border-galaxy-accent/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex gap-4">
                  {project.github && (
                    <Button variant="outline" size="sm" className="gap-2 border-galaxy-accent/40 text-white hover:bg-galaxy-accent/10" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        GitHub
                      </a>
                    </Button>
                  )}
                  
                  {project.demo && (
                    <Button variant="outline" size="sm" className="gap-2 border-galaxy-accent/40 text-white hover:bg-galaxy-accent/10" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
