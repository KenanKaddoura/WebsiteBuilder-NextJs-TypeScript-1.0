import React from "react";
import { HeaderSection } from "@/types/sections";

export const SimpleHeader: HeaderSection = {
  id: "simple-header",
  type: "header",
  title: "Header",
  description: "",
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
  title: "Simple Header",
  description: "",
  thumbnail: "/SectionLibraryImages/header2.png",
  logo: "/hammer2.png",
  navigation: [
    { label: "Home", link: "/" },
  ],
};
