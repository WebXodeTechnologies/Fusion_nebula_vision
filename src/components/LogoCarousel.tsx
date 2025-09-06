import { useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { cn } from '@/lib/utils';

// Import the image from the user's upload
import brandsCollage from '@/assets/brands-collage.png';

// Import the logo extractor CSS
import './LogoExtractor.css';

// Define the logos array with individual logo information
const logos = [
  { id: 1, name: 'Schneider Electric' },
  { id: 2, name: 'Siemens' },
  { id: 3, name: 'Mobil' },
  { id: 4, name: 'ADNOC' },
  { id: 5, name: 'Gulf' },
  { id: 6, name: 'Starbright' },
  { id: 7, name: 'Makita' },
  { id: 8, name: 'ESAB' },
  { id: 9, name: 'Karcher' },
  { id: 10, name: 'Shurhold' },
  { id: 11, name: 'CRC' },
  { id: 12, name: 'Victor' },
  { id: 13, name: 'Cosmoplast' },
  { id: 14, name: 'Fluke' },
  { id: 15, name: 'Hilti' },
  { id: 16, name: 'Stanley' },
  { id: 17, name: 'Hempel' },
  { id: 18, name: 'National Paints' },
  { id: 19, name: 'DeWalt' },
  { id: 20, name: 'Honeywell' },
  { id: 21, name: 'Gazelle' },
  { id: 22, name: 'Black & Decker' },
  { id: 23, name: 'Bosch' },
  { id: 24, name: 'Craftsman' },
  { id: 25, name: 'Mitutoyo' },
  { id: 26, name: 'Band-It' },
  { id: 27, name: 'Uken' },
  { id: 28, name: 'ABB' },
  { id: 29, name: 'Enerpac' },
  { id: 30, name: 'MSA' },
  { id: 31, name: 'Deltaplus' },
  { id: 32, name: 'Econ' },
  { id: 33, name: 'WD-40' },
  { id: 34, name: 'Danfoss' },
  { id: 35, name: 'Irwin' },
  { id: 36, name: 'Duracell' },
  { id: 37, name: 'Gojo' },
  { id: 38, name: 'Deckmate' },
  { id: 39, name: 'Metabo' },
];

interface LogoCarouselProps {
  className?: string;
}

const LogoCarousel = ({ className }: LogoCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    align: 'start',
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
  });

  const autoplayRef = useRef<NodeJS.Timeout>();
  const activeLogoRef = useRef<number>(0);

  // Set up autoplay
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = () => {
      if (!emblaApi || !emblaApi.canScrollNext()) return;
      emblaApi.scrollNext();
    };

    // Start autoplay
    const startAutoplay = () => {
      stopAutoplay();
      autoplayRef.current = setInterval(autoplay, 3000); // Scroll every 3 seconds
    };

    // Stop autoplay
    const stopAutoplay = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };

    // Track the active slide
    const onSelect = () => {
      activeLogoRef.current = emblaApi.selectedScrollSnap();
    };

    // Event listeners
    emblaApi.on('select', onSelect);
    emblaApi.on('pointerDown', stopAutoplay);
    emblaApi.on('pointerUp', startAutoplay);

    // Initialize
    startAutoplay();
    onSelect();

    return () => {
      stopAutoplay();
      emblaApi.off('select', onSelect);
      emblaApi.off('pointerDown', stopAutoplay);
      emblaApi.off('pointerUp', startAutoplay);
    };
  }, [emblaApi]);

  return (
    <div className={cn('relative w-full overflow-hidden', className)}>
      {/* Futuristic background with particle effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-accent/5 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* Particle effects */}
          <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-primary animate-pulse-slow"></div>
          <div className="absolute top-3/4 left-1/3 w-2 h-2 rounded-full bg-secondary animate-pulse-medium"></div>
          <div className="absolute top-1/2 left-2/3 w-1 h-1 rounded-full bg-accent animate-pulse-fast"></div>
          <div className="absolute top-1/3 left-3/4 w-2 h-2 rounded-full bg-primary animate-pulse-slow"></div>
          <div className="absolute top-2/3 left-1/5 w-1 h-1 rounded-full bg-secondary animate-pulse-medium"></div>
          <div className="absolute top-1/5 left-1/2 w-1 h-1 rounded-full bg-accent animate-pulse-fast"></div>
          {/* Add more particles as needed */}
        </div>
      </div>

      {/* Section heading with gradient text */}
      <div className="text-center mb-10 relative z-10">
        <h2 className="text-responsive-3xl font-bold mb-2 hero-text">Partner Brands</h2>
        <p className="text-muted-foreground text-responsive-lg max-w-2xl mx-auto">
          Trusted by Global Leaders in Innovation & Reliability
        </p>
      </div>

      {/* Logo carousel */}
      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="flex py-4">
          {/* We'll use the image from the user's upload but style each logo individually */}
          {logos.map((logo) => (
            <div 
              key={logo.id}
              className="relative flex-none mx-4 transition-all duration-300"
              style={{ width: '180px', height: '120px' }}
            >
              {/* Glassmorphism card with hover effects */}
              <div 
                className="group relative w-full h-full glass rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:glow-primary"
              >
                {/* Logo container */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  {/* Display the logo using clip-path from the collage */}
                  <div 
                    className={`logo-container ${`logo-${logo.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}`} 
                    title={logo.name}
                    aria-label={logo.name}
                  />
                </div>
                
                {/* Neon gradient border animation for active logo */}
                <div 
                  className={cn(
                    "absolute inset-0 rounded-xl border-2 transition-opacity duration-300",
                    "opacity-0 group-hover:opacity-100",
                    "animate-border-glow"
                  )}
                  style={{
                    borderImage: 'linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)), hsl(var(--primary))) 1',
                    borderImageSlice: '1',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;