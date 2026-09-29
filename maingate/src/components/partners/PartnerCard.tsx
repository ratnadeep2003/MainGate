import React from "react";
import { Partner } from "@/types/partners";
import { ArrowRight, Signal } from "lucide-react";

interface PartnerCardProps {
  partner: Partner;
  onSelect: (partner: Partner) => void;
}

export function PartnerCard({ partner, onSelect }: PartnerCardProps) {
  return (
    <div
      onClick={() => onSelect(partner)}
      className="group bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all cursor-pointer relative"
    >
      <div>
        {/* Card Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-xl font-bold font-mono text-slate-800">
            {partner.logo}
          </div>
          {/* 🎯 FIX: Render length instead of the raw array object */}
          <span className="text-[11px] font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
            {partner.roles.length} roles
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
          <span
            className={
              partner.tag.includes("₹")
                ? "text-emerald-600 font-semibold"
                : "text-slate-400"
            }
          >
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
  );
}