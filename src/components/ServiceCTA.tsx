import React from 'react';
import { Phone, MessageSquare, Calendar, ArrowRight } from 'lucide-react';

interface ServiceCTAProps {
  service: string;
  price?: string;
  urgentText?: string;
}

const ServiceCTA: React.FC<ServiceCTAProps> = ({ 
  service, 
  price = "Call/Text For Quote", 
  urgentText = "Same-Day Service Available" 
}) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 my-12">
      <div className="text-center space-y-6">
        <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
          <Calendar className="h-5 w-5" />
          <span className="font-medium">{urgentText}</span>
        </div>
        
        <h3 className="text-3xl font-bold">
          Need {service}?
        </h3>
        
        <p className="text-xl text-blue-100">
          Professional repair service in Charlotte, NC • {price}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <a
            href="tel:704-246-7642"
            className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Phone className="h-5 w-5" />
            <span>Call Now</span>
          </a>
          <a
            href="sms:980-888-5300"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300"
          >
            <MessageSquare className="h-5 w-5" />
            <span>Text Us</span>
          </a>
        </div>
        
        <div className="text-center">
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 text-blue-200 hover:text-white font-medium"
          >
            <span>Get Free Quote</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCTA;