import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Users, Award, Truck, Clock, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Title */}
          <section className="text-center mb-16">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              {t('about.title')}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </section>

          {/* Main Content */}
          <article className="max-w-4xl mx-auto">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">{t('about.intro.title')}</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  {t('about.intro.p1')}
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  {t('about.intro.p2')}
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t('about.intro.p3')}
                </p>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">{t('about.why.title')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-card rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Truck className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{t('about.why.tow.title')}</h3>
                  <p className="text-muted-foreground">{t('about.why.tow.desc')}</p>
                </div>
                <div className="p-6 bg-card rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{t('about.why.team.title')}</h3>
                  <p className="text-muted-foreground">{t('about.why.team.desc')}</p>
                </div>
                <div className="p-6 bg-card rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{t('about.why.guarantee.title')}</h3>
                  <p className="text-muted-foreground">{t('about.why.guarantee.desc')}</p>
                </div>
                <div className="p-6 bg-card rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{t('about.why.quality.title')}</h3>
                  <p className="text-muted-foreground">{t('about.why.quality.desc')}</p>
                </div>
              </div>
            </section>

            {/* Services Description */}
            <section className="mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">{t('about.services.title')}</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  {t('about.services.p1')}
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>{t('about.services.list.1')}</li>
                  <li>{t('about.services.list.2')}</li>
                  <li>{t('about.services.list.3')}</li>
                  <li>{t('about.services.list.4')}</li>
                  <li>{t('about.services.list.5')}</li>
                  <li>{t('about.services.list.6')}</li>
                </ul>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t('about.services.p2')}
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="text-center py-12 px-8 bg-card rounded-2xl border border-border">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">{t('about.cta.title')}</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                {t('about.cta.desc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/#form">{t('about.cta.request')}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contacts">{t('about.cta.contacts')}</Link>
                </Button>
              </div>
            </section>
          </article>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
