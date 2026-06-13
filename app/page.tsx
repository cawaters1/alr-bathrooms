import type { Metadata } from "next";
import Link from "next/link";
import GalleryCarousel from "@/components/GalleryCarousel";
import {
  Star,
  CheckCircle2,
  ArrowRight,
  Phone,
  Sparkles,
  Ruler,
  Wrench,
  MapPin,
  Quote,
} from "lucide-react";

const galleryImages = [
  { src: "/images/bathroom-4.jpg", alt: "Roll-top clawfoot bath with Arabescato marble and polished brass fittings", title: "Victorian Marble Suite", location: "Richmond", detail: "Arabescato marble · Clawfoot bath · Polished brass" },
  { src: "/images/bathroom-1.jpg", alt: "Dark navy vanity with Carrara marble vessel sink and warm wall sconces", title: "Bespoke Vanity", location: "Cobham, Surrey", detail: "Carrara vessel sink · Brass tap · Bespoke cabinetry" },
  { src: "/images/bathroom-2.jpg", alt: "Spacious luxury bathroom with large stone tiles and designer bath surround", title: "Contemporary Stone Suite", location: "Esher, Surrey", detail: "Large-format stone · Brass hardware · Wall-hung sanitaryware" },
  { src: "/images/bathroom-3.jpg", alt: "Rose marble bathroom with brass rain shower and dark vanity unit", title: "Rose Marble & Brass", location: "Wimbledon", detail: "Rose onyx marble · Brass rain shower · Chevron floor tiles" },
];

export const metadata: Metadata = {
  title: "ALR Bathrooms | Bathroom Design & Installation Surrey",
  description:
    "Surrey's premier bathroom design and installation specialists. Covering Shepperton, Cobham, Esher, Guildford, Woking, Richmond, Wimbledon & Kingston. Free estimates available.",
  alternates: { canonical: "https://www.alrbathrooms.com" },
};

const services = [
  {
    icon: Ruler,
    title: "Bathroom Design",
    desc: "From concept to creation — we handle the full design process, helping you achieve the bathroom you've always envisioned.",
    href: "/services/bathroom-design",
    tag: "Free Consultation",
  },
  {
    icon: Wrench,
    title: "Full Installation",
    desc: "Complete bathroom installation by skilled tradespeople. Tiling, plumbing, electrics, fixtures — everything coordinated for you.",
    href: "/services/bathroom-installation",
    tag: "Fully Managed",
  },
  {
    icon: Sparkles,
    title: "Design & Supply",
    desc: "We source and supply premium fixtures, tiles and sanitaryware to match your design vision and budget.",
    href: "/services/bathroom-installation",
    tag: "Premium Selection",
  },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Bathrooms Installed" },
  { value: "5★", label: "Google Rating" },
  { value: "Free", label: "Estimates" },
];

const reviews = [
  {
    name: "Sarah T.",
    location: "Cobham, Surrey",
    text: "ALR transformed our tired bathroom into something truly stunning. The attention to detail was exceptional — every tile perfectly placed, every fitting immaculate. Couldn't recommend more highly.",
    stars: 5,
  },
  {
    name: "James R.",
    location: "Richmond",
    text: "From the first design meeting to the final day on site, the process was completely stress-free. Professional, tidy and the result is beyond what we imagined. Worth every penny.",
    stars: 5,
  },
  {
    name: "Claire W.",
    location: "Esher",
    text: "We've had two bathrooms done by ALR now. Both times the quality has been outstanding and the whole team is friendly, reliable and genuinely talented. Our go-to for any future projects.",
    stars: 5,
  },
];

const areas = [
  "Shepperton", "Cobham", "Esher", "Guildford",
  "Woking", "Richmond", "Wimbledon", "Kingston upon Thames",
  "Walton-on-Thames", "Weybridge", "Surbiton", "New Malden",
];

