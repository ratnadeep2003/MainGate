"use client";
//last card to show up
import React, { useState } from "react";
import { Partner, JobRole } from "@/types/partners";
import { ChevronLeft, Upload, Briefcase, MapPin, DollarSign, FileText } from "lucide-react";

interface JobDetailViewProps {
  partner: Partner;
  role: JobRole;
  onBack: () => void;
}

export function JobDetailView({ partner, role, onBack }: JobDetailViewProps) {
  const [formData, setFormData] = useState({
    linkedin: "",
    name: "",
    email: "",
    phone: "",
    resume: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Application submitted for ${role.title} at ${partner.name}!`);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Top Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-900 transition-colors mb-8"
      >
        <ChevronLeft className="w-4 h-4" />
        <span>All roles</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Job Description */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold font-mono">{partner.logo}</span>
            <span className="font-semibold text-slate-800">{partner.name}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-serif font-normal text-slate-900">
            {role.title}
          </h1>

          <div className="space-y-4 pt-4 border-t border-slate-100 text-xs text-slate-600">
            <div className="flex items-start gap-3">
              <Briefcase className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-400 block mb-0.5">Type</span>
                <span className="font-medium text-slate-800">{role.type}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-400 block mb-0.5">Location</span>
                <span className="font-medium text-slate-800">{role.location}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <DollarSign className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-400 block mb-0.5">Compensation</span>
                <span className="font-medium text-slate-800">{role.compensation}</span>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2">
              <FileText className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-400 block mb-1">About</span>
                <p className="text-slate-600 leading-relaxed font-light">{role.fullDescription}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Application Form */}
        <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl font-serif font-normal text-center text-slate-900 mb-6">
            Apply for this role
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {/* LinkedIn Input */}
            <div>
              <label className="block text-slate-500 font-medium mb-1.5">Links</label>
              <input
                type="url"
                placeholder="linkedin.com/in/you"
                value={formData.linkedin}
                onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 text-slate-800 placeholder-slate-300"
              />
            </div>

            {/* OR Divider */}
            <div className="relative my-4 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100" />
              </div>
              <span className="relative bg-white px-3 text-[11px] text-slate-400">or</span>
            </div>

            {/* Resume Upload Dropzone */}
            <div>
              <label className="border-2 border-dashed border-slate-200 hover:border-slate-300 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer transition-colors bg-slate-50/50">
                <Upload className="w-6 h-6 text-slate-400 mb-2" />
                <span className="text-slate-500 font-medium text-center">
                  Click or drop your resume here.
                </span>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={(e) =>
                    setFormData({ ...formData, resume: e.target.files?.[0] || null })
                  }
                />
              </label>
              {formData.resume && (
                <p className="text-[11px] text-emerald-600 mt-1.5 font-medium">
                  Attached: {formData.resume.name}
                </p>
              )}
            </div>

            {/* Name Input */}
            <div>
              <label className="block text-slate-500 font-medium mb-1.5">Name</label>
              <input
                type="text"
                required
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 text-slate-800 placeholder-slate-300"
              />
            </div>

            {/* Email & Phone Row */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-500 font-medium mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  placeholder="you@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 text-slate-800 placeholder-slate-300"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-slate-500 font-medium">Phone</label>
                  <span className="text-[10px] text-slate-400">optional</span>
                </div>
                <input
                  type="tel"
                  placeholder="+1 555 000 1234"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 text-slate-800 placeholder-slate-300"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-full text-sm transition-colors shadow-md mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}