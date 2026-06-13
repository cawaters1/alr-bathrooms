import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GalleryCarousel from "@/components/GalleryCarousel";

export const metadata: Metadata = {
  title: "Bathroom Gallery | ALR Bathrooms Surrey",
  description:
    "Browse our gallery of bathroom installations across Surrey — marble finishes, brass fittings, designer vanity units and bespoke tiling. ALR Bathrooms & Design.",
  alternates: { canonical: "https://www.alrbathrooms.com/gallery" },
};

const images = [
  {
    src: "/images/bathroom-4.jpg",
    alt: "Roll-top claw-foot bath with Arabescato marble tiles and polished brass fittings",
    title: "Victorian Marble Suite",
    location: "Richmond",
    detail: "Arabescato marble · Freestanding clawfoot bath · Polished brass fittings",
  },
  {
    src: "/images/bathroom-5.jpg",
    alt: "Spacious marble bathroom with freestanding bath, brass-framed glass shower enclosure and smart TV",
    title: "Marble Master Suite",
    location: "Guildford, Surrey",
    detail: "Marble tiles · Brass shower enclosure · Freestanding bath · Smart TV",
  },
  {
    src: "/images/bathroom-1.jpg",
    alt: "Dark navy vanity unit with Carrara marble vessel sink, round walnut mirror and amber wall sconces",
    title: "Bespoke Vanity",
    location: "Cobham, Surrey",
    detail: "Carrara vessel sink · Brass tap · Bespoke dark cabinetry · Walnut mirror",
  },
  {
    src: "/images/bathroom-7.jpg",
    alt: "Marble shower enclosure with brass frame, overhead rain shower and illuminated niche shelf",
    title: "Brass-Framed Shower",
    location: "Cobham, Surrey",
    detail: "Large marble tiles · Brass frame · Rain shower · Illuminated niche shelf",
  },
  {
    src: "/images/bathroom-2.jpg",
    alt: "Spacious luxury bathroom with large cream stone tiles, wall-hung WC and designer bath surround",
    title: "Contemporary Stone Suite",
    location: "Esher, Surrey",
    detail: "Large-format stone tiles · Brass hardware · Wall-hung sanitaryware · Designer bath",
  },
  {
    src: "/images/bathroom-6.jpg",
    alt: "Victorian cloakroom with wall panelling, brass oval mirror, gold heated towel rail and chevron marble floor",
    title: "Victorian Cloakroom",
    location: "Esher, Surrey",
    detail: "Wall panelling · Brass fittings · Chevron marble floor · Gold towel rail",
  },
  {
    src: "/images/bathroom-3.jpg",
    alt: "Rose marble bathroom with brass rain shower head, dark vanity unit and geometric chevron floor tiles",
    title: "Rose Marble & Brass",
    location: "Wimbledon",
    detail: "Rose onyx marble · Brass rain shower · Geometric chevron floor tiles",
  },
  {
    src: "/images/bathroom-8.jpg",
    alt: "Artisan star-pattern tiled shower room with traditional brass shower column and gold heated towel rail",
    title: "Star-Tile Shower Room",
    location: "Kingston upon Thames",
    detail: "Artisan star tiles · Traditional brass shower · Gold heated towel rail",
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
            A selection of bathrooms we&apos;ve designed and installed. Every project
            crafted to the client&apos;s exact vision — from first sketch to final finish.
            Swipe or use the arrows to browse.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Carousel */}
            <div className="lg:sticky lg:top-24">
              <GalleryCarousel images={images} showCaptions={true} />
            </div>

            {/* Project details */}
            <div className="space-y-8">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-[#C9A97A] mb-2">Our Projects</p>
                <h2 className="text-2xl font-black text-brand">Recent Installations</h2>
              </div>

              {images.map((img, i) => (
                <div key={img.src} className="flex gap-4 pb-8 border-b border-[#EDEAE3] last:border-0 last:pb-0">
                  <div className="text-2xl font-black text-[#EDEAE3] shrink-0 w-10 text-right leading-tight">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-widest uppercase text-[#C9A97A] mb-1">
                      {img.location}
                    </div>
                    <h3 className="font-black text-brand text-lg mb-2">{img.title}</h3>
                    <p className="text-sm text-[#8B8FA0] leading-relaxed">{img.detail}</p>
                  </div>
                </div>
              ))}

              <div className="pt-4">
                <Link
                  href="/free-estimate"
                  className="inline-flex items-center gap-2 bg-[#C9A97A] hover:bg-[#B8955A] text-white font-bold px-6 py-3 transition-colors"
                >
                  Book Free Estimate <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Could Your Bathroom Look Like This?</h2>
          <p className="text-[#8B8FA0] mb-8">
            Get a free design consultation and estimate — no obligation, no pressure.
          </p>
          <Link
            href="/free-estimate"
            className="inline-flex items-center gap-2 bg-[#C9A97A] hover:bg-[#B8955A] text-white font-bold px-8 py-4 transition-colors"
          >
            Book Free Estimate <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
