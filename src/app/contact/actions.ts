"use server";

export async function submitContactForm(data: {
  name: string;
  phone: string;
  email: string;
  message: string;
}) {
  console.log("[Contact Form Submission]", {
    name: data.name,
    phone: data.phone,
    email: data.email,
    message: data.message,
    submittedAt: new Date().toISOString(),
  });
}
