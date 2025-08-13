import {
  TwoColumnsWithImage,
  SimpleHeaderParagraph,
} from "./contents/ContentSections";
import { MinimalFooter, CompanyFooter, EcommerceFooter } from "./footers/FooterSections";
import { CenteredHeader, SimpleHeader } from "./headers/HeaderSections";
import { MainHero, SplitHero } from "./heros/HeroSections";

export const allSections = {
  headers: [SimpleHeader, CenteredHeader],
  heroes: [MainHero, SplitHero],
  content: [TwoColumnsWithImage, SimpleHeaderParagraph],
  footers: [CompanyFooter, MinimalFooter,EcommerceFooter],
};
