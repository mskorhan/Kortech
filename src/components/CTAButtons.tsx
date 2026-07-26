import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { trackPhoneCall, trackTextMessage } from '../utils/analytics';

interface CTAButtonsProps {
  source?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'horizontal' | 'vertical';
}

const CTAButtons: React.FC<CTAButtonsProps> = ({
  source = 'unknown',
  className = '',
  size = 'md',
  variant = 'horizontal'
}) => {
  const handlePhoneClick = () => {
    trackPhoneCall(source);
  };

  const handleTextClick = () => {
    trackTextMessage(source);
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg',
    lg: 'px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl'
  };

  const containerClasses = variant === 'vertical' 
    ? 'flex flex-col gap-4' 
    : 'flex flex-col sm:flex-row gap-4';

  return (
    <div className={`${containerClasses} justify-center ${className}`}>
      <a
        href={`tel:704-246-7642?utm_source=site&utm_medium=${source}&utm_campaign=phone_cta`}
        onClick={handlePhoneClick}
        className={`bg-brand-primary hover:bg-brand-dark text-white rounded-xl font-bold flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105 ${sizeClasses[size]}`}
      >
        <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
        <span>Call 704-246-7642</span>
      </a>
      <a
        href={`sms:980-888-5300?utm_source=site&utm_medium=${source}&utm_campaign=text_cta`}
        onClick={handleTextClick}
        className={`border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white rounded-xl font-bold flex items-center justify-center space-x-2 transition-all duration-300 ${sizeClasses[size]}`}
      >
        <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6" />
        <span>Text/Call 980-888-5300</span>
      </a>
    </div>
  );
};

export default CTAButtons;