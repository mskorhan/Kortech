import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  ArrowRight,
  CheckCircle, FileText, Shield, Truck, Phone, Mail, 
  AlertCircle, HelpCircle, Clock, MessageSquare, 
  Info, User, Briefcase, Lock, Scale, Globe, 
  AlertTriangle, Zap, Package, Settings, MapPin
} from 'lucide-react';

const TermsConditions = () => {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Terms and Conditions",
      "description": "Terms and conditions for KorTech Service computer repair and IT support services in Charlotte, NC.",
      "url": "https://kortechservice.com/terms"
    }
  ];

  return (
    <div className="min-h-screen bg-white" id="terms-conditions">
      <SEOHead
        title="Terms & Conditions | Computer Repair Charlotte NC Services | KorTech Service"
        description="Terms & conditions for Computer Repair Charlotte NC services. Professional IT support terms. Call 704-246-7642 for service today!"
        canonicalUrl="/terms"
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
              <FileText className="h-5 w-5 text-blue-600" />
              <span className="text-slate-700 font-medium">Shipping & Service Information</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Terms & Conditions - Computer Repair Charlotte NC Services
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
             Important information about our Computer Repair Charlotte NC services and shipping instructions. 
             View our <a href="/services" className="text-blue-600 hover:text-blue-800 font-medium">complete services</a>, 
             learn <a href="/about" className="text-blue-600 hover:text-blue-800 font-medium">about our company</a>, or 
             <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">contact us with questions</a>.
            </p>
           <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light mt-4">
             For consumer protection, visit <a href="https://www.ftc.gov/tips-advice/business-center" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">FTC Business Center</a> 
             and <a href="https://www.bbb.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">Better Business Bureau</a>.
           </p>
            
            <div className="mt-6">
              <a
                href="/mail-in-form"
                className="inline-flex items-center space-x-2 bg-[#0099FF] hover:bg-[#071930] text-white px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                <FileText className="h-5 w-5" />
                <span>Complete Mail-In Form</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white" id="terms-content">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-8">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-start space-x-4">
                <div className="mt-1 flex-shrink-0">
                  <AlertCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Important Legal Notice</h3>
                  <p className="text-blue-700 mb-0">
                    This document contains important legal information about our computer repair services, shipping procedures, and business terms. 
                    Please read thoroughly before using our services. By engaging our services, you agree to these terms and conditions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-start space-x-4">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Google Ads Compliance</h3>
                  <p className="text-green-700 mb-0">
                    Our advertising practices comply with Google Ads policies. All service claims are substantiated, 
                    pricing is transparent, and we maintain proper business licensing and insurance as required by law.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <Briefcase className="h-6 w-6 text-blue-600 mr-3" />
                Business Information and Licensing
              </h2>
            
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">KorTech Service LLC</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>Business Name:</strong> KorTech Service LLC</p>
                    <p><strong>Address:</strong> 1721 Sardis Rd N, Suite 7A, Charlotte, NC 28270</p>
                    <p><strong>Phone:</strong> 704-246-7642</p>
                    <p><strong>Text/Mobile:</strong> 980-888-5300</p>
                  </div>
                  <div>
                    <p><strong>Email:</strong> info@kortechservice.com</p>
                    <p><strong>Website:</strong> https://kortechservice.com</p>
                    <p><strong>Hours:</strong> Mon-Fri 9AM-6PM, Sat 11AM-4PM</p>
                    <p><strong>Established:</strong> 1998</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <Package className="h-6 w-6 text-blue-600 mr-3" />
                Shipping Instructions
              </h2>
              <p>
                Please ship your device to our address at 1721 Sardis Rd N, Suite 7A, Charlotte, NC 28270 with your shipping form enclosed in the box. 
                This form will be emailed to you once you've submitted your shipping form on our website, or you can print it after clicking the submit button.
              </p>
              
              <p>
                Once we receive your device, we will review the information on your form and start the diagnostic process. After completing the diagnostics, 
                we will call you to discuss the repair and any costs.
              </p>
              
              <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200 mt-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Fees</h3>
                <ul className="list-disc pl-5 text-yellow-700 mb-0">
                  <li>Diagnostics fee: $75-$150 (waived if you proceed with HARDWARE repair)</li>
                  <li>Return shipping fee: Fee applies if paid return shipping label isn't attached</li>
                  <li>All fees are clearly disclosed before service begins</li>
                  <li>No hidden charges or surprise fees</li>
                </ul>
              </div>
              
              <div className="bg-red-50 rounded-xl p-6 border border-red-200 mt-6">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 flex-shrink-0">
                    <AlertCircle className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-red-800 mb-2">Important Disclaimer</h3>
                    <p className="text-red-700 mb-0">
                      Once the device is shipped back to you, KorTech Service provides a limited warranty as outlined in our warranty terms. 
                      If there are any issues, please call/text us within 14 days, and we will work to resolve any warranty-covered concerns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <Lock className="h-6 w-6 text-blue-600 mr-3" />
                Device Password(s)
              </h2>
              <p>
                We need to access your device to properly diagnose any issues. Therefore, we will need your password for the user that is an Administrator. 
                If you are not comfortable with us having access to your personal information, feel free to create a second user that is an Administrator.
              </p>
              <p className="text-red-600 font-medium">
                *KorTech Service is not responsible for any damage during shipping and handling of devices
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                Service Areas and Availability
              </h2>
              
              <p>
                KorTech Service provides computer repair and IT support services to the following areas in North Carolina:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Charlotte, NC (primary service area)</li>
                <li>Matthews, NC</li>
                <li>Indian Trail, NC</li>
                <li>Mint Hill, NC</li>
                <li>Monroe, NC</li>
                <li>Pineville, NC</li>
                <li>Surrounding areas within 30 miles of Charlotte</li>
              </ul>
              <p>
                Pickup and delivery services are available throughout our service area. 
                Mail-in repair services are available nationwide.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <HelpCircle className="h-6 w-6 text-blue-600 mr-3" />
                Frequently Asked Questions
              </h2>
            
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Turnaround Time</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Computers: 5-10 business days from when we receive the device</li>
                    <li>iPad & iPhones (screen and battery replacements): 5-10 business days from when we receive the device</li>
                    <li>If your iPad or iPhone has motherboard issues, it may take more time to diagnose. We will inform you over the phone if this is the case.</li>
                    <li>Other devices vary</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Diagnosis</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>We will begin diagnostics within 48 hours of receiving your device</li>
                    <li>Once we have completed the diagnostics, we will call you to discuss the repair and pricing</li>
                    <li>We can only speak to the person responsible for payment to speed up the service</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Payments & Pricing</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Payment will be collected over the phone</li>
                    <li>We accept all major Credit Cards, CashApp, Venmo, and Zelle</li>
                    <li>Please don't send payment in the shipping box</li>
                    <li>Pricing can't be guaranteed until we have finished diagnostics. If any further payment is required after our first quotation, we will call you to discuss this.</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <Settings className="h-6 w-6 text-blue-600 mr-3" />
                Preparing Your Device for Repair
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Before You Ship Your PC</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Back up your personal and important data to an external SSD (HDD works as well, but for reliability and quicker transfer, we recommend an external SSD)</li>
                    <li>Turn off BitLocker encryption if it is enabled</li>
                    <li>If you're concerned about the security of your data, erase your hard disk before sending in your PC</li>
                  </ul>
                  <p className="text-red-600 font-medium mt-2">*KorTech Service is not responsible for lost data</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Before You Ship Your Mac</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Backup your data: <a href="https://support.apple.com/mac-backup" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">support.apple.com/mac-backup</a></li>
                    <li>Remove your Mac from Find My (and leave it removed while your Mac is with us): <a href="https://support.apple.com/guide/findmy-mac/remove-a-device-fmm2832fb8f0/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">support.apple.com/guide/findmy-mac/remove-a-device</a></li>
                    <li>Turn off your firmware password: <a href="https://support.apple.com/HT204455" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">support.apple.com/HT204455</a></li>
                    <li>Deauthorize your computer from content purchases: <a href="https://support.apple.com/HT201251" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">support.apple.com/HT201251</a></li>
                    <li>Disable or turn off third-party security software if you're using it</li>
                    <li>If you're concerned about the security of your data, erase your hard disk before sending in your Mac: <a href="https://support.apple.com/HT208496" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">support.apple.com/HT208496</a></li>
                  </ul>
                  <p className="text-red-600 font-medium mt-2">*KorTech Service is not responsible for lost data</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Before You Ship Your iPhone or iPad</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>If you need to send in an iPhone that's paired with an Apple Watch, unpair your devices. When you unpair, your iPhone will create a new backup of your Apple Watch.</li>
                    <li>Backup your iOS device: <a href="https://support.apple.com/HT203977" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">support.apple.com/HT203977</a></li>
                    <li>Go to Settings &gt; Messages and turn off iMessage</li>
                    <li>Go to Settings &gt; [your name] &gt; Find My &gt; Turn off Find My iPhone or iPad to disable Activation Lock. Enter your Apple ID password, and tap Turn Off (and leave it turned off while your device is with us).</li>
                    <li>If you're concerned about the security of your data, erase your device before sending it in. Go to Settings &gt; General &gt; Reset &gt; Erase All Content and Settings.</li>
                    <li>Remove your SIM card, case, or screen protector from your device</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />
                Important: Do Not Include
              </h2>
              
              <p className="mb-4">Unless they need repair as well, do not include:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>SD card(s)</li>
                <li>Wireless Mouse</li>
                <li>Keyboard</li>
                <li>Keyboard protector</li>
                <li>Bottom cover</li>
                <li>Display cover</li>
                <li>Or any other accessories (We will not be able to send them back to you)</li>
              </ul>
              <p className="mt-4">Do not include your Apple ID password unless we ask you to. Your privacy is important to us.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <Truck className="h-6 w-6 text-blue-600 mr-3" />
                Shipping Instructions
              </h2>
              
              <ul className="list-disc pl-5 space-y-3">
                <li>Find a courier you'd like to use to send us your device, schedule a pickup or find a drop-off location. (Do not use a drop box.)</li>
                <li>We recommend securing your device in protective packaging e.g. bubble wrap</li>
                <li>Get a receipt from the courier. Make sure this includes tracking information.</li>
                <li>Please remember to enclose your full name and shipping form in the box. We need this information to find your information in our system.</li>
              </ul>
              
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 my-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Questions?</h3>
                <p className="text-blue-700 mb-4">
                  If you have any questions, please contact us:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="mailto:info@kortechservice.com" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                    <Mail className="h-5 w-5" />
                    <span>info@kortechservice.com</span>
                  </a>
                  <a href="tel:704-246-7642" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                    <Phone className="h-5 w-5" />
                    <span>704-246-7642</span>
                  </a>
                  <a href="sms:980-888-5300" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                    <MessageSquare className="h-5 w-5" />
                    <span>980-888-5300 (Text)</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
                <Scale className="h-6 w-6 text-red-800 mr-3" />
                Terms & Conditions
              </h2>
            
              <div className="space-y-4">
                <p>
                  I authorize KorTech Service technicians to perform repair work on my electronic device. I also understand that KorTech Service technicians have been trained to perform work on electronic devices but KorTech Service is not an Authorized Microsoft or Apple Service Provider. Further, I agree to release, indemnify, and hold KorTech Service from liability for any claims or damages of any kind or description that may arise from any repair work performed on my electronic device.
                </p>
                
                <p>
                  I understand that KorTech Service is not responsible for any data loss, which may occur as a result of work done on my electronic device. I also understand that I have the option to, and I am responsible for backing up the device before allowing any repair to be performed on my device in the event of any data loss and hardware or software failure.
                </p>
                
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 my-4">
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">Data Protection Notice</h4>
                  <p className="text-blue-700 mb-0">
                    We implement industry-standard security measures to protect your data during the repair process. 
                    However, customers are strongly advised to backup all important data before service. 
                    See our Privacy Policy for detailed information about data handling.
                  </p>
                </div>
                
                <p>
                  I understand that KorTech Service technicians will not browse through any personal, private or confidential information or data; however, technicians may inadvertently see data during the course of their work. I understand that any confidential data should be removed from the device prior to having repair work performed on the device.
                </p>
                
                <p>
                  I understand that repairs or technical support performed by KorTech Service may void manufacturer warranties, especially in the case of Apple device repairs. KorTech Service and its affiliates do not assume any liability or warranty in the event that the manufacturer warranties are voided but may, at its sole discretion, use the devices insurance claim in the event that this will be more cost-effective than repairing the device.
                </p>
                
                <p>
                  I understand payment in full is required before my device is repaired or returned. I understand that repairs that are unsuccessful are subject to a diagnostic fee as quoted. I understand that for any card transaction an additional processing fee will be added to the total. I understand devices left for more than 30 days are considered abandoned and will no longer be the responsibility of KorTech Service LLC, these devices will be sent out to be recycled and cannot be recovered.
                </p>
                
                <p>
                  I understand repairs made by KorTech Service with customer provided parts instead of KorTech Service parts will not include a warranty on parts and labor.
                  I understand that water damaged devices either before or after being repaired will not include parts and labor warranty of any kind.
                </p>

                <p>
                  I understand that the KorTech Service limited warranty does not cover accidental damage like a cracked screen or any physical damage done to the device once the repair has been completed.
                </p>
                
                <div className="bg-green-50 rounded-xl p-6 border border-green-200 my-6">
                  <h4 className="text-lg font-semibold text-green-800 mb-2">Warranty Details</h4>
                  <p className="text-green-700 mb-2">
                    <strong>14-Day Limited Warranty:</strong> Covers defects in parts and workmanship for repairs performed by KorTech Service.
                  </p>
                  <ul className="list-disc pl-5 text-green-700 text-sm">
                    <li>Warranty applies only to the specific part/service performed</li>
                    <li>Does not cover accidental damage, misuse, or normal wear</li>
                    <li>Customer must be original owner listed on service form</li>
                    <li>Warranty void if device opened by unauthorized parties</li>
                    <li>Water damage repairs have limited warranty coverage</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <Shield className="h-6 w-6 text-blue-600 mr-3" />
                Warranty Information
              </h2>
              
              <p className="text-slate-600 mb-4">
                KorTech Service 14-day limited warranty is valid on the date of purchase, for as long as you (name on this form) are the original owner of the device(s) and the limited warranty only applies to faulty parts installed by KorTech Service. This warranty does not include accidental damage, liquid damage, drops, or any similar incidents. The warranty covers only manufacturing defects or faulty parts that fail under normal use conditions.
              </p>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Dispute Resolution and Legal Compliance</h3>
              
              <p className="mb-4">
                Any disputes arising from our services will be resolved through binding arbitration in Charlotte, NC, 
                in accordance with North Carolina state law. Our business practices comply with:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>North Carolina consumer protection laws</li>
                <li>Federal Trade Commission (FTC) guidelines</li>
                <li>Google Ads advertising policies</li>
                <li>Better Business Bureau standards</li>
                <li>Industry best practices for computer repair services</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <Mail className="h-6 w-6 text-blue-600 mr-3" />
                Contact Information for Legal Matters
              </h2>
              
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 my-6">
                <p className="mb-2"><strong>For legal inquiries, complaints, or dispute resolution:</strong></p>
                <p>KorTech Service LLC</p>
                <p>1721 Sardis Rd N, Suite 7A</p>
                <p>Charlotte, NC 28270</p>
                <p>Phone: 704-246-7642</p>
                <p>Email: info&#64;kortechservice&#46;com</p>
                <p className="mt-4 text-sm text-slate-600">
                  Business hours: Monday-Friday 9AM-6PM, Saturday 11AM-4PM
                </p>
              </div>
            </div>
            
            <p className="text-sm text-slate-600 mt-8">
              Last updated: January 2025. These terms and conditions are subject to change. 
              Current version is always available at https://kortechservice.com/terms
            </p>
          </div>
          
          <div className="mt-12 text-center">
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-[#0099FF] hover:bg-[#071930] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              <span>Questions? Contact Us</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;