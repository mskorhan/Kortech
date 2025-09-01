import React, { useState, useRef } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  Printer, 
  Package, 
  CheckCircle, 
  AlertCircle, 
  Phone, 
  Mail, 
  MessageSquare,
  ArrowRight,
  FileText,
  Info,
  Smartphone,
  Laptop,
  Monitor,
  Tablet,
  HardDrive
} from 'lucide-react';

const MailInForm = () => {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Mail-In Repair Form",
      "description": "Complete mail-in repair form for shipping your device to KorTech Service for professional computer repair.",
      "url": "https://kortechservice.com/mail-in-form"
    }
  ];

  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ 
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    deviceType: '',
    deviceBrand: '',
    deviceModel: '',
    serialNumber: '',
    password: '',
    problemDescription: '',
    hasBackedUp: false,
    hasRemovedAccessories: false,
    agreeToTerms: false
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.deviceType) newErrors.deviceType = 'Device type is required';
    if (!formData.problemDescription.trim()) newErrors.problemDescription = 'Problem description is required';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setFormSubmitted(true);
      window.scrollTo(0, 0);
    }
  };

  const handlePrint = () => {
    const printContent = formRef.current;
    if (!printContent) return;
    
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>KorTech Service - Mail-In Repair Form</title>
        <style>
          /* Optimized print-specific styles */
          @page {
            margin: 0.3in;
            size: letter;
          }
          
          * {
            box-sizing: border-box;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          
          body {
            font-family: Arial, sans-serif;
            font-size: 9px;
            line-height: 1.2;
            color: #000;
            margin: 0;
            padding: 0;
            background-color: white;
          }
          
          /* Header styling - more compact */
          .header {
            text-align: center;
            border-bottom: 1px solid #0099FF;
            padding-bottom: 5px;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }
          
          .logo {
            width: 70px;
            height: auto;
            margin-bottom: 2px;
          }
          
          .company-name {
            font-size: 14px;
            font-weight: bold;
            color: #0099FF;
            margin-bottom: 2px;
          }
          
          .contact-info {
            font-size: 8px;
            margin: 0;
            line-height: 1.1;
          }
          
          /* Form title */
          .form-title {
            font-size: 12px;
            font-weight: bold;
            text-align: center;
            margin: 6px 0;
            background-color: #f8f9fa;
            padding: 3px;
            border: 1px solid #ddd;
          }
          
          /* Sections */
          .section {
            margin-bottom: 8px;
            page-break-inside: avoid;
          }
          
          .section-title {
            font-size: 10px;
            font-weight: bold;
            background-color: #e9ecef;
            padding: 3px 4px;
            margin-bottom: 4px;
            border-left: 3px solid #0099FF;
          }
          
          /* Field groups and fields */
          .field-group {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 5px;
            margin-bottom: 5px;
          }
          
          .field {
            margin-bottom: 2px;
          }
          
          .field-label {
            font-weight: bold;
            font-size: 7px;
            color: #666;
            text-transform: uppercase;
            margin-bottom: 0;
          }
          
          .field-value {
            font-size: 9px;
            padding: 1px 2px;
            border: 1px solid #ddd;
            background-color: #f8f9fa;
            min-height: 10px;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }
          
          .full-width {
            grid-column: 1 / -1;
          }
          
          /* Problem description */
          .problem-description {
            white-space: pre-wrap;
            min-height: 30px;
            padding: 2px;
            border: 1px solid #ddd;
            background-color: #f8f9fa;
            font-size: 9px;
            overflow-wrap: break-word;
          }
          
          /* Checklist */
          .checklist {
            margin-top: 4px;
          }
          
          .checklist-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 2px;
            font-size: 9px;
          }
          
          .checkbox {
            width: 7px;
            height: 7px;
            border: 1px solid #000;
            margin-right: 3px;
            margin-top: 1px;
            flex-shrink: 0;
            position: relative;
          }
          
          .checkbox.checked::after {
            content: "✓";
            position: absolute;
            top: -4px;
            left: -1px;
            font-size: 7px;
            font-weight: bold;
          }
          
          /* Footer */
          .footer {
            margin-top: 8px;
            padding-top: 4px;
            border-top: 1px solid #ddd;
            font-size: 7px;
            text-align: center;
            color: #666;
          }
          
          /* Important note */
          .important-note {
            background-color: #fff3cd;
            border: 1px solid #ffeaa7;
            padding: 3px;
            margin: 5px 0;
            font-size: 8px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <img src="https://kortechservice.com/transparent-logo-1.png" alt="KorTech Service Logo" class="logo">
          <div class="company-name">KorTech Service</div>
          <div class="contact-info">1721 Sardis Rd N, Suite 7A, Charlotte, NC 28270</div>
          <div class="contact-info">Phone: 704-246-7642 | Text: 980-888-5300 | Email: info@kortechservice.com</div>
        </div>
        
        <div class="form-title">MAIL-IN REPAIR FORM</div>
        
        <div class="important-note">
          <strong>IMPORTANT:</strong> Include this form with your device when shipping. 
          Keep a copy for your records. Form submission date: ${new Date().toLocaleDateString()}
        </div>
        
        <div class="section">
          <div class="section-title">Customer Information</div>
          <div class="field-group">
            <div class="field">
              <div class="field-label">Full Name</div>
              <div class="field-value">${formData.fullName}</div>
            </div>
            <div class="field">
              <div class="field-label">Email Address</div>
              <div class="field-value">${formData.email}</div>
            </div>
            <div class="field">
              <div class="field-label">Phone Number</div>
              <div class="field-value">${formData.phone}</div>
            </div>
            <div class="field">
              <div class="field-label">Street Address</div>
              <div class="field-value">${formData.address || 'Not provided'}</div>
            </div>
            <div class="field">
              <div class="field-label">City</div>
              <div class="field-value">${formData.city || 'Not provided'}</div>
            </div>
            <div class="field">
              <div class="field-label">State</div>
              <div class="field-value">${formData.state || 'Not provided'}</div>
            </div>
            <div class="field">
              <div class="field-label">ZIP Code</div>
              <div class="field-value">${formData.zip || 'Not provided'}</div>
            </div>
          </div>
        </div>
        
        <div class="section">
          <div class="section-title">Device Information</div>
          <div class="field-group">
            <div class="field">
              <div class="field-label">Device Type</div>
              <div class="field-value">${formData.deviceType}</div>
            </div>
            <div class="field">
              <div class="field-label">Brand</div>
              <div class="field-value">${formData.deviceBrand || 'Not provided'}</div>
            </div>
            <div class="field">
              <div class="field-label">Model</div>
              <div class="field-value">${formData.deviceModel || 'Not provided'}</div>
            </div>
            <div class="field">
              <div class="field-label">Serial Number</div>
              <div class="field-value">${formData.serialNumber || 'Not provided'}</div>
            </div>
            <div class="field full-width">
              <div class="field-label">Device Password (Admin Account)</div>
              <div class="field-value">${formData.password || 'Not provided'}</div>
            </div>
          </div>
        </div>
        
        <div class="section">
          <div class="section-title">Problem Description</div>
          <div class="field-label">Detailed description of the issue:</div>
          <div class="problem-description">${formData.problemDescription}</div>
        </div>
        
        <div class="section">
          <div class="section-title">Preparation Checklist</div>
          <div class="checklist">
            <div class="checklist-item">
              <div class="checkbox ${formData.hasBackedUp ? 'checked' : ''}"></div>
              <span>I have backed up all important data from my device</span>
            </div>
            <div class="checklist-item">
              <div class="checkbox ${formData.hasRemovedAccessories ? 'checked' : ''}"></div>
              <span>I have removed all accessories (SD cards, cases, screen protectors, etc.)</span>
            </div>                    
            <div class="checklist-item">
              <div class="checkbox checked"></div>
              <span>I agree to the Terms and Conditions</span>
            </div>
          </div>
        </div>
        
        <div class="section">
          <div class="section-title">Service Information</div>
          <div style="font-size: 11px; line-height: 1.5;">
            <p style="margin: 2px 0"><strong>Diagnostic Fee:</strong> $75-$150 (waived with HARDWARE repair)</p>
            <p style="margin: 2px 0"><strong>Return Shipping:</strong> Fee applies if paid return shipping label isn't attached</p>
            <p style="margin: 2px 0"><strong>Turnaround:</strong> 5-10 business days</p>
            <p style="margin: 2px 0"><strong>Contact:</strong> We'll call after diagnostics to discuss options</p>
          </div>
        </div>
        
        <div class="footer">
          <p><strong>KorTech Service LLC</strong> | Professional Computer Repair Since 1998</p>
          <p>Form generated on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
          <p style="margin-top: 5px; font-size: 7px;">
            By shipping your device with this form, you agree to our Terms and Conditions.
            KorTech Service is not responsible for shipping damage or data loss.
          </p>
        </div>
      </body>
      </html>
    `);
    
    printWindow.document.close();
    printWindow.focus();
    
    // Wait for content to load then print
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 250);
  };

  return (
    <div className="min-h-screen bg-white" id="mail-in-form-page">
      <SEOHead
        title="Mail-In Computer Repair Charlotte NC Form | Ship Your Device | KorTech Service"
        description="Mail-in Computer Repair Charlotte NC form. Ship your device to KorTech Service for professional repair. Call 704-246-7642 today!"
        canonicalUrl="/mail-in-form"
        schema={schema}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-100 to-blue-50 text-slate-800 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-200 shadow-sm">
              <Package className="h-5 w-5 text-blue-600" />
              <span className="text-slate-700 font-medium">Mail-In Repair Service</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Mail-In Computer Repair Charlotte NC Form - Ship Your Device for Expert Repair
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
             Complete this form, print it, and include it with your device when shipping to us for professional repair. 
             View our <a href="/services" className="text-blue-600 hover:text-blue-800 font-medium">repair services</a>, 
             learn <a href="/about" className="text-blue-600 hover:text-blue-800 font-medium">about our company</a>, or 
             <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">contact us with questions</a>.
            </p>
           <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light mt-4">
             For shipping guidelines, refer to <a href="https://www.usps.com/ship/shipping-services.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">USPS Shipping Services</a> 
             and <a href="https://www.ups.com/us/en/help-center/packaging-and-supplies/special-care-shipments/how-to-pack.page" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">UPS Packaging Guidelines</a>.
           </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white" id="mail-in-form-content">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 mb-8">
            <div className="flex items-start space-x-4">
              <div className="mt-1 flex-shrink-0">
                <Info className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Request a Quote</h3>
                <p className="text-blue-700 mb-0">
                  Use this form to request a quote for any of our services. You can also use it as a shipping form if you're mailing in your device for repair.
                </p>
              </div>
            </div>
          </div>
          
          {formSubmitted ? (
            <div className="bg-white rounded-xl shadow-lg border border-green-200 p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Form Completed Successfully!</h2>
                <p className="text-gray-600">Please print this form and include it with your device.</p>
              </div>
              
              <div ref={formRef} className="border-2 border-dashed border-gray-300 rounded-lg p-6 mb-8">
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Customer Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Full Name</p>
                      <p className="font-medium">{formData.fullName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{formData.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">{formData.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="font-medium">{formData.address}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">City</p>
                      <p className="font-medium">{formData.city}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">State</p>
                      <p className="font-medium">{formData.state}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">ZIP Code</p>
                      <p className="font-medium">{formData.zip}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Device Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Device Type</p>
                      <p className="font-medium">{formData.deviceType}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Brand</p>
                      <p className="font-medium">{formData.deviceBrand}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Model</p>
                      <p className="font-medium">{formData.deviceModel}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Serial Number</p>
                      <p className="font-medium">{formData.serialNumber || "Not provided"}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-gray-500">Device Password</p>
                      <p className="font-medium">{formData.password || "Not provided"}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Problem Description</h3>
                  <p className="whitespace-pre-line">{formData.problemDescription}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Checklist</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className={`h-5 w-5 ${formData.hasBackedUp ? 'text-green-500' : 'text-gray-300'} flex-shrink-0 mt-0.5`} />
                      <span>I have backed up all important data</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className={`h-5 w-5 ${formData.hasRemovedAccessories ? 'text-green-500' : 'text-gray-300'} flex-shrink-0 mt-0.5`} />
                      <span>I have removed all accessories (SD cards, cases, etc.)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>I agree to the terms and conditions</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex justify-center">
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center space-x-2 bg-[#0099FF] hover:bg-[#071930] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  <Printer className="h-5 w-5" />
                  <span>Print This Form</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Mail-In Repair Form</h2>
                <p className="text-gray-600">
                  Please complete this form with accurate information about your device and the issues you're experiencing. 
                  After submission, you'll be able to print the form to include with your device shipment.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Customer Information */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2 text-blue-600 font-bold">1</span>
                    Customer Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        placeholder="John Doe"
                      />
                      {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        placeholder="(123) 456-7890"
                      />
                      {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Street Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="123 Main St"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Charlotte"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="NC"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="28270"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Device Information */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2 text-blue-600 font-bold">2</span>
                    Device Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Device Type *
                      </label>
                      <select
                        name="deviceType"
                        value={formData.deviceType}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${errors.deviceType ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      >
                        <option value="">Select device type</option>
                        <option value="Laptop">Laptop</option>
                        <option value="Desktop">Desktop</option>
                        <option value="Mac">Mac</option>
                        <option value="iPhone">iPhone</option>
                        <option value="iPad">iPad</option>
                        <option value="Android Phone">Android Phone</option>
                        <option value="Android Tablet">Android Tablet</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.deviceType && <p className="mt-1 text-sm text-red-600">{errors.deviceType}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Brand
                      </label>
                      <input
                        type="text"
                        name="deviceBrand"
                        value={formData.deviceBrand}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Apple, Dell, HP, etc."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Model
                      </label>
                      <input
                        type="text"
                        name="deviceModel"
                        value={formData.deviceModel}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="MacBook Pro, XPS 15, etc."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Serial Number
                      </label>
                      <input
                        type="text"
                        name="serialNumber"
                        value={formData.serialNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Serial number or IMEI"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Device Password
                      </label>
                      <input
                        type="text"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Password for administrator account"
                      />
                      <p className="mt-1 text-xs text-gray-500">
                        We need this to access your device for diagnostics. If you're not comfortable sharing, you can create a temporary admin account.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Problem Description */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2 text-blue-600 font-bold">3</span>
                    Problem Description
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Describe the issue with your device *
                    </label>
                    <textarea
                      name="problemDescription"
                      value={formData.problemDescription}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-2 border ${errors.problemDescription ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      placeholder="Please provide as much detail as possible about the issue you're experiencing..."
                    ></textarea>
                    {errors.problemDescription && <p className="mt-1 text-sm text-red-600">{errors.problemDescription}</p>}
                    <p className="mt-1 text-xs text-gray-500">
                      Include when the problem started, any error messages, and what you've already tried to fix it.
                    </p>
                  </div>
                </div>
                
                {/* Checklist */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2 text-blue-600 font-bold">4</span>
                    Preparation Checklist
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5 mt-1">
                        <input
                          id="hasBackedUp"
                          name="hasBackedUp"
                          type="checkbox"
                          checked={formData.hasBackedUp}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                      </div>
                      <div className="ml-3">
                        <label htmlFor="hasBackedUp" className="text-sm font-medium text-gray-700">
                          I have backed up all important data from my device
                        </label>
                        <p className="text-xs text-gray-500">
                          KorTech Service is not responsible for any data loss during the repair process.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5 mt-1">
                        <input
                          id="hasRemovedAccessories"
                          name="hasRemovedAccessories"
                          type="checkbox"
                          checked={formData.hasRemovedAccessories}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                      </div>
                      <div className="ml-3">
                        <label htmlFor="hasRemovedAccessories" className="text-sm font-medium text-gray-700">
                          I have removed all accessories (SD cards, cases, etc.)
                        </label>
                        <p className="text-xs text-gray-500">
                          Unless they need repair as well, please remove all accessories before shipping.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5 mt-1">
                        <input
                          id="agreeToTerms"
                          name="agreeToTerms"
                          type="checkbox"
                          checked={formData.agreeToTerms}
                          onChange={handleChange}
                          className={`h-4 w-4 text-blue-600 border-${errors.agreeToTerms ? 'red-500' : 'gray-300'} rounded focus:ring-blue-500`}
                        />
                      </div>
                      <div className="ml-3">
                        <label htmlFor="agreeToTerms" className="text-sm font-medium text-gray-700">
                          I agree to the <a href="/terms" target="_blank" className="text-blue-600 hover:text-blue-800">Terms and Conditions</a>
                        </label>
                        {errors.agreeToTerms && <p className="text-sm text-red-600">{errors.agreeToTerms}</p>}
                        <p className="text-xs text-gray-500">
                          By checking this box, you acknowledge that you have read and agree to our terms and conditions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 flex-shrink-0">
                      <Info className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800 mb-2">Shipping Instructions</h3>
                      <p className="text-blue-700 mb-4">
                        After submitting this form, please print it and include it with your device when shipping to:
                      </p>
                      <div className="bg-white rounded-lg p-4 border border-blue-300 mb-4">
                        <p className="font-medium">KorTech Service</p>
                        <p>1721 Sardis Rd N, Suite 7A</p>
                        <p>Charlotte, NC 28270</p>
                      </div>
                      <p className="text-sm text-blue-700">
                        We recommend using a trackable shipping method and properly packaging your device to prevent damage during transit.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center space-x-2 bg-[#0099FF] hover:bg-[#071930] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg transform hover:scale-105"
                  >
                    <FileText className="h-5 w-5" />
                    <span>Submit and Generate Form</span>
                  </button>
                </div>
              </form>
            </div>
          )}
          
          <div className="mt-12 bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Help?</h3>
            <p className="text-gray-600 mb-6">
              If you have any questions about shipping your device or the repair process, please don't hesitate to contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="tel:704-246-7642"
                className="flex items-center space-x-3 bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Call Us</p>
                  <p className="text-sm text-gray-600">704-246-7642</p>
                </div>
              </a>
              <a
                href="sms:980-888-5300"
                className="flex items-center space-x-3 bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Text Us</p>
                  <p className="text-sm text-gray-600">980-888-5300</p>
                </div>
              </a>
              <a
                href="mailto:info@kortechservice.com"
                className="flex items-center space-x-3 bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email Us</p>
                  <p className="text-sm text-gray-600">info@kortechservice.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MailInForm;