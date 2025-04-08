
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Mail, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProfileImage from '../components/ProfileImage';

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className={`order-2 md:order-1 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              <span className="block">Hi, I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-galaxy-accent to-galaxy-glow cosmic-glow">
                Yasser Belal
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium text-white/80 mb-6">
              Computer Science Student
            </h2>
            
            <p className="text-gray-300 mb-8 text-lg max-w-xl">
              A passionate and creative programmer with expertise in web development, cybersecurity, 
              and object-oriented programming. Currently studying at the Faculty of Computers and Informatics, 
              Zagazig University.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-galaxy-accent hover:bg-galaxy-accent/80 text-white">
                <Link to="/about" className="flex items-center gap-2">
                  <User size={18} />
                  About Me
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="border-galaxy-accent/50 text-white hover:bg-galaxy-accent/10">
                <Link to="/experience" className="flex items-center gap-2">
                  <Briefcase size={18} />
                  Experience
                </Link>
              </Button>
              
              <Button asChild variant="ghost" className="text-white hover:bg-white/5 hover:text-galaxy-accent">
                <Link to="/contact" className="flex items-center gap-2">
                  <Mail size={18} />
                  Contact
                </Link>
              </Button>
            </div>
          </div>
          
          <div className={`order-1 md:order-2 flex justify-center transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <ProfileImage />
          </div>
        </div>
        
        <div className={`mt-20 galaxy-card p-6 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="font-heading text-xl font-medium mb-4 text-galaxy-star">Featured Project</h3>
          <div className="mb-4">
            <h4 className="text-xl font-bold mb-2">Quran-Playlist-Manager</h4>
            <p className="text-gray-300">
              A comprehensive console-based application for managing playlists, leveraging custom-built linked list data structures and OOP principles.
            </p>
          </div>
          <Link to="/projects" className="inline-flex items-center text-galaxy-accent hover:underline">
            View All Projects <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
