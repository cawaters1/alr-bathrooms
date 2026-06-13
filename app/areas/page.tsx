import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Areas Covered | ALR Bathrooms Surrey",
  description:
    "ALR Bathrooms installs and designs bathrooms across Surrey. We cover Shepperton, Cobham, Esher, Guildford, Woking, Richmond, Wimbledon, Kingston and surrounding areas.",
  alternates: { canonical: "https://www.alrbathrooms.com/areas" },
};

const primaryAreas = [
  {
    name: "Shepperton",
    desc: "Our home base. We serve all of Shepperton and surrounding villages with bathroom design and installation.",
  },
  {
    name: "Cobham",
    desc: "Full bathroom installation and design services throughout Cobham and the surrounding villages.",
  },
  {
    name: "Esher",
    desc: "We regularly install bathrooms across Esher and nearby areas including Claygate and Hinchley Wood.",
  },
  {
    name: "Guildford",
    desc: "Bathroom design and installation throughout Guildford and the surrounding Surrey towns and villages.",
  },
  {
    name: "Woking",
    desc: "Serving Woking and the wider Borough of Woking for bathroom renovation and new installation.",
  },
  {
    name: "Richmond",
    desc: "Prestige bathroom installations in Richmond and the surrounding riverside areas.",
  },
  {
    name: "Wimbledon",
    desc: "Full bathroom design and installation services across Wimbledon and SW London.",
  },
  {
    name: "Kingston upon Thames",
    desc: "We regularly work in Kingston and the surrounding areas including Surbiton and New Malden.",
  },
];

const additionalAreas = [
  "Walton-on-Thames", "Weybridge", "Surbiton", "New Malden",
  "Claygate", "Long Ditton", "Thames Ditton", "East Molesey",
  "West Molesey", "Hampton", "Sunbury-on-Thames", "Chertsey",
  "Staines-upon-Thames", "Egham", "Virginia Water", "Leatherhead",
];

export default function AreasPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ALR Bathrooms",
    areaServed: [
      ...primaryAreas.map((a) => ({ "@type": "City", name: a.name })),
      ...additionalAreas.map((a) => ({ "@type": "City", name: a })),
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "8 Kilmiston Avenue",
      addressLocality: "Shepperton",
      addressRegion: "Surrey",
      postalCode: "TW17 9DL",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-brand py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase text-[#C9A97A] mb-3">Coverage</p>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">Areas We Cover</h1>
          <p className="text-[#8B8FA0] text-lg max-w-2xl leading-relaxed">
            Based in Shepperton, we provide bathroom design and installation services
            across Surrey and the surrounding areas.
          </p>
        </div>
      </section>

      {/* Primary areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-[#C9A97A] mb-3">Main Areas</p>
            <h2 className="text-3xl font-black text-brand">Where We Work</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {primaryAreas.map((area) => (
              <div key={area.name} className="border border-[#EDEAE3] p-6 hover:border-[#C9A97A] transition-colors group">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={16} className="text-[#C9A97A]" />
                  <h3 className="font-bold text-brand group-hover:text-[#C9A97A] transition-colors">
                    {area.name}
                  </h3>
                </div>
                <p className="text-xs text-[#8B8FA0] leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional areas */}
      <section className="py-16 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-brand mb-8">Also Covering</h2>
          <div className="flex flex-wrap gap-2">
            {additionalAreas.map((area) => (
              <div key={area} className="flex items-center gap-1.5 bg-white border border-[#EDEAE3] px-4 py-2.5 text-sm text-brand">
                <MapPin size={11} className="text-[#C9A97A]" />
                {area}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#8B8FA0]">
            Not sure if we cover your area? <a href="tel:07934679117" className="text-[#C9A97A] font-semibold hover:underline">Call us on 07934 679117</a> and we&apos;ll let you know.
          </p>
        </div>
      </section>

      {/* Local SEO content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-brand mb-6">Bathroom Installation Across Surrey</h2>
          <div className="space-y-4 text-[#8B8FA0] leading-relaxed text-sm">
            <p>
              ALR Bathrooms is a Surrey-based bathroom design and installation specialist, operating from
              our base in Shepperton. We serve homeowners right across the county — from Guildford in the
              west to Richmond and Kingston in the east.
            </p>
            <p>
              Whether you&apos;re in Cobham looking for a luxury bathroom renovation, in Woking seeking a
              modern ensuite installation, or in Esher wanting a spa-style wet room, we bring the same
              level of care and craftsmanship to every project.
            </p>
            <p>
              Our design-led approach means we don&apos;t just fit your bathroom — we help create it. From
              first consultation through to completion, we manage every aspect of the project so you can
              sit back and look forward to the result.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Serving Surrey. Available 7 Days.</h2>
          <p className="text-[#8B8FA0] mb-8">
            Get a free estimate for your bathroom project — we cover all of Surrey and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-estimate" className="inline-flex items-center justify-center gap-2 bg-[#C9A97A] text-white font-bold px-8 py-4">
              Book Free Estimate <ArrowRight size={15} />
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
