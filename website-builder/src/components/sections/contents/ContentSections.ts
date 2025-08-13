import { ContentSection } from "@/types/sections";

export const TwoColumnsWithImage: ContentSection = {
  id: "two-columns-image",
  type: "content",
  title: "Two Columns With Image",
  description: "Text in two columns with a featured image",
  thumbnail: "https://wallpapershome.com/images/pages/ico_h/26788.jpg",
  content: ` 
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      <div class="col-span-2 grid grid-cols-2 gap-6">
        <div>
          <h3 class="text-xl text-black font-semibold mb-4">Left Column</h3>
          <p class="text-gray-900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
        <div>
          <h3 class="text-xl text-black font-semibold mb-4">Right Column</h3>
          <p class="text-gray-900">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
          </p>
        </div>
      </div>
      <div class="relative h-64 rounded-lg overflow-hidden">
        <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174" alt="Featured image" class="w-full h-full object-cover" />
      </div>
    </div>
  `,
  layout: "single-column", // Using single-column because we handle the grid in content
};

export const SimpleHeaderParagraph: ContentSection = {
  id: "simple-header-paragraph",
  type: "content",
  title: "Simple Header & Paragraph",
  description: "Clean layout with header and paragraph",
  thumbnail: "https://wallpapershome.com/images/pages/ico_h/27229.jpg",
  content: `
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-black mb-6">
        Your Compelling Header Here
      </h2>
      <p class="text-lg text-gray-900 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  `,
  layout: "single-column",
};
