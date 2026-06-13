import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "About ALR Bathrooms | Surrey Bathroom Specialists",
  description:
    "Learn about ALR Bathrooms — Surrey's specialist bathroom designers and installers based in Shepperton. Over a decade of experience transforming bathrooms across Surrey.",
  alternates: { canonical: "https://www.alrbathrooms.com/about" },
};

const values = [
  {
    title: "Specialist, Not Generalist",
    desc: "We do one thing — bathrooms — and we do it exceptionally well. Every project gets our full focus and expertise.",
  },
  {
    title: "Design-Led Approach",
    desc: "A beautiful bathroom starts with a great design. We guide you through every decision to create a space you'll love for years.",
  },
  {
    title: "Honest Pricing",
    desc: "Fixed, transparent quotes before work begins. No hidden costs, no surprises on the final invoice.",
  },
  {
    title: "Personal Service",
    desc: "You deal directly with us from first call to completion. No middlemen, no miscommunication.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand py-20">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#C9A97A]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase text-[#C9A97A] mb-3">About Us</p>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Bathroom Specialists <br />Based in Surrey
          </h1>
          <p className="text-[#8B8FA0] text-lg max-w-2xl leading-relaxed">
            ALR Bathrooms is a dedicated bathroom design and installation company serving
            homeowners across Surrey and surrounding areas.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-[#C9A97A] mb-3">Our Story</p>
              <h2 className="text-3xl font-black text-brand mb-6">
                Built on a Passion for Beautiful Bathrooms
              </h2>
              <div className="space-y-4 text-[#8B8FA0] leading-relaxed">
                <p>
                  ALR Bathrooms was founded with a simple belief: homeowners in Surrey deserve a bathroom
                  installation service that takes the stress out of the process and delivers results they&apos;re
                  genuinely proud of.
                </p>
                <p>
                  Based in Shepperton, we&apos;ve spent over a decade working on bathrooms across the county —
                  from compact ensuites in Esher to full luxury master bathrooms in Cobham and Richmond.
                  Every project is treated with the same care and craftsmanship.
                </p>
                <p>
                  What sets us apart is our design-led approach. We don&apos;t just fit tiles and sanitaryware —
                  we help you create a cohesive, beautiful space that reflects how you want to live. Then
                  we build it to the highest possible standard.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/free-estimate"
                  className="inline-flex items-center gap-2 bg-[#C9A97A] hover:bg-[#B8955A] text-white font-bold px-6 py-3 transition-colors"
                >
                  Get Your Free Estimate <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="/images/bathroom-3.jpg" alt="ALR Bathrooms — luxury rose marble installation with brass shower" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-[#C9A97A] mb-3">Our Values</p>
            <h2 className="text-3xl font-black text-brand">How We Work</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8 border border-[#EDEAE3]">
                <div className="w-8 h-1 bg-[#C9A97A] mb-5" />
                <h3 className="font-bold text-brand mb-3">{v.title}</h3>
                <p className="text-sm text-[#8B8FA0] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-[#C9A97A] mb-3">What You Can Expect</p>
          <h2 className="text-3xl font-black text-brand mb-10">Our Commitment to You</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {[
              "Free design consultation and estimate",
              "Detailed, fixed-price quotation",
              "No hidden fees or surprise costs",
              "Project management from start to finish",
              "Premium materials and fixtures",
              "Tidy, respectful work on your home",
              "Thorough clean-up on completion",
              "7 days a week, 8am–6pm availability",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-[#C9A97A] shrink-0" />
                <span className="text-sm text-brand">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Let&apos;s Talk About Your Bathroom</h2>
          <p className="text-[#8B8FA0] mb-8">
            Contact us today for a free, no-obligation consultation and estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-estimate"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A97A] text-white font-bold px-8 py-4"
            >
              Free Estimate <ArrowRight size={15} />
            </Link>
            <a
              href="tel:07934679117"
              className="inline-flex items-center justify-center gap-2 border border-[#2A3355] text-white font-bold px-8 py-4 hover:border-[#C9A97A] transition-colors"
            >
              <Phone size={15} /> 07934 679117
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
