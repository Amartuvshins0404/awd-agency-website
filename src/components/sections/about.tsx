"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const stats = [
  { value: "30+", label: "Амжилттай төсөл" },
  { value: "100%", label: "Үйлчлүүлэгч сэтгэл ханамж" },
  { value: "2–6", label: "Хүргэлтийн хугацаа (долоо хоног)" },
  { value: "24/7", label: "Техник дэмжлэг" },
];

const values = [
  {
    icon: "⚡",
    title: "Хурдан хүргэлт",
    desc: "Стандарт сайтыг 2–3 долоо хоног дотор бэлдэж өгнө.",
  },
  {
    icon: "🎯",
    title: "Үр дүнд чиглэсэн",
    desc: "Гоё харагдахаас гадна бодит хэрэглэгч, бодит борлуулалт.",
  },
  {
    icon: "🔒",
    title: "Аюулгүй, найдвартай",
    desc: "SSL, хурдан сервер, тогтвортой ажиллагаа бүрэн хамаарна.",
  },
];

export function About() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="about" ref={sectionRef} className="relative py-24 sm:py-32 bg-surface/40 overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, #bf8d3c06 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left — text */}
          <div>
            <div className="reveal">
              <span className="section-label">Бидний тухай</span>
              <h2 className="font-serif font-light text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-text-primary mt-4 mb-6 leading-[1.1]">
                AWD Agency —{" "}
                <span className="text-gold-gradient italic">хэн бэ бид?</span>
              </h2>
            </div>

            <div className="reveal delay-100 space-y-4 mb-8">
              <p className="font-sans text-base text-text-secondary leading-relaxed">
                AWD Agency нь Монголын бизнесүүдэд дэлхийн стандартын вэб
                шийдэл хүргэхийн тулд байгуулагдсан. Бид React, Next.js
                технологид суурилсан хурдан, аюулгүй, орчин үеийн вэб сайт
                болон аппликейшн бүтээдэг.
              </p>
              <p className="font-sans text-base text-text-secondary leading-relaxed">
                Манай баг бизнесийн хэрэгцээг ойлгодог хөгжүүлэгчдээс
                бүрддэг. Зөвхөн гоё харагдах биш — ашигтай, хэрэгтэй, үр
                дүнтэй шийдэл хүргэх нь манай зорилго.
              </p>
            </div>

            {/* Values */}
            <div className="reveal delay-200 space-y-4 mb-8">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-lg bg-gold/8 border border-gold/20 flex items-center justify-center text-base shrink-0 group-hover:bg-gold/16 transition-colors">
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-sm text-text-primary mb-0.5">
                      {v.title}
                    </h4>
                    <p className="font-sans text-sm text-text-secondary">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal delay-300">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-sans text-sm font-medium text-gold-light hover:text-gold transition-colors"
              >
                Манай багтай холбоо барих
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — stats */}
          <div className="reveal delay-200">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`p-6 rounded-xl border border-line bg-surface/60 hover:border-gold/20 transition-all duration-300 ${
                    i === 0 ? "border-gold/20 bg-surface-2" : ""
                  }`}
                >
                  <div
                    className={`font-serif text-4xl font-medium mb-2 ${
                      i === 0 ? "text-gold-gradient" : "text-text-primary"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div className="font-sans text-xs text-text-secondary leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech stack badge */}
            <div className="mt-4 p-5 rounded-xl border border-line bg-surface/40">
              <p className="font-sans text-xs text-text-secondary mb-3 uppercase tracking-widest">
                Технологийн стек
              </p>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "PostgreSQL"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md border border-line bg-surface-2/50 font-sans text-xs text-text-secondary/70"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}
