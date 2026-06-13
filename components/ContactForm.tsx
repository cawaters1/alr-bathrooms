"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("https://formspree.io/f/mgobpqdn", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-white border border-[#EDEAE3] p-12 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F8F6F2] mb-6">
          <CheckCircle2 size={32} className="text-[#C9A97A]" />
        </div>
        <h2 className="text-2xl font-black text-brand mb-3">Message Sent</h2>
        <p className="text-[#8B8FA0] leading-relaxed max-w-md mx-auto">
          Thank you for getting in touch. We&apos;ll get back to you as soon as possible —
          usually within a few hours.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#EDEAE3] p-8">
      <h2 className="text-xl font-black text-brand mb-1">Send Us a Message</h2>
      <p className="text-sm text-[#8B8FA0] mb-6">We&apos;ll reply within a few hours.</p>

      <form onSubmit={submit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold tracking-widest uppercase text-[#8B8FA0] mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={set("name")}
              placeholder="Your name"
              className="w-full border border-[#EDEAE3] px-4 py-3 text-sm text-brand focus:border-[#C9A97A] outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold tracking-widest uppercase text-[#8B8FA0] mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={set("phone")}
              placeholder="07..."
              className="w-full border border-[#EDEAE3] px-4 py-3 text-sm text-brand focus:border-[#C9A97A] outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold tracking-widest uppercase text-[#8B8FA0] mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={set("email")}
            placeholder="you@example.com"
            className="w-full border border-[#EDEAE3] px-4 py-3 text-sm text-brand focus:border-[#C9A97A] outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold tracking-widest uppercase text-[#8B8FA0] mb-1.5">
            Subject
          </label>
          <select
            value={form.subject}
            onChange={set("subject")}
            className="w-full border border-[#EDEAE3] px-4 py-3 text-sm text-brand focus:border-[#C9A97A] outline-none bg-white"
          >
            <option value="">Select a subject</option>
            <option>Free Estimate Request</option>
            <option>Bathroom Design Enquiry</option>
            <option>Bathroom Installation Enquiry</option>
            <option>General Enquiry</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold tracking-widest uppercase text-[#8B8FA0] mb-1.5">
            Message *
          </label>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={set("message")}
            placeholder="Tell us about your project..."
            className="w-full border border-[#EDEAE3] px-4 py-3 text-sm text-brand focus:border-[#C9A97A] outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="flex items-center gap-2 bg-[#C9A97A] hover:bg-[#B8955A] disabled:opacity-50 text-white font-bold px-6 py-3 rounded-xl shadow-sm transition-colors"
        >
          {submitting ? "Sending..." : "Send Message"}
          {!submitting && <ArrowRight size={15} />}
        </button>
      </form>
    </div>
  );
}
