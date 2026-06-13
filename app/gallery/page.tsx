import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Bathroom Gallery | ALR Bathrooms Surrey",
  description:
    "Browse our gallery of bathroom installations across Surrey. See the quality of ALR Bathrooms' design and installation work in Shepperton, Cobham, Esher, Guildford and beyond.",
  alternates: { canonical: "https://www.alrbathrooms.com/gallery" },
};

const projects = [
  { id: 1, title: "Contemporary Ensuite", location: "Cobham, Surrey", type: "Full Installation" },
  { id: 2, title: "Luxury Master Bathroom", location: "Esher, Surrey", type: "Design & Install" },
  { id: 3, title: "Family Bathroom Renovation", location: "Guildford, Surrey", type: "Full Installation" },
  { id: 4, title: "Walk-In Shower Room", location: "Richmond", type: "Design & Install" },
  { id: 5, title: "Compact Ensuite", location: "Woking, Surrey", type: "Full Installation" },
  { id: 6, title: "Victorian-Style Bathroom", location: "Wimbledon", type: "Design & Install" },
  { id: 7, title: "Modern Monochrome", location: "Kingston upon Thames", type: "Full Installation" },
  { id: 8, title: "Spa Bathroom", location: "Shepperton, Surrey", type: "Design & Install" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-brand py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase text-[#C4A265] mb-3">Our Work</p>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">Gallery</h1>
          <p className="text-[#8B7D72] text-lg max-w-2xl leading-relaxed">
            A selection of bathrooms we&apos;ve designed and installed across Surrey.
            Each one a unique space, crafted to the client&apos;s exact vision.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured large image */}
          <div className="mb-4 bg-[#EDE9E3] aspect-[16/7] flex items-center justify-center">
            <div className="text-center">
              <span className="text-[#8B7D72] text-sm tracking-widest uppercase block mb-2">
                Featured Bathroom
              </span>
              <span className="text-xs text-[#8B7D72]">Add your hero bathroom photo here</span>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {projects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden bg-[#EDE9E3] aspect-square">
                <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/70 transition-all duration-300 flex items-end p-4">
                  <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="text-[10px] text-[#C4A265] font-bold tracking-widest uppercase mb-1">
                      {project.type}
                    </div>
                    <div className="text-white text-sm font-bold">{project.title}</div>
                    <div className="text-[#8B7D72] text-xs mt-0.5">{project.location}</div>
                  </div>
                </div>
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-[#8B7D72] text-xs tracking-widest uppercase">Photo {project.id}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#8B7D72] mt-6">
            Add your bathroom installation photos to <code>/public/images/</code> and update the gallery
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#C4A265]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Like What You See?</h2>
          <p className="text-white/80 mb-8">
            Get a free estimate for your bathroom installation in Surrey.
          </p>
          <Link
            href="/free-estimate"
            className="inline-flex items-center gap-2 bg-white text-[#C4A265] font-bold px-8 py-4 hover:bg-[#F9F7F3] transition-colors"
          >
            Book Free Estimate <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
