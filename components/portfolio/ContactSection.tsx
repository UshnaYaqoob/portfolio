"use client";

/**
 * ContactSection — "Let's Work Together"
 *
 * Centered layout with:
 *  - Overline + heading (blue accent on "Work")
 *  - Subheading
 *  - Form (name, email, message) in single column
 *  - Social links + copyright at bottom
 */

import { useState } from "react";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaPaperPlane,
} from "react-icons/fa";
import SectionHeader from "./SectionHeader";

export default function ContactSection() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await new Promise((res) => setTimeout(res, 800));
        setLoading(false);
        setSubmitted(true);
    };

    return (
        <section id="contact" className="py-24 px-6 bg-[#050b18] border-t border-white/5">
            <div className="max-w-2xl mx-auto">

                {/* Section header - centered */}
                <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 block mb-3">
            Contact Me
          </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
                        Let's <span className="text-blue-400">Work</span> Together
                    </h2>
                    <p className="text-slate-400 text-base">
                        Have a project in mind or need help building a reliable web system?
                    </p>
                </div>

                {submitted ? (
                    /* Success state */
                    <div className="flex flex-col items-center justify-center text-center gap-4 py-12">
                        <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                            <FaEnvelope size={28} className="text-green-400" />
                        </div>
                        <h3 className="text-slate-100 font-semibold text-xl">Message sent!</h3>
                        <p className="text-slate-400 text-sm max-w-xs">
                            Thanks for reaching out. I'll get back to you within 24 hours.
                        </p>
                        <button
                            onClick={() => {
                                setSubmitted(false);
                                setForm({ name: "", email: "", message: "" });
                            }}
                            className="mt-4 text-blue-400 text-sm hover:text-blue-300 transition-colors font-medium"
                        >
                            Send another message
                        </button>
                    </div>
                ) : (
                    /* Form */
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        {/* Name & Email row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2">
                                <label className="text-slate-300 text-sm font-medium">Name *</label>
                                <input
                                    name="name"
                                    type="text"
                                    required
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your name here"
                                    className="
                    w-full px-4 py-3 rounded-lg text-sm
                    bg-[#0a1628] border border-slate-700
                    text-slate-200 placeholder-slate-600
                    focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30
                    transition-all duration-200
                  "
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-slate-300 text-sm font-medium">Email *</label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Where can I reply"
                                    className="
                    w-full px-4 py-3 rounded-lg text-sm
                    bg-[#0a1628] border border-slate-700
                    text-slate-200 placeholder-slate-600
                    focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30
                    transition-all duration-200
                  "
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-2">
                            <label className="text-slate-300 text-sm font-medium">What's in your mind? *</label>
                            <textarea
                                name="message"
                                rows={5}
                                required
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                className="
                  w-full px-4 py-3 rounded-lg text-sm resize-none
                  bg-[#0a1628] border border-slate-700
                  text-slate-200 placeholder-slate-600
                  focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30
                  transition-all duration-200
                "
                            />
                        </div>

                        {/* Submit button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="
                inline-flex items-center justify-center gap-2
                px-8 py-3 rounded-full text-sm font-semibold text-white
                bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-wait
                transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/30
                mx-auto
              "
                        >
                            {loading ? "Sending…" : (
                                <>
                                    Send Message
                                    <FaPaperPlane size={14} />
                                </>
                            )}
                        </button>
                    </form>
                )}

                {/* Footer section */}
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Social links */}
                    <div className="flex items-center gap-4">
                        <a
                            href="#"
                            className="text-slate-500 hover:text-slate-300 transition-colors"
                            aria-label="Email"
                        >
                            <FaEnvelope size={18} />
                        </a>
                        <a
                            href="#"
                            className="text-slate-500 hover:text-slate-300 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FaGithub size={18} />
                        </a>
                        <a
                            href="#"
                            className="text-slate-500 hover:text-slate-300 transition-colors"
                            aria-label="GitHub"
                        >
                            <FaLinkedin size={18} />
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-slate-600 text-xs">© UshnaYaqoob</p>
                </div>
            </div>
        </section>
    );
}
