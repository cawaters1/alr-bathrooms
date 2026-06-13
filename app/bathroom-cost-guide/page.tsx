import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "How Much Does a New Bathroom Cost? | ALR Bathrooms Surrey",
  description:
    "Honest bathroom cost guide for Surrey homeowners. Rough price ranges for ensuites, full bathrooms and luxury renovations — from ALR Bathrooms & Design, Shepperton.",
  alternates: { canonical: "https://www.alrbathrooms.com/bathroom-cost-guide" },
};

const tiers = [
  {
    name: "Compact Ensuite",
    range: "£4,000 – £8,000",
    desc: "A well-finished ensuite with a walk-in shower, basin, WC and quality tiling. Ideal for a secondary bedroom or loft conversion.",
    includes: [
      "Strip-out and waste removal",
      "Walk-in shower or shower enclosure",
      "Vanity basin and WC",
      "Wall and floor tiling",
      "Heated towel rail",
    ],
  },
  {
    name: "Full Family Bathroom",
    range: "£8,000 – £14,000",
    desc: "A complete bathroom renovation with bath, separate shower, basin and WC. The most common project we carry out across Surrey.",
    includes: [
      "Full strip-out and replastering where needed",
      "Freestanding or panel bath",
      "Separate shower enclosure",
      "Double or single vanity",
      "Designer tiling throughout",
      "Underfloor heating or heated towel rail",
    ],
  },
  {
    name: "Luxury Master Bathroom",
    range: "£14,000 – £25,000+",
    desc: "A high-specification renovation with premium materials — marble, bespoke cabinetry, brass fittings, smart features. The bathrooms in our gallery sit in this tier.",
    includes: [
      "Full structural and waterproofing works",
      "Natural stone or large-format marble tiles",
      "Bespoke vanity furniture",
      "Designer sanitaryware and brass fittings",
      "Frameless or brass-framed shower enclosure",
      "Smart features — TV, underfloor heating, LED niches",
    ],
  },
];

const factors = [
  {
    title: "Size of the space",
    desc: "More floor and wall area means more tiling, more materials and more labour. A large master bathroom will always cost more than a compact ensuite.",
  },
  {
    title: "Materials and fixtures",
    desc: "The single biggest variable. Standard ceramic tiles and high-street sanitaryware are a fraction of the cost of natural marble and designer brass fittings.",
  },
  {
    title: "Structural work",
    desc: "Moving walls, relocating plumbing or replacing existing pipe runs adds cost. A like-for-like replacement is always cheaper than a full reconfiguration.",
  },
  {
    title: "Existing condition",
    desc: "Old bathrooms sometimes reveal problems behind the tiles — damp, rotten floors, old pipe work. We inspect thoroughly before quoting to avoid surprises.",
  },
  {
    title: "Bespoke vs off-the-shelf",
    desc: "Custom-built vanity units and furniture made to measure will cost more than standard ranges — but the finish is incomparable.",
  },
];

const faqs = [
  {
    q: "Are these prices just for labour, or do they include materials?",
    a: "Our quotes are fully inclusive — labour, materials, tiles, sanitaryware, fixtures and waste disposal. You receive one fixed price covering everything agreed in the design.",
  },
  {
    q: "Do you offer payment plans?",
    a: "We typically work with a deposit on agreement, a mid-project payment and a final payment on completion. We're happy to discuss a structure that works for you.",
  },
  {
    q: "How accurate is my quote before work starts?",
    a: "We provide fixed-price quotes. Once agreed, the price doesn't change unless you request additional works. No hidden costs, no surprises on the final invoice.",
  },
  {
    q: "Can I supply my own tiles and fixtures to reduce cost?",
    a: "Yes. Many clients choose their own tiles or sanitaryware and we install them. Just let us know at the design stage so we can account for it in the quote.",
  },
  {
    q: "How long will my bathroom renovation take?",
    a: "A compact ensuite typically takes 5–8 days. A full bathroom renovation usually takes 8–14 days. Larger or more complex projects may take longer — we'll give you a precise timeline before starting.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes — always. We visit your home, assess the space and produce a detailed design and fixed-price quotation at no charge and with no obligation.",
  },
];

