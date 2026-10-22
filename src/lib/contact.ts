import { z } from "zod";

export const CONTACT_EMAIL = "sandywrites777@gmail.com";
export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100, "Use 100 characters or fewer.").regex(/^[^\r\n]+$/, "Enter your name on one line."),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  message: z.string().trim().min(1, "Please enter a message.").max(2000, "Use 2,000 characters or fewer."),
});

export function contactMailto(input: unknown) {
  const data = contactSchema.parse(input);
  const body = `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`;
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Website message from ${data.name}`)}&body=${encodeURIComponent(body)}`;
}