import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Anchor,
  Car,
  Gear,
  Sun,
  Lightning,
  Snowflake,
  HouseLine,
  BatteryHigh,
} from 'phosphor-react';

import brandsCollage from '@/assets/brands-collage.png';

gsap.registerPlugin(ScrollTrigger);

const BrandsSection = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.brands-container',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo('.brands-title',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    )
      .fromTo('.service-card',
        { opacity: 0, y: 50, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
        '-=0.4'
      )
      .fromTo('.brands-showcase',
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const services = [
    {
      id: 1,
      title: 'Marine Spare Parts',
      description: 'Complete range of marine equipment and spare parts for all vessel types.',
      icon: Anchor,
      category: 'Marine',
      url: '/marine-parts',
    },
    {
      id: 2,
      title: 'Automotive Parts',
      description: 'Truck and car spare parts from leading manufacturers worldwide.',
      icon: Car,
      category: 'Automotive',
      url: '/automotive-parts',
    },
    {
      id: 3,
      title: 'Heavy Machinery',
      description: 'Rental services for construction and industrial heavy machinery.',
      icon: Gear,
      category: 'Machinery',
      url: '/machinery',
    },
    {
      id: 4,
      title: 'Solar Solutions',
      description: 'Solar panel supply and professional installation services.',
      icon: Sun,
      category: 'Solar',
      url: '/solar',
    },
    {
      id: 5,
      title: 'Electrical Services',
      description: 'Professional electrical contracting and installation services.',
      icon: Lightning,
      category: 'Electrical',
      url: '#contact',
    },
    {
      id: 6,
      title: 'HVAC & Plumbing',
      description: 'Air conditioning, plumbing, and climate control solutions.',
      icon: Snowflake,
      category: 'HVAC',
      url: '#contact',
    },
    {
      id: 7,
      title: 'Construction',
      description: 'Building materials, insulation items, and construction supplies.',
      icon: HouseLine,
      category: 'Construction',
      url: '#contact',
    },
    {
      id: 8,
      title: 'Battery Solutions',
      description: 'Industrial batteries and power solutions from AM Battery Industries.',
      icon: BatteryHigh,
      category: 'Power',
      url: '#contact',
    },
  ];

  const handleServiceClick = (url: string) => {
    if (url.startsWith('#')) {
      document.getElementById(url.substring(1))?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="brands" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="brands-container container mx-auto px-6">
        {/* Header */}
        <div className="brands-title text-center mb-16">
          <span className="text-primary font-semibold text-lg">Our Expertise</span>
          <h2 className="text-responsive-3xl font-bold mt-2 mb-6">
            Products & <span className="hero-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fusion International Trading Company delivers comprehensive solutions across
            multiple industries, powered by our sister company AM Battery Industries.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-20">
          <h3 className="text-xl font-bold text-center mb-8">Our Service Categories</h3>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="service-card group glass rounded-2xl p-6 hover:glow-primary transition-all duration-500 hover:scale-105 cursor-pointer"
                onClick={() => handleServiceClick(service.url)}
              >
                {/* Icon */}
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={24} className="text-primary" />
                </div>

                {/* Category Badge */}
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                  {service.category}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {service.description}
                </p>

                <div className="text-xs text-primary/70 group-hover:text-primary transition-colors">
                  Click for details →
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Brands */}
        <div className="brands-showcase text-center max-w-5xl mx-auto">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Partner Brands
            </h3>
            <p className="text-muted-foreground text-lg">
              Trusted by Global Leaders in Innovation & Reliability
            </p>
          </div>
          <div className="glass rounded-2xl p-8 hover:glow-primary transition-all duration-500 bg-gradient-to-br from-slate-900 to-slate-800">
            <img
              src={brandsCollage}
              alt="Partner Brands"
              className="w-full h-auto object-contain max-h-[400px]"
            />
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-4 glass border border-primary/30 text-foreground rounded-full font-semibold hover:border-primary hover:glow-primary transition-all duration-300 hover:scale-105"
          >
            Get Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
