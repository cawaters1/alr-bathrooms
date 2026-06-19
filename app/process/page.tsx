import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Process | ALR Bathrooms Surrey",
  description:
    "How a bathroom project works with ALR Bathrooms — from free consultation to final installation. Simple, stress-free and fully managed.",
  alternates: { canonical: "https://www.alrbathrooms.com/process" },
};

const steps = [
  {
    num: "01",
    title: "Free Consultation",
    duration: "Day 1",
    desc: "We visit your home at a time that suits you. We assess the space, listen to your ideas and discuss what you want to achieve. No pressure, no obligation — just an honest conversation.",
    detail: [
      "Home visit at your convenience, 7 days a week",
      "Assessment of existing bathroom and plumbing",
      "Discussion of your vision, style preferences and budget",
      "Initial ideas and suggestions from our designers",
    ],
  },
  {
    num: "02",
    title: "Design & Quote",
    duration: "Within 5 Days",
    desc: "We produce a detailed bathroom design including layout, tile choices, fixture selection and a full written specification. Alongside this we provide a transparent, fixed-price quote.",
    detail: [
      "Detailed floor plan and layout design",
      "Full material, tile and fixture specification",
      "Fixed-price, itemised quotation",
      "Opportunity to revise and refine before committing",
    ],
  },
  {
    num: "03",
    title: "Scheduling",
    duration: "To Suit You",
    desc: "Once you're happy with the design and quote, we schedule the installation at a time that works for you. We handle all the trade bookings and coordination so you don't have to.",
    detail: [
      "Flexible scheduling around your life",
      "Clear timeline from strip-out to completion",
      "All tradespeople booked and coordinated by us",
      "Material and fixture delivery arranged",
    ],
  },
  {
    num: "04",
    title: "Installation",
    duration: "2–4 Weeks Typically",
    desc: "Our skilled team carries out the full installation — tiling, plumbing, electrics, furniture fitting and finishing touches. We work cleanly and respectfully in your home throughout.",
    detail: [
      "Strip-out and waste removal",
      "Waterproofing and preparation",
      "Tiling, plumbing and electrical works",
      "Furniture, sanitaryware and fixture installation",
    ],
  },
  {
    num: "05",
    title: "Handover",
    duration: "Final Day",
    desc: "We complete a full quality installation, carry out a thorough clean and walk you through your new bathroom. We don't leave until you're completely happy.",
    detail: [
      "Full quality installation check",
      "Thorough clean throughout",
      "Walkthrough of your new bathroom",
      "Handover of any product manuals and warranties",
    ],
  },
];

export default function ProcessPage() {
  return (
    <>
      <section className="bg-brand py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase text-[#C9A97A] mb-3">How It Works</p>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">Our Process</h1>
          <p className="text-[#8B8FA0] text-lg max-w-2xl leading-relaxed">
            From first enquiry to final handover — here&apos;s how a bathroom project with ALR Bathrooms works.
            Simple, stress-free and completely managed for you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={step.num} className="relative pl-16 pb-16">
                {/* Vertical line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-px bg-[#EDEAE3]" />
                )}
                {/* Number circle */}
                <div className="absolute left-0 top-0 w-12 h-12 bg-brand flex items-center justify-center">
                  <span className="text-[#C9A97A] font-black text-sm">{step.num}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-xl font-black text-brand">{step.title}</h2>
                      <span className="text-xs font-bold text-[#C9A97A] bg-[#F8F6F2] px-2.5 py-1 border border-[#EDEAE3]">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-[#8B8FA0] leading-relaxed mb-5">{step.desc}</p>
                    <ul className="space-y-2">
                      {step.detail.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-brand">
                          <span className="text-[#C9A97A] mt-0.5">—</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Start Step One Today</h2>
          <p className="text-[#8B8FA0] mb-8">
            Book your free consultation — available 7 days a week across Surrey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 bg-[#C9A97A] text-white font-bold px-8 py-4">
              Book Free Consultation <ArrowRight size={15} />
            </Link>
            <a href="tel:07934679117" className="inline-flex items-center justify-center gap-2 border border-[#2A3355] text-white font-bold px-8 py-4 rounded-xl shadow-md hover:border-[#C9A97A] transition-colors">
              <Phone size={15} /> 07934 679117
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
