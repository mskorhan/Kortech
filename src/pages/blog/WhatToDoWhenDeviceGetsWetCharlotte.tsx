import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import {
  Calendar,
  User,
  ArrowRight,
  Droplets,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Phone
} from 'lucide-react';

const WhatToDoWhenDeviceGetsWetCharlotte = () => {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "What to Do When Your Phone or Laptop Gets Wet - Charlotte Emergency Guide",
      "description": "Dropped your phone in water or spilled a drink on your laptop? Here's exactly what to do in the first 24 hours, and the common mistakes that make water damage worse.",
      "image": "https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg",
      "author": {
        "@type": "Organization",
        "name": "KorTech Service"
      },
      "publisher": {
        "@type": "Organization",
        "name": "KorTech Service",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.kortechservice.com/transparent-logo-1.png"
        }
      },
      "datePublished": "2026-07-27",
      "dateModified": "2026-07-27"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="What to Do When Your Phone or Laptop Gets Wet | KorTech"
        description="Dropped your phone in water or spilled a drink on your laptop? Here's what to do in the first 24 hours, and the mistakes that make it worse."
        keywords="phone water damage Charlotte, laptop spill repair, water damaged phone what to do, liquid damage repair Charlotte NC, wet phone repair"
        canonicalUrl="/blog/what-to-do-when-device-gets-wet-charlotte"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
              <Droplets className="h-5 w-5 text-blue-600" />
              <span className="text-blue-700 font-medium">Emergency Repair Guide</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              What to Do When Your Phone or Laptop Gets Wet
              <span className="block text-blue-600 text-2xl lg:text-3xl mt-2">A Charlotte Emergency Guide</span>
            </h1>

            <div className="flex items-center justify-center space-x-6 text-sm text-slate-500 mb-8">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>July 27, 2026</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>KorTech Service Team</span>
              </div>
              <div>
                <span>7 min read</span>
              </div>
            </div>

            <img
              src="https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg"
              alt="Smartphone sitting in a puddle of water, illustrating the moment before emergency water damage repair steps should begin"
              className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg mb-8"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-slate-700">
              A dropped phone in the pool, a spilled coffee on the keyboard, a laptop bag left out in a Charlotte summer thunderstorm — liquid damage is one of the most common emergencies we see. What you do in the next few minutes matters more than almost anything a repair shop can do later, so here's exactly what to do (and what not to do) if it just happened to you.
            </p>

            <div className="bg-red-50 rounded-xl p-6 border border-red-100 my-8">
              <h2 className="text-xl font-bold text-red-800 mb-2 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
                Do This Right Now
              </h2>
              <p className="text-red-700 mb-0">
                Power the device off immediately and don't turn it back on. Don't plug it in to charge. Don't press any buttons to "check" if it still works. Every one of those actions risks pushing a short circuit through components that are still wet. Get it to us within 24 hours for the best chance of a full recovery.
              </p>
            </div>

            <h2>Why the First Few Minutes Matter So Much</h2>

            <p>
              Water damage rarely destroys a device on contact. What actually causes permanent failure is corrosion and short-circuiting that happens over the following hours, especially if the device is still powered on. A phone or laptop that gets turned off fast and dried out properly often comes back to life completely fine. One that gets left on, charged "just to check," or dried with a hair dryer usually doesn't.
            </p>

            <h2>Step-by-Step: The First 24 Hours</h2>

            <ol>
              <li><strong>Power it off immediately.</strong> If it's already off, don't turn it on to see what happens.</li>
              <li><strong>Remove the battery if you can.</strong> Some laptops and older phones allow this; most modern phones don't, which is fine — just leave it off.</li>
              <li><strong>Unplug it from any charger or cable</strong> and don't reconnect one until a technician has checked it.</li>
              <li><strong>Wipe off visible surface water</strong> with a soft, dry cloth. Don't shake the device — that can push liquid further into the internals.</li>
              <li><strong>Bring it in within 24 hours.</strong> The longer liquid sits inside the case, especially anything other than plain fresh water, the more corrosion has time to set in.</li>
            </ol>

            <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-100 my-4">
              <div className="flex items-start">
                <XCircle className="h-6 w-6 text-yellow-700 mr-3 mt-1 flex-shrink-0" />
                <div className="text-yellow-800 mb-0">
                  <strong>Common mistakes that make it worse:</strong>
                  <ul className="mt-2 mb-0">
                    <li>Putting it in rice — rice dust gets into ports and doesn't actually pull moisture out of internal components</li>
                    <li>Using a hair dryer or other heat source — heat can warp plastic components and push moisture deeper inside</li>
                    <li>Charging it "to see if it still works" — this is the single most common cause of a repairable device becoming unrepairable</li>
                    <li>Waiting a few days to see if it dries out on its own</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>Does the Type of Liquid Matter?</h2>

            <p>
              Yes, quite a bit:
            </p>

            <ul>
              <li><strong>Fresh water</strong> (rain, a dropped glass of water, pool water without heavy chlorine) causes the least corrosive damage and has the highest recovery rate, especially if the device is powered off quickly.</li>
              <li><strong>Salt water</strong> is significantly more corrosive and time-sensitive — every hour that passes increases the risk of internal corrosion that spreads.</li>
              <li><strong>Sugary or acidic liquids</strong> like coffee, soda, and juice leave a sticky residue on top of the moisture itself, which requires more thorough cleaning of the internal components even after everything dries.</li>
            </ul>

            <p>
              Whatever the liquid, the immediate steps are the same: power off, don't charge, don't apply heat, get it looked at quickly.
            </p>

            <h2>What Actually Happens During Professional Water Damage Repair</h2>

            <p>
              At our Charlotte repair center, water damage repair involves:
            </p>

            <ul>
              <li>Full disassembly of the device to access the internal components</li>
              <li>Ultrasonic cleaning to remove moisture, residue, and early corrosion from the circuit board</li>
              <li>Inspection under magnification for corroded pins, connectors, or damaged traces</li>
              <li>Component-level repair or replacement of anything that didn't survive, from swollen batteries to corroded charging ports</li>
              <li>Reassembly and multi-point testing before the device goes back to you</li>
            </ul>

            <p>
              This is a different process than the informal "bag of rice" approach, and it's why devices that come in quickly, powered off, have a real chance of a full recovery — even after a serious spill.
            </p>

            <h2>How Long Does It Take, and What Does It Cost?</h2>

            <p>
              Water damage repairs typically take 2-5 business days, since proper cleaning and drying can't be rushed if you want a reliable result. Every water damage repair starts with a free diagnostic, so you'll know exactly what's involved and what it costs before any work begins — there's no guessing or surprise bill. We also stand behind the parts we install with a 14-day limited warranty covering manufacturing defects (this doesn't cover a repeat liquid or drop incident, for obvious reasons).
            </p>

            <div className="bg-green-50 rounded-xl p-6 border border-green-100 my-8">
              <h3 className="text-xl font-bold text-green-800 mb-2 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                The Short Version
              </h3>
              <ul className="text-green-700 mb-0 space-y-2">
                <li>Turn it off. Keep it off.</li>
                <li>Don't charge it, don't heat it, don't shake it.</li>
                <li>Get it to a repair shop within 24 hours if at all possible.</li>
                <li>The type of liquid affects urgency — salt water and sugary drinks are more time-sensitive than plain water.</li>
                <li>A free diagnostic will tell you exactly what's recoverable before you spend anything.</li>
              </ul>
            </div>

            <h2>Devices We Regularly Recover From Water Damage</h2>

            <p>
              We see liquid damage across almost every category of device: smartphones dropped in pools, sinks, or toilets; laptops with a spilled drink on the keyboard; tablets left out in the rain; and gaming consoles splashed by a curious pet or a knocked-over cup. The repair approach is the same regardless of device — get it powered off and to us quickly.
            </p>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 my-8">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Just Had a Water Damage Emergency?</h3>
              <p className="text-blue-700 mb-4">
                Power off your device now and bring it in for a free diagnostic. Time matters — the sooner we see it, the better your chances of a full recovery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:704-246-7642"
                  data-track-source="blog_water_damage_inline"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-base flex items-center justify-center space-x-2 transition-all duration-300"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call 704-246-7642</span>
                </a>
                <a
                  href="/water-damage-repair"
                  className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl font-semibold text-base flex items-center justify-center space-x-2 transition-all duration-300"
                >
                  <Droplets className="h-5 w-5" />
                  <span>View Water Damage Repair Services</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Related Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/blog/signs-hard-drive-failing-data-recovery-tips" className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  Signs Your Hard Drive is Failing - Data Recovery Tips Charlotte
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Warning signs of imminent drive failure and emergency data recovery steps from Charlotte's data recovery experts.
                </p>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>January 5, 2025</span>
                  <div className="flex items-center space-x-1 text-blue-600 group-hover:translate-x-1 transition-transform">
                    <span className="font-medium">Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/blog/what-is-pcb-micro-soldering" className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  What is PCB-Level Micro-Soldering? Expert Guide to Circuit Board Repair
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  How component-level repair can save devices with corroded connections that standard repairs can't fix.
                </p>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>January 25, 2025</span>
                  <div className="flex items-center space-x-1 text-blue-600 group-hover:translate-x-1 transition-transform">
                    <span className="font-medium">Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/blog/how-to-know-when-to-replace-phone-battery" className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  How to Know When to Replace Your Phone Battery - 7 Warning Signs
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Learn the 7 critical warning signs that indicate it's time to replace your smartphone battery.
                </p>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>January 20, 2025</span>
                  <div className="flex items-center space-x-1 text-blue-600 group-hover:translate-x-1 transition-transform">
                    <span className="font-medium">Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Water Damaged Device? Don't Wait.
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Free diagnostics, fast turnaround, and technicians who see this every week in Charlotte, Matthews, Mint Hill, and Indian Trail.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:704-246-7642"
              data-track-source="blog_water_damage_cta"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300"
            >
              <Phone className="h-6 w-6" />
              <span>Call 704-246-7642</span>
            </a>
            <a
              href="/water-damage-repair"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300"
            >
              <Droplets className="h-6 w-6" />
              <span>View Water Damage Repair Services</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatToDoWhenDeviceGetsWetCharlotte;
