import type { BusinessProfile } from "@/data/businesses";

export type BudgetRange = "bootstrap" | "growth" | "scale";

export interface LeadAgentInput {
  industry: string;
  location: string;
  serviceOffering: string;
  targetRole: string;
  budgetRange: BudgetRange;
  automationFocus: string[];
  outreachTone: "warm" | "direct" | "technical";
}

export interface LeadCandidate {
  profile: BusinessProfile;
  score: number;
  fitHighlights: string[];
  suggestedOffer: string;
  outreachHook: string;
}

export interface AutomationPlay {
  name: string;
  description: string;
  primaryTooling: string[];
  cadences: string[];
  successMetrics: string[];
}

export interface OutreachStep {
  day: number;
  channel: string;
  content: string;
  objective: string;
}

export interface LeadPlan {
  keyMessage: string;
  positioning: string;
  executiveSummary: string;
  leads: LeadCandidate[];
  automationPlays: AutomationPlay[];
  outreachSequence: OutreachStep[];
  recommendedStack: string[];
  nextActions: string[];
}

const automationLibrary: Record<string, AutomationPlay> = {
  nurture: {
    name: "Lifecycle Nurture Engine",
    description:
      "Moves new contacts from lead to opportunity using progressive profiling, content drops, and triggered outreach.",
    primaryTooling: ["HubSpot", "ActiveCampaign", "Encharge"],
    cadences: ["Day 0 welcome flow", "Weekly insight drop", "Heat-score triggered outreach"],
    successMetrics: ["Activation rate", "MQL to SQL conversion", "Pipeline velocity"],
  },
  outbound: {
    name: "Multichannel Outbound Sequencer",
    description:
      "Combines targeted email, LinkedIn, and voicemail touchpoints orchestrated with dynamic branching based on engagement.",
    primaryTooling: ["Apollo", "Lemlist", "LaGrowthMachine"],
    cadences: ["6-touch outbound sequence", "LinkedIn drip", "Calendly fast-lane routing"],
    successMetrics: ["Reply rate", "Booked calls", "Cost per opportunity"],
  },
  partner: {
    name: "Partner Enablement Workflow",
    description:
      "Onboards referral and channel partners with ready-made content kits, co-branded assets, and automated co-selling tasks.",
    primaryTooling: ["Reveal", "Notion", "Make"],
    cadences: ["Onboarding drip", "Monthly enablement sprint", "Shared pipeline review"],
    successMetrics: ["Partner-sourced revenue", "Portal engagement", "Partner win-rate"],
  },
  onboarding: {
    name: "High-Touch Client Onboarding",
    description:
      "Automates kickoff, contract, and onboarding milestones while leaving room for personalized consultative moments.",
    primaryTooling: ["Zapier", "ClickUp", "DocuSign"],
    cadences: ["Contract & invoice automation", "Pre-kickoff prep", "90-day success checkpoints"],
    successMetrics: ["Time-to-value", "CSAT", "Expansion likelihood"],
  },
  reporting: {
    name: "Revenue Command Center",
    description:
      "Centralizes marketing, sales, and success data with automated insight snapshots for agency leadership dashboards.",
    primaryTooling: ["Databox", "Looker Studio", "Airtable"],
    cadences: ["Weekly performance digest", "Pipeline health alert", "Experiment retrospective"],
    successMetrics: ["Revenue per client", "Experiment ROI", "Team capacity utilization"],
  },
};

const toneStarters: Record<LeadAgentInput["outreachTone"], string> = {
  warm: "Relationship-first, story-driven hook with social proof",
  direct: "Conversion-focused hook with ROI benchmark and bold promise",
  technical: "Insight-led hook highlighting process intellectual property",
};

function normalize(value: string) {
  return value.trim().toLowerCase();
}

function industryAffinity(inputIndustry: string, businessIndustry: string) {
  const formattedInput = normalize(inputIndustry);
  const formattedBusiness = normalize(businessIndustry);
  if (!formattedInput) return 0;
  if (formattedInput === formattedBusiness) return 24;
  if (formattedBusiness.includes(formattedInput) || formattedInput.includes(formattedBusiness)) {
    return 18;
  }
  return formattedInput.split(/[\s/-]+/).some((fragment) => formattedBusiness.includes(fragment)) ? 12 : 4;
}

