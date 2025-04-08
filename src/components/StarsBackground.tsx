
import { useEffect, useRef } from 'react';

const StarsBackground = () => {
  const starsContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!starsContainerRef.current) return;
    
    const createStars = () => {
      const container = starsContainerRef.current;
      if (!container) return;
      
      // Clear existing stars
      container.innerHTML = '';
      
      // Create stars
      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;
      const starCount = Math.floor((containerWidth * containerHeight) / 10000); // Adjust density as needed
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random position
        const left = Math.random() * containerWidth;
        const top = Math.random() * containerHeight;
        
        // Random size (mostly small)
        const size = Math.random() < 0.9 ? Math.random() * 2 : 2 + Math.random() * 2;
        
        // Random movement animation
        const moveDuration = 20 + Math.random() * 40;
        const moveDelay = Math.random() * 10;
        const moveDirection = Math.random() > 0.5 ? 'move-left' : 'move-right';
        
        // Random twinkle animation delay
        const twinkleDelay = Math.random() * 4;
        const twinkleDuration = 2 + Math.random() * 4;
        
        // Apply styles
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${left}px`;
        star.style.top = `${top}px`;
        star.style.animationDelay = `${twinkleDelay}s, ${moveDelay}s`;
        star.style.animationDuration = `${twinkleDuration}s, ${moveDuration}s`;
        
        if (Math.random() < 0.4) {
          star.classList.add('animate-twinkle');
        }
        
        star.classList.add(moveDirection);
        
        container.appendChild(star);
      }
    };
    
    createStars();
    
    // Recreate stars on resize
    window.addEventListener('resize', createStars);
    
    return () => {
      window.removeEventListener('resize', createStars);
    };
  }, []);
  
  return <div ref={starsContainerRef} className="stars-container" />;
};

export default StarsBackground;
