import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Truck } from 'lucide-react';
import { Button } from './ui/button';
import heroBackground from '@/assets/hero-mercedes.jpg';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/70" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-8">
            <Truck className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {t('benefits.tow.title')}
            </span>
          </div>

          {/* Main title */}
          <h1 
            className="animate-fade-up font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            style={{ animationDelay: '0.1s' }}
          >
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p 
            className="animate-fade-up text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            style={{ animationDelay: '0.2s' }}
          >
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div 
            className="animate-fade-up flex flex-col sm:flex-row gap-4 justify-center"
            style={{ animationDelay: '0.3s' }}
          >
            <Button
              onClick={scrollToForm}
              size="lg"
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground font-display font-bold text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
            >
              <Truck className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              {t('hero.cta.tow')}
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-foreground/20 hover:border-primary hover:bg-primary/10 text-foreground font-display font-bold text-lg px-8 py-6 rounded-xl transition-all duration-300"
            >
              <a href="tel:+77001234567">
                <Phone className="w-5 h-5 mr-2" />
                {t('hero.cta.call')}
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
