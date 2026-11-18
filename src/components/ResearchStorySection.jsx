import React, { useState } from 'react';
import { RESEARCH_PILLARS } from '../data/researchData';
import { ExternalLink, Clock, ShieldCheck, AlertCircle, Info, BookOpen, MapPin } from 'lucide-react';

export const ResearchStorySection = () => {
  const [activeCareFilter, setActiveCareFilter] = useState('both');
  const [activeScreenTab, setActiveScreenTab] = useState('weekdays');

  const p1 = RESEARCH_PILLARS[0]; // Workforce
  const p2 = RESEARCH_PILLARS[1]; // Unpaid Care
  const p3 = RESEARCH_PILLARS[2]; // Screen Exposure
  const p4 = RESEARCH_PILLARS[3]; // Child Development
  const p5 = RESEARCH_PILLARS[4]; // WHO
  const p6 = RESEARCH_PILLARS[5]; // Childcare Gap
  const p7 = RESEARCH_PILLARS[6]; // Coimbatore Costs

  return (
    <div className="relative z-20 space-y-36 py-24 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto">
      {/* Intro Editorial Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#F5B700] uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Research Foundations // The Dual-Income Reality</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-editorial tracking-tight text-white leading-tight">
          Why Children Need Conversation, Not More Passive Screens
        </h2>
        <p className="text-base sm:text-lg text-[#C5CAD6] font-sans leading-relaxed">
          ELO was conceived from rigorous developmental evidence and empirical socioeconomic realities across modern Indian households. Explore the verified research motivating our screen-free architecture.
        </p>
      </div>

      {/* ======================================================== */}
      {/* PILLAR 1: Women's Workforce Participation — PLFS 2025 */}
      {/* ======================================================== */}
      <section id="research-workforce" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-mono text-[#F5B700] uppercase tracking-widest block">
            {p1.badge}
          </span>
          <h3 className="text-2xl sm:text-4xl font-bold font-editorial text-white leading-snug">
            {p1.headline}
          </h3>
          <p className="text-sm sm:text-base text-[#C5CAD6] leading-relaxed">
            {p1.lead}
          </p>

          {/* Typographic Stat Composition */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {p1.stats.map((s, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0E1015]/80 border border-white/10 backdrop-blur-md relative overflow-hidden"
              >
                <div className="text-3xl sm:text-4xl font-black font-editorial text-[#F5B700] tracking-tight">
                  {s.value}
                </div>
                <div className="text-xs font-semibold text-white mt-1 mb-1">
                  {s.label}
                </div>
                <div className="text-[11px] text-[#8B94A7] leading-tight">
                  {s.subtext}
                </div>
              </div>
            ))}
          </div>

          {/* Contextual Clarification Note */}
          <div className="p-4 rounded-xl bg-amber-950/20 border border-[#F5B700]/30 text-xs text-[#E8E5DF] flex items-start gap-3">
            <Info className="w-4 h-4 text-[#F5B700] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#F5B700] block mb-0.5">Critical Distinction</span>
              {p1.distinction}
            </div>
          </div>

          {/* Primary Source Citation */}
          <div className="pt-2 text-xs font-mono text-[#8B94A7] flex flex-wrap items-center gap-3">
            <span>Source: {p1.source}</span>
            {p1.urls.map((u, i) => (
              <a
                key={i}
                href={u}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[#F5B700] hover:underline"
              >
                <span>PIB Release {i + 1}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* PILLAR 2: Unpaid Domestic & Caregiving Gap (TUS 2024 / UNDP 2025) */}
      {/* ======================================================== */}
      <section id="research-care" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-mono text-[#F5B700] uppercase tracking-widest block">
            {p2.badge}
          </span>
          <h3 className="text-2xl sm:text-4xl font-bold font-editorial text-white leading-snug">
            {p2.headline}
          </h3>
          <p className="text-sm sm:text-base text-[#C5CAD6] leading-relaxed">
            {p2.lead}
          </p>

          {/* Animated 341 vs 42 Minutes Visualizer */}
          <div className="p-6 rounded-3xl bg-[#0E1015]/85 border border-white/10 backdrop-blur-md space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-[#8B94A7]">
                <Clock className="w-4 h-4 text-[#F5B700]" />
                <span>Daily Unpaid Work Duration Comparison</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#F5B700]/15 border border-[#F5B700]/40 text-xs font-mono text-[#F5B700] font-bold">
                {p2.comparison.ratioText}
              </span>
            </div>

            {/* Women Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white font-medium">{p2.comparison.womenLabel}</span>
                <span className="font-mono font-bold text-[#F5B700] text-lg">
                  {p2.comparison.womenMinutes} Minutes <span className="text-xs text-[#8B94A7] font-normal">(5 hrs 41 min)</span>
                </span>
              </div>
              <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/10">
                <div
                  className="h-full bg-gradient-to-r from-[#F5B700] to-[#EAB308] rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(245,183,0,0.5)]"
                  style={{ width: '100%' }}
                />
              </div>
            </div>

            {/* Men Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[#8B94A7] font-medium">{p2.comparison.menLabel}</span>
                <span className="font-mono font-bold text-white text-lg">
                  {p2.comparison.menMinutes} Minutes <span className="text-xs text-[#8B94A7] font-normal">(42 min)</span>
                </span>
              </div>
              <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/10">
                <div
                  className="h-full bg-white/30 rounded-full transition-all duration-1000"
                  style={{ width: `${(p2.comparison.menMinutes / p2.comparison.womenMinutes) * 100}%` }}
                />
              </div>
            </div>

            <p className="text-xs text-[#8B94A7] leading-relaxed border-t border-white/10 pt-4">
              {p2.comparison.description} This profound daily caregiving load leaves working mothers balancing professional demands with few alternatives to passive screen entertainment.
            </p>
          </div>

          <div className="text-xs font-mono text-[#8B94A7] flex items-center gap-2">
            <span>Source: {p2.source}</span>
            <a
              href={p2.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[#F5B700] hover:underline"
            >
              <span>UNDP Report PDF</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* PILLAR 3: Children's Screen Exposure in India (BMJ 2025) */}
      {/* ======================================================== */}
      <section id="research-screen" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-mono text-[#F5B700] uppercase tracking-widest block">
            {p3.badge}
          </span>
          <h3 className="text-2xl sm:text-4xl font-bold font-editorial text-white leading-snug">
            {p3.headline}
          </h3>
          <p className="text-sm sm:text-base text-[#C5CAD6] leading-relaxed">
            {p3.lead}
          </p>

          {/* Interactive Screen Time Distribution */}
          <div className="p-6 rounded-3xl bg-[#0E1015]/85 border border-white/10 backdrop-blur-md space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-mono text-white font-semibold">Reported Daily Screen Durations</span>
              <span className="text-[11px] font-mono text-[#F5B700]">BMJ Paediatrics Open 2025</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {p3.distribution.map((d, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 hover:border-[#F5B700]/50 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-black font-editorial text-[#00F0FF]">
                    {d.percentage}
                  </div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">
                    {d.range}
                  </div>
                  <div className="text-[11px] text-[#F5B700] font-mono">
                    {d.period}
                  </div>
                  <div className="text-[11px] text-[#8B94A7] leading-tight">
                    {d.note}
                  </div>
                </div>
              ))}
            </div>

            {/* Crucial Accuracy Disclaimer */}
            <div className="p-4 rounded-xl bg-blue-950/20 border border-[#00F0FF]/30 text-xs text-[#E8E5DF] space-y-1">
              <div className="font-semibold text-[#00F0FF] flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{p3.sample}</span>
              </div>
              <p className="text-[#8B94A7] leading-relaxed">
                {p3.contextNote}
              </p>
            </div>
          </div>

          <div className="text-xs font-mono text-[#8B94A7] flex items-center gap-2">
            <span>Source: {p3.source}</span>
            <a
              href={p3.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[#F5B700] hover:underline"
            >
              <span>PubMed Central Entry</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* PILLAR 4 & 5: JAMA Pediatrics 2024 & WHO Guidelines */}
      {/* ======================================================== */}
      <section id="research-development" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-mono text-[#F5B700] uppercase tracking-widest block">
            {p4.badge}
          </span>
          <h3 className="text-2xl sm:text-4xl font-bold font-editorial text-white leading-snug">
            {p4.headline}
          </h3>
          <p className="text-sm sm:text-base text-[#C5CAD6] leading-relaxed">
            {p4.lead}
          </p>

          {/* Meta-Analysis Card */}
          <div className="p-6 rounded-3xl bg-[#0E1015]/85 border border-white/10 backdrop-blur-md space-y-4">
            <div className="grid grid-cols-3 gap-2 pb-4 border-b border-white/10 text-center">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-editorial text-white">{p4.metaAnalysis.studies}</div>
                <div className="text-[10px] font-mono text-[#8B94A7]">Synthesized</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-editorial text-[#F5B700]">{p4.metaAnalysis.participants}</div>
                <div className="text-[10px] font-mono text-[#8B94A7]">Total Children</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-editorial text-white">{p4.metaAnalysis.metaStudies}</div>
                <div className="text-[10px] font-mono text-[#8B94A7]">Meta-Analyzed</div>
              </div>
            </div>

            <div className="space-y-3 text-xs leading-relaxed">
              <div className="p-3 rounded-xl bg-red-950/20 border border-red-500/20 text-[#E8E5DF]">
                <strong className="text-red-400 block mb-1">Poorer Cognitive & Psychosocial Associations:</strong>
                {p4.metaAnalysis.findingsPoorer}
              </div>

              <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-[#E8E5DF]">
                <strong className="text-emerald-400 block mb-1">Positive Interactive Associations:</strong>
                {p4.metaAnalysis.findingsPositive}
              </div>
            </div>

            <p className="text-[11px] text-[#8B94A7] italic">
              {p4.scientificNote}
            </p>
          </div>

          {/* WHO Screen-Time Recommendation Benchmark */}
          <div id="research-who" className="p-5 rounded-2xl bg-amber-950/20 border border-[#F5B700]/30 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#F5B700] font-bold uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>WHO Global Pediatric Benchmark</span>
            </div>
            <p className="text-sm font-semibold text-white">
              "{p5.benchmark}"
            </p>
            <p className="text-xs text-[#E8E5DF] leading-relaxed">
              {p5.guidelineNote}
            </p>
            <div className="pt-1 text-[11px] font-mono text-[#8B94A7]">
              Source: {p5.source}
            </div>
          </div>

          <div className="text-xs font-mono text-[#8B94A7] flex flex-wrap items-center gap-3">
            <a
              href={p4.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[#F5B700] hover:underline"
            >
              <span>JAMA Pediatrics Article</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={p5.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[#F5B700] hover:underline"
            >
              <span>WHO Guidance Release</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* PILLAR 6 & 7: Urban Childcare Gap & Coimbatore Listing Examples */}
      {/* ======================================================== */}
      <section id="research-childcare" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-mono text-[#F5B700] uppercase tracking-widest block">
            {p6.badge}
          </span>
          <h3 className="text-2xl sm:text-4xl font-bold font-editorial text-white leading-snug">
            {p6.headline}
          </h3>
          <p className="text-sm sm:text-base text-[#C5CAD6] leading-relaxed">
            {p6.lead}
          </p>

          {/* Modelled Estimates Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {p6.dataPoints.map((dp, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#0E1015]/85 border border-white/10 backdrop-blur-md space-y-2">
                <div className="text-3xl font-black font-editorial text-[#F5B700]">
                  {dp.metric}
                </div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  {dp.label}
                </div>
                <div className="text-xs text-[#8B94A7] leading-relaxed">
                  {dp.description}
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#8B94A7] italic">
            {p6.clarification}
          </p>

          {/* Coimbatore Local Directory Examples */}
          <div id="research-costs" className="p-6 rounded-3xl bg-[#0E1015]/85 border border-white/10 backdrop-blur-md space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#F5B700] uppercase tracking-wider font-semibold">
              <MapPin className="w-4 h-4" />
              <span>Indicative Local Listings // Coimbatore Centers</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {p7.examples.map((ex, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="font-bold text-white text-sm">{ex.center}</div>
                  <div className="text-xs text-[#8B94A7]">{ex.locality}</div>
                  <div className="pt-2 border-t border-white/10 text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-[#8B94A7]">Daycare:</span>
                      <span className="font-mono text-[#F5B700] font-semibold">{ex.daycareFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8B94A7]">Preschool:</span>
                      <span className="font-mono text-white font-semibold">{ex.preschoolFee}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-[#8B94A7] leading-relaxed pt-1">
              {p7.caveat}
            </p>
          </div>

          <div className="text-xs font-mono text-[#8B94A7] flex flex-wrap items-center gap-3">
            <a
              href={p6.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[#F5B700] hover:underline"
            >
              <span>UNDP & Dalberg 2026 Report</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            {p7.urls.map((u, i) => (
              <a
                key={i}
                href={u}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[#F5B700] hover:underline"
              >
                <span>Kiddenz Directory Listing {i + 1}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
