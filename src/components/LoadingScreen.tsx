import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animate progress bar
    tl.to('.progress-fill', {
      width: '100%',
      duration: 2.5,
      ease: 'power2.out',
      onUpdate: function() {
        const progressValue = Math.round(this.progress() * 100);
        setProgress(progressValue);
      }
    })
    .to('.loading-text', {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: 'power2.in'
    }, '-=0.5')
    .to('.progress-container', {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      ease: 'power2.in'
    }, '-=0.3')
    .to('.preloader', {
      opacity: 0,
      scale: 1.1,
      duration: 0.8,
      ease: 'power2.inOut',
      onComplete: () => {
        onComplete();
      }
    }, '-=0.2');

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div className="preloader fixed inset-0 z-50 flex items-center justify-center bg-background">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/20 blur-xl float" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-secondary/20 blur-xl float-delayed" />
      <div className="absolute top-1/3 right-1/3 w-20 h-20 rounded-full bg-accent/20 blur-xl float" />
      
      {/* Main Content */}
      <div className="relative z-10 text-center">
        <div className="loading-text mb-12">
          <h1 className="text-responsive-4xl font-bold hero-text mb-4">
            FUSION INTERNATIONAL TRADING AND TECHNICAL SERVICES LLC
          </h1>
          <p className="text-responsive-lg text-muted-foreground">
            Loading Experience...
          </p>
        </div>
        
        {/* Progress Bar */}
        <div className="progress-container w-80 max-w-sm mx-auto">
          <div className="relative h-1 bg-muted rounded-full overflow-hidden">
            <div className="progress-fill absolute top-0 left-0 h-full bg-gradient-primary rounded-full w-0 glow-primary" />
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-muted-foreground">Progress</span>
            <span className="text-sm font-mono text-primary">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;