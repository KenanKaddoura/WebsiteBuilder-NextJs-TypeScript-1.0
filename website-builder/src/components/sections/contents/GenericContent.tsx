import { ContentSection } from "@/types/sections";
import Image from "next/image";

interface GenericContentProps {
  section: ContentSection;
}

export function GenericContent({ section }: GenericContentProps) {
  if (section.contentStyle === "two-columns-image") {
    return (
      <div className="py-16 px-6 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="col-span-2 grid grid-cols-1 gap-6">
              <div>
                <h3 className="text-xl text-black font-semibold mb-4">
                  {section.content.title}
                </h3>
                <p className="text-gray-900">{section.content.mainText}</p>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src={section.content.imageUrl || ""}
                alt="Featured image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-6 bg-white shadow-sm">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-6">
          {section.content.title}
        </h2>
        <p className="text-lg text-gray-900 leading-relaxed">
          {section.content.mainText}
        </p>
      </div>
    </div>
  );
}
