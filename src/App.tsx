import { ArrowRight, Bot, Building2, DollarSign, Palette, Server, CheckCircle, Menu, X, Sparkles, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [disclosureOpen, setDisclosureOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('[data-animate]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        if (isVisible) {
          setVisibleSections((prev) => new Set(prev).add(section.id));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Building2,
      title: 'Streamlined Outsourcing Solutions',
      description: 'Outsource with confidence. We manage back-office operations, data processes, HR, and administrative workflows so your team can focus on innovation.',
    },
    {
      icon: DollarSign,
      title: 'Expert Financial Services',
      description: 'Tailored financial strategies from business forecasting and budgeting to investment planning and compliance support.',
    },
    {
      icon: Server,
      title: 'IT Infrastructure & Measurement',
      description: 'System audits, cloud setup, performance measurement, and end-to-end infrastructure management for operational excellence.',
    },
    {
      icon: Bot,
      title: 'AI-Powered Business Growth',
      description: 'Experience 110% business growth with AI. Automate tasks, generate leads, and forecast performance with intelligent tools.',
    },
    {
      icon: Palette,
      title: 'Digital Creation & Branding',
      description: 'Professional websites, logos, thumbnails, and creative assets that define your digital perception.',
    },
  ];

  const benefits = [
    'AI-Driven Growth: Innovation-powered services with measurable ROI',
    'End-to-End Solutions: From outsourcing to design, all under one roof',
    'Affordable & Scalable: Premium quality without premium pricing',
    'Trusted Expertise: Years of experience in finance, IT, and digital strategy',
    'Made in India, Built for the World: Global standards with local touch',
  ];

  const testimonials = [
    {
      quote: 'DB Enterprises helped us automate our operations and save 40% in costs — true professionals.',
      author: 'Aditya Arora',
      position: 'Advocate',
    },
    {
      quote: 'Our new website and AI tools from DB Enterprises took our sales to the next level.',
      author: 'Rahujeet Roy',
      position: 'CEO, Divyara Candle',
    },
  ];

  // function disclosureOpen(arg0: boolean): void {
  //   throw new Error('Function not implemented.');
  // }

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-gradient-to-r from-white/90 via-white/90 to-white/90 backdrop-blur-sm shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="relative">
                <Bot className="h-8 w-8 text-[#0056D2] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#7B61FF] opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#0056D2] to-[#7B61FF] bg-clip-text text-transparent transition-all duration-300 group-hover:from-[#7B61FF] group-hover:to-[#00E0FF]">
                DB Enterprises
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-[#1F2937] hover:text-[#7B61FF] transition-all duration-300 relative group">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7B61FF] to-[#00E0FF] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#benefits" className="text-[#1F2937] hover:text-[#7B61FF] transition-all duration-300 relative group">
                Why Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7B61FF] to-[#00E0FF] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#testimonials" className="text-[#1F2937] hover:text-[#7B61FF] transition-all duration-300 relative group">
                Testimonials
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7B61FF] to-[#00E0FF] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="bg-gradient-to-r from-[#0056D2] to-[#7B61FF] text-white px-6 py-2 rounded-lg hover:from-[#7B61FF] hover:to-[#00E0FF] transition-all duration-300 hover:shadow-lg hover:shadow-[#7B61FF]/30 hover:scale-105">
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 transition-transform duration-300 hover:scale-110"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white border-t overflow-hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 py-4 space-y-3">
            <a href="#services" className="block text-[#1F2937] hover:text-[#7B61FF] transition-all duration-300 hover:translate-x-2">Services</a>
            <a href="#benefits" className="block text-[#1F2937] hover:text-[#7B61FF] transition-all duration-300 hover:translate-x-2">Why Us</a>
            <a href="#testimonials" className="block text-[#1F2937] hover:text-[#7B61FF] transition-all duration-300 hover:translate-x-2">Testimonials</a>
            <a href="#contact" className="block bg-gradient-to-r from-[#0056D2] to-[#7B61FF] text-white px-6 py-2 rounded-lg hover:from-[#7B61FF] hover:to-[#00E0FF] transition-all duration-300 text-center hover:shadow-lg">
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#7B61FF]/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-[#00E0FF]/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-[#0056D2]/20 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F8FAFC] via-white to-[#00E0FF]/10">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1F2937] mb-6 leading-tight">
                Powering Business Growth with{' '}
                <span className="inline-flex items-center animate-gradient bg-gradient-to-r from-[#0056D2] via-[#7B61FF] to-[#00E0FF] bg-clip-text text-transparent bg-300% animate-shimmer">
                  AI & Innovation
                </span>
              </h1>
            </div>
            <p className="text-xl sm:text-2xl text-[#1F2937]/80 mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
              Your trusted partner for AI-driven business growth, outsourcing efficiency, financial consulting, IT solutions, and digital design services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#0056D2] to-[#7B61FF] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-[#7B61FF] hover:to-[#00E0FF] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#7B61FF]/40 group"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center border-2 border-[#7B61FF] text-[#7B61FF] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#7B61FF]/10 hover:border-[#00E0FF] hover:text-[#00E0FF] transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Floating Icons Animation */}
          <div className="absolute top-1/4 left-10 animate-float hidden lg:block">
            <Sparkles className="w-8 h-8 text-[#7B61FF] opacity-60" />
          </div>
          <div className="absolute top-1/3 right-20 animate-float-delayed hidden lg:block">
            <Bot className="w-10 h-10 text-[#00E0FF] opacity-60" />
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0056D2] via-[#7B61FF] to-[#00E0FF] overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-2xl sm:text-3xl text-white font-medium leading-relaxed animate-fade-in">
            "We don't just support your business — we help it evolve."
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" data-animate className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#0056D2] to-[#7B61FF] bg-clip-text text-transparent mb-4">Our Core Services</h2>
            <p className="text-xl text-[#1F2937]/70">Comprehensive solutions tailored to your business needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group ${
                  visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-br from-[#7B61FF]/20 to-[#00E0FF]/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-[#7B61FF]/30">
                  <service.icon className="h-8 w-8 text-[#0056D2]" />
                </div>
                <h3 className="text-xl font-bold text-[#1F2937] mb-4 group-hover:text-[#7B61FF] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#1F2937]/70 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="benefits" data-animate className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F8FAFC] to-[#7B61FF]/10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.has('benefits') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#0056D2] to-[#7B61FF] bg-clip-text text-transparent mb-4">Why Choose DB Enterprises</h2>
            <p className="text-xl text-[#1F2937]/70">Your long-term growth partner</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 hover:scale-[1.02] ${
                  visibleSections.has('benefits') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="h-6 w-6 text-[#00E0FF] flex-shrink-0 mt-1 animate-bounce-subtle" />
                <p className="text-lg text-[#1F2937]">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" data-animate className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.has('testimonials') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#0056D2] to-[#7B61FF] bg-clip-text text-transparent mb-4">What Our Clients Say</h2>
            <p className="text-xl text-[#1F2937]/70">Trusted by businesses across industries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  visibleSections.has('testimonials') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-lg text-[#1F2937]/80 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-[#1F2937]">{testimonial.author}</p>
                  <p className="text-[#1F2937]/60">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0056D2] via-[#7B61FF] to-[#00E0FF] overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-fade-in">
            Let's Build the Future Together
          </h2>
          <p className="text-xl text-white/90 mb-8 animate-fade-in animation-delay-200">
            Ready to transform your business with AI and smart solutions? Let's start a conversation.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-white text-[#7B61FF] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#F8FAFC] transition-all duration-300 hover:scale-105 hover:shadow-2xl group animate-fade-in animation-delay-400"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 text-[#7B61FF]" />
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" data-animate className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#0056D2] to-[#7B61FF] bg-clip-text text-transparent mb-12 transition-all duration-1000 ${
            visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Get in Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className={`bg-gradient-to-br from-[#7B61FF]/10 to-[#00E0FF]/10 p-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#7B61FF]/20 transition-all duration-500 hover:scale-105 border border-[#7B61FF]/20 ${
              visibleSections.has('contact') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <h3 className="text-xl font-bold text-[#1F2937] mb-4">Contact Us</h3>
              <div className="space-y-3 text-left">
                <p className="text-[#1F2937]/80">
                  <span className="font-semibold">Phone/WhatsApp:</span><br />
                  <a href="tel:+919999508755" className="text-[#0056D2] hover:underline transition-all duration-300 hover:text-[#7B61FF]">
                    +91-9999508755
                  </a>
                </p>
                <p className="text-[#1F2937]/80">
                  <span className="font-semibold">Email:</span><br />
                  <a href="mailto:info@dbenterprises.com" className="text-[#0056D2] hover:underline transition-all duration-300 hover:text-[#7B61FF]">
                    info@dbenterprisedigital.com
                  </a>
                </p>
              </div>
            </div>

            <div className={`bg-gradient-to-br from-[#00E0FF]/10 to-[#7B61FF]/10 p-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#00E0FF]/20 transition-all duration-500 hover:scale-105 border border-[#00E0FF]/20 ${
              visibleSections.has('contact') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <h3 className="text-xl font-bold text-[#1F2937] mb-4">Visit Us</h3>
              <p className="text-[#1F2937]/80 text-left">
                <span className="font-semibold">Address:</span><br />
                <p className="text-[#0056D2] transition-all duration-300 hover:text-[#7B61FF]"  rel="noopener noreferrer">
                  Plot no-68, Phase-IV, Udyog Vihar, Sector-18, Gurugram, Haryana-122018.
                </p>
              </p>
            </div>
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ${
            visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '400ms' }}>
            <a
              href="tel:+919999508755"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#00E0FF] to-[#0056D2] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-[#7B61FF] hover:to-[#00E0FF] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#00E0FF]/40"
            >
              WhatsApp Us
            </a>
            <a
              href="mailto:info@dbenterprisedigital.com"
              className="inline-flex items-center justify-center border-2 border-[#7B61FF] text-[#7B61FF] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#7B61FF]/10 hover:border-[#00E0FF] hover:text-[#00E0FF] transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>

       {/* Disclosure Section */}
<section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F8FAFC] to-[#7B61FF]/5 border-t border-[#7B61FF]/20">
  <div className="max-w-4xl mx-auto">
    <button
      onClick={() => setDisclosureOpen(prev => !prev)}
      className="w-full flex items-center justify-between p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-[#7B61FF]/20 group"
    >
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0056D2] to-[#7B61FF] flex items-center justify-center text-white font-bold text-sm">
          i
        </div>
        <div className="text-left">
          <h3 className="font-semibold text-[#1F2937]">Disclosure & Association</h3>
          <p className="text-sm text-[#1F2937]/60">Finnable Partnership Information</p>
        </div>
      </div>
      <ChevronDown
        className={`h-5 w-5 text-[#7B61FF] transition-transform duration-300 ${
          disclosureOpen ? 'rotate-180' : ''
        }`}
      />
    </button>

    {disclosureOpen && (
      <div className="mt-4 p-6 bg-white rounded-lg shadow-lg border border-[#7B61FF]/20 animate-fade-in-up">
        <div className="space-y-4 text-[#1F2937]">
          <p>
            <span className="font-semibold text-[#0056D2]">Company Association:</span>
            {' '}We hereby disclose that our company is a registered and authorized vendor and is proudly associated with Finnable.
          </p>

          <p>
            <span className="font-semibold text-[#0056D2]">Data Processing:</span>
            {' '}  As part of this association, we may receive, process, and utilize business-related data provided by Finnable strictly for operational, analytical, and service-related purposes required to run and improve our business offerings.
          </p>

          <p>
            <span className="font-semibold text-[#0056D2]">Data Protection:</span>
            {' '}All data shared is handled in compliance with applicable laws, confidentiality obligations, and data protection standards. We do not misuse, sell, or disclose such data to any unauthorized third party.
          </p>

          <div className="bg-gradient-to-r from-[#7B61FF]/10 to-[#00E0FF]/10 p-4 rounded-lg border border-[#7B61FF]/20">
            <p className="text-sm">
              <span className="font-semibold">Consent:</span>
              {' '} By using our website and services, you acknowledge and consent to this association and the lawful use of data as described above.
            </p>
          </div>
          <p className="text-xs text-[#1F2937]/60 mt-6 pt-4 border-t border-[#7B61FF]/10">
                  Terms & Conditions (TNC)
                </p>
        </div>
      </div>
    )}
  </div>
</section>


      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0 group cursor-pointer">
              <Bot className="h-8 w-8 text-[#00E0FF] transition-transform duration-300 group-hover:rotate-12" />
              <span className="text-xl font-bold">DB Enterprises</span>
            </div>
            <p className="text-gray-400 text-center md:text-right transition-colors duration-300 hover:text-gray-300">
              Empowering Businesses with Intelligence, Innovation & Impact
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2025 DB Enterprises. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
