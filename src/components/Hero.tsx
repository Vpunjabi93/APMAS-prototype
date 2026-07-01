import { LeadForm } from './LeadForm';
import { AITools3D } from './3d/AITools3D';

export function Hero() {
  return (
    <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-brand-purple-light">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-brand-gradient opacity-10 blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header / Accreditations */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 text-sm font-semibold text-gray-700 border-b border-gray-200 pb-4">
          <span className="text-brand-blue uppercase tracking-widest">IIM Kozhikode</span>
          <span className="text-gray-300">|</span>
          <span>Ranked #3 in India (NIRF 2025)</span>
          <span className="text-gray-300">|</span>
          <span>EQUIS Accredited</span>
          <span className="text-gray-300">|</span>
          <span>AMBA Accredited</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center lg:items-start justify-between">
          
          {/* Left Column - Copy */}
          <div className="w-full lg:w-7/12 xl:w-3/5 text-center lg:text-left">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-[1.1] mb-6 uppercase tracking-tight">
              Yesterday's marketers managed campaigns. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-brand-gradient">Tomorrow's marketers build growth systems.</span>
            </h1>

            {/* Quick Snapshot */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-y-2 gap-x-4 mb-6 text-sm sm:text-base font-medium text-gray-800 bg-white/50 py-3 px-4 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2">
                <span className="text-brand-blue">⏳</span>
                <span>12 Months</span>
              </div>
              <span className="hidden sm:block text-gray-300">|</span>
              <div className="flex items-center gap-2">
                <span className="text-brand-blue">🎓</span>
                <span>Graduates</span>
              </div>
              <span className="hidden sm:block text-gray-300">|</span>
              <div className="flex items-center gap-2">
                <span className="text-brand-blue">💰</span>
                <span>From ₹8,000</span>
              </div>
              <span className="hidden sm:block text-gray-300">|</span>
              <div className="flex items-center gap-2">
                <span className="text-brand-blue">📅</span>
                <span>Starts 08 Nov 2026</span>
              </div>
            </div>
            
            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              A 12-month, hands-on IIM Kozhikode programme that turns marketing, sales and business professionals into AI-Powered Growth Professionals — people who don't just <em className="italic font-medium">talk about</em> AI, but build, automate and measure a complete growth engine.
            </p>
            
            {/* 3D AI Tools Element to add flair */}
            <div className="hidden lg:block w-full border border-gray-200 bg-white shadow-md mb-8">
              <AITools3D />
            </div>

            {/* Mobile CTA (Scrolls to form, hidden on LG) */}
            <div className="lg:hidden mt-2 mb-8">
              <a 
                href="#enquiry-form" 
                className="inline-flex items-center justify-center w-full sm:w-auto bg-brand-blue text-white font-semibold py-4 px-8 hover:bg-brand-blue/90 transition-all shadow-lg shadow-brand-blue/30 text-lg rounded-none"
              >
                Get the Brochure & Fee Details
              </a>
            </div>
            
          </div>

          {/* Right Column - Form */}
          <div className="w-full lg:w-5/12 xl:w-2/5 max-w-md mx-auto lg:mx-0">
            <LeadForm />
          </div>

        </div>
      </div>
    </section>
  );
}
