"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface ProjectItem {
  title: string;
  category: string;
  description: string;
  color: string;
  mockIcon: string;
  tags: string[];
}

const projects: ProjectItem[] = [
  {
    title: "Номин Трейдинг",
    category: "Онлайн дэлгүүр",
    description:
      "Барааны каталог, захиалгын систем болон QPay төлбөрийн нэгдэлтэй бүрэн онлайн дэлгүүрийн платформ.",
    color: "#3D72F0",
    mockIcon: "🛍️",
    tags: ["Next.js", "E-commerce", "QPay"],
  },
  {
    title: "Нүүр Гоёлт",
    category: "Брэндийн сайт",
    description:
      "Гоо сайхны брэндийн мэргэжлийн танилцуулга сайт. Бүтээгдэхүүний гэрэл зургийн галерей, нийгмийн сүлжээний нэгдэлтэй.",
    color: "#E8A0C8",
    mockIcon: "✨",
    tags: ["Tailwind", "Gallery", "Mobile"],
  },
  {
    title: "Логистик Монгол",
    category: "Вэб апп",
    description:
      "Тээврийн захиалга, ачаа хянах систем. Жолооч болон оператор хоёуланд зориулсан тусдаа хяналтын самбаруудтай.",
    color: "#BF8D3C",
    mockIcon: "🚛",
    tags: ["Dashboard", "Real-time", "Auth"],
  },
  {
    title: "Алтан Ресторан",
    category: "Захиалгын систем",
    description:
      "Хоолны цэс, онлайн хүргэлтийн захиалгын систем. QR код дарж захиалах функцтай орчин үеийн ресторан сайт.",
    color: "#E8693D",
    mockIcon: "🍜",
    tags: ["QR захиалга", "Хүргэлт", "Цэс"],
  },
];

function ProjectCard({ project, delay }: { project: ProjectItem; delay: number }) {
  return (
    <div
      className={`reveal delay-${delay} group card-hover relative rounded-xl border border-line bg-surface/60 overflow-hidden cursor-default`}
    >
      {/* Mock screenshot area */}
      <div
        className="relative h-44 flex items-center justify-center overflow-hidden"
        style={{ background: `${project.color}12` }}
      >
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(${project.color}30 1px, transparent 1px), linear-gradient(90deg, ${project.color}30 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Mock browser window */}
        <div className="relative w-3/4 h-28 rounded-lg border border-white/10 bg-[#08080f]/80 shadow-xl overflow-hidden">
          <div className="flex items-center gap-1 px-2.5 py-2 border-b border-white/8">
            <div className="w-2 h-2 rounded-full" style={{ background: `${project.color}80` }} />
            <div className="w-2 h-2 rounded-full bg-white/10" />
            <div className="w-2 h-2 rounded-full bg-white/10" />
            <div className="ml-2 h-2.5 flex-1 rounded bg-white/6" />
          </div>
          <div className="p-3 space-y-2">
            <div className="h-2.5 w-1/2 rounded" style={{ background: `${project.color}50` }} />
            <div className="h-2 w-5/6 rounded bg-white/10" />
            <div className="h-2 w-4/6 rounded bg-white/7" />
            <div className="flex gap-2 pt-1">
              <div className="h-5 w-14 rounded" style={{ background: `${project.color}40` }} />
            </div>
          </div>
        </div>

        {/* Emoji icon */}
        <div
          className="absolute top-3 right-4 w-10 h-10 rounded-lg flex items-center justify-center text-xl shadow-lg"
          style={{ background: `${project.color}20`, border: `1px solid ${project.color}30` }}
        >
          {project.mockIcon}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-serif text-lg font-medium text-text-primary">{project.title}</h3>
            <span
              className="inline-block font-sans text-[10px] font-medium px-2 py-0.5 rounded-full mt-1"
              style={{ background: `${project.color}15`, color: project.color }}
            >
              {project.category}
            </span>
          </div>
        </div>

        <p className="font-sans text-xs text-text-secondary leading-relaxed mt-2 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-sans text-[10px] px-2 py-0.5 rounded-full border border-line text-text-secondary/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Portfolio() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="portfolio" ref={sectionRef} className="relative py-24 sm:py-32 bg-bg overflow-hidden">
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="section-label">Ажлын жишээ</span>
          <h2 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl text-text-primary mt-4 mb-5">
            Манай{" "}
            <span className="text-gold-gradient italic">ажлуудаас</span>
          </h2>
          <p className="font-sans text-base text-text-secondary max-w-md mx-auto leading-relaxed">
            Олон төрлийн бизнесүүдэд зориулж бүтээсэн вэб шийдлүүд.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={(i + 1) * 100} />
          ))}
        </div>

        {/* CTA */}
        <div className="reveal mt-14 text-center">
          <p className="font-sans text-sm text-text-secondary mb-5">
            Таны бизнес ч манай дараагийн амжилт байж болно
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-surface-2 border border-line rounded-lg font-sans text-sm font-medium text-text-secondary hover:border-gold/30 hover:text-text-primary transition-all duration-300"
          >
            Төслөө хэлэлцэх
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
