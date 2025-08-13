export interface BaseSection {
  id: string;
  type: "header" | "hero" | "content" | "footer";
  title: string;
  description: string;
  thumbnail: string;
}

export interface HeaderSection extends BaseSection {
  type: "header";
  logo?: string;
  navigation: Array<{ label: string; link: string }>;
}

export interface HeroSection extends BaseSection {
  type: "hero";
  heading: string;
  subheading: string;
  backgroundImage: string;
  ctaText: string;
}

export interface ContentSection extends BaseSection {
  type: "content";
  content: string;
  layout: "single-column" | "two-column" | "three-column";
}

// types/sections.ts
export type FooterLink = { label: string; link: string };
export type FooterColumn = { heading: string; links: FooterLink[] };

export type SocialPlatform =
  | "x" | "twitter" | "facebook" | "instagram" | "linkedin" | "youtube" | "github";

export interface FooterSection extends BaseSection {
  type: "footer";
  // New (optional) fields:
  brand?: {
    name?: string;
    logoUrl?: string;
    blurb?: string;
    address?: string;
    email?: string;
    phone?: string;
  };
  columns?: FooterColumn[];     // multiple link columns
  socialLinks?: { platform: SocialPlatform; link: string }[];
  newsletter?: {
    enabled: boolean;
    heading?: string;
    subtext?: string;
    placeholder?: string;
    ctaLabel?: string;
  };
  bottom?: {
    copyrightName?: string;     // e.g. your company
    links?: FooterLink[];       // e.g. Privacy, Terms, Sitemap
  };

  // For backward compat with your old single list:
  links?: FooterLink[];
};

