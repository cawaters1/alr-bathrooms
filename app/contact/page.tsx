import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact ALR Bathrooms | Surrey Bathroom Specialists",
  description:
    "Contact ALR Bathrooms for your bathroom project in Surrey. Call 07934 679117 or email info@alrbathrooms.com. Available 7 days, 8am–6pm.",
  alternates: { canonical: "https://www.alrbathrooms.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase text-[#C4A265] mb-3">Get In Touch</p>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">Contact Us</h1>
          <p className="text-[#8B7D72] text-lg max-w-2xl leading-relaxed">
            Ready to talk about your bathroom? We&apos;d love to hear from you.
            Available 7 days a week across Surrey.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#F9F7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact details */}
            <div className="space-y-6">
              <div className="bg-white border border-[#EDE9E3] p-8">
                <h3 className="font-black text-brand mb-5">Contact Details</h3>
                <div className="space-y-4">
                  <a href="tel:07934679117" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 bg-[#F9F7F3] flex items-center justify-center shrink-0">
                      <Phone size={15} className="text-[#C4A265]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#8B7D72] uppercase tracking-widest font-bold mb-0.5">Phone</div>
                      <div className="text-sm font-bold text-brand group-hover:text-[#C4A265] transition-colors">
                        07934 679117
                      </div>
                    </div>
                  </a>
                  <a href="mailto:info@alrbathrooms.com" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 bg-[#F9F7F3] flex items-center justify-center shrink-0">
                      <Mail size={15} className="text-[#C4A265]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#8B7D72] uppercase tracking-widest font-bold mb-0.5">Email</div>
                      <div className="text-sm font-bold text-brand group-hover:text-[#C4A265] transition-colors break-all">
                        info@alrbathrooms.com
                      </div>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-[#F9F7F3] flex items-center justify-center shrink-0">
                      <MapPin size={15} className="text-[#C4A265]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#8B7D72] uppercase tracking-widest font-bold mb-0.5">Address</div>
                      <div className="text-sm text-brand">
                        8 Kilmiston Avenue<br />
                        Shepperton<br />
                        Surrey, TW17 9DL
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#F9F7F3] flex items-center justify-center shrink-0">
                      <Clock size={15} className="text-[#C4A265]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#8B7D72] uppercase tracking-widest font-bold mb-0.5">Hours</div>
                      <div className="text-sm text-brand">Mon–Sun: 8:00am – 6:00pm</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand border border-[#2A2A2E] p-8">
                <div className="text-xs font-bold tracking-widest uppercase text-[#C4A265] mb-3">Free Estimates</div>
                <p className="text-sm text-[#8B7D72] leading-relaxed mb-4">
                  We offer free, no-obligation estimates for all new bathroom installations.
                  We&apos;ll visit your home and discuss your project in full.
                </p>
                <a
                  href="tel:07934679117"
                  className="inline-flex items-center gap-2 bg-[#C4A265] hover:bg-[#B8935A] text-white font-bold px-5 py-2.5 text-sm transition-colors"
                >
                  <Phone size={13} />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
