"use client";

import { useMemo, useState } from "react";
import { businessDirectory } from "@/data/businesses";
import {
  type LeadAgentInput,
  type BudgetRange,
  generateLeadPlan,
} from "@/lib/lead-engine";

const defaultInput: LeadAgentInput = {
  industry: "creative agency",
  location: "Austin, TX",
  serviceOffering: "Done-for-you AI lead engine installs",
  targetRole: "Head of Growth",
  budgetRange: "growth",
  automationFocus: ["lead capture", "nurture journeys", "reporting"],
  outreachTone: "warm",
};

const automationChoices = [
  {
    id: "lead capture",
    label: "Lead capture",
    helper: "Automate inbound capture, enrichment, and routing",
  },
  {
    id: "outbound",
    label: "Outbound",
    helper: "Channel-mix outbound sequences and follow ups",
  },
  {
    id: "nurture journeys",
    label: "Lifecycle nurture",
    helper: "Email + content drips for education and conversion",
  },
  {
    id: "partner enablement",
    label: "Partner automation",
    helper: "Activate referral and co-selling partners",
  },
  {
    id: "client onboarding",
    label: "Client onboarding",
    helper: "Automate kickoffs, contracts, and handoffs",
  },
  {
    id: "reporting",
    label: "Reporting",
    helper: "Build executive-ready dashboards and alerts",
  },
];

const presetScenarios: Array<{ label: string; description: string; config: LeadAgentInput }> = [
  {
    label: "Niche web studio",
    description: "Productized web builds targeting VC-backed SaaS founders",
    config: {
      industry: "web studio",
      location: "Remote",
      serviceOffering: "Launchpad website + automation sprint",
      targetRole: "Founder",
      budgetRange: "growth",
      automationFocus: ["lead capture", "outbound", "reporting"],
      outreachTone: "direct",
    },
  },
  {
    label: "RevOps agency",
    description: "Hybrid inbound + outbound RevOps retainer",
    config: {
      industry: "revops",
      location: "Chicago, IL",
      serviceOffering: "Revenue operating system install",
      targetRole: "VP of Sales",
      budgetRange: "scale",
      automationFocus: ["outbound", "nurture journeys", "client onboarding"],
      outreachTone: "technical",
    },
  },
  {
    label: "Local service operator",
    description: "Multi-location home services expansion",
    config: {
      industry: "home services",
      location: "Sacramento, CA",
      serviceOffering: "Full-funnel lead engine",
      targetRole: "Owner",
      budgetRange: "growth",
      automationFocus: ["lead capture", "nurture journeys", "client onboarding"],
      outreachTone: "warm",
    },
  },
];

