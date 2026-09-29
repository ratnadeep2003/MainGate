"use client";

import { Partner } from "@/types/partners";
import { Lock, X, CheckCircle2 } from "lucide-react";

interface PaywallModalProps {
  partner: Partner | null;
  onClose: () => void;
}

export function PaywallModal({ partner, onClose }: PaywallModalProps) {
  if (!partner) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl relative border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
        <button onClick={onClose} className="absolute top-5 right-5 text-slate-400 hover:text-slate-600">
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-4">
          <Lock className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-semibold text-slate-900 mb-1">Unlock Direct WhatsApp Intro</h3>
        <p className="text-slate-500 text-sm mb-6">
          Subscribe to access automated WhatsApp outreach to founders at{" "}
          <span className="font-semibold text-slate-800">{partner.name}</span>.
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
        </div>

        <button
          onClick={() => alert("Processing payment...")}
          className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-xl text-sm transition-colors shadow-lg"
        >
          Unlock Access • ₹499/mo
        </button>
      </div>
    </div>
  );
}