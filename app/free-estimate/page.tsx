import type { Metadata } from "next";
import FreeEstimateForm from "@/components/FreeEstimateForm";
import { CheckCircle2, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Bathroom Estimate Surrey | ALR Bathrooms",
  description:
    "Get a free, no-obligation bathroom estimate from ALR Bathrooms. Covering Surrey — Shepperton, Cobham, Esher, Guildford, Woking, Richmond, Wimbledon and Kingston. Call 07934 679117.",
  alternates: { canonical: "https://www.alrbathrooms.com/free-estimate" },
};

export default function FreeEstimatePage() {
  return (
    <>
      <section className="bg-brand py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase text-[#C4A265] mb-3">No Obligation</p>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Book Your Free Estimate
          </h1>
          <p className="text-[#8B7D72] text-lg max-w-2xl leading-relaxed">
            Tell us about your project and we&apos;ll arrange a free home visit at a time that suits you.
            No pressure, no obligation — just honest advice and a clear quote.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#F9F7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <FreeEstimateForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white border border-[#EDE9E3] p-8">
                <h3 className="font-black text-brand mb-4">What Happens Next?</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", text: "We&apos;ll contact you within 24 hours to arrange a convenient time." },
                    { step: "2", text: "We visit your home and discuss your project in full — free of charge." },
                    { step: "3", text: "We send you a detailed design and fixed-price quote within 5 working days." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-3">
                      <div className="w-6 h-6 bg-[#C4A265] flex items-center justify-center text-white text-xs font-bold shrink-0">
                        {item.step}
                      </div>
                      <p className="text-sm text-[#8B7D72] leading-relaxed" dangerouslySetInnerHTML={{ __html: item.text }} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-[#EDE9E3] p-8">
                <h3 className="font-black text-brand mb-4">Prefer to Call?</h3>
                <a
                  href="tel:07934679117"
                  className="flex items-center gap-2 text-[#C4A265] font-bold text-lg mb-2 hover:underline"
                >
                  <Phone size={18} />
                  07934 679117
                </a>
                <div className="flex items-center gap-2 text-sm text-[#8B7D72]">
                  <Clock size={14} className="text-[#C4A265]" />
                  Mon–Sun: 8:00am – 6:00pm
                </div>
              </div>

              <div className="bg-white border border-[#EDE9E3] p-8">
                <div className="text-xs font-bold tracking-widest uppercase text-[#C4A265] mb-4">
                  Our Promise
                </div>
                <div className="space-y-2.5">
                  {[
                    "Completely free, no-obligation estimate",
                    "Fixed-price quotation before work starts",
                    "No hidden costs or surprises",
                    "7 days a week availability",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-brand">
                      <CheckCircle2 size={14} className="text-[#C4A265] shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
