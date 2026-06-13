import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Bathroom Installation Surrey | ALR Bathrooms",
  description:
    "Expert bathroom installation in Surrey. Full project management — strip-out, tiling, plumbing, electrics and finishing. Shepperton, Cobham, Esher, Guildford, Woking. Free estimates.",
  alternates: { canonical: "https://www.alrbathrooms.com/services/bathroom-installation" },
};

const included = [
  "Full bathroom strip-out and waste disposal",
  "Waterproofing and tanking",
  "Wall and floor tiling",
  "Plumbing — sanitaryware, shower, bath installation",
  "Electrical — lighting, extractor, heated towel rail",
  "Bespoke furniture and vanity units",
  "Final snag check and thorough clean",
  "Project management from start to finish",
];

const faqs = [
  {
    q: "How long does a full bathroom installation take?",
    a: "A typical full bathroom renovation takes 7–14 days depending on the complexity of the project, number of features and any structural work required. We'll give you a precise timeline before we start.",
  },
  {
    q: "Will I need to source my own tiles and fixtures?",
    a: "No — we can handle the full supply of all materials, tiles, sanitaryware and fixtures. We have excellent trade accounts that offer premium products at competitive prices. Alternatively, if you prefer to supply your own materials, that's fine too.",
  },
  {
    q: "Do you handle all the trades, or will I need to organise plumbers and electricians separately?",
    a: "We handle everything. Plumbing, tiling, electrical work — all coordinated by us. You have one point of contact throughout the project.",
  },
  {
    q: "Is your work guaranteed?",
    a: "Yes. All our installation work comes with a workmanship guarantee. Materials are also covered by their manufacturer's warranties.",
  },
];

export default function BathroomInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Bathroom Installation Surrey",
    provider: { "@type": "LocalBusiness", name: "ALR Bathrooms" },
    areaServed: ["Surrey", "Shepperton", "Cobham", "Esher", "Guildford", "Woking", "Richmond", "Wimbledon", "Kingston"],
    description: "Full bathroom installation service in Surrey. Design, supply and installation managed by ALR Bathrooms.",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="bg-brand py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 text-xs text-[#8B8FA0] mb-4">
            <Link href="/services" className="hover:text-[#C9A97A] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#C9A97A]">Bathroom Installation</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Bathroom Installation <br />in Surrey
          </h1>
          <p className="text-[#8B8FA0] text-lg max-w-2xl leading-relaxed mb-6">
            Complete bathroom installations managed from start to finish. One company handles
            everything — no chasing trades, no miscommunication, no stress.
          </p>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#C9A97A] text-[#C9A97A]" />)}
            </div>
            <span className="text-[#C9A97A] text-sm font-medium">5-Star Rated · Free Estimates</span>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-[#C9A97A] mb-3">What&apos;s Included</p>
              <h2 className="text-3xl font-black text-brand mb-6">Everything, Managed for You</h2>
              <p className="text-[#8B8FA0] leading-relaxed mb-8">
                A full bathroom installation with ALR Bathrooms covers every trade and every detail.
                From the day we strip out your old bathroom to the moment we hand you the keys to your
                new one — we manage it all.
              </p>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-brand">
                    <CheckCircle2 size={16} className="text-[#C9A97A] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/free-estimate"
                  className="inline-flex items-center justify-center gap-2 bg-[#C9A97A] hover:bg-[#B8955A] text-white font-bold px-6 py-3 transition-colors"
                >
                  Book Free Estimate <ArrowRight size={14} />
                </Link>
                <a
                  href="tel:07934679117"
                  className="inline-flex items-center justify-center gap-2 border border-[#EDEAE3] text-brand font-bold px-6 py-3 hover:border-brand transition-colors"
                >
                  <Phone size={14} /> 07934 679117
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/images/bathroom-2.jpg" alt="Luxury bathroom installation — large stone tiles and brass hardware" fill className="object-cover" />
              </div>
              <div className="bg-[#F8F6F2] border border-[#EDEAE3] p-6">
                <div className="text-xs font-bold tracking-widest uppercase text-[#C9A97A] mb-3">Free Estimates</div>
                <p className="text-sm text-[#8B8FA0] leading-relaxed">
                  We offer free, no-obligation estimates for all new bathroom installations across Surrey.
                  We&apos;ll visit your home, assess the space and provide a transparent fixed quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="py-12 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: "/images/bathroom-1.jpg", alt: "Bespoke dark vanity with marble vessel sink" },
              { src: "/images/bathroom-2.jpg", alt: "Spacious stone-tiled luxury bathroom" },
              { src: "/images/bathroom-3.jpg", alt: "Rose marble bath with brass shower" },
              { src: "/images/bathroom-4.jpg", alt: "Clawfoot bath with Arabescato marble" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-square overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/gallery" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#C9A97A] hover:underline">
              View Full Gallery <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-brand mb-10">Common Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-[#EDEAE3] pb-6">
                <h3 className="font-bold text-brand mb-2">{faq.q}</h3>
                <p className="text-sm text-[#8B8FA0] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to Get Started?</h2>
          <p className="text-[#8B8FA0] mb-8">
            Contact ALR Bathrooms today for your free, no-obligation estimate.
            Serving Surrey — available 7 days, 8am–6pm.
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
