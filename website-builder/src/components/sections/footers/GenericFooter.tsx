import Image from "next/image";
import Link from "next/link";
import { FooterSection } from "@/types/sections";

// (Optional) icons via lucide-react or your own SVGs
// npm i lucide-react


function SocialIcon({ platform }: { platform: string }) {
  const size = 18;
  switch (platform) {
    case "x":
    case "twitter":
      // light X — use a simple glyph fallback if you don't add an icon lib
      return <span className="text-sm font-semibold">X</span>;
    case "facebook":
      return <span className="text-sm font-semibold">Facebook</span>;
    case "instagram":
      return <span className="text-sm font-semibold">Instagram</span>;
    case "linkedin":
      return <span className="text-sm font-semibold">Linkedin</span>;
    case "github":
      return <span className="text-sm font-semibold">Github</span>;
    case "youtube":
      return <span className="text-sm font-semibold">Youtube</span>;
    default:
      return <span className="text-sm">•</span>;
  }
}

export function GenericFooter({ section }: { section: FooterSection }) {
  const year = new Date().getFullYear();
  const brand = section.brand;
  const columns = section.columns ?? (section.links ? [{ heading: "Links", links: section.links }] : []);
  const socials = section.socialLinks ?? [];

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand / About (span 2 on large screens) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              {brand?.logoUrl && (
                <Image
                  src={brand.logoUrl}
                  alt={brand.name ?? "Brand"}
                  width={28}
                  height={28}
                  className="rounded-sm"
                />
              )}
              {brand?.name && (
                <span className="text-lg font-semibold text-white">
                  {brand.name}
                </span>
              )}
            </div>

            {brand?.blurb && (
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                {brand.blurb}
              </p>
            )}

            {(brand?.address || brand?.email || brand?.phone) && (
              <ul className="mt-4 space-y-1 text-sm">
                {brand.address && <li className="text-gray-400">{brand.address}</li>}
                {brand.email && (
                  <li>
                    <a className="hover:text-white" href={`mailto:${brand.email}`}>
                      {brand.email}
                    </a>
                  </li>
                )}
                {brand.phone && <li className="text-gray-400">{brand.phone}</li>}
              </ul>
            )}

            {!!socials.length && (
              <div className="mt-5 flex gap-4" aria-label="Social links">
                {socials.map((s) => (
                  <Link
                    key={s.platform + s.link}
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-gray-800 bg-gray-900/50 p-2 hover:border-gray-700 hover:text-white"
                    aria-label={s.platform}
                    title={s.platform}
                  >
                    <SocialIcon platform={s.platform} />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading} className="lg:col-span-1">
              {col.heading && (
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                  {col.heading}
                </h4>
              )}
              <ul className="mt-4 space-y-2">
                {col.links.map((lnk) => (
                  <li key={lnk.label}>
                    <Link
                      href={lnk.link}
                      className="text-sm hover:text-white"
                    >
                      {lnk.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          {section.newsletter?.enabled && (
            <div className="lg:col-span-2">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                {section.newsletter.heading ?? "Newsletter"}
              </h4>
              {section.newsletter.subtext && (
                <p className="mt-2 text-sm text-gray-400">
                  {section.newsletter.subtext}
                </p>
              )}
              <form
                className="mt-4 flex max-w-md gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  // Hook this to your action / API later
                }}
              >
                <input
                  type="email"
                  required
                  placeholder={section.newsletter.placeholder ?? "Enter your email"}
                  className="w-full rounded-md border border-gray-800 bg-gray-900 px-3 py-2 text-sm text-gray-100 placeholder-gray-500 outline-none focus:border-gray-700"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  {section.newsletter.ctaLabel ?? "Subscribe"}
                </button>
              </form>
              <p className="mt-2 text-xs text-gray-500">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          )}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-gray-800 pt-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-xs text-gray-500">
              © {year} {section.bottom?.copyrightName ?? section.brand?.name ?? "Your Company"}
              . All rights reserved.
            </p>
            {section.bottom?.links?.length ? (
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
                {section.bottom.links.map((lnk) => (
                  <li key={lnk.label}>
                    <Link href={lnk.link} className="text-xs text-gray-400 hover:text-white">
                      {lnk.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
}
