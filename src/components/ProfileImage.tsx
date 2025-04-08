
import { useEffect, useState } from 'react';

const ProfileImage = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80">
      {/* Decorative orbit rings */}
      <div className={`absolute inset-0 rounded-full border border-white/10 animate-spin-slow transition-opacity duration-1000 ${loaded ? 'opacity-40' : 'opacity-0'}`} 
           style={{ width: '110%', height: '110%', top: '-5%', left: '-5%' }} />
      <div className={`absolute inset-0 rounded-full border border-galaxy-accent/20 animate-spin-slow transition-opacity duration-1000 ${loaded ? 'opacity-60' : 'opacity-0'}`} 
           style={{ width: '130%', height: '130%', top: '-15%', left: '-15%', animationDirection: 'reverse', animationDuration: '25s' }} />
           
      {/* Profile image */}
      <div className={`relative z-10 w-full h-full rounded-full overflow-hidden border-2 border-galaxy-accent/50 transition-all duration-1000 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-galaxy-accent/30 to-galaxy-blue/50 mix-blend-overlay" />
        <img 
          src="/lovable-uploads/f379cc57-e295-4397-9250-ed6471c29ed4.png" 
          alt="Yasser Belal" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Glow effect */}
      <div className={`absolute -inset-4 bg-galaxy-accent/20 rounded-full blur-xl z-0 animate-glow transition-opacity duration-1000 ${loaded ? 'opacity-70' : 'opacity-0'}`} />
    </div>
  );
};

export default ProfileImage;
