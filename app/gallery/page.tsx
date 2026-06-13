import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Bathroom Gallery | ALR Bathrooms Surrey",
  description:
    "Browse our gallery of bathroom installations across Surrey — marble finishes, brass fittings, designer vanity units and bespoke tiling. ALR Bathrooms & Design.",
  alternates: { canonical: "https://www.alrbathrooms.com/gallery" },
};

const projects = [
  {
    src: "/images/bathroom-4.jpg",
    alt: "Roll-top claw-foot bath with Arabescato marble tiles and polished brass fittings",
    title: "Victorian Marble Suite",
    location: "Richmond",
    detail: "Arabescato marble · Freestanding clawfoot bath · Polished brass",
    span: "lg:col-span-2",
  },
  {
    src: "/images/bathroom-1.jpg",
    alt: "Dark navy vanity unit with marble vessel sink, round walnut mirror and amber wall sconces",
    title: "Bespoke Vanity Installation",
    location: "Cobham, Surrey",
    detail: "Carrara vessel sink · Brass tap · Bespoke cabinetry",
    span: "",
  },
  {
    src: "/images/bathroom-2.jpg",
    alt: "Spacious luxury bathroom with cream stone tiles, wall-hung WC and freestanding bath surround",
    title: "Contemporary Stone Suite",
    location: "Esher, Surrey",
    detail: "Large-format stone tiles · Brass hardware · Wall-hung sanitaryware",
    span: "",
  },
  {
    src: "/images/bathroom-3.jpg",
    alt: "Rose marble bathroom with brass rain shower head, dark vanity unit and geometric chevron floor tiles",
    title: "Rose Marble & Brass",
    location: "Wimbledon",
    detail: "Rose onyx marble · Brass rain shower · Chevron floor tiles",
    span: "lg:col-span-2",
  },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-brand py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase text-[#C9A97A] mb-3">Our Work</p>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">Gallery</h1>
          <p className="text-[#8B8FA0] text-lg max-w-2xl leading-relaxed">
            A selection of bathrooms we&apos;ve designed and installed. Each one created to
            the client&apos;s exact vision — from first sketch to final finish.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero image */}
          <div className="relative w-full overflow-hidden mb-4 group" style={{ aspectRatio: "16/7" }}>
            <Image
              src="/images/bathroom-4.jpg"
              alt="Luxury clawfoot bath with Arabescato marble and polished brass fittings — ALR Bathrooms"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <div className="text-[10px] text-[#C9A97A] font-bold tracking-widest uppercase mb-1">Richmond</div>
              <div className="text-white text-xl font-black">Victorian Marble Suite</div>
              <div className="text-[#8B8FA0] text-sm mt-1">Arabescato marble · Freestanding clawfoot bath · Polished brass</div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.slice(1).map((project) => (
              <div
                key={project.title}
                className={`relative overflow-hidden group ${project.span}`}
                style={{ aspectRatio: project.span ? "16/7" : "4/3" }}
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand/70 via-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-[10px] text-[#C9A97A] font-bold tracking-widest uppercase mb-1">{project.location}</div>
                  <div className="text-white text-base font-black">{project.title}</div>
                  <div className="text-[#8B8FA0] text-xs mt-1">{project.detail}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Project details strip */}
          <div className="grid md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-[#EDEAE3]">
            {projects.map((p) => (
              <div key={p.title}>
                <div className="text-[10px] font-bold tracking-widest uppercase text-[#C9A97A] mb-1">{p.location}</div>
                <div className="font-bold text-brand text-sm mb-1">{p.title}</div>
                <div className="text-xs text-[#8B8FA0] leading-relaxed">{p.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#C9A97A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Could Your Bathroom Look Like This?</h2>
          <p className="text-white/80 mb-8">
            Get a free estimate and design consultation — no obligation, no pressure.
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
