"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type Step = 1 | 2 | 3;

const bathroomTypes = [
  "Full bathroom renovation",
  "Ensuite installation",
  "Shower room",
  "Wet room",
  "Cloakroom / WC",
  "Other",
];

const budgets = [
  "Under £5,000",
  "£5,000 – £10,000",
  "£10,000 – £15,000",
  "£15,000 – £20,000",
  "£20,000+",
  "Not sure yet",
];

const timescales = [
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "6+ months",
  "Just exploring",
];

export default function FreeEstimateForm() {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    bathroomType: "",
    budget: "",
    timescale: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const set = (key: keyof typeof form) => (val: string) =>
    setForm((f) => ({ ...f, [key]: val }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("https://formspree.io/f/mgobpqdn", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          "Bathroom Type": form.bathroomType,
          Budget: form.budget,
          Timescale: form.timescale,
          Name: form.name,
          Phone: form.phone,
          Email: form.email,
          Address: form.address,
          Message: form.message,
        }),
      });
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-white border border-[#EDE9E3] p-12 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F9F7F3] mb-6">
          <CheckCircle2 size={32} className="text-[#C4A265]" />
        </div>
        <h2 className="text-2xl font-black text-brand mb-3">Enquiry Sent</h2>
        <p className="text-[#8B7D72] leading-relaxed max-w-md mx-auto">
          Thank you for getting in touch. We&apos;ll contact you within 24 hours to arrange
          your free home visit.
        </p>
        <p className="mt-4 text-sm text-[#8B7D72]">
          Prefer to speak now?{" "}
          <a href="tel:07934679117" className="text-[#C4A265] font-semibold">
            07934 679117
          </a>
        </p>
      </div>
    );
  }

  const progressPct = ((step - 1) / 2) * 100;

  return (
    <div className="bg-white border border-[#EDE9E3]">
      {/* Progress */}
      <div className="border-b border-[#EDE9E3] p-6">
        <div className="flex items-center justify-between mb-3">
          {(["Project Details", "Preferences", "Contact Info"] as const).map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              <div
                className={`w-7 h-7 flex items-center justify-center text-xs font-bold border transition-colors ${
                  step > i + 1
                    ? "bg-[#C4A265] border-[#C4A265] text-white"
                    : step === i + 1
                    ? "border-[#C4A265] text-[#C4A265]"
                    : "border-[#EDE9E3] text-[#8B7D72]"
                }`}
              >
                {step > i + 1 ? "✓" : i + 1}
              </div>
              <span
                className={`text-xs font-medium hidden sm:block ${
                  step === i + 1 ? "text-brand" : "text-[#8B7D72]"
                }`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
        <div className="h-1 bg-[#EDE9E3] rounded-full">
          <div
            className="h-1 bg-[#C4A265] rounded-full transition-all duration-500"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      <form onSubmit={submit} className="p-8">
        {/* Step 1 */}
        {step === 1 && (
          <div>
            <h2 className="text-xl font-black text-brand mb-1">About Your Project</h2>
            <p className="text-sm text-[#8B7D72] mb-6">Tell us what you have in mind.</p>

            <div className="mb-6">
              <label className="block text-xs font-bold tracking-widest uppercase text-[#8B7D72] mb-3">
                Type of Bathroom
              </label>
              <div className="grid grid-cols-2 gap-2">
                {bathroomTypes.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => set("bathroomType")(t)}
                    className={`text-left text-sm px-4 py-3 border transition-colors ${
                      form.bathroomType === t
                        ? "border-[#C4A265] bg-[#F9F7F3] text-brand font-semibold"
                        : "border-[#EDE9E3] text-[#8B7D72] hover:border-[#C4A265]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-xs font-bold tracking-widest uppercase text-[#8B7D72] mb-3">
                Anything Else? (Optional)
              </label>
              <textarea
                rows={3}
                value={form.message}
                onChange={(e) => set("message")(e.target.value)}
                placeholder="Tell us more about your project, ideas or any specific requirements..."
                className="w-full border border-[#EDE9E3] px-4 py-3 text-sm text-brand focus:border-[#C4A265] outline-none resize-none"
              />
            </div>

            <button
              type="button"
              disabled={!form.bathroomType}
              onClick={() => setStep(2)}
              className="flex items-center gap-2 bg-[#C4A265] hover:bg-[#B8935A] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold px-6 py-3 transition-colors"
            >
              Next Step <ArrowRight size={15} />
            </button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div>
            <h2 className="text-xl font-black text-brand mb-1">Your Preferences</h2>
            <p className="text-sm text-[#8B7D72] mb-6">Help us understand your budget and timescale.</p>

            <div className="mb-6">
              <label className="block text-xs font-bold tracking-widest uppercase text-[#8B7D72] mb-3">
                Budget
              </label>
              <div className="grid grid-cols-2 gap-2">
                {budgets.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => set("budget")(b)}
                    className={`text-left text-sm px-4 py-3 border transition-colors ${
                      form.budget === b
                        ? "border-[#C4A265] bg-[#F9F7F3] text-brand font-semibold"
                        : "border-[#EDE9E3] text-[#8B7D72] hover:border-[#C4A265]"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-xs font-bold tracking-widest uppercase text-[#8B7D72] mb-3">
                When Are You Looking to Start?
              </label>
              <div className="grid grid-cols-2 gap-2">
                {timescales.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => set("timescale")(t)}
                    className={`text-left text-sm px-4 py-3 border transition-colors ${
                      form.timescale === t
                        ? "border-[#C4A265] bg-[#F9F7F3] text-brand font-semibold"
                        : "border-[#EDE9E3] text-[#8B7D72] hover:border-[#C4A265]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="border border-[#EDE9E3] text-brand font-bold px-6 py-3 hover:border-brand transition-colors text-sm"
              >
                Back
              </button>
              <button
                type="button"
                disabled={!form.budget || !form.timescale}
                onClick={() => setStep(3)}
                className="flex items-center gap-2 bg-[#C4A265] hover:bg-[#B8935A] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold px-6 py-3 transition-colors"
              >
                Next Step <ArrowRight size={15} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div>
            <h2 className="text-xl font-black text-brand mb-1">Your Contact Details</h2>
            <p className="text-sm text-[#8B7D72] mb-6">So we can get in touch to arrange your free visit.</p>

            <div className="space-y-4 mb-8">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-[#8B7D72] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => set("name")(e.target.value)}
                    placeholder="Your name"
                    className="w-full border border-[#EDE9E3] px-4 py-3 text-sm text-brand focus:border-[#C4A265] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-[#8B7D72] mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => set("phone")(e.target.value)}
                    placeholder="07..."
                    className="w-full border border-[#EDE9E3] px-4 py-3 text-sm text-brand focus:border-[#C4A265] outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-[#8B7D72] mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => set("email")(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full border border-[#EDE9E3] px-4 py-3 text-sm text-brand focus:border-[#C4A265] outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-[#8B7D72] mb-1.5">
                  Property Address
                </label>
                <input
                  type="text"
                  value={form.address}
                  onChange={(e) => set("address")(e.target.value)}
                  placeholder="Street, Town, Postcode"
                  className="w-full border border-[#EDE9E3] px-4 py-3 text-sm text-brand focus:border-[#C4A265] outline-none"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="border border-[#EDE9E3] text-brand font-bold px-6 py-3 hover:border-brand transition-colors text-sm"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={submitting || !form.name || !form.phone || !form.email}
                className="flex items-center gap-2 bg-[#C4A265] hover:bg-[#B8935A] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-6 py-3 transition-colors"
              >
                {submitting ? "Sending..." : "Request Free Estimate"}
                {!submitting && <ArrowRight size={15} />}
              </button>
            </div>

            <p className="mt-4 text-xs text-[#8B7D72]">
              By submitting this form you agree to be contacted by ALR Bathrooms regarding your enquiry.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
