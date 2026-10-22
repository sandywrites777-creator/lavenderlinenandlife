import { describe, expect, it } from "vitest";
import { contactMailto, contactSchema } from "@/lib/contact";

describe("Contact email drafts", () => {
  it("addresses messages to the owner's supplied email", () => {
    expect(contactMailto({ name: "Reader", email: "reader@example.com", message: "Hello & thank you" })).toMatch(/^mailto:sandywrites777@gmail\.com\?/);
  });
  it("encodes message content without injecting extra recipients", () => {
    const url = contactMailto({ name: "Reader", email: "reader@example.com", message: "Hello &bcc=other@example.com" });
    expect(url).toContain("%26bcc%3Dother%40example.com");
    expect(url).not.toContain("&bcc=");
  });
  it("rejects invalid email addresses", () => {
    expect(contactSchema.safeParse({ name: "Reader", email: "invalid", message: "Hello" }).success).toBe(false);
  });
});