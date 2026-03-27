export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface/60 mt-0">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center">
                <span className="font-serif text-gold font-bold text-sm leading-none">A</span>
              </div>
              <span className="font-sans font-semibold text-sm tracking-wider">
                AWD <span className="text-gold-light">Agency</span>
              </span>
            </div>
            <p className="font-sans text-sm text-text-secondary leading-relaxed">
              Монгол бизнесийн тулд дэлхийн чанарын вэб шийдэл хүргэх баг.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://m.me/awdagency"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded border border-line hover:border-gold/40 flex items-center justify-center text-text-secondary hover:text-gold transition-all"
                aria-label="Facebook Messenger"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.914 1.32 5.516 3.405 7.267V22l3.122-1.715a10.56 10.56 0 003.473.583c5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.08 12.426l-2.557-2.728-4.988 2.728 5.487-5.828 2.62 2.728 4.924-2.728-5.486 5.828z"/>
                </svg>
              </a>
              <a
                href="tel:80360420"
                className="w-8 h-8 rounded border border-line hover:border-gold/40 flex items-center justify-center text-text-secondary hover:text-gold transition-all"
                aria-label="Утас"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className="space-y-4">
            <h4 className="section-label">Цэс</h4>
            <ul className="space-y-2.5">
              {[
                ["#services", "Үйлчилгээ"],
                ["#pricing", "Үнэ тариф"],
                ["#portfolio", "Ажлын жишээ"],
                ["#about", "Бидний тухай"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="section-label">Үйлчилгээ</h4>
            <ul className="space-y-2.5">
              {[
                "Вэб сайт",
                "Онлайн дэлгүүр",
                "Вэб апп",
                "Дизайн шинэчлэл",
              ].map((s) => (
                <li key={s} className="font-sans text-sm text-text-secondary">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="section-label">Холбоо</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-gold shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href="tel:80360420" className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors">
                  8036-0420
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-gold shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.914 1.32 5.516 3.405 7.267V22l3.122-1.715a10.56 10.56 0 003.473.583c5.523 0 10-4.145 10-9.243S17.523 2 12 2z"/>
                </svg>
                <a
                  href="https://m.me/awdagency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  Facebook Messenger
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-line pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-text-secondary">
            © {year} AWD Agency. Бүх эрх хамгаалагдсан.
          </p>
          <p className="font-sans text-xs text-text-secondary/60">
            Монгол бизнесийн вэб шийдэл
          </p>
        </div>
      </div>
    </footer>
  );
}
