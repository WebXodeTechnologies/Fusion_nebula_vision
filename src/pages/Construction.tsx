import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowLeft, Buildings , Ruler, PaintBrush, Wrench } from 'phosphor-react';
import { Hammer } from 'lucide-react'; // ✅ Only one Hammer import
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Construction = () => {
  useEffect(() => {
    document.title = 'Construction Services - Fusion International Trading Company';

    const tl = gsap.timeline();
    tl.fromTo(
      '.page-header',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    ).fromTo(
      '.feature-card',
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
      '-=0.6'
    );
  }, []);

  const constructionServices = [
    {
      icon: Buildings,
      title: 'Civil & Structural Works',
      description: 'Strong foundations and structural frameworks for residential, commercial, and industrial projects.',
      features: ['Site Preparation', 'Foundations', 'Masonry & Concrete', 'Steel Structures']
    },
    {
      icon: Ruler,
      title: 'Architectural & Interior Design',
      description: 'Custom design solutions that balance functionality with modern aesthetics.',
      features: ['Space Planning', '3D Visualization', 'Interior Fit-outs', 'Modular Works']
    },
    {
      icon: PaintBrush,
      title: 'Finishing & Renovation',
      description: 'Enhance spaces with professional finishing, refurbishment, and restoration services.',
      features: ['Painting & Polishing', 'Flooring Solutions', 'Waterproofing', 'Upgrades & Remodeling']
    },
    {
      icon: Hammer,
      title: 'Project Management',
      description: 'End-to-end construction project management for timely and quality delivery.',
      features: ['Budgeting & Planning', 'Quality Control', 'Safety Compliance', 'On-Site Supervision']
    },
    {
      icon: Wrench,
      title: 'Maintenance & Repairs',
      description: 'Comprehensive post-construction support and maintenance services.',
      features: ['Structural Inspections', 'Repairs & Restoration', 'Facility Upkeep', 'Technical Support']
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
                <Buildings size={40} className="text-primary" />
              </div>

              <h1 className="text-responsive-3xl font-bold mb-6">
                Construction <span className="hero-text">Services</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                End-to-end construction solutions for <strong>residential, commercial, and industrial</strong> projects. 
                From concept to completion, we deliver with precision, innovation, and quality craftsmanship.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {constructionServices.map((service) => (
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
            <h2 className="text-2xl font-bold mb-8">Why Choose Our Construction Services?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass p-6 rounded-xl">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Buildings size={24} className="text-blue-500" />
                </div>
                <h3 className="font-semibold mb-2">Quality Materials</h3>
                <p className="text-sm text-muted-foreground">We source premium-grade construction materials for durability and longevity.</p>
              </div>
              <div className="glass p-6 rounded-xl">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Ruler size={24} className="text-green-500" />
                </div>
                <h3 className="font-semibold mb-2">Precision Engineering</h3>
                <p className="text-sm text-muted-foreground">Our experts ensure accuracy, safety, and compliance in every stage.</p>
              </div>
              <div className="glass p-6 rounded-xl">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hammer size={24} className="text-yellow-500" />
                </div>
                <h3 className="font-semibold mb-2">On-Time Delivery</h3>
                <p className="text-sm text-muted-foreground">We complete projects within timelines without compromising quality.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4">Let’s Build Together</h2>
            <p className="text-muted-foreground mb-8">
              Contact us today to discuss your project and get a free consultation.
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
};

export default Construction;
