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
  contentStyle: "two-columns-image" | "header-paragraph";
  content: {
    title?: string;
    mainText: string;
    secondaryText?: string;
    imageUrl?: string;
  };
}

// types/sections.ts
export type FooterLink = { label: string; link: string };
export type FooterColumn = { heading: string; links: FooterLink[] };

export type SocialPlatform = "x" | "linkedin"


export interface FooterSection extends BaseSection {
  type: "footer";
  brand?: {
    name?: string;
    logoUrl?: string;
    email?: string;
  };
  columns?: FooterColumn[]; // multiple link columns
  socialLinks?: { platform: SocialPlatform; link: string }[];
  bottom?: {
    copyrightName?: string; // e.g. your company
    links?: FooterLink[]; // e.g. Privacy, Terms, Sitemap
  };
  // For backward compat with your old single list:
  links?: FooterLink[];
}
