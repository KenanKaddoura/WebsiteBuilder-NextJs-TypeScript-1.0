// sections/FooterSection.ts
import { FooterSection } from "@/types/sections";

export const MinimalFooter: FooterSection = {
  id: "minimal-footer",
  type: "footer",
  title: "Minimal Footer",
  description: "",
  thumbnail: "/SectionLibraryImages/footer2.png",
  brand: {
    name: "Rekaz",
    email: "support@rekaz.dev",
  },
  columns: [
    {
      heading: "Company",
      links: [
        { label: "About", link: "/about" },
        { label: "Careers", link: "/careers" },
        { label: "Blog", link: "/blog" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy Policy", link: "/privacy" },
        { label: "Terms of Service", link: "/terms" },
      ],
    },
  ],
  socialLinks: [
    { platform: "x", link: "https://x.com/rekaz" },
    { platform: "linkedin", link: "https://linkedin.com/company/rekaz" },
  ],
  bottom: {
    copyrightName: "Rekaz",
    links: [{ label: "Sitemap", link: "/sitemap" }],
  },
};

export const CompanyFooter: FooterSection = {
  id: "company-footer",
  type: "footer",
  title: "Company Footer",
  description: "",
  thumbnail: "/SectionLibraryImages/footer1.png",
  brand: {
    name: "Rekaz",
    email: "support@rekaz.dev",
  },
  columns: [
    {
      heading: "Product",
      links: [
        { label: "Features", link: "/features" },
        { label: "Pricing", link: "/pricing" },
        { label: "Integrations", link: "/integrations" },
        { label: "Changelog", link: "/changelog" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Docs", link: "/docs" },
        { label: "Guides", link: "/guides" },
        { label: "API Status", link: "/status" },
        { label: "Community", link: "/community" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", link: "/about" },
        { label: "Careers", link: "/careers" },
        { label: "Contact", link: "/contact" },
        { label: "Press", link: "/press" },
      ],
    },
  ],
  socialLinks: [
    { platform: "x", link: "https://x.com/rekaz" },
    { platform: "linkedin", link: "https://linkedin.com/company/rekaz" },
  ],
  bottom: {
    copyrightName: "Rekaz",
    links: [
      { label: "Privacy", link: "/privacy" },
      { label: "Terms", link: "/terms" },
      { label: "Security", link: "/security" },
    ],
  },
};

export const EcommerceFooter: FooterSection = {
  id: "ecommerce-footer",
  type: "footer",
  title: "E‑commerce Footer",
  description: "",
  thumbnail: "/SectionLibraryImages/footer3.png",
  brand: {
    name: "Rekaz Store",
  },
  columns: [
    {
      heading: "Shop",
      links: [
        { label: "New Arrivals", link: "/shop/new" },
        { label: "Best Sellers", link: "/shop/best" },
        { label: "Gift Cards", link: "/gift-cards" },
      ],
    },
    {
      heading: "Help",
      links: [
        { label: "Support", link: "/support" },
        { label: "Shipping", link: "/shipping" },
        { label: "Returns", link: "/returns" },
        { label: "FAQ", link: "/faq" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", link: "/about" },
        { label: "Sustainability", link: "/sustainability" },
        { label: "Careers", link: "/careers" },
      ],
    },
  ],
  socialLinks: [
    { platform: "x", link: "https://x.com/rekaz" },
    { platform: "linkedin", link: "https://linkedin.com/company/rekaz" },
  ],
  bottom: {
    copyrightName: "Rekaz Store",
    links: [
      { label: "Privacy", link: "/privacy" },
      { label: "Terms", link: "/terms" },
      { label: "Cookie Policy", link: "/cookies" },
    ],
  },
};
