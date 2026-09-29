import Link from "next/link";
import { PARTNERS } from "@/data/partners";
import { notFound } from "next/navigation";
import { ApplicationForm } from "@/components/partners/ApplicationForm";
import { ChevronLeft, Briefcase, MapPin, DollarSign, FileText } from "lucide-react";

export default async function RolePage({
  params,
}: {
  params: Promise<{ partnerId: string; roleId: string }>;
}) {
  const { partnerId, roleId } = await params;

  const partner = PARTNERS.find((p) => p.id === partnerId);
  const role = partner?.roles.find((r) => r.id === roleId);

  if (!partner || !role) notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Top Back Navigation */}
      <Link
        href={`/${partner.id}`}
        className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-900 transition-colors mb-8"
      >
        <ChevronLeft className="w-4 h-4" />
        <span>All roles</span>
      </Link>

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

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
          <ApplicationForm roleTitle={role.title} companyName={partner.name} />
        </div>
      </div>
    </div>
  );
}