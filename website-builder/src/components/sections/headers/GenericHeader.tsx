import { HeaderSection } from "@/types/sections";
import Image from "next/image";

interface GenericHeaderProps {
  section: HeaderSection;
}

export function GenericHeader({ section }: GenericHeaderProps) {
  return (
    <header className="w-full px-6 py-4 bg-white shadow-sm rounded ">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {section.logo && (
          <div className="flex-shrink-0">
            <Image src={section.logo} alt="Logo" width={30} height={30} />
          </div>
        )}
        <nav className="flex gap-6">
          {section.navigation.map((item) => (
            <a
              key={item.label}
              href={item.link}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
