export type BusinessSize = "solo" | "small" | "mid" | "enterprise";

export interface BusinessProfile {
  id: string;
  name: string;
  industry: string;
  location: string;
  size: BusinessSize;
  website: string;
  description: string;
  techStack: string[];
  marketingChannels: string[];
  annualRevenue: [number, number];
  decisionMakers: string[];
  painPoints: string[];
  notes?: string;
}

export const businessDirectory: BusinessProfile[] = [
  {
    id: "atlas-digital",
    name: "Atlas Digital Studios",
    industry: "creative agency",
    location: "Austin, TX",
    size: "mid",
    website: "https://atlasdigital.example",
    description:
      "Boutique web and brand studio specializing in interactive experiences for product-led startups.",
    techStack: ["Webflow", "Framer", "HubSpot", "Make"],
    marketingChannels: ["LinkedIn", "Dribbble", "Email", "Referrals"],
    annualRevenue: [1800000, 2400000],
    decisionMakers: ["Creative Director", "Head of Growth"],
    painPoints: [
      "Need predictable new client pipeline",
      "Manual onboarding workflows",
      "Fragmented sales tooling",
    ],
    notes:
      "Recently hired a sales strategist and wants to operationalize outbound automation without losing personalization.",
  },
  {
    id: "bluehorizon",
    name: "Blue Horizon Hospitality",
    industry: "hospitality",
    location: "Miami, FL",
    size: "mid",
    website: "https://bluehorizonhospitality.example",
    description:
      "Management group operating boutique hotels and short-term rentals focused on higher-end leisure travel.",
    techStack: ["Salesforce", "Zapier", "Mailchimp", "Asana"],
    marketingChannels: ["Instagram", "Partnerships", "SEO", "Email"],
    annualRevenue: [3200000, 4100000],
    decisionMakers: ["Director of Marketing", "Revenue Manager"],
    painPoints: [
      "Low visibility into corporate leads",
      "Manual follow-up workflows",
      "Need seasonal campaign automation",
    ],
  },
  {
    id: "pioneer-saas",
    name: "Pioneer SaaS Collective",
    industry: "b2b saas",
    location: "Remote",
    size: "small",
    website: "https://pioneersaas.example",
    description:
      "Fractional product and engineering teams helping seed-stage SaaS founders accelerate roadmap delivery.",
    techStack: ["Notion", "ClickUp", "Lemlist", "Airtable"],
    marketingChannels: ["LinkedIn", "Twitter", "Podcast", "Email"],
    annualRevenue: [950000, 1250000],
    decisionMakers: ["Managing Partner", "Head of Partnerships"],
    painPoints: [
      "Need high-fit founder leads",
      "Manual proposal creation",
      "Inconsistent nurture sequences",
    ],
  },
  {
    id: "northwellness",
    name: "North Wellness Clinics",
    industry: "healthcare",
    location: "Denver, CO",
    size: "mid",
    website: "https://northwellness.example",
    description:
      "Network of integrative health clinics providing virtual-first care programs for active professionals.",
    techStack: ["HubSpot", "ActiveCampaign", "Calendly", "Zapier"],
    marketingChannels: ["SEO", "Referral Partners", "LinkedIn", "YouTube"],
    annualRevenue: [2700000, 3500000],
    decisionMakers: ["Director of Growth", "Patient Experience Lead"],
    painPoints: [
      "Need to nurture inbound waitlist",
      "Manual intake and onboarding",
      "Desire to nurture strategic partnerships",
    ],
  },
  {
    id: "urbanforge",
    name: "UrbanForge Construction",
    industry: "construction",
    location: "Chicago, IL",
    size: "mid",
    website: "https://urbanforgebuilds.example",
    description:
      "Commercial construction firm with niche expertise in adaptive reuse projects and sustainability upgrades.",
    techStack: ["Zoho CRM", "Procore", "Smartsheet", "Zapier"],
    marketingChannels: ["LinkedIn", "Industry Events", "Email", "Partner Alliances"],
    annualRevenue: [4200000, 5700000],
    decisionMakers: ["VP of Business Development", "COO"],
    painPoints: [
      "Long sales cycles without structure",
      "Need better partner sourcing",
      "Manual proposal follow-ups",
    ],
  },
  {
    id: "lumenlabs",
    name: "Lumen Labs AI",
    industry: "ai consulting",
    location: "San Francisco, CA",
    size: "small",
    website: "https://lumenlabs.ai",
    description:
      "Applied AI consultancy helping mid-market teams launch workflow automation pilots inside existing operations.",
    techStack: ["HubSpot", "Apollo", "Slack", "Make", "Notion"],
    marketingChannels: ["LinkedIn", "Events", "Newsletter", "Podcast"],
    annualRevenue: [1500000, 2100000],
    decisionMakers: ["Head of Innovation", "Operations Director"],
    painPoints: [
      "Hard to prioritize high-value prospects",
      "Need detailed discovery automation",
      "Desire for ROI storytelling",
    ],
  },
  {
    id: "serenity-spa",
    name: "Serenity Spa Collective",
    industry: "wellness",
    location: "Portland, OR",
    size: "small",
    website: "https://serenityspa.example",
    description:
      "Collective of boutique spas offering subscription-based wellness plans for remote professionals.",
    techStack: ["Square", "Klaviyo", "Acuity", "Zapier"],
    marketingChannels: ["Instagram", "SMS", "Referral", "Email"],
    annualRevenue: [620000, 880000],
    decisionMakers: ["Owner", "Community Manager"],
    painPoints: [
      "Need recurring revenue consistency",
      "Manual lead nurturing",
      "Small team with limited bandwidth",
    ],
  },
  {
    id: "haven-legal",
    name: "Haven Legal Partners",
    industry: "professional services",
    location: "New York, NY",
    size: "mid",
    website: "https://havenlegal.example",
    description:
      "Boutique law practice specializing in tech commercial agreements and data privacy readiness programs.",
    techStack: ["Clio", "HubSpot", "DocuSign", "Notion"],
    marketingChannels: ["LinkedIn", "Webinars", "Email", "Partnerships"],
    annualRevenue: [3800000, 4500000],
    decisionMakers: ["Managing Partner", "Head of Client Success"],
    painPoints: [
      "High-value targets hard to access",
      "Need better referral partner nurturing",
      "Desire automated contract pipeline",
    ],
  },
  {
    id: "solstice-energy",
    name: "Solstice Energy Integrations",
    industry: "renewable energy",
    location: "Phoenix, AZ",
    size: "mid",
    website: "https://solsticeenergy.example",
    description:
      "Integrator helping manufacturing plants deploy solar microgrids and energy storage solutions.",
    techStack: ["Salesforce", "HubSpot", "ZoomInfo", "Zapier"],
    marketingChannels: ["Industry Associations", "LinkedIn", "Events", "Email"],
    annualRevenue: [5400000, 7300000],
    decisionMakers: ["Director of Sustainability", "Operations VP"],
    painPoints: [
      "Complex stakeholder management",
      "Need ROI calculators for outbound",
      "Manual task handoffs",
    ],
  },
  {
    id: "rise-coaching",
    name: "Rise Performance Coaching",
    industry: "coaching",
    location: "Toronto, Canada",
    size: "solo",
    website: "https://risecoaching.example",
    description:
      "Executive and team performance coaching practice focused on scale-up leaders navigating rapid growth.",
    techStack: ["Notion", "Calendly", "ConvertKit", "Make"],
    marketingChannels: ["LinkedIn", "Podcast", "Referrals", "Webinars"],
    annualRevenue: [320000, 520000],
    decisionMakers: ["Founder Coach"],
    painPoints: [
      "Need consistent corporate retainers",
      "No centralized CRM",
      "Manual invoicing and onboarding",
    ],
  },
  {
    id: "spark-edtech",
    name: "Spark EdTech Studios",
    industry: "education",
    location: "Seattle, WA",
    size: "mid",
    website: "https://sparkedtech.example",
    description:
      "Learning experience design studio building branded education portals and cohort programs for enterprises.",
    techStack: ["HubSpot", "ClickUp", "ActiveCampaign", "Slack"],
    marketingChannels: ["LinkedIn", "Co-marketing", "Email", "Events"],
    annualRevenue: [2100000, 2900000],
    decisionMakers: ["Head of Learning", "Client Success Director"],
    painPoints: [
      "Need partner-sourced leads",
      "Manual content delivery workflows",
      "Desire for analytics reporting",
    ],
  },
  {
    id: "terra-landscape",
    name: "TerraScape Landscaping",
    industry: "home services",
    location: "Sacramento, CA",
    size: "small",
    website: "https://terrascape.example",
    description:
      "Design-build landscape firm offering sustainable outdoor transformations for residential clients.",
    techStack: ["Jobber", "Mailchimp", "Canva", "Zapier"],
    marketingChannels: ["Instagram", "Local SEO", "Referrals", "Email"],
    annualRevenue: [780000, 1100000],
    decisionMakers: ["Owner", "Design Director"],
    painPoints: [
      "Lead qualification bottlenecks",
      "Onsite estimate scheduling",
      "Need automated upsell workflows",
    ],
  },
];
