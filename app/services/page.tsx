import type { Metadata } from "next";
import Link from "next/link";
import { Ruler, Wrench, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Bathroom Services Surrey | ALR Bathrooms",
  description:
    "Bathroom design and installation services in Surrey. Full project management from concept to completion. Covering Shepperton, Cobham, Esher, Guildford, Woking and more.",
  alternates: { canonical: "https://www.alrbathrooms.com/services" },
};

const services = [
  {
    icon: Ruler,
    title: "Bathroom Design",
    href: "/services/bathroom-design",
    headline: "Your Vision, Brought to Life",
    desc: "A great bathroom starts with a great design. We work with you to understand exactly how you want your bathroom to look and function — then we create a design that makes it a reality.",
    points: [
      "Free initial design consultation",
      "3D design visualisation",
      "Material and fixture selection",
      "Full space planning",
      "Design to any budget",
    ],
  },
  {
    icon: Wrench,
    title: "Full Bathroom Installation",
    href: "/services/bathroom-installation",
    headline: "Complete Installation, Zero Stress",
    desc: "We manage every aspect of your installation — from the initial strip-out through to the final clean. No need to source multiple tradespeople: we handle it all.",
    points: [
      "Full bathroom strip-out and disposal",
      "Tiling, flooring and waterproofing",
      "Plumbing and sanitaryware installation",
      "Electrical works (lighting, heated towel rail)",
      "Final clean and snag check",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase text-[#C9A97A] mb-3">Services</p>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            What We Offer
          </h1>
          <p className="text-[#8B8FA0] text-lg max-w-2xl leading-relaxed">
            A complete bathroom service — from initial design through to the finishing touches.
            One company. One point of contact. Outstanding results.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#F8F6F2] mb-6">
                  <s.icon size={22} className="text-[#C9A97A]" />
                </div>
                <p className="text-xs font-bold tracking-widest uppercase text-[#C9A97A] mb-2">{s.title}</p>
                <h2 className="text-3xl font-black text-brand mb-4">{s.headline}</h2>
                <p className="text-[#8B8FA0] leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-3 mb-8">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-brand">
                      <CheckCircle2 size={15} className="text-[#C9A97A] shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-2 bg-brand hover:bg-[#243360] text-white font-bold px-6 py-3 transition-colors"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
              <div className={`bg-[#EDEAE3] aspect-[4/3] flex items-center justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="text-[#8B8FA0] text-sm tracking-widest uppercase">Photo</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[#C9A97A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Free Estimates for All New Bathrooms</h2>
          <p className="text-white/80 mb-8">
            Contact us today and we&apos;ll arrange a free, no-obligation visit to discuss your project.
          </p>
          <Link
            href="/free-estimate"
            className="inline-flex items-center gap-2 bg-white text-[#C9A97A] font-bold px-8 py-4 hover:bg-[#F8F6F2] transition-colors"
          >
            Book Free Estimate <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
