
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className={`text-center px-4 transition-all duration-1000 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <h1 className="text-7xl font-bold text-galaxy-accent cosmic-glow mb-6">404</h1>
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Lost in Space</h2>
          <p className="text-lg text-gray-300 max-w-md mx-auto">
            The cosmic coordinates you're looking for don't exist in this galaxy.
          </p>
        </div>
        <Button asChild className="bg-galaxy-accent hover:bg-galaxy-accent/80 text-white">
          <Link to="/" className="flex items-center gap-2">
            <Home size={18} />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
