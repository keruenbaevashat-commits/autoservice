import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/77022223202"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-110 animate-pulse-glow"
      style={{
        '--tw-shadow-color': 'rgb(34 197 94 / 0.4)',
        boxShadow: '0 0 20px rgb(34 197 94 / 0.4)'
      } as React.CSSProperties}
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
};

export default WhatsAppButton;
