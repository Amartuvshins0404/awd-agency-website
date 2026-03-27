import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Pricing } from "@/components/sections/pricing";
import { Portfolio } from "@/components/sections/portfolio";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Pricing />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
