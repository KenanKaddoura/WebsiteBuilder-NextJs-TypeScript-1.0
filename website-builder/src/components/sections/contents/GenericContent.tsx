import { ContentSection } from "@/types/sections";

interface GenericContentProps {
  section: ContentSection;
}

export function GenericContent({ section }: GenericContentProps) {
  return (
    <div className="py-16 px-6 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto">
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: section.content }}
        />
      </div>
    </div>
  );
}
