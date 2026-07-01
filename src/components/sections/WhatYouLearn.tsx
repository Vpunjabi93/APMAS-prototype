export function WhatYouLearn() {
  const modules = [
    { title: "Foundations & strategy", desc: "AI-native digital marketing, full-funnel and OPE strategy, AI-assisted KPI and campaign planning", tools: ["ChatGPT", "Gemini"] },
    { title: "AI fundamentals & research", desc: "prompt engineering, responsible AI, AI-powered market and consumer research", tools: ["Perplexity", "Claude"] },
    { title: "Design, build & deploy", desc: "AI design thinking, prompt-based websites and funnels, hosting, deployment and cloud basics", tools: ["Midjourney", "Figma", "Vercel"] },
    { title: "Data & backend", desc: "databases, data capture, APIs, webhooks and no-code/low-code backends for marketers", tools: ["Firebase", "Supabase", "Airtable"] },
    { title: "Acquisition", desc: "AI SEO, SEM and search strategy; content marketing and storytelling; social, influencer and community", tools: ["ahrefs", "Copy.ai", "Jasper"] },
    { title: "Lifecycle & automation", desc: "email and lifecycle journeys; end-to-end marketing automation and AI agents (MCP-enabled workflows)", tools: ["n8n", "Make", "Zapier"] },
    { title: "Analytics & intelligence", desc: "web and product analytics, customer analytics, marketing and campaign intelligence, consumer behaviour and neuromarketing", tools: ["GA4", "PostHog", "Mixpanel"] },
    { title: "Sales, revenue & GTM", desc: "sales analytics, lead scoring, revenue enablement and go-to-market strategy", tools: ["HubSpot AI", "Salesforce", "Power BI"] },
    { title: "Capstone", desc: "build a website/funnel, deploy it, automate the workflows, market it, capture data, analyse performance and present your recommendations", highlight: true, tools: ["Full Stack"] },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4 uppercase tracking-tight">
            18 modules. One complete growth engine. Built by you.
          </h2>
          <p className="text-lg text-gray-700">
            From strategy to deployment to measurement — the full stack, hands-on:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {modules.map((mod, i) => (
            <div key={i} className={`p-6 border rounded-none flex flex-col justify-between ${mod.highlight ? 'bg-brand-purple-light/50 border-brand-purple-dark text-gray-900 shadow-sm' : 'bg-white border-gray-200'}`}>
              <div>
                <h3 className="font-bold text-lg mb-2 flex items-start">
                  <span className="w-6 h-6 bg-gray-100 text-gray-500 text-xs flex items-center justify-center mr-3 shrink-0 rounded-none border border-gray-200 mt-1">
                    {i + 1}
                  </span>
                  {mod.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed ml-9 mb-4">{mod.desc}</p>
              </div>
              
              {/* AI Tool Stack */}
              <div className="ml-9 border-t border-gray-100 pt-3 mt-auto">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">AI Tool Stack</span>
                <div className="flex flex-wrap gap-2">
                  {mod.tools.map(tool => (
                    <span key={tool} className="text-xs font-semibold bg-brand-blue/5 text-brand-blue border border-brand-blue/20 px-2 py-1 rounded-none">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 md:p-8 border border-gray-200 mb-10 shadow-sm rounded-none">
          <h3 className="font-bold text-gray-900 mb-3 text-lg">Tools you'll actually use:</h3>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Claude, ChatGPT, Gemini, Perplexity, n8n, Make, Zapier, Firebase, Supabase, Airtable, GA4, Google Tag Manager, Power BI, PostHog, Mixpanel, ahrefs, and 25+ more — every one either free, free-tier, or provided through the programme's Claude access.
          </p>
        </div>

        <div className="text-center">
          <a href="#enquiry-form" className="inline-flex items-center justify-center font-semibold text-brand-blue hover:text-brand-blue/80 transition-colors group text-lg rounded-none">
            See the Full Module List in the Brochure
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
