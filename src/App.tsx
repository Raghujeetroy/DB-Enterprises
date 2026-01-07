import {
  ArrowRight, Bot, Building2, DollarSign, Palette, Server,
  CheckCircle, Menu, X, Sparkles, ChevronDown, ArrowLeft,
  Send, AlertCircle, CheckIcon
} from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [disclosureOpen, setDisclosureOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', message: ''
  });
  const [formStatus, setFormStatus] = useState('idle');
  const [formError, setFormError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      document.querySelectorAll('[data-animate]').forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setVisibleSections(prev => new Set(prev).add(section.id));
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string) =>
    phone.replace(/\D/g, '').length >= 10;

  const handleFormChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setFormError('');
    setSuccessMessage('');

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setFormError('Please fill in all required fields.');
      setFormStatus('error');
      return;
    }

    if (!validateEmail(formData.email)) {
      setFormError('Please enter a valid email address.');
      setFormStatus('error');
      return;
    }

    if (!validatePhone(formData.phone)) {
      setFormError('Please enter a valid phone number.');
      setFormStatus('error');
      return;
    }

    setFormStatus('loading');

    // ✅ Fake submit (no backend)
    setTimeout(() => {
      setFormStatus('success');
      setSuccessMessage('Thank you! Your message has been sent successfully.');
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 1200);
  };

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
      author: 'Anita Sharma',
      position: 'CEO, NeoTech Systems',
    },
    {
      quote: 'Our new website and AI tools from DB Enterprises took our sales to the next level.',
      author: 'Rahul Mehta',
      position: 'FinSmart Solutions',
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-gradient-to-r from-white/90 via-white/90 to-white/90 backdrop-blur-sm shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button onClick={() => setCurrentPage('home')} className="flex items-center space-x-2 group cursor-pointer">
              <div className="relative">
                <Bot className="h-8 w-8 text-[#0056D2] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#7B61FF] opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#0056D2] to-[#7B61FF] bg-clip-text text-transparent transition-all duration-300 group-hover:from-[#7B61FF] group-hover:to-[#00E0FF]">
                DB Enterprises
              </span>
            </button>

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

      {currentPage === 'privacy' || currentPage === 'terms' ? (
        <>
          {/* Privacy Policy or Terms Page */}
          <div className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-br from-white via-[#F8FAFC] to-white">
            <div className="max-w-4xl mx-auto">
              <button
                onClick={() => setCurrentPage('home')}
                className="flex items-center space-x-2 text-[#0056D2] hover:text-[#7B61FF] transition-all duration-300 mb-8 group"
              >
                <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1 duration-300" />
                <span>Back to Home</span>
              </button>

              {currentPage === 'privacy' && (
              <div className="bg-white p-8 rounded-xl shadow-lg border border-[#7B61FF]/20 animate-fade-in-up">
                <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#0056D2] to-[#7B61FF] bg-clip-text text-transparent mb-2">
                  Privacy Policy
                </h1>
                <p className="text-[#1F2937]/60 mb-8">Last Updated: January 5, 2026</p>

                <div className="space-y-8 text-[#1F2937]">
                  <p className="text-lg leading-relaxed">
                    This Privacy Policy describes how DB Enterprises collects, uses, stores, shares, and protects your information when you visit or use our website or services.
                  </p>

                  <div>
                    <h2 className="text-2xl font-bold text-[#0056D2] mb-4">1. Interpretation and Definitions</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-[#1F2937] mb-2">Interpretation</h3>
                        <p className="text-[#1F2937]/80">Words with capitalized initials have meanings defined below. These definitions apply whether they appear in singular or plural.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1F2937] mb-2">Definitions</h3>
                        <ul className="space-y-2 text-[#1F2937]/80">
                          <li><span className="font-semibold">Company / We / Us / Our</span> refers to DB Enterprises.</li>
                          <li><span className="font-semibold">Website</span> refers to https://dbenterprisedigital.com</li>
                          <li><span className="font-semibold">User / You</span> means any individual or entity accessing or using our Services.</li>
                          <li><span className="font-semibold">Services</span> refers to all digital marketing, consulting, website, branding, and related services offered by DB Enterprises.</li>
                          <li><span className="font-semibold">Personal Data</span> means information that identifies or can identify an individual.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[#0056D2] mb-4">2. The Company and the Services Offered by the Company</h2>
                    <p className="text-[#1F2937]/80 mb-4">DB Enterprises is a digital services provider offering services including but not limited to:</p>
                    <ul className="space-y-2 text-[#1F2937]/80 ml-4">
                      <li>• Digital marketing</li>
                      <li>• Website development</li>
                      <li>• Branding & design</li>
                      <li>• Consulting</li>
                      <li>• Online business solutions</li>
                    </ul>
                    <p className="text-[#1F2937]/80 mt-4">Services may change, expand, or be modified over time without prior notice.</p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[#0056D2] mb-4">3. Information the Company Collects and Shares</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-[#1F2937] mb-2">a) Information You Provide</h3>
                        <ul className="space-y-1 text-[#1F2937]/80 ml-4">
                          <li>• Name</li>
                          <li>• Email address</li>
                          <li>• Phone number</li>
                          <li>• Business details</li>
                          <li>• Any information submitted via forms, emails, WhatsApp, or calls</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1F2937] mb-2">b) Automatically Collected Information</h3>
                        <ul className="space-y-1 text-[#1F2937]/80 ml-4">
                          <li>• IP address</li>
                          <li>• Browser type</li>
                          <li>• Device information</li>
                          <li>• Pages visited</li>
                          <li>• Cookies and usage data</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1F2937] mb-2">c) Information Sharing</h3>
                        <ul className="space-y-1 text-[#1F2937]/80 ml-4">
                          <li>• We do not sell your personal data.</li>
                          <li>• We may share information only with trusted service providers (hosting, analytics, payment processors)</li>
                          <li>• Legal or government authorities if required by law</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[#0056D2] mb-4">4. Information Storage and Data Security</h2>
                    <ul className="space-y-2 text-[#1F2937]/80">
                      <li>• Data is stored on secure servers hosted by trusted third-party providers.</li>
                      <li>• We use reasonable administrative, technical, and physical safeguards.</li>
                      <li>• No system is 100% secure; however, we take all commercially reasonable measures.</li>
                      <li>• Data may be stored within or outside India, depending on infrastructure providers.</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[#0056D2] mb-4">5. Why the Company Collects Your Information</h2>
                    <p className="text-[#1F2937]/80 mb-4">We collect information to:</p>
                    <ul className="space-y-1 text-[#1F2937]/80 ml-4">
                      <li>• Provide and improve our services</li>
                      <li>• Communicate with you</li>
                      <li>• Process payments and contracts</li>
                      <li>• Send updates, offers, or service-related notices</li>
                      <li>• Comply with legal obligations</li>
                      <li>• Prevent fraud or misuse</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[#0056D2] mb-4">6. Export or Deletion of Your Information</h2>
                    <p className="text-[#1F2937]/80 mb-4">You may request:</p>
                    <ul className="space-y-2 text-[#1F2937]/80 ml-4">
                      <li>• A copy of your stored personal data</li>
                      <li>• Correction or deletion of your data</li>
                    </ul>
                    <p className="text-[#1F2937]/80 mt-4">Requests can be sent to the contact details mentioned below. We may retain certain data if required by law or for legitimate business purposes.</p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[#0056D2] mb-4">7. Requirement for Availing Our Services</h2>
                    <p className="text-[#1F2937]/80 mb-4">Providing certain personal information is mandatory to:</p>
                    <ul className="space-y-1 text-[#1F2937]/80 ml-4">
                      <li>• Enter into service agreements</li>
                      <li>• Receive services</li>
                      <li>• Process payments</li>
                    </ul>
                    <p className="text-[#1F2937]/80 mt-4">Failure to provide required information may result in inability to deliver services.</p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[#0056D2] mb-4">8. Refund / Cancellation Policy</h2>
                    <ul className="space-y-2 text-[#1F2937]/80">
                      <li>• Refunds are applicable only if services are not delivered as agreed.</li>
                      <li>• Partial refunds may apply for unused portions of services.</li>
                      <li>• No refund once service execution has started, unless legally required.</li>
                      <li>• No refunds for delays caused by third-party platforms, force majeure, or client-side delays.</li>
                      <li>• Detailed refund terms may also be governed by individual service agreements.</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[#0056D2] mb-4">9. Links to Other Websites</h2>
                    <ul className="space-y-2 text-[#1F2937]/80">
                      <li>• Our website may contain links to third-party websites.</li>
                      <li>• We are not responsible for their privacy practices or content.</li>
                      <li>• We recommend reviewing their privacy policies separately.</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[#0056D2] mb-4">10. Changes to This Policy</h2>
                    <ul className="space-y-2 text-[#1F2937]/80">
                      <li>• We may update this Privacy Policy at any time.</li>
                      <li>• Changes will be effective immediately upon posting on the Website.</li>
                      <li>• Continued use of services implies acceptance of the updated policy.</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[#0056D2] mb-4">11. Your Legal Rights and Responsibilities</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-[#1F2937] mb-2">You have the right to:</h3>
                        <ul className="space-y-1 text-[#1F2937]/80 ml-4">
                          <li>• Access your personal data</li>
                          <li>• Request corrections or deletion</li>
                          <li>• Withdraw consent (where applicable)</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1F2937] mb-2">You are responsible for:</h3>
                        <ul className="space-y-1 text-[#1F2937]/80 ml-4">
                          <li>• Providing accurate information</li>
                          <li>• Using our services lawfully</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#0056D2]/10 to-[#7B61FF]/10 p-6 rounded-lg border border-[#7B61FF]/20">
                    <h2 className="text-2xl font-bold text-[#0056D2] mb-4">12. Contact Us</h2>
                    <p className="text-[#1F2937]/80 mb-4">For privacy-related queries, contact:</p>
                    <div className="space-y-2 text-[#1F2937]/80">
                      <p><span className="font-semibold">DB Enterprises</span></p>
                      <p><span className="font-semibold">Email:</span> <a href="mailto:info@dbenterprises.com" className="text-[#0056D2] hover:text-[#7B61FF]">info@dbenterprises.com</a></p>
                      <p><span className="font-semibold">Website:</span> <a href="https://dbenterprisedigital.com" className="text-[#0056D2] hover:text-[#7B61FF]" target="_blank" rel="noopener noreferrer">https://dbenterprisedigital.com</a></p>
                    </div>
                  </div>
                </div>
              </div>
              )}

              {currentPage === 'terms' && (
              <div className="bg-white p-8 rounded-xl shadow-lg border border-[#7B61FF]/20 animate-fade-in-up">
                <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#0056D2] to-[#7B61FF] bg-clip-text text-transparent mb-2">
                  Terms & Conditions
                </h1>
                <p className="text-[#1F2937]/60 mb-8">
                  Last Updated: January 5, 2026
                </p>

                <div className="space-y-8 text-[#1F2937] text-lg leading-relaxed">
                  <p>
                    These Terms & Conditions ("Terms") govern your use of the website
                    <strong> https://dbenterprisedigital.com </strong>
                    operated by <strong>DB Enterprises</strong>.
                    By accessing or using our website or services, you agree to be bound
                    by these Terms.
                  </p>

                  <div>
                    <h2 className="text-2xl font-bold text-[#0056D2] mb-3">1. Services</h2>
                    <p>
                      DB Enterprises provides digital services including digital
                      marketing, website development, branding, consulting, AI-based
                      solutions, and related services. Services are subject to
                      availability and agreement.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[#0056D2] mb-3">
                      2. User Responsibilities
                    </h2>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Use the website only for lawful purposes</li>
                      <li>Provide accurate and truthful information</li>
                      <li>Do not attempt to hack, misuse, or disrupt systems</li>
                      <li>Do not copy or resell content without permission</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[#0056D2] mb-3">
                      3. Payments & Taxes
                    </h2>
                    <p>
                      Payments must be made as per agreed invoices or proposals. All
                      applicable taxes, duties, or government charges are borne by the
                      client unless stated otherwise.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[#0056D2] mb-3">
                      4. Refund Policy
                    </h2>
                    <p>
                      Refunds are applicable only if services are not delivered as
                      agreed. No refunds are provided once service execution has
                      started, except where required by law.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[#0056D2] mb-3">
                      5. Intellectual Property
                    </h2>
                    <p>
                      All website content, designs, logos, text, and materials are the
                      intellectual property of DB Enterprises. Unauthorized use is
                      strictly prohibited.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[#0056D2] mb-3">
                      6. Disclaimer
                    </h2>
                    <p>
                      All services are provided on an "as is" basis. We do not guarantee
                      specific results, revenue, or business growth.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[#0056D2] mb-3">
                      7. Limitation of Liability
                    </h2>
                    <p>
                      Our total liability shall not exceed the amount paid by the client
                      for the specific service. We are not liable for indirect or
                      consequential damages.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[#0056D2] mb-3">
                      8. Termination
                    </h2>
                    <p>
                      We reserve the right to suspend or terminate access if these Terms
                      are violated or if required by law.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[#0056D2] mb-3">
                      9. Governing Law
                    </h2>
                    <p>
                      These Terms shall be governed by the laws of India. Courts located
                      in India shall have exclusive jurisdiction.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-[#0056D2]/10 to-[#7B61FF]/10 p-6 rounded-lg border border-[#7B61FF]/20">
                    <h2 className="text-2xl font-bold text-[#0056D2] mb-3">
                      10. Contact Information
                    </h2>
                    <p>
                      <strong>DB Enterprises</strong><br />
                      Email: info@dbenterprises.com<br />
                      Website: https://dbenterprisedigital.com
                    </p>
                  </div>
                </div>
              </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
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
      <section id="contact" data-animate className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-[#F8FAFC] to-white">
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#0056D2] to-[#7B61FF] bg-clip-text text-transparent mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-[#1F2937]/70">Fill out the form below and our team will get back to you shortly</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className={`lg:col-span-2 transition-all duration-1000 ${
              visibleSections.has('contact') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#7B61FF]/20 hover:shadow-2xl transition-all duration-300">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {formStatus === 'success' && successMessage && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3 animate-fade-in-up">
                      <CheckIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-green-800 text-sm leading-relaxed">{successMessage}</p>
                    </div>
                  )}

                  {formStatus === 'error' && formError && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 animate-fade-in-up">
                      <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-red-800 text-sm leading-relaxed">{formError}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative">
                      <label htmlFor="name" className="block text-sm font-semibold text-[#1F2937] mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:border-[#7B61FF] focus:ring-2 focus:ring-[#7B61FF]/30 outline-none transition-all duration-300 placeholder:text-[#9CA3AF] hover:border-[#7B61FF]"
                      />
                    </div>

                    <div className="relative">
                      <label htmlFor="email" className="block text-sm font-semibold text-[#1F2937] mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:border-[#7B61FF] focus:ring-2 focus:ring-[#7B61FF]/30 outline-none transition-all duration-300 placeholder:text-[#9CA3AF] hover:border-[#7B61FF]"
                      />
                    </div>

                    <div className="relative">
                      <label htmlFor="phone" className="block text-sm font-semibold text-[#1F2937] mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="+91 9999999999"
                        className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:border-[#7B61FF] focus:ring-2 focus:ring-[#7B61FF]/30 outline-none transition-all duration-300 placeholder:text-[#9CA3AF] hover:border-[#7B61FF]"
                      />
                    </div>

                    <div className="relative">
                      <label htmlFor="company" className="block text-sm font-semibold text-[#1F2937] mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleFormChange}
                        placeholder="Your Company"
                        className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:border-[#7B61FF] focus:ring-2 focus:ring-[#7B61FF]/30 outline-none transition-all duration-300 placeholder:text-[#9CA3AF] hover:border-[#7B61FF]"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="message" className="block text-sm font-semibold text-[#1F2937] mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Tell us about your project or inquiry..."
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:border-[#7B61FF] focus:ring-2 focus:ring-[#7B61FF]/30 outline-none transition-all duration-300 placeholder:text-[#9CA3AF] hover:border-[#7B61FF] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                      formStatus === 'loading'
                        ? 'bg-gray-400 text-white cursor-not-allowed'
                        : 'bg-gradient-to-r from-[#0056D2] to-[#7B61FF] text-white hover:from-[#7B61FF] hover:to-[#00E0FF] hover:shadow-xl hover:shadow-[#7B61FF]/30 hover:scale-105'
                    }`}
                  >
                    {formStatus === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            <div className={`transition-all duration-1000 ${
              visibleSections.has('contact') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#7B61FF]/10 to-[#00E0FF]/10 p-6 rounded-2xl shadow-lg border border-[#7B61FF]/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <h3 className="text-lg font-bold text-[#1F2937] mb-3">Phone/WhatsApp</h3>
                  <a href="tel:+919999508755" className="text-[#0056D2] hover:text-[#7B61FF] transition-colors duration-300 font-semibold text-lg">
                    +91-9999508755
                  </a>
                </div>

                <div className="bg-gradient-to-br from-[#00E0FF]/10 to-[#7B61FF]/10 p-6 rounded-2xl shadow-lg border border-[#00E0FF]/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <h3 className="text-lg font-bold text-[#1F2937] mb-3">Email</h3>
                  <a href="mailto:info@dbenterprises.com" className="text-[#0056D2] hover:text-[#7B61FF] transition-colors duration-300 font-semibold break-all">
                    info@dbenterprises.com
                  </a>
                </div>

                <div className="bg-gradient-to-br from-[#7B61FF]/5 to-[#00E0FF]/5 p-6 rounded-2xl border border-[#7B61FF]/10">
                  <h3 className="text-lg font-bold text-[#1F2937] mb-3">Response Time</h3>
                  <p className="text-[#1F2937]/80 text-sm leading-relaxed">
                    We typically respond within 24 hours. For urgent inquiries, please call us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclosure Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F8FAFC] to-[#7B61FF]/5 border-t border-[#7B61FF]/20">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setDisclosureOpen(!disclosureOpen)}
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
                <p className="leading-relaxed">
                  <span className="font-semibold text-[#0056D2]">Company Association:</span> We hereby disclose that our company is a registered and authorized vendor and is proudly associated with Finnable.
                </p>

                <p className="leading-relaxed">
                  <span className="font-semibold text-[#0056D2]">Data Processing:</span> As part of this association, we may receive, process, and utilize business-related data provided by Finnable strictly for operational, analytical, and service-related purposes required to run and improve our business offerings.
                </p>

                <p className="leading-relaxed">
                  <span className="font-semibold text-[#0056D2]">Data Protection:</span> All data shared is handled in compliance with applicable laws, confidentiality obligations, and data protection standards. We do not misuse, sell, or disclose such data to any unauthorized third party.
                </p>

                <div className="bg-gradient-to-r from-[#7B61FF]/10 to-[#00E0FF]/10 p-4 rounded-lg border border-[#7B61FF]/20 mt-6">
                  <p className="text-sm leading-relaxed">
                    <span className="font-semibold">Consent:</span> By using our website and services, you acknowledge and consent to this association and the lawful use of data as described above.
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
          <div className="mt-8 pt-8 border-t border-gray-700">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-4">
              <button
                onClick={() => setCurrentPage('privacy')}
                className="text-gray-400 hover:text-[#00E0FF] transition-all duration-300 hover:underline"
              >
                Privacy Policy
              </button>
              <span className="hidden sm:inline text-gray-600">|</span>
              <button
                onClick={() => setCurrentPage('terms')}
                className="text-gray-400 hover:text-[#00E0FF] transition-all duration-300 hover:underline"
              >
                Terms & Conditions
              </button>
            </div>
            <p className="text-center text-gray-400">&copy; 2025 DB Enterprises. All rights reserved.</p>
          </div>
        </div>
      </footer>
        </>
      )}
    </div>
  );
}

export default App;
