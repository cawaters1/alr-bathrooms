import Link from "next/link";
import { Phone } from "lucide-react";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Link
        href="/free-estimate"
        className="flex items-center gap-2 bg-[#C4A265] hover:bg-[#B8935A] text-white text-sm font-bold px-5 py-3 shadow-xl transition-all hover:scale-105"
        aria-label="Get a free estimate"
      >
        Free Estimate
      </Link>
      <a
        href="tel:07934679117"
        className="flex items-center justify-center gap-2 bg-brand hover:bg-[#2C2C2E] text-white text-sm font-bold px-5 py-3 shadow-xl transition-all hover:scale-105"
        aria-label="Call ALR Bathrooms"
      >
        <Phone size={15} />
        Call Now
      </a>
    </div>
  );
}
