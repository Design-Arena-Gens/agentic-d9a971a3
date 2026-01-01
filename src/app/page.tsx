import { LeadAgent } from "@/components/lead-agent";

const featureHighlights = [
  {
    title: "AI-qualified lead maps",
    description:
      "Blend firmographics, buying signals, and channel data to surface prospects that match your offer and sales velocity goals.",
  },
  {
    title: "Automation blueprints",
    description:
      "Prebuilt workflows for capture, nurture, outbound, client onboarding, and partner enablement ready to import into your stack.",
  },
  {
    title: "Campaign command center",
    description:
      "Realtime dashboards tracking replies, pipeline value, and team workload so you can scale with confidence.",
  },
];

const operatingPillars = [
  {
    name: "Demand intelligence",
    points: [
      "Firmographic and technographic enrichment",
      "Propensity scoring with lookalike modeling",
      "Engagement heat-mapping across channels",
    ],
  },
  {
    name: "Pipeline automation",
    points: [
      "Playbooks for inbound, outbound, and partner motions",
      "Dynamic branching and smart handoffs",
      "Done-for-you reporting automations",
    ],
  },
  {
    name: "Agency enablement",
    points: [
      "Client onboarding & delivery cadences",
      "Capacity planning with talent marketplace hooks",
      "Recurring revenue expansion frameworks",
    ],
  },
];

const faqs = [
  {
    question: "What does the lead agent actually deliver?",
    answer:
      "You receive prioritized lead shortlists, outreach scripts, automation workflows, and daily operating rhythms tailored to your agency model.",
  },
  {
    question: "Can this plug into our existing CRM and tools?",
    answer:
      "Yes. The agent recommends a stack based on your tech choices and includes recipes for HubSpot, Salesforce, Pipedrive, Notion, Airtable, Make, Zapier, and more.",
  },
  {
    question: "How quickly can we launch?",
    answer:
      "Most agencies deploy the first campaign within 48 hours. Automations and reporting go live within the first sprint using the included templates.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main>
        <div className="relative isolate overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 pb-32 pt-32">
          <div className="absolute inset-0 -z-10 opacity-70">
            <div className="absolute left-1/2 top-12 h-64 w-64 -translate-x-1/2 rounded-full bg-sky-500/30 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/4 rounded-full bg-cyan-400/20 blur-3xl" />
          </div>

          <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 md:px-8">
            <header className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-center">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-sky-200">
                  Agentic Revenue Ops
                </span>
                <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                  Lead-generation agent that installs automated revenue engines for agencies
                </h1>
                <p className="max-w-2xl text-lg text-slate-300">
                  Plot your ideal clients, deploy omnichannel outreach, and switch on onboarding workflows. The Leadflow Agent orchestrates campaigns that feed your pipeline while your team focuses on closing and delivery.
                </p>
                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-semibold text-white">42%</span>
                    <span className="max-w-[10rem]">Average lift in qualified pipeline in the first 45 days</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-semibold text-white">12+</span>
                    <span className="max-w-[10rem]">Playbooks spanning inbound, outbound, and partner motions</span>
                  </div>
                </div>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-200">
                  Agent workflow
                </p>
                <ul className="mt-4 space-y-4 text-sm text-slate-200">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                    <div>
                      <p className="font-semibold text-white">Map demand</p>
                      <p className="text-slate-300">Enrich ICP, score intent signals, and surface accounts that match your offer velocity.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                    <div>
                      <p className="font-semibold text-white">Activate automations</p>
                      <p className="text-slate-300">Deploy campaign cadences, smart tasks, and fulfillment workflows with ready-to-run recipes.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-violet-400" />
                    <div>
                      <p className="font-semibold text-white">Scale delivery</p>
                      <p className="text-slate-300">Feed performance dashboards, forecast capacity, and route new work to your delivery pods.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </header>
          </div>
        </div>

        <div className="relative z-10 mx-auto -mt-32 max-w-5xl px-6 md:px-8">
          <LeadAgent />
        </div>

        <section className="mx-auto mt-32 max-w-6xl px-6 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-sky-500">
                Why agencies adopt
              </span>
              <h2 className="text-3xl font-semibold text-white">
                The operating system for autonomous lead generation and delivery
              </h2>
              <p className="text-slate-300">
                Leadflow Agent condenses years of revenue-ops experience into a modular system. Plug your parameters in and receive tactical instructions, tools, and automation packs built for execution.
              </p>
            </div>
            <div className="grid gap-4">
              {featureHighlights.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-md"
                >
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-28 max-w-6xl px-6 md:px-8">
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-10 shadow-2xl">
            <div className="grid gap-8 md:grid-cols-3">
              {operatingPillars.map((pillar) => (
                <div key={pillar.name} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="h-10 w-10 rounded-full bg-sky-500/20 text-center text-lg font-semibold leading-10 text-sky-200">
                      {pillar.name.charAt(0)}
                    </span>
                    <h3 className="text-xl font-semibold text-white">{pillar.name}</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-28 max-w-6xl px-6 md:px-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-center">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-sky-200">
                  Frequently asked
                </span>
                <h2 className="text-3xl font-semibold text-white">Questions from agencies embracing automation</h2>
                <p className="text-slate-300">
                  Every deliverable is packaged for you to share with your team or clients. Export workflows, duplicate dashboards, and hand the agent off to your revenue operators.
                </p>
              </div>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-2xl border border-white/10 bg-slate-900/70 p-5"
                    open
                  >
                    <summary className="cursor-pointer list-none text-lg font-semibold text-white group-open:text-sky-200">
                      {faq.question}
                    </summary>
                    <p className="mt-2 text-sm text-slate-300">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto my-28 max-w-6xl px-6 md:px-8">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-sky-500/20 via-emerald-500/10 to-transparent p-10">
            <div className="absolute right-10 top-10 h-32 w-32 rounded-full bg-white/20 blur-3xl" />
            <div className="relative space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-200">Deploy your lead agent</p>
              <h2 className="text-3xl font-semibold text-white">
                Ready to switch on a self-orchestrating lead engine?
              </h2>
              <p className="max-w-2xl text-slate-200">
                Spin up a collaborative workspace where the agent continues to map opportunities, generate scripts, and sync automations as your agency scales. Invite your team, clients, or partners inside.
              </p>
              <div className="flex flex-wrap gap-4 text-sm font-semibold">
                <a
                  href="mailto:hello@leadflow-agent.ai"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-slate-900 transition hover:bg-slate-100"
                >
                  Book a build-out session
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-white transition hover:border-white hover:bg-white/10"
                >
                  Download sample playbook
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
