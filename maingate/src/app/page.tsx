"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronDown, Lock, X, Signal, CheckCircle2 } from "lucide-react";

interface Partner {
  id: string;
  name: string;
  roles: string;
  description: string;
  tag: string;
  domain: string;
  logo: string;
}

const PARTNERS: Partner[] = [
  {
    id: "triplespeed",
    name: "Triplespeed",
    roles: "2 roles",
    description: "Profitable consumer app studio - multiple apps past $10M/yr. Design, build, and scale product...",
    tag: "Competitive",
    domain: "triplespeed.ai",
    logo: "⚡",
  },
  {
    id: "faff",
    name: "faff",
    roles: "2 roles",
    description: "AI personal assistant on WhatsApp that does your chores - voice and browser agents that...",
    tag: "₹12-40L",
    domain: "usefaff.com",
    logo: "f",
  },
  {
    id: "undisclosed",
    name: "Undisclosed",
    roles: "1 role",
    description: "Stealth-mode, established consumer internet company in Mumbai.",
    tag: "₹80L",
    domain: "Confidential",
    logo: "=",
  },
  {
    id: "MainGate",
    name: "MainGate",
    roles: "1 role",
    description: "We're building the world's best startup hiring agent. Small in-person team in Bangalore.",
    tag: "Competitive",
    domain: "MainGateai.app",
    logo: "👹",
  },
];

export default function PartnersPage() {
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

  return (
    <div className="min-h-screen bg-[#FBFBFB] text-slate-900 font-sans pb-20">
      {/* Top Navbar */}
      <header className="flex items-center justify-center py-6 border-b border-slate-100 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex items-center gap-2 font-semibold text-lg tracking-tight">
          <span className="text-xl">👹</span>
          <span>MainGate</span>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 mt-12">
        {/* Hero Section */}
        <div className="text-center space-y-3 mb-10">
          <h1 className="text-3xl sm:text-4xl font-serif font-normal text-slate-900">
            Looking for a role at these startups?
          </h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-lg mx-auto font-light leading-relaxed">
            We can make a direct intro if you're a good fit. If not, you get an instant decision with detailed feedback.
          </p>
        </div>

        {/* Filter / Sort Bar */}
        <div className="flex justify-end mb-6">
          <button className="flex items-center gap-1.5 text-xs text-slate-500 border border-slate-200 bg-white px-3 py-1.5 rounded-lg shadow-sm hover:border-slate-300 transition-colors">
            Sort: <span className="font-medium text-slate-700">Default</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Partners Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PARTNERS.map((partner) => (
            <div
              key={partner.id}
              onClick={() => setSelectedPartner(partner)}
              className="group bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all cursor-pointer relative"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-xl font-bold font-mono text-slate-800">
                    {partner.logo}
                  </div>
                  <span className="text-[11px] font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                    {partner.roles}
                  </span>
                </div>

                {/* Company Info */}
                <h3 className="font-semibold text-slate-900 text-base mb-1">
                  {partner.name}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4 font-normal">
                  {partner.description}
                </p>
              </div>

              {/* Card Footer */}
              <div>
                <div className="flex items-center gap-1.5 mb-4 text-xs font-medium text-slate-600">
                  {partner.tag.includes("₹") && (
                    <Signal className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" />
                  )}
                  <span className={partner.tag.includes("₹") ? "text-emerald-600 font-semibold" : "text-slate-400"}>
                    {partner.tag}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-400">
                  <span>{partner.domain}</span>
                  <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-slate-900 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Subscription Paywall Modal */}
      {selectedPartner && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl relative border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedPartner(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-4">
              <Lock className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-1">
              Unlock Direct WhatsApp Intro
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              Subscribe to access automated WhatsApp outreach to founders at{" "}
              <span className="font-semibold text-slate-800">{selectedPartner.name}</span> and 50+ other hiring startups.
            </p>

            <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Direct WhatsApp message sent to startup founder</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>AI personalized pitch generated from your GitHub/Resume</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Guaranteed response or detailed feedback within 72h</span>
              </div>
            </div>

            <button
              onClick={() => alert("Redirecting to Stripe / Payment Gateway...")}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-xl text-sm transition-colors shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2"
            >
              <span>Unlock Access • ₹499/mo</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}