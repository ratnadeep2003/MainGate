"use client";

import React, { useState } from "react";
import { PARTNERS } from "@/data/partners";
import { Partner } from "@/types/partners";
import { PartnerCard } from "@/components/partners/PartnerCard";
import { PaywallModal } from "@/components/partners/PaywallModal";
import { ChevronDown } from "lucide-react";

export default function PartnersPage() {
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

  return (
    <main className="max-w-4xl mx-auto px-4 mt-12 pb-20">
      <div className="text-center space-y-3 mb-10">
        <h1 className="text-3xl sm:text-4xl font-serif font-normal text-slate-900">
          Looking for a role at these startups?
        </h1>
        <p className="text-slate-500 text-sm sm:text-base max-w-lg mx-auto font-light leading-relaxed">
          We can make a direct intro if you're a good fit. If not, you get an instant decision with detailed feedback.
        </p>
      </div>

      <div className="flex justify-end mb-6">
        <button className="flex items-center gap-1.5 text-xs text-slate-500 border border-slate-200 bg-white px-3 py-1.5 rounded-lg shadow-sm">
          Sort: <span className="font-medium text-slate-700">Default</span>
          <ChevronDown className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PARTNERS.map((partner) => (
          <PartnerCard
            key={partner.id}
            partner={partner}
            onSelect={setSelectedPartner}
          />
        ))}
      </div>

      <PaywallModal
        partner={selectedPartner}
        onClose={() => setSelectedPartner(null)}
      />
    </main>
  );
}