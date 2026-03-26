import type { Metadata } from "next";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with AWD Agency. We'd love to hear about your project.",
};

export default function ContactPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-4 text-muted-foreground">
            Have a project in mind? Fill out the form below and we&apos;ll get
            back to you within 24 hours.
          </p>

          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
