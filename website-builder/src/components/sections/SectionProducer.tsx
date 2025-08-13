import React from 'react';
import { BaseSection, ContentSection, FooterSection, HeaderSection, HeroSection } from '@/types/sections';
import { GenericHeader } from './headers/GenericHeader';
import { GenericHero } from './heros/GenericHero';
import { GenericContent } from './contents/GenericContent';
import { GenericFooter } from './footers/GenericFooter';

interface SectionProducerProps {
  section: BaseSection;
}

export default function SectionProducer({ section }: SectionProducerProps) {
  switch (section.type) {
    case 'header':
      return <GenericHeader section={section as HeaderSection} />;
    case 'hero':
      return <GenericHero section={section as HeroSection} />;
    case 'content':
      return <GenericContent section={section as ContentSection} />;
    case 'footer':
      return <GenericFooter section={section as FooterSection} />;
    default:
      return null;
  }
}