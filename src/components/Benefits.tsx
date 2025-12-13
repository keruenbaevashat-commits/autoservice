import { useLanguage } from '@/contexts/LanguageContext';
import { Truck, Clock, Shield, Wrench } from 'lucide-react';

const Benefits = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Truck,
      titleKey: 'benefits.tow.title',
      descKey: 'benefits.tow.desc',
    },
    {
      icon: Clock,
      titleKey: 'benefits.time.title',
      descKey: 'benefits.time.desc',
    },
    {
      icon: Shield,
      titleKey: 'benefits.guarantee.title',
      descKey: 'benefits.guarantee.desc',
    },
    {
      icon: Wrench,
      titleKey: 'benefits.masters.title',
      descKey: 'benefits.masters.desc',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
          {t('benefits.title')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.titleKey}
              className="group relative p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {t(benefit.titleKey)}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {t(benefit.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
