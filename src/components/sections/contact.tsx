"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { submitContactForm } from "@/app/contact/actions";

export function Contact() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await submitContactForm(form);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 sm:py-32 bg-bg overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, #bf8d3c07 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="reveal text-center mb-14">
          <span className="section-label">Холбоо барих</span>
          <h2 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl text-text-primary mt-4 mb-5">
            Хамтран{" "}
            <span className="text-gold-gradient italic">ажиллацгаая</span>
          </h2>
          <p className="font-sans text-base text-text-secondary max-w-md mx-auto leading-relaxed">
            Таны төслийн талаар ярилцахад бид бэлэн. Мессаж илгээ, эсвэл
            шууд утасдаж болно.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-4xl mx-auto">
          {/* Left — contact info */}
          <div className="reveal lg:col-span-2 space-y-5">
            <div className="p-5 rounded-xl border border-line bg-surface/60">
              <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary mb-4">
                Шууд холбоо
              </h3>
              <div className="space-y-4">
                {/* Phone */}
                <a
                  href="tel:80360420"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-gold/8 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold/16 transition-colors shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-sans text-sm font-medium text-text-primary group-hover:text-gold-light transition-colors">
                      8036-0420
                    </div>
                    <div className="font-sans text-xs text-text-secondary">Утас / Viber / WhatsApp</div>
                  </div>
                </a>

                {/* Messenger */}
                <a
                  href="https://m.me/awdagency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-azure/8 border border-azure/20 flex items-center justify-center text-azure-light group-hover:bg-azure/16 transition-colors shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.914 1.32 5.516 3.405 7.267V22l3.122-1.715a10.56 10.56 0 003.473.583c5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.08 12.426l-2.557-2.728-4.988 2.728 5.487-5.828 2.62 2.728 4.924-2.728-5.486 5.828z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-sans text-sm font-medium text-text-primary group-hover:text-azure-light transition-colors">
                      Facebook Messenger
                    </div>
                    <div className="font-sans text-xs text-text-secondary">AWD Agency хуудсаар</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Response time note */}
            <div className="p-4 rounded-xl border border-gold/12 bg-gold/5">
              <div className="flex gap-3 items-start">
                <span className="text-lg">⚡</span>
                <div>
                  <div className="font-sans text-sm font-medium text-gold-light mb-0.5">
                    Хурдан хариу
                  </div>
                  <div className="font-sans text-xs text-text-secondary leading-relaxed">
                    Ажлын цагт 1-2 цагийн дотор хариулна. Facebook Messenger-ээр ярилцах нь хамгийн хурдан.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal delay-200 lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="p-7 rounded-2xl border border-line bg-surface/60 space-y-4"
            >
              {status === "sent" ? (
                <div className="py-10 text-center space-y-3">
                  <div className="text-3xl">✦</div>
                  <h3 className="font-serif text-2xl text-text-primary">
                    Баярлалаа!
                  </h3>
                  <p className="font-sans text-sm text-text-secondary">
                    Таны мессаж хүрлээ. Удахгүй холбоо барина.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-sans text-xs font-medium text-text-secondary mb-1.5 uppercase tracking-wider">
                        Нэр
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Таны нэр"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-line bg-surface-2 text-text-primary font-sans text-sm placeholder:text-text-secondary/40 focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-xs font-medium text-text-secondary mb-1.5 uppercase tracking-wider">
                        Утас
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Утасны дугаар"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-line bg-surface-2 text-text-primary font-sans text-sm placeholder:text-text-secondary/40 focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-xs font-medium text-text-secondary mb-1.5 uppercase tracking-wider">
                      И-мэйл
                    </label>
                    <input
                      type="email"
                      placeholder="И-мэйл хаяг (заавал биш)"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-line bg-surface-2 text-text-primary font-sans text-sm placeholder:text-text-secondary/40 focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-xs font-medium text-text-secondary mb-1.5 uppercase tracking-wider">
                      Санал хүсэлт
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Таны бизнес, хийлгэхийг хүсэж буй вэб шийдлийнхээ талаар бичнэ үү…"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-line bg-surface-2 text-text-primary font-sans text-sm placeholder:text-text-secondary/40 focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-3.5 bg-gold text-bg font-sans font-semibold text-sm rounded-lg hover:bg-gold-light hover:shadow-[0_0_24px_#bf8d3c35] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Илгээж байна…" : "Илгээх ✦"}
                  </button>

                  {status === "error" && (
                    <p className="font-sans text-xs text-red-400 text-center">
                      Алдаа гарлаа. Дахин оролдоно уу.
                    </p>
                  )}
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