function locationAffinity(inputLocation: string, businessLocation: string) {
  const formattedInput = normalize(inputLocation);
  if (!formattedInput || formattedInput === "remote") return 10;
  const formattedBusiness = normalize(businessLocation);
  if (formattedBusiness.includes(formattedInput)) return 14;
  const [, state] = formattedBusiness.split(",");
  if (state && formattedInput.includes(state.trim())) return 12;
  return formattedInput.split(/[\s,]+/).some((word) => formattedBusiness.includes(word)) ? 8 : 2;
}

function roleAlignment(targetRole: string, decisionMakers: string[]) {
  if (!targetRole) return 6;
  const normalizedRole = normalize(targetRole);
  return decisionMakers.some((role) => normalize(role).includes(normalizedRole)) ? 16 : 6;
}

function automationMatch(automationFocus: string[], painPoints: string[]) {
  if (!automationFocus.length) return 8;
  const normalized = automationFocus.map(normalize);
  const overlaps = painPoints.filter((pain) =>
    normalized.some((focus) => normalize(pain).includes(focus) || focus.includes(normalize(pain)))
  );
  return overlaps.length ? 12 + overlaps.length * 2 : 6;
}

function budgetFit(budget: BudgetRange, revenue: [number, number]) {
  const [, upper] = revenue;
  if (budget === "bootstrap") {
    return upper < 750000 ? 14 : 6;
  }
  if (budget === "growth") {
    return upper >= 750000 && upper <= 3500000 ? 18 : 8;
  }
  return upper > 3500000 ? 20 : 10;
}

function buildOffer(input: LeadAgentInput, business: BusinessProfile) {
  const core = `${input.serviceOffering || "Revenue acceleration"}`;
  const persona = input.targetRole ? `for ${input.targetRole}` : "for growth leaders";
  const pain = business.painPoints[0];
  return `${core} sprint ${persona} that resolves "${pain}" in the first 30 days`;
}

function buildHook(input: LeadAgentInput, business: BusinessProfile) {
  const tone = toneStarters[input.outreachTone];
  const channel = business.marketingChannels[0];
  return `${tone} referencing ${business.name}'s recent focus on ${channel.toLowerCase()} and how we can ${
    input.serviceOffering || "accelerate pipeline"
  } by solving "${business.painPoints[0].toLowerCase()}".`;
}

function scoreBusiness(input: LeadAgentInput, business: BusinessProfile): LeadCandidate {
  const industryScore = industryAffinity(input.industry, business.industry);
  const locationScore = locationAffinity(input.location, business.location);
  const roleScore = roleAlignment(input.targetRole, business.decisionMakers);
  const automationScore = automationMatch(input.automationFocus, business.painPoints);
  const budgetScore = budgetFit(input.budgetRange, business.annualRevenue);

  const score = Math.min(100, Math.round(30 + industryScore + locationScore + roleScore + automationScore + budgetScore));

  const highlights = [
    industryScore > 18 ? "Perfect industry alignment" : undefined,
    locationScore > 12 ? "Local proximity advantage" : undefined,
    roleScore > 12 ? "Direct access to decision maker" : undefined,
    automationScore > 14 ? "Automation problem match" : undefined,
    budgetScore > 16 ? "Budget fit for premium offer" : undefined,
  ].filter(Boolean) as string[];

  return {
    profile: business,
    score,
    fitHighlights: highlights,
    suggestedOffer: buildOffer(input, business),
    outreachHook: buildHook(input, business),
  };
}

function rankAutomationPlays(automationFocus: string[]): AutomationPlay[] {
  if (!automationFocus.length) {
    return [automationLibrary.nurture, automationLibrary.outbound, automationLibrary.reporting];
  }

  const ranked = automationFocus
    .map((focus) => focus.toLowerCase())
    .map((focus) => {
      if (focus.includes("lead") || focus.includes("outbound")) return automationLibrary.outbound;
      if (focus.includes("nurture") || focus.includes("email")) return automationLibrary.nurture;
      if (focus.includes("partner")) return automationLibrary.partner;
      if (focus.includes("onboard")) return automationLibrary.onboarding;
      if (focus.includes("report") || focus.includes("analytics")) return automationLibrary.reporting;
      return automationLibrary.nurture;
    });

  const unique = ranked.filter((play, index) => ranked.findIndex((item) => item.name === play.name) === index);

  if (unique.length < 3) {
    unique.push(automationLibrary.reporting);
  }

  return unique.slice(0, 4);
}

