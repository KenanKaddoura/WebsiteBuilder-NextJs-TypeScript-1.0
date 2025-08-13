import React from "react";
import { HeaderSection } from "@/types/sections";

export const SimpleHeader: HeaderSection = {
  id: "simple-header",
  type: "header",
  title: "Simple Header",
  description: "A clean and minimal header with logo and navigation",
  thumbnail: "/SectionLibraryImages/header1.png",
  logo: "/hammer2.png",
  navigation: [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Services", link: "/services" },
    { label: "Contact", link: "/contact" },
  ],
};

export const CenteredHeader: HeaderSection = {
  id: "centered-header",
  type: "header",
  title: "Centered Header",
  description: "A centered header with navigation below logo",
  thumbnail: "/SectionLibraryImages/header2.png",
  logo: "/hammer2.png",
  navigation: [
    { label: "Home", link: "/" },
    { label: "Products", link: "/products" },
    { label: "Blog", link: "/blog" },
    { label: "Contact", link: "/contact" },
  ],
};
