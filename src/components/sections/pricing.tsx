"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const plans = [
  {
    name: "Хялбар",
    price: "99,000",
    period: "₮/сар",
    description: "Жижиг бизнесүүдэд хамгийн тохиромжтой эхлэлийн төлөвлөгөө.",
    featured: false,
    features: [
      "5 хүртэлх хуудас",
      "Мобайл-зориулсан дизайн",
      "Холбоо барих форм",
      "SSL, хостинг",
      "Google Maps нэгдэл",
      "1 сарын техник дэмжлэг",
    ],
    cta: "Сонгох",
    note: null,
  },
  {
    name: "Бизнес",
    price: "299,000",
    period: "₮/сар",
    description: "Өсөн нэмэгдэж буй бизнесүүдэд хамгийн их сонгогддог.",
    featured: true,
    features: [
      "15 хүртэлх хуудас",
      "Онлайн каталог / дэлгүүр",
      "SEO оновчлол",
      "Google Analytics",
      "Мэдэгдэл илгээх систем",
      "3 сарын техник дэмжлэг",
    ],
    cta: "Одоо сонгох",
    note: "Хамгийн их сонгогддог",
  },
  {
    name: "Дэвшилтэт",
    price: "699,000+",
    period: "₮/сар",
    description: "Тусгай функцтай, бүрэн тохируулсан вэб апп шийдэл.",
    featured: false,
    features: [
      "Хязгааргүй хуудас",
      "Тусгай функцтай вэб апп",
      "QPay / Stripe нэгдэл",
      "Admin хяналтын самбар",
      "Хэрэглэгч нэвтрэх систем",
      "Байнгын техник дэмжлэг",
    ],
    cta: "Зөвлөгөө авах",
    note: null,
  },
];

export function Pricing() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="pricing" ref={sectionRef} className="relative py-24 sm:py-32 bg-surface/40 overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, #bf8d3c07 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="section-label">Үнэ тариф</span>
          <h2 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl text-text-primary mt-4 mb-5">
            Таны бизнест{" "}
            <span className="text-gold-gradient italic">тохирсон</span>
          </h2>
          <p className="font-sans text-base text-text-secondary max-w-md mx-auto leading-relaxed">
            Нэг удаагийн тохируулга хийж, сар бүр шинэчлэлт, дэмжлэг аваарай.
          </p>
        </div>

        {/* Plans */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal delay-${(i + 1) * 100} relative rounded-2xl p-7 flex flex-col transition-all duration-400 ${
                plan.featured
                  ? "bg-surface-2 border border-gold/30 shadow-[0_0_40px_#bf8d3c18,0_24px_60px_#00000070]"
                  : "bg-surface/60 border border-line hover:border-gold/20 hover:shadow-[0_16px_40px_#00000050] cursor-default"
              }`}
            >
              {/* Featured badge */}
              {plan.note && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-3 py-1 bg-gold text-bg text-[11px] font-sans font-semibold rounded-full whitespace-nowrap">
                    {plan.note}
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3 className="font-serif text-2xl font-medium text-text-primary mb-1">
                {plan.name}
              </h3>
              <p className="font-sans text-xs text-text-secondary mb-5 leading-relaxed">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-line">
                <div className="flex items-baseline gap-1">
                  <span
                    className={`font-serif text-4xl font-medium ${
                      plan.featured ? "text-gold-gradient" : "text-text-primary"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span className="font-sans text-sm text-text-secondary">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-7">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <svg
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        plan.featured ? "text-gold" : "text-text-secondary/60"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="font-sans text-sm text-text-secondary">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`w-full text-center py-3 rounded-lg font-sans font-semibold text-sm transition-all duration-300 ${
                  plan.featured
                    ? "bg-gold text-bg hover:bg-gold-light hover:shadow-[0_0_20px_#bf8d3c35]"
                    : "border border-line text-text-secondary hover:border-gold/30 hover:text-text-primary"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="reveal mt-10 text-center">
          <p className="font-sans text-xs text-text-secondary/60">
            Бүх төлөвлөгөөнд нэг удаагийн тохиргооны үнэ нэмж тооцогдоно. Дэлгэрэнгүй мэдээлэл авахыг хүсвэл биднтэй холбоо барина уу.
          </p>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}
