import { Phone } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-display text-2xl font-black text-primary">888</span>
          <span className="hidden sm:block text-sm text-muted-foreground">AutoService</span>
        </div>
        
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          
          <a
            href="tel:+77001234567"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="hidden md:block font-medium">+7 700 123 45 67</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
