import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL, contactSchema, contactMailto } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Sandy — Lavenderlinenandlife" },
    { name: "description", content: "Contact Sandy at Lavenderlinenandlife with questions about stories, curated picks or collaborations. Replies within 2–3 business days." },
    { property: "og:title", content: "Contact Sandy — Lavenderlinenandlife" },
    { property: "og:description", content: "Get in touch about a story, product link or collaboration." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  staticData: { sitemap: true },
  component: Contact,
});

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [draftOpened, setDraftOpened] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const result = contactSchema.safeParse(Object.fromEntries(fields));
    if (!result.success) {
      setErrors(Object.fromEntries(result.error.issues.map(issue => [String(issue.path[0]), issue.message])));
      setDraftOpened(false);
      return;
    }
    setErrors({});
    window.location.href = contactMailto(result.data);
    setDraftOpened(true);
  }
  const fieldClass = "mt-2 w-full rounded-lg border border-input bg-card px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring";
  return <div className="min-h-screen bg-background">
    <SiteNav />
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
      <p className="text-xs font-semibold uppercase text-primary">Say hello</p>
      <h1 className="mt-3 font-heading text-5xl text-foreground sm:text-6xl">Contact</h1>
      <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Questions about a story, a broken product link, or a collaboration? I’d love to hear from you. I reply within 2–3 business days.</p>
      <a href={`mailto:${CONTACT_EMAIL}`} className="mt-5 inline-flex max-w-full items-center gap-2 break-all text-primary underline"><Mail className="h-4 w-4 shrink-0" />{CONTACT_EMAIL}</a>
      <form onSubmit={submit} noValidate className="mt-10 space-y-6">
        <div><label htmlFor="name" className="font-medium">Name</label><input id="name" name="name" autoComplete="name" required maxLength={100} className={fieldClass} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />{errors.name && <p id="name-error" className="mt-2 text-sm text-destructive">{errors.name}</p>}</div>
        <div><label htmlFor="email" className="font-medium">Email</label><input id="email" name="email" type="email" autoComplete="email" required maxLength={255} className={fieldClass} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />{errors.email && <p id="email-error" className="mt-2 text-sm text-destructive">{errors.email}</p>}</div>
        <div><label htmlFor="message" className="font-medium">Message</label><textarea id="message" name="message" required maxLength={2000} rows={6} className={fieldClass} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />{errors.message && <p id="message-error" className="mt-2 text-sm text-destructive">{errors.message}</p>}</div>
        <Button type="submit" size="lg" className="rounded-full"><Mail />Continue in email</Button>
        {draftOpened && <p role="status" className="text-sm leading-relaxed text-muted-foreground">Your message is ready for your email app. Send it there to reach me. If no draft opened, email me directly at {CONTACT_EMAIL}.</p>}
      </form>
    </main>
    <SiteFooter />
  </div>;
}
