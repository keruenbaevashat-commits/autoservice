import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Truck, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    problem: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: t('form.success'),
      description: t('form.callback'),
    });

    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', problem: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact-form" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Truck className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                {t('benefits.tow.title')}
              </span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {t('form.title')}
            </h2>
            
            <p className="text-muted-foreground text-lg">
              {t('form.subtitle')}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="p-8 bg-card rounded-2xl border border-border shadow-xl">
              <div className="space-y-5">
                <div>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('form.name')}
                    required
                    className="h-14 bg-secondary/50 border-border hover:border-primary/50 focus:border-primary text-base rounded-xl placeholder:text-muted-foreground"
                  />
                </div>

                <div>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('form.phone')}
                    required
                    className="h-14 bg-secondary/50 border-border hover:border-primary/50 focus:border-primary text-base rounded-xl placeholder:text-muted-foreground"
                  />
                </div>

                <div>
                  <Textarea
                    name="problem"
                    value={formData.problem}
                    onChange={handleChange}
                    placeholder={t('form.problem')}
                    rows={4}
                    className="bg-secondary/50 border-border hover:border-primary/50 focus:border-primary text-base rounded-xl placeholder:text-muted-foreground resize-none"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full mt-6 h-14 font-display font-bold text-lg rounded-xl transition-all duration-300 ${
                  isSubmitted 
                    ? 'bg-green-600 hover:bg-green-600' 
                    : 'bg-primary hover:bg-primary/90 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/30'
                }`}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    {t('form.success')}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    {t('form.submit')}
                  </>
                )}
              </Button>
            </div>

            <p className="text-center text-muted-foreground text-sm">
              {t('form.callback')}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
