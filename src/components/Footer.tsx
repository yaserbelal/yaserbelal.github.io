
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-black/30 backdrop-blur-md border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">&copy; {currentYear} Yasser Belal. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="mailto:yasserbelal2005@gmail.com" 
              className="text-gray-400 hover:text-galaxy-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://github.com/YasserBelal" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-galaxy-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/yasser-belal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-galaxy-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