export function LeadAgent() {
  const [form, setForm] = useState<LeadAgentInput>(defaultInput);

  const plan = useMemo(() => generateLeadPlan(form, businessDirectory, 6), [form]);

  const toggleAutomation = (value: string) => {
    setForm((prev) => {
      const exists = prev.automationFocus.includes(value);
      return {
        ...prev,
        automationFocus: exists
          ? prev.automationFocus.filter((item) => item !== value)
          : [...prev.automationFocus, value],
      };
    });
  };

  const handleBudgetChange = (value: BudgetRange) => {
    setForm((prev) => ({ ...prev, budgetRange: value }));
  };

  return (
    <section className="relative -mt-40 rounded-[32px] border border-white/15 bg-white/80 p-8 shadow-2xl ring-1 ring-black/5 backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-950/85 dark:ring-white/5 md:-mt-52 md:p-12">
      <div className="flex flex-col gap-10 lg:flex-row">
        <div className="flex-1 space-y-8">
          <div className="space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500/20 via-sky-500/20 to-cyan-500/20 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-300">
              Leadflow Agent
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Configure your autonomous lead engine
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Define your target market, offer positioning, and automation priorities. The agent assembles a ready-to-run playbook you can deploy today.
            </p>
          </div>

          <form className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2 text-sm">
              <span className="font-medium text-slate-700 dark:text-slate-200">Industry focus</span>
              <input
                value={form.industry}
                onChange={(event) => setForm((prev) => ({ ...prev, industry: event.target.value }))}
                placeholder="e.g. B2B SaaS, hospitality, creative"
                className="w-full rounded-lg border border-slate-200/70 bg-white/80 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-1 ring-transparent transition focus:border-sky-300 focus:ring-sky-200 dark:border-slate-700/60 dark:bg-slate-900/80 dark:text-slate-50 dark:focus:border-sky-500/50"
              />
            </label>

            <label className="space-y-2 text-sm">
              <span className="font-medium text-slate-700 dark:text-slate-200">Primary market</span>
              <input
                value={form.location}
                onChange={(event) => setForm((prev) => ({ ...prev, location: event.target.value }))}
                placeholder="City, region or remote"
                className="w-full rounded-lg border border-slate-200/70 bg-white/80 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-1 ring-transparent transition focus:border-sky-300 focus:ring-sky-200 dark:border-slate-700/60 dark:bg-slate-900/80 dark:text-slate-50"
              />
            </label>

            <label className="space-y-2 text-sm md:col-span-2">
              <span className="font-medium text-slate-700 dark:text-slate-200">Flagship offer</span>
              <input
                value={form.serviceOffering}
                onChange={(event) => setForm((prev) => ({ ...prev, serviceOffering: event.target.value }))}
                placeholder="What do you sell that delivers transformation?"
                className="w-full rounded-lg border border-slate-200/70 bg-white/80 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-1 ring-transparent transition focus:border-sky-300 focus:ring-sky-200 dark:border-slate-700/60 dark:bg-slate-900/80 dark:text-slate-50"
              />
            </label>

            <label className="space-y-2 text-sm">
              <span className="font-medium text-slate-700 dark:text-slate-200">Decision maker</span>
              <input
                value={form.targetRole}
                onChange={(event) => setForm((prev) => ({ ...prev, targetRole: event.target.value }))}
                placeholder="e.g. Head of Growth, COO, Founder"
                className="w-full rounded-lg border border-slate-200/70 bg-white/80 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-1 ring-transparent transition focus:border-sky-300 focus:ring-sky-200 dark:border-slate-700/60 dark:bg-slate-900/80 dark:text-slate-50"
              />
            </label>

            <fieldset className="space-y-2 text-sm">
              <span className="font-medium text-slate-700 dark:text-slate-200">Budget stage</span>
              <div className="grid grid-cols-3 gap-2 text-xs font-medium uppercase tracking-wide">
                {[
                  { value: "bootstrap", label: "Bootstrap" },
                  { value: "growth", label: "Growth" },
                  { value: "scale", label: "Scale" },
                ].map((option) => (
                  <button
                    type="button"
                    key={option.value}
                    onClick={() => handleBudgetChange(option.value as BudgetRange)}
                    className={`rounded-lg border px-3 py-2 transition ${
                      form.budgetRange === option.value
                        ? "border-sky-500 bg-sky-500/10 text-sky-700 dark:border-sky-400/80 dark:bg-sky-400/20 dark:text-sky-200"
                        : "border-slate-200/70 bg-white/60 text-slate-600 hover:border-slate-300 dark:border-slate-700/60 dark:bg-slate-900/70 dark:text-slate-400"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="space-y-3 md:col-span-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  Automation priorities
                </span>
                <button
                  type="button"
                  onClick={() => setForm((prev) => ({ ...prev, automationFocus: automationChoices.map((item) => item.id) }))}
                  className="text-xs font-semibold text-sky-600 hover:text-sky-500 dark:text-sky-300 dark:hover:text-sky-200"
                >
                  Select all
                </button>
              </div>
              <div className="grid gap-2 md:grid-cols-2">
                {automationChoices.map((automation) => {
                  const active = form.automationFocus.includes(automation.id);
                  return (
                    <button
                      key={automation.id}
                      type="button"
                      onClick={() => toggleAutomation(automation.id)}
                      className={`group flex flex-col rounded-xl border px-4 py-3 text-left transition ${
                        active
                          ? "border-sky-500 bg-sky-500/10 shadow-sm dark:border-sky-400/80 dark:bg-sky-400/15"
                          : "border-slate-200/70 bg-white/70 hover:border-slate-300 dark:border-slate-700/60 dark:bg-slate-900/70"
                      }`}
                    >
                      <span
                        className={`text-sm font-semibold ${
                          active ? "text-sky-700 dark:text-sky-200" : "text-slate-700 dark:text-slate-100"
                        }`}
                      >
                        {automation.label}
                      </span>
                      <span className="text-xs text-slate-500 transition group-hover:text-slate-600 dark:text-slate-400 dark:group-hover:text-slate-300">
                        {automation.helper}
                      </span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <fieldset className="space-y-2 md:col-span-2">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Outreach tone</span>
              <div className="flex flex-wrap gap-2 text-sm">
                {[
                  { value: "warm", label: "Warm & relational" },
                  { value: "direct", label: "Direct & ROI-driven" },
                  { value: "technical", label: "Technical & expert" },
                ].map((tone) => (
                  <button
                    type="button"
                    key={tone.value}
                    onClick={() => setForm((prev) => ({ ...prev, outreachTone: tone.value as LeadAgentInput["outreachTone"] }))}
                    className={`rounded-full px-4 py-2 transition ${
                      form.outreachTone === tone.value
                        ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                        : "bg-slate-200/70 text-slate-600 hover:bg-slate-300/70 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                    }`}
                  >
                    {tone.label}
                  </button>
                ))}
              </div>
            </fieldset>
          </form>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Quick presets
            </p>
            <div className="grid gap-3 md:grid-cols-3">
              {presetScenarios.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => setForm(preset.config)}
                  className="rounded-2xl border border-slate-200/70 bg-white/60 px-4 py-3 text-left text-xs shadow-sm transition hover:border-slate-300 hover:shadow-md dark:border-slate-700/60 dark:bg-slate-900/70"
                >
                  <span className="block text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {preset.label}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">{preset.description}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 rounded-3xl bg-slate-900 text-slate-100 shadow-xl ring-1 ring-white/10 dark:bg-slate-950/90">
          <div className="flex flex-col gap-8 p-8">
            <header className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-400">
                Agent Output
              </p>
              <h3 className="text-2xl font-semibold text-white">Deployment summary</h3>
              <p className="text-sm text-slate-300">
                {plan.executiveSummary}
              </p>
            </header>

            <div className="grid gap-6">
              <section className="space-y-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Core narrative</p>
                  <p className="text-lg font-semibold text-white">{plan.keyMessage}</p>
                  <p className="text-sm text-slate-300">{plan.positioning}</p>
                </div>
              </section>

              <section className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Lead targets
                  </p>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    {plan.leads.length} matches
                  </span>
                </div>
                <div className="space-y-3">
                  {plan.leads.map((lead) => (
                    <div
                      key={lead.profile.id}
                      className="rounded-2xl border border-white/5 bg-white/5 p-4"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <p className="text-base font-semibold text-white">
                            {lead.profile.name}
                          </p>
                          <p className="text-xs uppercase tracking-wide text-slate-400">
                            {lead.profile.industry} • {lead.profile.location}
                          </p>
                        </div>
                        <span className="rounded-lg bg-white/10 px-3 py-1 text-sm font-semibold text-white">
                          {lead.score}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-slate-300">{lead.profile.description}</p>
                      <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                        {lead.fitHighlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="rounded-full bg-emerald-400/10 px-3 py-1 font-medium text-emerald-200"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 space-y-2 text-sm text-slate-200">
                        <p>
                          <span className="font-semibold text-white">Offer:</span> {lead.suggestedOffer}
                        </p>
                        <p className="text-slate-300">
                          <span className="font-semibold text-white">Hook:</span> {lead.outreachHook}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Automation plays
                </p>
                <div className="grid gap-3">
                  {plan.automationPlays.map((play) => (
                    <div key={play.name} className="rounded-2xl border border-white/5 bg-white/5 p-4">
                      <p className="text-sm font-semibold text-white">{play.name}</p>
                      <p className="mt-2 text-sm text-slate-300">{play.description}</p>
                      <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-200">
                        {play.primaryTooling.map((tool) => (
                          <span key={tool} className="rounded-full bg-white/5 px-3 py-1 font-medium">
                            {tool}
                          </span>
                        ))}
                      </div>
                      <p className="mt-3 text-[11px] uppercase tracking-wide text-slate-400">
                        Cadence
                      </p>
                      <ul className="mt-1 space-y-1 text-xs text-slate-200">
                        {play.cadences.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-sky-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Outreach sequence
                </p>
                <ol className="space-y-2 text-sm text-slate-200">
                  {plan.outreachSequence.map((step) => (
                    <li
                      key={`${step.day}-${step.channel}`}
                      className="rounded-xl border border-white/5 bg-white/5 px-4 py-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-semibold text-white">Day {step.day}</span>
                        <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-300">
                          {step.channel}
                        </span>
                      </div>
                      <p className="mt-2 text-slate-200">{step.content}</p>
                      <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                        Goal: {step.objective}
                      </p>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Stack & next actions
                </p>
                <div className="flex flex-wrap gap-2 text-[11px]">
                  {plan.recommendedStack.map((tool) => (
                    <span key={tool} className="rounded-full bg-white/5 px-3 py-1 font-medium text-slate-200">
                      {tool}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2 text-sm text-slate-200">
                  {plan.nextActions.map((action) => (
                    <li key={action} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
