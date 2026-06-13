"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const nav = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Bathroom Installation", href: "/services/bathroom-installation" },
      { label: "Bathroom Design", href: "/services/bathroom-design" },
      { label: "Cost Guide", href: "/bathroom-cost-guide" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Our Process", href: "/process" },
  { label: "Areas", href: "/areas" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-brand text-cream text-xs py-2 px-4 flex justify-between items-center">
        <span className="hidden sm:block tracking-wide">
          Professional Bathroom Design &amp; Installation · Surrey &amp; Surrounding Areas
        </span>
        <div className="flex items-center gap-4 ml-auto">
          <span className="text-[#C9A97A]">Mon–Sun 8:00am – 6:00pm</span>
          <a
            href="tel:07934679117"
            className="flex items-center gap-1.5 font-semibold text-white hover:text-[#C9A97A] transition-colors"
          >
            <Phone size={12} />
            07934 679117
          </a>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "border-b border-[#EDEAE3]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="bg-brand px-3 py-2 flex items-center gap-2.5">
                <svg width="22" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="19" stroke="#E8D5B0" strokeWidth="1.5" fill="none"/>
                  <path d="M20 6 C20 6 12 18 12 24 C12 29.5 15.6 34 20 34 C24.4 34 28 29.5 28 24 C28 18 20 6 20 6Z" fill="#E8D5B0"/>
                  <path d="M20 14 C20 14 15 22 15 26 C15 28.8 17.2 31 20 31 C22.8 31 25 28.8 25 26 C25 22 20 14 20 14Z" fill="#1B2744"/>
                </svg>
                <div>
                  <div className="font-black text-sm text-[#E8D5B0] tracking-widest leading-none">ALR</div>
                  <div className="text-[8px] font-semibold text-[#C9A97A] tracking-widest uppercase leading-none mt-0.5">Bathrooms &amp; Design</div>
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {nav.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button className="flex items-center gap-1 text-sm font-medium text-brand hover:text-[#C9A97A] transition-colors">
                      {item.label}
                      <ChevronDown size={14} />
                    </button>
                    {servicesOpen && (
                      <div className="absolute top-full left-0 mt-1 bg-white shadow-xl border border-[#EDEAE3] rounded-sm w-52 py-1 z-50">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-brand hover:bg-[#F8F6F2] hover:text-[#C9A97A] transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-brand hover:text-[#C9A97A] transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* Right CTAs */}
            <div className="flex items-center gap-3">
              <a
                href="tel:07934679117"
                className="hidden sm:flex items-center gap-2 text-sm font-bold text-brand hover:text-[#C9A97A] transition-colors"
              >
                <Phone size={15} />
                07934 679117
              </a>
              <Link
                href="/free-estimate"
                className="hidden sm:block bg-[#C9A97A] hover:bg-[#B8955A] text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-sm transition-colors"
              >
                Free Estimate
              </Link>
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden p-2 text-brand"
                aria-label="Menu"
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-[#EDEAE3] bg-white">
            <div className="px-4 py-4 space-y-1">
              {nav.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-sm font-medium text-brand hover:text-[#C9A97A] border-b border-[#EDEAE3]"
                  >
                    {item.label}
                  </Link>
                  {item.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 pl-4 text-sm text-stone-500 hover:text-[#C9A97A] border-b border-[#EDEAE3]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <a
                  href="tel:07934679117"
                  className="flex items-center justify-center gap-2 bg-brand text-white font-bold py-3 text-sm"
                >
                  <Phone size={15} />
                  Call 07934 679117
                </a>
                <Link
                  href="/free-estimate"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center bg-[#C9A97A] text-white font-bold py-3 rounded-xl text-sm"
                >
                  Free Estimate
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