const process = [
  { num: "01", title: "Free Design Consultation", desc: "We visit your home, assess the space and discuss your vision — completely free, no obligation." },
  { num: "02", title: "Design & Quotation", desc: "We produce a detailed design and transparent fixed quote. You see exactly what you're getting before committing." },
  { num: "03", title: "Expert Installation", desc: "Our skilled team transforms your bathroom to the highest standard, leaving you with a space to love." },
];

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ALR Bathrooms",
    description: "Expert bathroom design and installation in Surrey",
    telephone: "07934679117",
    email: "info@alrbathrooms.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8 Kilmiston Avenue",
      addressLocality: "Shepperton",
      addressRegion: "Surrey",
      postalCode: "TW17 9DL",
      addressCountry: "GB",
    },
    openingHours: "Mo-Su 08:00-18:00",
    url: "https://www.alrbathrooms.com",
    areaServed: areas,
    priceRange: "££",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "47",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── HERO ── */}
      <section className="relative bg-brand overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/bathroom-hero.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#C9A97A]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            {/* Stars */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#C9A97A] text-[#C9A97A]" />
                ))}
              </div>
              <span className="text-[#C9A97A] text-sm font-semibold tracking-wide">
                5-Star Rated · Surrey
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6 text-balance">
              Bathrooms Designed <br className="hidden sm:block" />
              <span className="text-[#C9A97A]">Built to Last.</span>
            </h1>

            <p className="text-lg text-[#8B8FA0] leading-relaxed mb-8 max-w-xl">
              Surrey&apos;s specialist bathroom designers and installers. We handle every detail —
              from first concept through to the finishing touches — so you don&apos;t have to.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {["Free Estimates", "Full Design Service", "Supply &amp; Install", "7 Days a Week"].map((t) => (
                <div key={t} className="flex items-center gap-1.5 text-sm text-cream">
                  <CheckCircle2 size={15} className="text-[#C9A97A] shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: t }} />
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/free-estimate"
                className="inline-flex items-center justify-center gap-2 bg-[#C9A97A] hover:bg-[#B8955A] text-white font-bold px-8 py-4 text-base transition-colors"
              >
                Book Your Free Estimate
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:07934679117"
                className="inline-flex items-center justify-center gap-2 border border-[#2A3355] hover:border-[#C9A97A] text-white font-bold px-8 py-4 text-base transition-colors"
              >
                <Phone size={16} />
                07934 679117
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[#F8F6F2] border-b border-[#EDEAE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-black text-brand mb-1">{s.value}</div>
                <div className="text-xs font-semibold tracking-widest uppercase text-[#8B8FA0]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-[#C9A97A] mb-3">What We Do</p>
            <h2 className="text-3xl lg:text-4xl font-black text-brand mb-4">
              A Complete Bathroom Service
            </h2>
            <p className="text-[#8B8FA0] leading-relaxed">
              From initial design concept to final installation, we manage every aspect of your new bathroom — saving you time, stress and money.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group border border-[#EDEAE3] p-8 hover:border-[#C9A97A] hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#F8F6F2] group-hover:bg-[#C9A97A] transition-colors mb-6">
                  <s.icon size={22} className="text-brand group-hover:text-white transition-colors" />
                </div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-[#C9A97A] mb-2">{s.tag}</div>
                <h3 className="text-xl font-bold text-brand mb-3">{s.title}</h3>
                <p className="text-sm text-[#8B8FA0] leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center gap-1 text-sm font-semibold text-brand group-hover:text-[#C9A97A] transition-colors">
                  Learn more <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ALR ── */}
      <section className="py-20 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-[#C9A97A] mb-3">Why Choose ALR</p>
              <h2 className="text-3xl lg:text-4xl font-black text-brand mb-6">
                Craftsmanship You Can See. Service You Can Trust.
              </h2>
              <p className="text-[#8B8FA0] leading-relaxed mb-8">
                We&apos;re bathroom specialists — not generalist builders. Every project is managed personally,
                with the same care and attention whether it&apos;s a compact ensuite or a full luxury renovation.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Full design service — we handle the vision, you enjoy the result",
                  "Fixed, transparent quotes — no hidden costs or surprises",
                  "Single point of contact — no chasing multiple tradespeople",
                  "7 days a week availability",
                  "Free estimates for all new bathroom installations",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#C9A97A] shrink-0 mt-0.5" />
                    <span className="text-sm text-brand leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand border border-brand hover:bg-brand hover:text-white px-6 py-3 transition-colors"
              >
                More About Us <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Personalised Design", desc: "Your bathroom, your vision — we make it a reality" },
                { title: "Quality Assured", desc: "Premium materials and professional finish every time" },
                { title: "Project Managed", desc: "We coordinate every tradesperson on your behalf" },
                { title: "5-Star Rated", desc: "Consistently rated excellent by our Surrey customers" },
              ].map((card) => (
                <div key={card.title} className="bg-white p-6 border border-[#EDEAE3]">
                  <div className="w-8 h-1 bg-[#C9A97A] mb-4" />
                  <h3 className="font-bold text-brand text-sm mb-2">{card.title}</h3>
                  <p className="text-xs text-[#8B8FA0] leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY TEASER ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-[#C9A97A] mb-2">Our Work</p>
              <h2 className="text-3xl font-black text-brand">Recent Installations</h2>
            </div>
            <Link
              href="/gallery"
              className="flex items-center gap-1.5 text-sm font-bold text-[#C9A97A] hover:underline shrink-0"
            >
              View Full Gallery <ArrowRight size={14} />
            </Link>
          </div>
          <div className="max-w-2xl mx-auto">
            <GalleryCarousel images={galleryImages} showCaptions={true} />
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-widest uppercase text-[#C9A97A] mb-3">How It Works</p>
            <h2 className="text-3xl lg:text-4xl font-black text-white">Simple. Stress-Free. Stunning.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-px bg-[#2A3355]" />
            {process.map((step) => (
              <div key={step.num} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 border border-[#C9A97A] mb-6">
                  <span className="text-2xl font-black text-[#C9A97A]">{step.num}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-[#8B8FA0] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/free-estimate"
              className="inline-flex items-center gap-2 bg-[#C9A97A] hover:bg-[#B8955A] text-white font-bold px-8 py-4 transition-colors"
            >
              Start With a Free Estimate <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-20 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-[#C9A97A] mb-3">Customer Reviews</p>
            <h2 className="text-3xl font-black text-brand mb-2">What Our Customers Say</h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-[#C9A97A] text-[#C9A97A]" />
                ))}
              </div>
              <span className="text-sm text-[#8B8FA0] font-medium">5.0 · 47 reviews on Google</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white p-8 border border-[#EDEAE3]">
                <Quote size={24} className="text-[#C9A97A] mb-4 opacity-60" />
                <p className="text-sm text-[#8B8FA0] leading-relaxed mb-6 italic">&ldquo;{r.text}&rdquo;</p>
                <div className="border-t border-[#EDEAE3] pt-4 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-sm text-brand">{r.name}</div>
                    <div className="text-xs text-[#8B8FA0] flex items-center gap-1 mt-0.5">
                      <MapPin size={10} />
                      {r.location}
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(r.stars)].map((_, i) => (
                      <Star key={i} size={12} className="fill-[#C9A97A] text-[#C9A97A]" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AREAS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-[#C9A97A] mb-2">Coverage</p>
              <h2 className="text-2xl font-black text-brand">Areas We Cover</h2>
            </div>
            <Link
              href="/areas"
              className="flex items-center gap-1.5 text-sm font-bold text-[#C9A97A] hover:underline"
            >
              See all areas <ArrowRight size={14} />
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {areas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-1.5 border border-[#EDEAE3] px-4 py-2.5 text-sm text-brand hover:border-[#C9A97A] hover:text-[#C9A97A] transition-colors cursor-default"
              >
                <MapPin size={12} className="text-[#C9A97A]" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="py-16 bg-[#C9A97A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            Ready to Transform Your Bathroom?
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            Get in touch today for a completely free design consultation and estimate.
            No obligation — just honest advice and a clear quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-estimate"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#C9A97A] font-bold px-8 py-4 hover:bg-[#F8F6F2] transition-colors"
            >
              Book Free Estimate <ArrowRight size={16} />
            </Link>
            <a
              href="tel:07934679117"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 hover:bg-white/10 transition-colors"
            >
              <Phone size={16} />
              07934 679117
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
