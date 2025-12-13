import { useLanguage } from '@/contexts/LanguageContext';
import { 
  MonitorCheck, 
  Droplets, 
  CarFront, 
  CircleDot, 
  Cog, 
  Zap 
} from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: MonitorCheck,
      titleKey: 'services.diagnostic.title',
      descKey: 'services.diagnostic.desc',
    },
    {
      icon: Droplets,
      titleKey: 'services.oil.title',
      descKey: 'services.oil.desc',
    },
    {
      icon: CarFront,
      titleKey: 'services.suspension.title',
      descKey: 'services.suspension.desc',
    },
    {
      icon: CircleDot,
      titleKey: 'services.brakes.title',
      descKey: 'services.brakes.desc',
    },
    {
      icon: Cog,
      titleKey: 'services.engine.title',
      descKey: 'services.engine.desc',
    },
    {
      icon: Zap,
      titleKey: 'services.electric.title',
      descKey: 'services.electric.desc',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
          {t('services.title')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.titleKey}
              className="group relative overflow-hidden p-6 bg-card rounded-2xl border border-border hover:border-primary transition-all duration-500 cursor-pointer hover-lift"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                
                <div>
                  <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {t(service.titleKey)}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(service.descKey)}
                  </p>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-primary/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
