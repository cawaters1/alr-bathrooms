import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const services = [
  { label: "Bathroom Installation", href: "/services/bathroom-installation" },
  { label: "Bathroom Design", href: "/services/bathroom-design" },
  { label: "Free Estimate", href: "/free-estimate" },
  { label: "Cost Guide", href: "/bathroom-cost-guide" },
  { label: "Our Process", href: "/process" },
  { label: "Gallery", href: "/gallery" },
];

const areas = [
  "Shepperton", "Cobham", "Esher", "Guildford",
  "Woking", "Richmond", "Wimbledon", "Kingston",
];

export default function Footer() {
  return (
    <footer className="bg-brand text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-[#C9A97A] rounded-sm flex items-center justify-center">
                <span className="text-white font-black text-xs">ALR</span>
              </div>
              <div>
                <div className="font-black text-base text-white tracking-tight">ALR Bathrooms</div>
                <div className="text-[10px] text-[#C9A97A] tracking-widest uppercase">Design &amp; Installation</div>
              </div>
            </div>
            <p className="text-sm text-[#8B8FA0] leading-relaxed mb-5">
              Expert bathroom design and installation across Surrey. From first sketch to final finish.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2 text-[#8B8FA0]">
                <MapPin size={14} className="text-[#C9A97A] mt-0.5 shrink-0" />
                <span>8 Kilmiston Avenue<br />Shepperton, TW17 9DL</span>
              </div>
              <div className="flex items-center gap-2 text-[#8B8FA0]">
                <Clock size={14} className="text-[#C9A97A] shrink-0" />
                <span>Mon–Sun: 8:00am – 6:00pm</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#C9A97A] mb-5">Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-[#8B8FA0] hover:text-[#C9A97A] transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#C9A97A] mb-5">Areas Covered</h3>
            <ul className="space-y-2">
              {areas.map((area) => (
                <li key={area} className="text-sm text-[#8B8FA0]">{area}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#C9A97A] mb-5">Get In Touch</h3>
            <div className="space-y-3 mb-6">
              <a
                href="tel:07934679117"
                className="flex items-center gap-2 text-sm text-white font-semibold hover:text-[#C9A97A] transition-colors"
              >
                <Phone size={14} className="text-[#C9A97A]" />
                07934 679117
              </a>
              <a
                href="mailto:info@alrbathrooms.com"
                className="flex items-center gap-2 text-sm text-[#8B8FA0] hover:text-[#C9A97A] transition-colors"
              >
                <Mail size={14} className="text-[#C9A97A]" />
                info@alrbathrooms.com
              </a>
            </div>
            <Link
              href="/free-estimate"
              className="inline-block bg-[#C9A97A] hover:bg-[#B8955A] text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-sm transition-colors"
            >
              Book Free Estimate
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#2A3355] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#5A5F6E]">
          <span>© {new Date().getFullYear()} ALR Bathrooms. All rights reserved.</span>
          <span>8 Kilmiston Avenue, Shepperton, Surrey TW17 9DL</span>
        </div>
      </div>
    </footer>
  );
}
