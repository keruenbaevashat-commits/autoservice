import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, MessageCircle, MapPin, Clock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contacts = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Title */}
          <section className="text-center mb-16">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              {t('contacts.title')}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('contacts.subtitle')}
            </p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <section>
              <h2 className="font-display text-2xl font-bold mb-8">{t('contacts.info.title')}</h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold mb-2">{t('contacts.phone.title')}</h3>
                    <a href="tel:+77022223202" className="text-xl font-medium text-primary hover:underline">
                      +7 702 222 32 02
                    </a>
                    <p className="text-muted-foreground text-sm mt-1">{t('contacts.phone.desc')}</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold mb-2">WhatsApp</h3>
                    <a
                      href="https://wa.me/77022223202"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-medium text-green-500 hover:underline"
                    >
                      +7 702 222 32 02
                    </a>
                    <p className="text-muted-foreground text-sm mt-1">{t('contacts.whatsapp.desc')}</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold mb-2">{t('contacts.address.title')}</h3>
                    <p className="text-foreground">{t('contacts.address.city')}</p>
                    <p className="text-muted-foreground text-sm mt-1">{t('contacts.address.desc')}</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold mb-2">{t('contacts.hours.title')}</h3>
                    <p className="text-foreground">{t('contacts.hours.weekdays')}</p>
                    <p className="text-foreground">{t('contacts.hours.weekend')}</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" className="flex-1" asChild>
                  <a href="tel:+77022223202">
                    <Phone className="w-5 h-5 mr-2" />
                    {t('contacts.cta.call')}
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="flex-1 border-green-500 text-green-500 hover:bg-green-500/10" asChild>
                  <a href="https://wa.me/77022223202" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </section>

            {/* Map Section */}
            <section>
              <h2 className="font-display text-2xl font-bold mb-8">{t('contacts.map.title')}</h2>
              <div className="aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42789.76372936953!2d57.16!3d50.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4180d5e0fc27f7b7%3A0x35e5a424d0d21c22!2z0JDQutGC0L7QsdC1!5e0!3m2!1sru!2skz!4v1702000000000!5m2!1sru!2skz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Автосервис 888 на карте"
                />
              </div>
              <p className="text-muted-foreground text-sm mt-4 text-center">
                {t('contacts.map.desc')}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contacts;
