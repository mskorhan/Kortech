import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  Shield, 
  Lock, 
  Eye, 
  FileText, 
  User, 
  Database, 
  Globe, 
  Settings, 
  Bell, 
  Clock,
  Phone,
  Mail,
  CheckCircle,
  MessageSquare
} from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white" id="privacy-policy">
      <SEOHead
        title="Privacy Policy | Computer Repair Charlotte NC Data Protection | KorTech Service"
        description="Privacy policy for Computer Repair Charlotte NC services. Learn how we protect your data during repairs. Call 704-246-7642 today!"
        canonicalUrl="/privacy-policy"
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
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="text-slate-700 font-medium">Your Privacy Matters</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Privacy Policy - Computer Repair Charlotte NC Data Protection
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
             How KorTech Service protects your personal information during Computer Repair Charlotte NC services. 
             View our <a href="/services" className="text-blue-600 hover:text-blue-800 font-medium">repair services</a>, 
             learn <a href="/about" className="text-blue-600 hover:text-blue-800 font-medium">about our company</a>, or 
             <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">contact us</a> with questions.
            </p>
           <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light mt-4">
             For privacy regulations, visit <a href="https://www.ftc.gov/legal-library/browse/rules/privacy-safeguards-rule" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">FTC Privacy & Safeguards Rule</a> 
             and <a href="https://oag.ca.gov/privacy/ccpa" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">California Consumer Privacy Act</a>.
           </p>
            
            <div className="text-sm text-slate-500">
              Last updated: January 2025
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white" id="privacy-content">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-8">
            
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-start space-x-4">
                <div className="mt-1 flex-shrink-0">
                  <Lock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Our Commitment</h3>
                  <p className="text-blue-700 mb-0">
                    KorTech Service is committed to protecting your privacy and personal information. 
                    This policy explains how we collect, use, and safeguard your data when you use our services.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <User className="h-6 w-6 text-blue-600 mr-3" />
                Information We Collect
              </h2>
            
              <div className="space-y-6">
                <div className="bg-slate-50 rounded-lg p-5 border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Personal Information</h3>
                  <p className="text-slate-600 mb-3">When you use our computer repair and IT support services, we may collect the following personal information:</p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Name and contact information (phone number, email address, mailing address)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Device information (make, model, serial number, passwords for repair purposes)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Service history and repair details</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Payment information (processed securely through third-party payment processors)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Communication records (emails, phone calls, text messages)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Business information (for commercial customers)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Emergency contact information</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-5 border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Technical Information</h3>
                  <p className="text-slate-600 mb-3">We may collect technical information from your devices during the repair process:</p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Device specifications and configuration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Software versions and installed applications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Error logs and diagnostic information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Network and connectivity information</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-5 border-l-4 border-purple-500">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Website and Digital Marketing Information</h3>
                  <p className="text-slate-600 mb-3">When you visit our website, we may collect:</p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>IP address and browser information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Pages visited and time spent on our site</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Referral sources and search terms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Cookies and similar tracking technologies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Google Ads interaction data (for advertising compliance)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Social media engagement metrics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h4 className="text-lg font-semibold text-blue-800 mb-2">Google Ads Compliance</h4>
              <p className="text-blue-700 mb-0">
                We use Google Ads to promote our computer repair services. We collect and use data in compliance with Google Ads policies, 
                including proper consent mechanisms and data handling procedures for advertising purposes.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <Settings className="h-6 w-6 text-blue-600 mr-3" />
                How We Use Your Information
              </h2>
            
              <p className="text-slate-600 mb-4">We use your information for the following purposes:</p>
            
              <div className="space-y-6">
                <div className="bg-slate-50 rounded-lg p-5">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Service Delivery</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Diagnosing and repairing your devices</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Communicating about repair status and updates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Processing payments and managing billing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Providing customer support and technical assistance</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-5">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Business Operations</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Maintaining service records and warranty information</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Improving our services and customer experience</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Complying with legal and regulatory requirements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Preventing fraud and ensuring security</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-5">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Marketing and Communications (Google Ads Compliant)</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Sending service reminders and maintenance notifications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Providing information about new services and promotions (with your consent)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Conducting customer satisfaction surveys</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Targeted advertising through Google Ads and other platforms</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Remarketing to previous website visitors (with proper consent)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <Shield className="h-6 w-6 text-blue-600 mr-3" />
                Data Protection and Security
              </h2>
            
              <p className="text-slate-600 mb-4">We implement appropriate technical and organizational measures to protect your personal information:</p>
            
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center">
                    <Lock className="h-5 w-5 text-blue-600 mr-2" />
                    Physical Security
                  </h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Secure facility with restricted access</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Locked storage for devices and documentation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Surveillance systems and security protocols</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center">
                    <Database className="h-5 w-5 text-green-600 mr-2" />
                    Digital Security
                  </h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Encrypted data transmission and storage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Secure payment processing systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Regular security updates and monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Access controls and authentication measures</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center">
                    <FileText className="h-5 w-5 text-purple-600 mr-2" />
                    Data Handling
                  </h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Secure data wiping procedures for repaired devices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Confidential handling of personal and business data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Staff training on privacy and security protocols</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <Globe className="h-6 w-6 text-blue-600 mr-3" />
                Data Sharing and Disclosure
              </h2>
            
              <p className="text-slate-600 mb-4">We do not sell, rent, or trade your personal information. We may share your information only in the following circumstances:</p>
            
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Service Providers</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Third-party payment processors for billing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Shipping companies for device transport</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Parts suppliers for warranty claims</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Cloud storage providers for secure data backup</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Legal Requirements and Business Transfers</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>When required by law or legal process</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>To protect our rights and property</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>To prevent fraud or illegal activities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>In emergency situations to protect safety</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>In connection with business transfers or acquisitions</span>
                    </li>
                  </ul>
                </div>
              </div>
            
              <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                <h4 className="text-lg font-semibold text-yellow-800 mb-2">Google Ads Data Sharing</h4>
                <p className="text-yellow-700 mb-0">
                  We may share aggregated, non-personally identifiable information with Google Ads for advertising optimization. 
                  Personal information is never shared without explicit consent or legal requirement.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <User className="h-6 w-6 text-blue-600 mr-3" />
                Your Rights and Choices
              </h2>
            
              <p className="text-slate-600 mb-4">You have the following rights regarding your personal information:</p>
            
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Access and Correction</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Request access to your personal information</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Correct inaccurate or incomplete information</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Update your contact preferences</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Data Control</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Request deletion of your personal information (subject to legal requirements)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Opt-out of marketing communications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Restrict processing of your information</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Communication Preferences</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Choose how we contact you (phone, email, text)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Unsubscribe from promotional communications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Set preferences for service notifications</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Advertising Choices</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Opt-out of personalized Google Ads</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Control cookie preferences</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Manage remarketing settings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Request removal from advertising lists</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <Clock className="h-6 w-6 text-blue-600 mr-3" />
                Data Retention
              </h2>
            
              <p className="text-slate-600 mb-4">We retain your personal information for the following periods:</p>
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span><strong>Service records:</strong> 7 years for warranty and legal purposes</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span><strong>Payment information:</strong> As required by financial regulations</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span><strong>Marketing data:</strong> Until you opt-out or request deletion</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span><strong>Website data:</strong> 2 years for analytics and improvement</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span><strong>Google Ads data:</strong> As per Google's data retention policies</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <Globe className="h-6 w-6 text-blue-600 mr-3" />
                Cookies and Tracking (Google Ads Compliance)
              </h2>
            
              <p className="text-slate-600 mb-4">Our website uses cookies and similar technologies to:</p>
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200 mb-6">
                <ul className="space-y-2 text-slate-600 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Remember your preferences and settings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Analyze website traffic and usage patterns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Improve website functionality and user experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Provide relevant content and advertisements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Track Google Ads performance and conversions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Enable remarketing campaigns</span>
                  </li>
                </ul>
              </div>
            
              <p className="text-slate-600 mb-4">Types of cookies we use:</p>
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <p className="font-semibold text-blue-800">Essential cookies</p>
                    <p className="text-sm text-blue-700">Required for website functionality</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                    <p className="font-semibold text-green-800">Analytics cookies</p>
                    <p className="text-sm text-green-700">Help us understand website usage</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-100">
                    <p className="font-semibold text-purple-800">Advertising cookies</p>
                    <p className="text-sm text-purple-700">Used for Google Ads and remarketing</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg border border-orange-100">
                    <p className="font-semibold text-orange-800">Preference cookies</p>
                    <p className="text-sm text-orange-700">Remember your settings and preferences</p>
                  </div>
                </div>
              </div>
            
              <p className="text-slate-600 mt-4">You can control cookies through your browser settings, but some website features may not function properly if cookies are disabled.</p>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <Globe className="h-6 w-6 text-blue-600 mr-3" />
                Third-Party Services
              </h2>
            
              <p className="text-slate-600 mb-4">Our website and services may include links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these external services. Please review their privacy policies before providing any information.</p>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <Shield className="h-6 w-6 text-blue-600 mr-3" />
                Children's Privacy
              </h2>
            
              <p className="text-slate-600 mb-4">Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.</p>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <Bell className="h-6 w-6 text-blue-600 mr-3" />
                California Privacy Rights (CCPA)
              </h2>
            
              <p className="text-slate-600 mb-4">If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):</p>
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Right to know what personal information is collected</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Right to delete personal information</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Right to opt-out of the sale of personal information</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Right to non-discrimination for exercising privacy rights</span>
                  </li>
                </ul>
              </div>
            
              <p className="text-slate-600 mt-4"><strong>Note:</strong> We do not sell personal information to third parties.</p>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <Globe className="h-6 w-6 text-blue-600 mr-3" />
                International Data Transfers
              </h2>
            
              <p className="text-slate-600 mb-4">Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with applicable privacy laws.</p>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <Settings className="h-6 w-6 text-blue-600 mr-3" />
                Changes to This Policy
              </h2>
            
              <p className="text-slate-600 mb-4">We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes by:</p>
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Posting the updated policy on our website</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Sending email notifications to registered customers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Providing notice during your next service visit</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <Shield className="h-6 w-6 text-blue-600 mr-3" />
                Compliance and Certifications
              </h2>
            
              <p className="text-slate-600 mb-4">Our privacy practices comply with:</p>
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Google Ads policies and requirements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>California Consumer Privacy Act (CCPA)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>General Data Protection Regulation (GDPR) principles</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Federal Trade Commission (FTC) guidelines</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Industry best practices for data protection</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <Phone className="h-6 w-6 text-blue-600 mr-3" />
                Contact Information
              </h2>
            
              <p className="text-slate-600 mb-4">If you have questions about this privacy policy or our data practices, please contact us:</p>
            
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-6 md:mb-0">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">KorTech Service</h3>
                    <p className="text-slate-600">1721 Sardis Rd N, Suite 7A</p>
                    <p className="text-slate-600">Charlotte, NC 28270</p>
                  </div>
                  <div className="space-y-3">
                    <a href="tel:704-246-7642" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                      <Phone className="h-5 w-5 mr-2" />
                      <span>704-246-7642</span>
                    </a>
                    <a href="sms:980-888-5300" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                      <MessageSquare className="h-5 w-5 mr-2" />
                      <span>980-888-5300 (Text)</span>
                    </a>
                    <a href="mailto:info&#64;kortechservice&#46;com" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                      <Mail className="h-5 w-5 mr-2" />
                      <span>info&#64;kortechservice&#46;com</span>
                    </a>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-slate-500 mr-2" />
                    <span className="text-slate-600"><strong>Hours:</strong> Mon-Fri 9AM-6PM, Sat 11AM-4PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-start space-x-4">
                <div className="mt-1 flex-shrink-0">
                  <Eye className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Transparency Commitment</h3>
                  <p className="text-green-700 mb-0">
                    We believe in transparency about how we handle your data. If you have any concerns 
                    or questions about our privacy practices, we encourage you to contact us directly.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-500">
              This privacy policy is effective as of January 2025 and applies to all information collected by KorTech Service.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;