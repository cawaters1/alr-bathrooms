import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone, Palette, Ruler, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Bathroom Design Surrey | ALR Bathrooms",
  description:
    "Bespoke bathroom design service in Surrey. We handle the full design process — from concept and layout through to fixture selection. Shepperton, Cobham, Esher, Guildford. Free consultation.",
  alternates: { canonical: "https://www.alrbathrooms.com/services/bathroom-design" },
};

const designSteps = [
  {
    icon: Palette,
    title: "Initial Consultation",
    desc: "We visit your home, understand your vision and assess the space. Completely free, no obligation.",
  },
  {
    icon: Ruler,
    title: "Design & Layout",
    desc: "We create a detailed design with floor plan, layout options and a full material and fixture specification.",
  },
  {
    icon: Layers,
    title: "Refinement",
    desc: "We refine the design with you until every detail is exactly right — then we give you a fixed quote.",
  },
];

export default function BathroomDesignPage() {
  return (
    <>
      <section className="bg-brand py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 text-xs text-[#8B8FA0] mb-4">
            <Link href="/services" className="hover:text-[#C9A97A] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#C9A97A]">Bathroom Design</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Bathroom Design <br />in Surrey
          </h1>
          <p className="text-[#8B8FA0] text-lg max-w-2xl leading-relaxed">
            A beautiful bathroom starts with a great design. We guide you through every
            decision — from layout and materials to fixtures and finishes.
          </p>
        </div>
      </section>

      {/* Design process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-[#C9A97A] mb-3">Our Design Process</p>
              <h2 className="text-3xl font-black text-brand mb-6">
                Your Vision, Our Expertise
              </h2>
              <p className="text-[#8B8FA0] leading-relaxed mb-8">
                We believe the design stage is where the magic happens. Get the design right and
                the installation follows naturally. We spend time understanding exactly what you want —
                and then we design it.
              </p>
              <div className="space-y-6">
                {designSteps.map((step) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#F8F6F2] flex items-center justify-center shrink-0">
                      <step.icon size={18} className="text-[#C9A97A]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand mb-1">{step.title}</h3>
                      <p className="text-sm text-[#8B8FA0] leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/free-estimate"
                  className="inline-flex items-center justify-center gap-2 bg-[#C9A97A] hover:bg-[#B8955A] text-white font-bold px-6 py-3 transition-colors"
                >
                  Book Free Consultation <ArrowRight size={14} />
                </Link>
                <a
                  href="tel:07934679117"
                  className="inline-flex items-center justify-center gap-2 border border-[#EDEAE3] text-brand font-bold px-6 py-3 hover:border-brand transition-colors"
                >
                  <Phone size={14} /> 07934 679117
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="/images/bathroom-1.jpg" alt="Bespoke bathroom design — dark vanity with marble vessel sink and warm lighting" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* What we consider */}
      <section className="py-20 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-[#C9A97A] mb-3">Design Elements</p>
            <h2 className="text-3xl font-black text-brand">Every Detail Considered</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Space planning and layout optimisation",
              "Tile selection — wall, floor and feature",
              "Sanitaryware — bath, shower, basin, WC",
              "Bespoke vanity and storage units",
              "Lighting design",
              "Heated towel rails and underfloor heating",
              "Colour palette and material finishes",
              "Accessibility considerations",
              "Budget planning and value engineering",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white p-4 border border-[#EDEAE3]">
                <CheckCircle2 size={15} className="text-[#C9A97A] shrink-0" />
                <span className="text-sm text-brand">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Start With a Free Design Consultation</h2>
          <p className="text-[#8B8FA0] mb-8">
            We&apos;ll visit your home, discuss your vision and start the design process — completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 bg-[#C9A97A] text-white font-bold px-8 py-4">
              Book Free Consultation <ArrowRight size={15} />
            </Link>
            <a href="tel:07934679117" className="inline-flex items-center justify-center gap-2 border border-[#2A3355] text-white font-bold px-8 py-4 hover:border-[#C9A97A] transition-colors">
              <Phone size={15} /> 07934 679117
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
