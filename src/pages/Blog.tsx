import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { 
  Calendar, User, ArrowRight, BookOpen, Gamepad2, HardDrive, Shield, 
  Monitor, AlertTriangle, Smartphone, Cpu, Tv, Database, Zap, Wrench
} from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    { 
      slug: 'how-to-fix-broken-ps5-hdmi-port',
      title: 'How to Fix PS5 HDMI Port No Signal After Drop - Complete Repair Guide',
      excerpt: 'Step-by-step guide to diagnosing PS5 HDMI port damage after dropping your console. Learn when DIY fixes work and when professional PS5 HDMI repair in Charlotte is needed.',
      date: '2025-01-15',
      author: 'KorTech Service Team',
      category: 'Gaming Console Repair',
      icon: Gamepad2,
      readTime: '5 min read',
      featured: true,
      path: '/blog/how-to-fix-broken-ps5-hdmi-port'
    },
    {
     slug: 'best-ssd-upgrade-old-laptop-2025',
      title: 'Best SSD Upgrade for Old Laptop 2025 - Speed Up Your Computer 5x Faster',
     excerpt: 'Transform your slow laptop into a speed machine with the right SSD upgrade. Complete guide to choosing and installing SSDs for maximum performance boost in Charlotte, Matthews, Mint Hill, and Indian Trail.',
      date: '2025-01-12',
      author: 'KorTech Service Team',
      category: 'Hardware Upgrades',
      icon: HardDrive,
      readTime: '7 min read', 
      featured: true,
      path: '/blog/best-ssd-upgrade-old-laptop-2025'
    },
    {
      slug: 'steps-to-remove-virus-from-windows-pc',
      title: 'How to Remove Viruses from Windows PC - Charlotte Expert Guide 2025',
      excerpt: 'Complete step-by-step guide to removing viruses, malware, and ransomware from your Windows PC. Professional techniques from Charlotte\'s computer security experts.',
      date: '2025-01-10', 
      author: 'KorTech Service Team',
      category: 'Security & Malware',
      icon: Shield,
      readTime: '6 min read',
      featured: false,
      path: '/blog/steps-to-remove-virus-from-windows-pc'
    },
    {
      slug: 'custom-gaming-pc-build-charlotte-2025',
      title: 'Custom Gaming PC Build Charlotte 2025 - Best Components Under $1500',
      excerpt: 'Build the perfect gaming PC in Charlotte with our 2025 component guide. Expert recommendations for budget gaming builds under $1500 with maximum performance for Charlotte gamers.',
      date: '2025-01-08',
      author: 'KorTech Service Team',
      category: 'Gaming PCs',
      icon: Monitor,
      readTime: '10 min read', 
      featured: true,
      path: '/blog/custom-gaming-pc-build-guide-2025'
    },
    {
      slug: 'signs-hard-drive-failing-data-recovery-tips',
      title: 'Signs Your Hard Drive is Failing - Data Recovery Tips Charlotte',
      excerpt: 'Is your hard drive making clicking or grinding noises? Learn the warning signs of imminent drive failure and emergency data recovery steps from Charlotte\'s data recovery experts.',
      date: '2025-01-05',
      author: 'KorTech Service Team',
      category: 'Data Recovery',
      icon: AlertTriangle,
      readTime: '8 min read',
      featured: false,
      path: '/blog/signs-hard-drive-failing-data-recovery-tips'
    },
    {
      slug: 'how-to-know-when-to-replace-phone-battery',
      title: 'How to Know When to Replace Your Phone Battery - 7 Warning Signs',
      excerpt: 'Learn the 7 critical warning signs that indicate it\'s time to replace your smartphone battery. Expert advice from Charlotte\'s trusted phone repair specialists.',
      date: '2025-01-20',
      author: 'KorTech Service Team',
      category: 'Smartphone Repair',
      icon: Smartphone,
      readTime: '8 min read', 
      featured: true,
      path: '/blog/how-to-know-when-to-replace-phone-battery'
    },
    {
      slug: 'what-is-pcb-micro-soldering',
      title: 'What is PCB-Level Micro-Soldering? Expert Guide to Circuit Board Repair',
      excerpt: 'Learn what PCB-level micro-soldering is, how it works, and why it\'s crucial for modern electronics repair. Expert insights from Charlotte\'s electronics repair specialists.',
      date: '2025-01-25',
      author: 'KorTech Service Team',
      category: 'Electronics Repair',
      icon: Cpu,
      readTime: '10 min read', 
      featured: false,
      path: '/blog/what-is-pcb-micro-soldering'
    },
    {
      slug: 'top-5-signs-smart-tv-needs-repair',
      title: 'Top 5 Signs Your Smart TV Needs Repair - Expert Troubleshooting Guide',
      excerpt: 'Discover the top 5 warning signs that your smart TV needs professional repair. Expert troubleshooting tips from Charlotte\'s TV repair specialists.',
      date: '2025-01-30',
      author: 'KorTech Service Team',
      category: 'TV Repair',
      icon: Tv,
      readTime: '7 min read', 
      featured: false,
      path: '/blog/top-5-signs-smart-tv-needs-repair'
    },
    {
      slug: 'data-recovery-charlotte-2025',
      title: 'Data Recovery Services in Charlotte - How to Recover Lost Files in 2025',
      excerpt: 'Expert guide to data recovery options in Charlotte, NC. Learn how to recover lost files from failed hard drives, SSDs, and storage devices with professional help in Charlotte, Matthews, Mint Hill, and Indian Trail.',
      date: '2025-02-05',
      author: 'KorTech Service Team',
      category: 'Data Recovery',
      icon: Database,
      readTime: '9 min read', 
      featured: false,
      path: '/blog/data-recovery-charlotte-2025'
    },
    {
      slug: 'laptop-screen-repair-guide-charlotte',
      title: 'Laptop Screen Repair Guide - Options for Charlotte Residents',
      excerpt: 'Complete guide to laptop screen repair options in Charlotte, Matthews, and Mint Hill. Compare costs, repair times, and quality considerations for all laptop brands.',
      date: '2025-01-18',
      author: 'KorTech Service Team',
      category: 'Laptop Repair',
      icon: Monitor,
      readTime: '8 min read',
      featured: false,
      path: '/blog/laptop-screen-repair-guide-charlotte'
    },
    {
      slug: 'nintendo-switch-repair-guide',
      title: 'Nintendo Switch Repair Guide - Common Issues and Solutions',
      excerpt: 'Comprehensive guide to fixing common Nintendo Switch problems including Joy-Con drift, screen issues, and battery problems for Charlotte gamers.',
      date: '2025-01-05',
      author: 'KorTech Service Team',
      category: 'Gaming Console Repair',
      icon: Gamepad2,
      readTime: '7 min read',
      featured: false,
      path: '/blog/nintendo-switch-repair-guide'
    },
    {
      slug: 'xbox-hdmi-repair-guide',
      title: 'Xbox Series X HDMI Port Repair - DIY vs Professional Fix',
      excerpt: 'Complete guide to Xbox Series X HDMI port issues, repair options, and when to seek professional help in Charlotte and surrounding areas.',
      date: '2025-01-10',
      author: 'KorTech Service Team',
      category: 'Gaming Console Repair',
      icon: Wrench,
      readTime: '6 min read',
      featured: false,
      path: '/blog/xbox-hdmi-repair-guide'
    },
    {
      slug: 'virus-removal-guide-charlotte',
      title: 'Complete Virus Removal Guide for Charlotte Residents - 2025 Edition',
      excerpt: 'Step-by-step guide to removing viruses, malware, and ransomware from your computer. Expert tips from Charlotte\'s computer security specialists.',
      date: '2025-01-28',
      author: 'KorTech Service Team',
      category: 'Security & Malware',
      icon: Shield,
      readTime: '9 min read',
      featured: false,
      path: '/blog/virus-removal-guide-charlotte'
    }
  ];

  const categories = [
    'All Posts',
    'Gaming Console Repair',
    'Hardware Upgrades',
    'Security & Malware',
    'Gaming PCs',
    'Data Recovery'
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "KorTech Service Blog",
      "description": "Expert computer repair tips, guides, and tech insights from Charlotte's trusted IT professionals",
      "url": "https://kortechservice.com/blog",
      "publisher": {
        "@type": "Organization",
        "name": "KorTech Service",
        "logo": {
          "@type": "ImageObject",
          "url": "https://kortechservice.com/transparent-logo-1.png"
        }
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white" id="blog-page">
      <SEOHead
        title="Computer Repair Charlotte NC Blog | Expert Tech Tips & Repair Guides | KorTech Service"
        description="Expert Computer Repair Charlotte NC tips, gaming console guides & tech insights from trusted IT professionals. Call 704-246-7642 today!"
        canonicalUrl="/blog"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20 relative overflow-hidden" id="blog-hero">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <BookOpen className="h-5 w-5 text-blue-300" />
              <span className="text-white font-medium">Tech Tips & Guides</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Computer Repair Charlotte NC Blog - Expert Tech Tips & Repair Guides
            </h1>
            
            <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Expert computer repair tips, gaming console guides, and tech insights from Charlotte's most trusted IT professionals. 
              Visit our <a href="/services" className="text-blue-300 hover:text-white font-medium">services page</a>, 
              <a href="/contact" className="text-blue-300 hover:text-white font-medium">contact us</a> for personalized help, or 
              learn <a href="/about" className="text-blue-300 hover:text-white font-medium">about our expertise</a>.
            </p>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed mt-4">
              For additional tech resources, visit <a href="https://www.pcmag.com/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white font-medium">PC Magazine</a> 
              and <a href="https://www.techrepublic.com/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white font-medium">TechRepublic</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-slate-50" id="featured-posts">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Featured Articles</h2>
            <p className="text-lg text-slate-600">
              Latest tech tips and repair guides from our experts
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {blogPosts.filter(post => post.featured).slice(0, 2).map((post, index) => (
              <Link
                key={index}
                to={post.path}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <post.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-blue-600">{post.category}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-blue-600 group-hover:translate-x-1 transition-transform">
                      <span className="font-medium">Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-white" id="all-posts">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">All Articles</h2>
            <p className="text-lg text-slate-600">
              Browse our complete collection of tech guides and repair tips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={index}
                to={post.path}
                className="bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 group overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                      <post.icon className="h-4 w-4 text-slate-600" />
                    </div>
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-slate-900 text-white" id="blog-newsletter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <BookOpen className="h-5 w-5 text-blue-300" />
              <span className="text-white font-medium">Stay Updated</span>
            </div>
            
            <h2 className="text-3xl font-bold">
              Get Tech Tips & Repair Guides
            </h2>
            
            <p className="text-xl text-gray-300">
              Subscribe to receive the latest computer repair tips, gaming console guides, 
              and tech insights directly from our Charlotte experts.
            </p>
            
            <div className="max-w-md mx-auto">
              <a
                href="mailto:info@kortechservice.com?subject=Blog Newsletter Subscription"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                <span>Subscribe to Updates</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;