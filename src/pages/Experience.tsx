
import { useEffect, useState } from 'react';
import { CalendarDays, User, Briefcase } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
}

const Experience = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  const experiences: ExperienceItem[] = [
    {
      title: "Human Resources Team Member",
      company: "GDG On-Campus Zagazig",
      period: "03/2025 - present",
      location: "On-Campus Zagazig",
      responsibilities: [
        "Worked as a Human Resources Team Member supporting recruitment and organizational tasks.",
        "Assisted in coordinating interviews, managing candidate communications, and maintaining HR records.",
      ],
    },
    {
      title: "Human Resources Team Member",
      company: "ICPC Zagazig Community",
      period: "01/2025 - present",
      location: "ICPC Zagazig Community",
      responsibilities: [
        "Worked as a Human Resources Team Member supporting recruitment and organizational tasks.",
        "Assisted in coordinating interviews, managing candidate communications, and maintaining HR records.",
        "Collaborated with team members to organize training sessions and onboarding activities for new interns.",
        "Monitored and evaluated mentors' performance and created Google Forms to assess the effectiveness of training sessions.",
        "Utilized Google Sheets to manage and analyze evaluation data, contributing to continuous improvement efforts within the ICPC community.",
      ],
    },
    {
      title: "Member",
      company: "GDG On-Campus Zagazig",
      period: "11/2024 - present",
      location: "On-Campus Zagazig",
      responsibilities: [
        "Started a journey into backend development, learning the basics of PHP, Laravel, and MySQL.",
        "Participated in team-based activities, enhancing my skills in teamwork, collaboration, and communication.",
      ],
    },
    {
      title: "Member",
      company: "ICPC Zagazig Community",
      period: "10/2024 - present",
      location: "ICPC Zagazig Community",
      responsibilities: [
        "Started a journey into cybersecurity, learning the basics of network security, ethical hacking, penetration testing, and security protocols.",
        "Took in team activities, improving teamwork, collaboration, and communication skills.",
      ],
    },
    {
      title: "Trainee",
      company: "ICPC Zagazig Community",
      period: "10/2024 - 11/2024",
      location: "ICPC Zagazig Community",
      responsibilities: [
        "A community focused on training students on problem-solving",
        "Solved programming problems on different topics",
        "Participated in training sessions to enhance problem-solving and competitive programming skills.",
        "Collaborated with peers and mentors to solve algorithmic challenges in preparation for ICPC competitions.",
      ],
    },
  ];
  
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className={`mb-12 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="section-heading">Experience</h1>
          <p className="text-gray-300 max-w-3xl">
            My professional journey and roles that have shaped my career path and skills development.
          </p>
        </div>
        
        <div className="relative ml-4">
          {/* Timeline Line */}
          <div className="absolute top-0 left-4 bottom-0 w-0.5 bg-galaxy-accent/30" />
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative pl-12 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-galaxy-dark border-2 border-galaxy-accent flex items-center justify-center z-10">
                  <Briefcase size={16} className="text-galaxy-accent" />
                </div>
                
                {/* Content */}
                <div className="galaxy-card p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h2 className="text-xl font-bold text-white">{exp.title}</h2>
                      <div className="flex items-center text-galaxy-accent mt-1">
                        <User size={16} className="mr-1" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0 text-gray-400">
                      <CalendarDays size={16} className="mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 text-gray-300">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-galaxy-accent">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
