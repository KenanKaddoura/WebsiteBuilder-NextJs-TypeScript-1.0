import { HeroSection } from "@/types/sections";

export const MainHero: HeroSection = {
  id: "main-hero",
  type: "hero",
  title: "Main Hero Section",
  description: "A full-width hero section with image background",
  thumbnail: "/SectionLibraryImages/hero1.png",
  heading: "Welcome to Our Platform",
  subheading: "Build beautiful websites with ease",
  backgroundImage: "https://wallpapershome.com/images/pages/pic_h/27270.jpg",
  ctaText: "Get Started",
};

export const SplitHero: HeroSection = {
  id: "split-hero",
  type: "hero",
  title: "Split Hero Section",
  description: "A split-screen hero section with image and content",
  thumbnail: "/SectionLibraryImages/hero2.png",
  heading: "Create Without Limits",
  subheading: "Your vision, our tools, endless possibilities",
  backgroundImage: "https://wallpapershome.com/images/pages/ico_h/27213.jpg",
  ctaText: "Learn More",
};
