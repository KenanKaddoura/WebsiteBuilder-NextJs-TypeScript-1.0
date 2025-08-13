import Image from "next/image";
import Link from "next/link";
import { FooterSection } from "@/types/sections";


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
  const year = "2025";
  const brand = section.brand;
  const columns = section.columns ?? (section.links ? [{ heading: "Links", links: section.links }] : []);
  const socials = section.socialLinks ?? [];

  return (
    <footer className="bg-gray-950 text-gray-300 rounded">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 ">
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
    
              {brand?.email && (
                  <a className="hover:text-white" href={`mailto:${brand.email}`}>
                    {brand.email}
                  </a>
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
