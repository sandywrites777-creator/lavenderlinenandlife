export const AFFILIATE_DISCLOSURE = "Some links on this site are affiliate links. If you buy through them, I may earn a small commission at no extra cost to you.";
export const SHORT_DISCLOSURE = "Affiliate links: I may earn a small commission if you buy, at no extra cost to you.";

export function AffiliateNote({ className = "" }: { className?: string }) {
  return <p className={`text-sm leading-relaxed text-muted-foreground ${className}`}>{SHORT_DISCLOSURE}</p>;
}