"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    title: "Вэб сайт",
    description:
      "Таны брэнд болон бүтээгдэхүүнийг дэлхийд харуулах мэргэжлийн вэб сайт. Гоё дизайн, хурдан ачаалал, SEO оновчлол бүрэн хамаарна.",
    tags: ["Next.js", "SEO", "Mobile-first"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
    title: "Онлайн дэлгүүр",
    description:
      "Захиалга авах, QPay болон картаар төлбөр хүлээн авах бүрэн онлайн дэлгүүрийн систем. Удирдлагын хяналтын самбартай.",
    tags: ["E-commerce", "QPay", "Admin самбар"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    title: "Вэб апп",
    description:
      "Хэрэглэгч нэвтрэх, захиалга удирдах, бизнесийн гүйцэтгэлийг хэмжих тусгай хэрэглэгдэхүүн. Таны бизнесийн тодорхой хэрэгцээнд тохирно.",
    tags: ["Auth систем", "Dashboard", "API"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "Дизайн шинэчлэл",
    description:
      "Хуучирсан вэб сайтыг орчин үеийн, мобайл-зориулсан шинэ дизайнаар бүрэн дахин бүтээнэ. Хурдыг нь нэмэгдүүлж, хувиргалтыг сайжруулна.",
    tags: ["Redesign", "Performance", "UX"],
  },
];

export function Services() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="services" ref={sectionRef} className="relative py-24 sm:py-32 bg-bg overflow-hidden">
      {/* Subtle background pattern */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{
          backgroundImage: "radial-gradient(circle, #bf8d3c 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <div className="reveal text-center mb-16">
          <span className="section-label">Үйлчилгээ</span>
          <h2 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl text-text-primary mt-4 mb-5">
            Бид юу{" "}
            <span className="text-gold-gradient italic">бүтээдэг вэ</span>
          </h2>
          <p className="font-sans text-base text-text-secondary max-w-lg mx-auto leading-relaxed">
            Таны бизнесийн хэрэгцээнд тохирсон дэвшилтэт вэб шийдлүүд.
            Зөвхөн гоё харагдах биш — ашигтай, үр дүнтэй.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`reveal card-hover delay-${(i + 1) * 100} group p-6 rounded-xl border border-line bg-surface/60 backdrop-blur-sm cursor-default`}
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-lg border border-gold/20 bg-gold/8 flex items-center justify-center text-gold mb-5 transition-all duration-300 group-hover:bg-gold/16 group-hover:border-gold/40">
                {svc.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-medium text-text-primary mb-3">
                {svc.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-sm text-text-secondary leading-relaxed mb-5">
                {svc.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-sans font-medium px-2 py-0.5 rounded-full border border-line text-text-secondary/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="reveal mt-14 text-center">
          <p className="font-sans text-sm text-text-secondary mb-4">
            Таны хэрэгцээ тодорхойгүй байна уу?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-gold-light hover:text-gold transition-colors"
          >
            Үнэгүй зөвлөгөө авах
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