function buildSequence(input: LeadAgentInput, leads: LeadCandidate[]): OutreachStep[] {
  const primaryChannel = leads[0]?.profile.marketingChannels[0] ?? "Email";
  return [
    {
      day: 0,
      channel: "Email",
      content: `Kickoff intro using ${input.serviceOffering || "growth"} positioning and invite to value breakdown call.`,
      objective: "Spark interest and earn reply",
    },
    {
      day: 2,
      channel: primaryChannel === "LinkedIn" ? "LinkedIn DM" : "LinkedIn",
      content: "Share tailored insight post or voice note referencing a recent win from our automation playbook.",
      objective: "Warm touch with social proof",
    },
    {
      day: 5,
      channel: "Video Loom",
      content: `Short ${leads[0]?.profile.name ?? "prospect"} teardown with quick-win audit and call-to-action to book a Sprint Mapping Workshop.`,
      objective: "Deliver personalized value",
    },
    {
      day: 9,
      channel: "Email",
      content: "Case study focused on automation ROI with ready-to-run implementation checklist.",
      objective: "Overcome objections",
    },
    {
      day: 12,
      channel: "Phone / Voice note",
      content: "Concise recap and deadline-driven incentive (automation setup bonus or guarenteed pilot).",
      objective: "Trigger decision and schedule meeting",
    },
  ];
}

function buildSummary(input: LeadAgentInput, leads: LeadCandidate[], plays: AutomationPlay[]): string {
  const leadingIndustries = new Set(leads.map((lead) => lead.profile.industry));
  const bestLead = leads[0];
  const industryLabel = input.industry || (leadingIndustries.size === 1 ? [...leadingIndustries][0] : "high-fit brands");

  return `Designed an outbound + nurture engine targeting ${industryLabel} accounts in ${
    input.location || "priority markets"
  }. ${bestLead ? `Anchor the narrative around ${bestLead.profile.name} and similar teams using ${
    input.serviceOffering || "automation revamps"
  }` : "Focus on insight-led messaging"}. Combine ${plays
    .slice(0, 2)
    .map((play) => play.name)
    .join(" and ")} to automate delivery while keeping personalization high.`;
}

export function generateLeadPlan(
  input: LeadAgentInput,
  businesses: BusinessProfile[],
  leadTarget = 5
): LeadPlan {
  const rankedLeads = businesses
    .map((business) => scoreBusiness(input, business))
    .sort((a, b) => b.score - a.score)
    .slice(0, leadTarget);

  const automationPlays = rankAutomationPlays(input.automationFocus);

  const recommendedStack = Array.from(
    new Set([
      ...automationPlays.flatMap((play) => play.primaryTooling),
      input.automationFocus.some((item) => item.toLowerCase().includes("crm")) ? "HubSpot" : "Pipedrive",
      input.automationFocus.some((item) => item.toLowerCase().includes("ai")) ? "OpenPipe" : "Zapier",
    ])
  );

  const nextActions = [
    "Block 90-minute Sprint Mapping workshop with top 3 prospects",
    "Deploy automated enrichment to capture firmographics on new inbound leads",
    "Launch 14-day outreach sequence and monitor reply rate daily",
    "Operationalize reporting dashboard for leadership standups",
  ];

  return {
    keyMessage: `${input.serviceOffering || "Automation accelerator"} built for ${
      input.industry || "modern agencies"
    } ready to scale`,
    positioning: `Leverage an agentic growth partner that designs, automates, and operates revenue programs ${
      input.location ? `for ${input.location} market` : "without geographic limits"
    } with a ${input.budgetRange}-stage pricing model.`,
    executiveSummary: buildSummary(input, rankedLeads, automationPlays),
    leads: rankedLeads,
    automationPlays,
    outreachSequence: buildSequence(input, rankedLeads),
    recommendedStack,
    nextActions,
  };
}
