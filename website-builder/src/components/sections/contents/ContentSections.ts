import { ContentSection } from "@/types/sections";

export const TwoColumnsWithImage: ContentSection = {
  id: "two-columns-image",
  type: "content",
  title: "Two Columns With Image",
  description: "Text in two columns with a featured image",
  thumbnail: "https://wallpapershome.com/images/pages/ico_h/26788.jpg",
  contentStyle: "two-columns-image",
  content: {
    title: "Left Column",
    mainText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    secondaryText:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
    imageUrl: "https://wallpapershome.com/images/pages/ico_h/26788.jpg",
  },
};

export const SimpleHeaderParagraph: ContentSection = {
  id: "simple-header-paragraph",
  type: "content",
  title: "Simple Header & Paragraph",
  description: "Clean layout with header and paragraph",
  thumbnail: "https://wallpapershome.com/images/pages/ico_h/27229.jpg",
  contentStyle: "header-paragraph",
  content: {
    title: "Your Compelling Header Here",
    mainText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
};
