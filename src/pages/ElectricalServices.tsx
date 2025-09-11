import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, Lightbulb, Cpu, Wrench, Shield } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const ElectricalServices = () => {
  useEffect(() => {
    document.title = 'Electrical Services - Fusion International Trading Company';
    
    const tl = gsap.timeline();
    tl.fromTo('.page-header', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    )
    .fromTo('.feature-card',
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
      '-=0.6'
    );
  }, []);

  const electricalServices = [
    {
      icon: Zap,
      title: 'Power Distribution',
      description: 'Reliable electrical systems for residential, commercial, and industrial projects.',
      features: ['Main Panels & Switchgear', 'Transformers', 'Circuit Breakers', 'Load Distribution']
    },
    {
      icon: Lightbulb,
      title: 'Lighting Solutions',
      description: 'Innovative and energy-efficient lighting systems for every environment.',
      features: ['Indoor & Outdoor Lighting', 'LED Upgrades', 'Smart Lighting', 'Emergency Lighting']
    },
    {
      icon: Cpu,
      title: 'Automation & Control',
      description: 'Smart control systems that optimize energy use and enhance efficiency.',
      features: ['Building Management Systems', 'Energy Monitoring', 'Process Automation', 'IoT Integration']
    },
    {
      icon: Wrench,
      title: 'Maintenance & Repairs',
      description: 'Professional electrical maintenance to ensure uninterrupted performance.',
      features: ['Preventive Maintenance', 'Fault Diagnosis', 'Repairs & Replacement', '24/7 Support']
    },
    {
      icon: Shield,
      title: 'Safety & Compliance',
      description: 'Electrical works adhering to international safety and regulatory standards.',
      features: ['Grounding & Earthing', 'Fire Safety Compliance', 'Surge Protection', 'Testing & Certification']
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6">
            <div className="page-header text-center mb-16">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors mb-6"
              >
                <ArrowLeft size={20} />
                Back to Home
              </Link>
              
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap size={40} className="text-primary" />
              </div>
              
              <h1 className="text-responsive-3xl font-bold mb-6">
                Electrical <span className="hero-text">Services</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Complete electrical engineering, installation, and maintenance services designed 
                for safety, efficiency, and long-term performance across all industries.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {electricalServices.map((service) => (
                <div
                  key={service.title}
                  className="feature-card glass rounded-2xl p-8 hover:glow-primary transition-all duration-500 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <service.icon size={32} className="text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold mb-8">Why Choose Our Electrical Services?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass p-6 rounded-xl">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap size={24} className="text-blue-500" />
                </div>
                <h3 className="font-semibold mb-2">Reliable Power</h3>
                <p className="text-sm text-muted-foreground">Stable, efficient, and safe power distribution for all scales of projects.</p>
              </div>
              <div className="glass p-6 rounded-xl">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb size={24} className="text-green-500" />
                </div>
                <h3 className="font-semibold mb-2">Smart Lighting</h3>
                <p className="text-sm text-muted-foreground">Energy-saving lighting solutions with modern designs and automation.</p>
              </div>
              <div className="glass p-6 rounded-xl">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield size={24} className="text-yellow-500" />
                </div>
                <h3 className="font-semibold mb-2">Safety Assured</h3>
                <p className="text-sm text-muted-foreground">Compliance with strict safety standards and regular system checks.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4">Power Your Projects with Us</h2>
            <p className="text-muted-foreground mb-8">
              Get in touch today for expert electrical solutions tailored to your requirements.
            </p>
            <Link
              to="/#contact"
              className="inline-block px-8 py-4 bg-gradient-primary text-primary-foreground rounded-full font-semibold hover:glow-primary transition-all duration-300 hover:scale-105"
            >
              Get Free Quote
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default ElectricalServices;
