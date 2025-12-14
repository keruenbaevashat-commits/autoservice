import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and city */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-display text-3xl font-black text-primary">888</span>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{t('footer.city')}</span>
            </div>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href="tel:+77022223202"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">+7 702 222 32 02</span>
            </a>

            <a
              href="https://wa.me/77022223202"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-green-500 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Автосервис 888. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
