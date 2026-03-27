"use client";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bg pt-16">
      {/* Ambient background glows */}
      <div
        aria-hidden
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, #bf8d3c0a 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, #3d72f00a 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Geometric decorative rings */}
      <div
        aria-hidden
        className="absolute top-1/2 right-[8%] -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-gold/6 pointer-events-none hidden lg:block"
        style={{ animation: "spin-slow 60s linear infinite" }}
      />
      <div
        aria-hidden
        className="absolute top-1/2 right-[8%] -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-gold/10 pointer-events-none hidden lg:block"
      />
      <div
        aria-hidden
        className="absolute top-1/2 right-[8%] -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-gold/16 pointer-events-none hidden lg:block"
      />

      {/* Grid pattern overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#bf8d3c 1px, transparent 1px), linear-gradient(90deg, #bf8d3c 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div className="text-center lg:text-left">
            {/* Tagline */}
            <div className="hero-tagline inline-flex items-center gap-3 mb-8">
              <span className="deco-line" />
              <span className="section-label">AWD Agency</span>
              <span className="deco-line" style={{ background: "linear-gradient(90deg, transparent, #bf8d3c)" }} />
            </div>

            {/* Headline */}
            <h1 className="font-serif font-light leading-[1.08] mb-6">
              <span className="hero-title-1 block text-[3.2rem] sm:text-[4rem] lg:text-[4.8rem] xl:text-[5.4rem] text-text-primary">
                Таны бизнесийг
              </span>
              <span className="hero-title-2 block text-[3.2rem] sm:text-[4rem] lg:text-[4.8rem] xl:text-[5.4rem] text-gold-gradient italic">
                онлайнд илэрхийл
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle font-sans font-light text-base sm:text-lg text-text-secondary leading-relaxed mb-8 max-w-[480px] mx-auto lg:mx-0">
              Монгол бизнест зориулсан мэргэжлийн вэб шийдэл —
              хурдан, үзэсгэлэнтэй, ашигтай. Захиалагчийг таны дэлгүүрт авчрах
              вэб сайт бүтээнэ.
            </p>

            {/* CTAs */}
            <div className="hero-cta flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#pricing"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold text-bg font-sans font-semibold text-sm rounded transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_24px_#bf8d3c40]"
              >
                Үнэ тарифыг харах
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-line text-text-secondary font-sans font-medium text-sm rounded hover:border-gold/30 hover:text-text-primary transition-all duration-300"
              >
                Холбоо барих
              </a>
            </div>

            {/* Stats */}
            <div className="hero-stats flex gap-8 mt-12 justify-center lg:justify-start">
              {[
                ["30+", "Амжилттай төсөл"],
                ["100%", "Сэтгэл ханамж"],
                ["<3с", "Хуудас ачааллах"],
              ].map(([num, label]) => (
                <div key={label} className="text-center lg:text-left">
                  <div className="font-serif text-2xl sm:text-3xl font-medium text-gold-gradient">{num}</div>
                  <div className="font-sans text-xs text-text-secondary mt-0.5 whitespace-nowrap">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual card */}
          <div className="hero-visual hidden lg:flex justify-center items-center relative">
            <div
              className="relative w-[340px] h-[420px] rounded-2xl border border-gold/12 bg-surface overflow-hidden shadow-[0_32px_80px_#00000080]"
              style={{ animation: "float 7s ease-in-out infinite" }}
            >
              {/* Mock browser bar */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line bg-surface-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <div className="ml-3 flex-1 h-4 rounded bg-line/60" />
              </div>

              {/* Mock hero content */}
              <div className="p-6 space-y-4">
                <div className="h-3 w-1/2 rounded bg-gold/20" />
                <div className="h-8 w-5/6 rounded bg-text-primary/10" />
                <div className="h-8 w-4/6 rounded bg-text-primary/8" />
                <div className="h-3 w-full rounded bg-text-secondary/20" />
                <div className="h-3 w-5/6 rounded bg-text-secondary/15" />
                <div className="h-3 w-4/6 rounded bg-text-secondary/12" />
                <div className="flex gap-2 pt-2">
                  <div className="h-8 w-24 rounded bg-gold/30" />
                  <div className="h-8 w-20 rounded border border-line" />
                </div>
              </div>

              {/* Mock section cards */}
              <div className="px-6 space-y-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg border border-line bg-surface-2/50"
                  >
                    <div className="w-8 h-8 rounded bg-gold/15 shrink-0" />
                    <div className="space-y-1.5 flex-1">
                      <div className="h-2 w-3/4 rounded bg-text-primary/12" />
                      <div className="h-2 w-1/2 rounded bg-text-secondary/20" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Glow overlay on card */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, #bf8d3c08 0%, transparent 50%, #3d72f008 100%)",
                }}
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-surface-2 border border-gold/20 shadow-[0_8px_32px_#00000060]"
              style={{ animation: "float 5s ease-in-out infinite 1s" }}
            >
              <span className="font-sans text-xs font-medium text-gold-light">
                ✦ Шинэ захиалга
              </span>
            </div>
            <div
              className="absolute -bottom-4 -left-6 px-4 py-2 rounded-full bg-surface-2 border border-azure/20 shadow-[0_8px_32px_#00000060]"
              style={{ animation: "float 5.5s ease-in-out infinite 0.5s" }}
            >
              <span className="font-sans text-xs font-medium text-azure-light">
                ⚡ 99k₮/сар-аас эхлэнэ
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #050810)",
        }}
      />
    </section>
  );
}
