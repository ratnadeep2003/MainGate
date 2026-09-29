"use client";

import React from "react";
import { Partner, JobRole } from "@/types/partners";
import { ArrowRight, ChevronDown, ArrowLeft } from "lucide-react";

interface PartnerDescriptionProps {
  partner: Partner;
  onSelectRole: (role: JobRole) => void;
  onBack: () => void;
}

export function PartnerDescription({ partner, onSelectRole, onBack }: PartnerDescriptionProps) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Top Back Navigation */}
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 transition-colors mb-8"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>All startups</span>
      </button>

      {/* Header Info */}
      <div className="text-center space-y-4 mb-12">
        <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm mx-auto flex items-center justify-center text-3xl font-bold font-mono">
          {partner.logo}
        </div>
        <h1 className="text-3xl font-serif font-normal text-slate-900">{partner.name}</h1>
        <p className="text-slate-500 text-sm max-w-xl mx-auto font-light leading-relaxed">
          {partner.tagline}
        </p>
      </div>

      {/* Roles Header Bar */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
          {partner.roles.length} roles
        </span>
        <button className="flex items-center gap-1.5 text-xs text-slate-500 border border-slate-200 bg-white px-3 py-1 rounded-lg shadow-sm">
          Sort: <span className="font-medium text-slate-700">Default</span>
          <ChevronDown className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Roles Cards */}
      <div className="space-y-4">
        {partner.roles.map((role) => (
          <div
            key={role.id}
            onClick={() => onSelectRole(role)} // 👈 Updated from onSelect(partner) to onSelectRole(role)
            className="group bg-white border border-slate-200/80 rounded-2xl p-6 hover:shadow-md hover:border-slate-300 transition-all cursor-pointer relative"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-slate-900 text-base mb-1 group-hover:text-blue-600 transition-colors">
                  {role.title}
                </h3>
                <p className="text-xs text-slate-500 mb-3">
                  {role.compensation} · {role.location}
                </p>
                <p className="text-xs text-slate-400 font-medium mb-3">{role.type}</p>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 pr-6">
                  {role.shortDescription}
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-slate-900 group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}