import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Home",
  description:
    "AWD Agency — Building modern web applications for your business.",
};

const features = [
  {
    title: "Modern Stack",
    description:
      "Built with Next.js 14, TypeScript, and Tailwind CSS for a fast and maintainable codebase.",
  },
  {
    title: "SEO Ready",
    description:
      "Optimized metadata, Open Graph tags, and server-side rendering out of the box.",
  },
  {
    title: "Production Ready",
    description:
      "PM2 process management and GitHub Actions CI/CD for seamless deployments.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero section */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Build Modern Web Apps
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            AWD Agency delivers high-quality web applications tailored to your
            business needs. Fast, reliable, and built to grow with you.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 flex-col sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why AWD Agency?</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Ready to get started?</h2>
          <p className="mt-4 text-muted-foreground">
            Contact us today and let&apos;s build something great together.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
