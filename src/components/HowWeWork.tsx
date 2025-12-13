import { useLanguage } from '@/contexts/LanguageContext';
import { ClipboardList, Truck, Settings, CheckCircle } from 'lucide-react';

const HowWeWork = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: ClipboardList,
      titleKey: 'how.step1.title',
      descKey: 'how.step1.desc',
      number: '01',
    },
    {
      icon: Truck,
      titleKey: 'how.step2.title',
      descKey: 'how.step2.desc',
      number: '02',
    },
    {
      icon: Settings,
      titleKey: 'how.step3.title',
      descKey: 'how.step3.desc',
      number: '03',
    },
    {
      icon: CheckCircle,
      titleKey: 'how.step4.title',
      descKey: 'how.step4.desc',
      number: '04',
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
          {t('how.title')}
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.titleKey}
                className="relative group"
              >
                {/* Step card */}
                <div className="relative p-6 bg-card rounded-2xl border border-border text-center hover:border-primary/50 transition-all duration-500 hover-lift">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground font-display font-bold text-sm rounded-full">
                    {step.number}
                  </div>

                  <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mt-4 mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="font-display text-xl font-bold mb-3">
                    {t(step.titleKey)}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(step.descKey)}
                  </p>
                </div>

                {/* Arrow for mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
