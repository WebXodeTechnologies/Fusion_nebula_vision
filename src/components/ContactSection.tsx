import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Envelope, 
  Phone, 
  MapPin, 
  PaperPlaneRight,
  GithubLogo,
  LinkedinLogo,
  Globe
} from 'phosphor-react';
import { useToast } from '@/hooks/use-toast';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.contact-container',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo('.contact-title',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    )
    .fromTo('.contact-form',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.4'
    )
    .fromTo('.contact-info',
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.6'
    )
    .fromTo('.contact-input',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: 'power2.out' },
      '-=0.4'
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      
      // Button bounce animation
      gsap.to('.submit-btn', {
        scale: 1.1,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: 'power2.out'
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Envelope,
      label: 'Email',
      value: 'project@fusionsinternational.com',
      href: 'mailto:project@fusionsinternational.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+971528110250',
      href: 'tel:+971528110250'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Plot 69 Store #3, MW5 Mussafah Industrial City, Abu Dhabi',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: GithubLogo, href: '#', label: 'GitHub' },
    { icon: LinkedinLogo, href: '#', label: 'LinkedIn' },
    { icon: Globe, href: '#', label: 'Website' }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="contact-container container mx-auto px-6">
        {/* Header */}
        <div className="contact-title text-center mb-16">
          <span className="text-primary font-semibold text-lg">Get In Touch</span>
          <h2 className="text-responsive-3xl font-bold mt-2 mb-6">
            Let's Work <span className="hero-text">Together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to take your business to the next level? Contact us today and let's discuss 
            how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="contact-form">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="contact-input">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-xl border border-primary/20 focus:border-primary focus:glow-primary transition-all duration-300 bg-transparent text-foreground placeholder-muted-foreground"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="contact-input">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-xl border border-primary/20 focus:border-primary focus:glow-primary transition-all duration-300 bg-transparent text-foreground placeholder-muted-foreground"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="contact-input">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 glass rounded-xl border border-primary/20 focus:border-primary focus:glow-primary transition-all duration-300 bg-transparent text-foreground placeholder-muted-foreground resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-btn w-full px-8 py-4 bg-gradient-primary text-primary-foreground rounded-xl font-semibold hover:glow-primary transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/20 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <PaperPlaneRight size={20} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-start gap-4 p-4 glass rounded-xl hover:glow-primary transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon size={20} className="text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {info.label}
                        </h4>
                        <p className="text-muted-foreground text-sm mt-1">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:glow-primary transition-all duration-300 hover:scale-110 group"
                      aria-label={social.label}
                    >
                      <social.icon 
                        size={20} 
                        className="text-muted-foreground group-hover:text-primary transition-colors" 
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* Company Info */}
              <div className="p-6 glass rounded-xl">
                <h4 className="font-bold text-lg mb-2 hero-text">FUSION INTERNATIONAL TRADING AND TECHNICAL SERVICES LLC</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A sister concern of AM Battery Industries, specializing in international 
                  trading, marine services, and innovative business solutions.
                </p>
                <div className="mt-4 text-xs text-primary font-semibold">
                  Powered by AM Battery Industries
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;