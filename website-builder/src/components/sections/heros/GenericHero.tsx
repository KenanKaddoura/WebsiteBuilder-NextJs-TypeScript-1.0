import { HeroSection } from "@/types/sections";

interface GenericHeroProps {
  section: HeroSection;
}

export function GenericHero({ section }: GenericHeroProps) {
  return (
    <div
      className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${section.backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">{section.heading}</h1>
        <p className="text-xl mb-8">{section.subheading}</p>
        <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 rounded-md transition-colors">
          {section.ctaText}
        </button>
      </div>
    </div>
  );
}