export default function BathroomCostGuidePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-brand py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase text-[#C9A97A] mb-3">Transparent Pricing</p>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            How Much Does a New<br className="hidden sm:block" /> Bathroom Cost?
          </h1>
          <p className="text-[#8B8FA0] text-lg max-w-2xl leading-relaxed">
            An honest guide to bathroom renovation costs in Surrey — what affects the price,
            what to expect at each budget level, and how to get the most from your investment.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white border-b border-[#EDEAE3]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#8B8FA0] leading-relaxed text-base">
            Bathroom costs vary enormously — a compact ensuite and a full luxury master bathroom
            are completely different projects. The ranges below are honest guides based on the work
            we carry out across Surrey every week. They include everything: design, labour, materials,
            fixtures and waste removal. There are no hidden extras.
          </p>
          <p className="text-[#8B8FA0] leading-relaxed text-base mt-4">
            The best way to get an accurate figure for your specific bathroom is a free home visit.
            We&apos;ll assess your space, discuss your vision and provide a fixed quote — usually within five days.
          </p>
        </div>
      </section>

      {/* Price tiers */}
      <section className="py-20 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold tracking-widest uppercase text-[#C9A97A] mb-3">Price Ranges</p>
            <h2 className="text-3xl font-black text-brand">What to Expect at Each Level</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <div key={tier.name} className={`bg-white border p-8 relative ${i === 2 ? "border-[#C9A97A]" : "border-[#EDEAE3]"}`}>
                {i === 2 && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#C9A97A]" />
                )}
                <div className="text-xs font-bold tracking-widest uppercase text-[#C9A97A] mb-2">{tier.name}</div>
                <div className="text-3xl font-black text-brand mb-4">{tier.range}</div>
                <p className="text-sm text-[#8B8FA0] leading-relaxed mb-6">{tier.desc}</p>
                <div className="border-t border-[#EDEAE3] pt-5">
                  <div className="text-xs font-bold tracking-widest uppercase text-[#8B8FA0] mb-3">Typically includes</div>
                  <ul className="space-y-2">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-brand">
                        <CheckCircle2 size={14} className="text-[#C9A97A] shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-[#8B8FA0] mt-8 max-w-xl mx-auto">
            These are indicative ranges based on projects we complete in Surrey. Your exact cost depends on the size of the space, your choice of materials and whether any structural work is needed.
          </p>
        </div>
      </section>

      {/* What affects cost */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-[#C9A97A] mb-3">Pricing Factors</p>
            <h2 className="text-3xl font-black text-brand">What Affects the Cost?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {factors.map((f) => (
              <div key={f.title} className="border border-[#EDEAE3] p-6">
                <div className="w-8 h-1 bg-[#C9A97A] mb-4" />
                <h3 className="font-bold text-brand mb-2">{f.title}</h3>
                <p className="text-sm text-[#8B8FA0] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Is it worth it section */}
      <section className="py-20 bg-[#F8F6F2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase text-[#C9A97A] mb-3">Value</p>
          <h2 className="text-3xl font-black text-brand mb-6">Is a Quality Bathroom Worth the Investment?</h2>
          <div className="space-y-4 text-[#8B8FA0] leading-relaxed">
            <p>
              In Surrey&apos;s property market, a well-designed and installed bathroom adds tangible value to your home — and a poorly done one can actively detract from it. Estate agents consistently cite bathrooms and kitchens as the two rooms that most influence buyer decisions.
            </p>
            <p>
              Beyond resale value, a bathroom you love changes how you start and end every day. The clients whose work you can see in our gallery didn&apos;t just add value to their home — they transformed a room they now genuinely enjoy.
            </p>
            <p>
              Our advice: invest in the design and the fixtures that matter most to you, and don&apos;t cut corners on the installation. A bathroom fitted correctly the first time will last 15–20 years without issue. One that isn&apos;t may cost more to fix than it did to fit.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center gap-2 border border-brand text-brand font-bold px-6 py-3 rounded-xl shadow-sm hover:bg-brand hover:text-white transition-colors text-sm"
            >
              View Our Work <ArrowRight size={14} />
            </Link>
            <Link
              href="/free-estimate"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A97A] hover:bg-[#B8955A] text-white font-bold px-6 py-3 rounded-xl shadow-sm transition-colors text-sm"
            >
              Get a Free Estimate <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-brand mb-10">Common Questions About Cost</h2>
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
          <h2 className="text-3xl font-black text-white mb-4">Get an Accurate Quote for Your Bathroom</h2>
          <p className="text-[#8B8FA0] mb-8 max-w-xl mx-auto">
            Ranges only tell you so much. Contact us for a free home visit and we&apos;ll give you a
            fixed price for your exact bathroom, with no obligation to proceed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-estimate"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A97A] text-white font-bold px-8 py-4 rounded-xl shadow-md hover:bg-[#B8955A] transition-colors"
            >
              Book Free Estimate <ArrowRight size={15} />
            </Link>
            <a
              href="tel:07934679117"
              className="inline-flex items-center justify-center gap-2 border border-[#2A3355] text-white font-bold px-8 py-4 rounded-xl shadow-md hover:border-[#C9A97A] transition-colors"
            >
              <Phone size={15} /> 07934 679117
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
