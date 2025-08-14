"use client";

import { FooterSection, SocialPlatform } from "@/types/sections";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LinkInput } from "./components/LinkInput";

interface FooterEditorProps {
  section: FooterSection;
  onUpdate: (updates: Partial<FooterSection>) => void;
}

interface InputWithLinkProps {
  label: string;
  value: string;
  linkValue: string;
  onValueChange: (value: string) => void;
  onLinkChange: (value: string) => void;
}

function InputWithLink({
  label,
  value,
  linkValue,
  onValueChange,
  onLinkChange,
}: InputWithLinkProps) {
  const [showLinkInput, setShowLinkInput] = useState(false);

  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
          <input
            type="text"
            value={value}
            onChange={(e) => onValueChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          onClick={() => setShowLinkInput(true)}
          className="self-end p-2 text-blue-500 hover:bg-blue-50 rounded-full"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {showLinkInput && (
          <LinkInput
            value={linkValue}
            onChange={onLinkChange}
            onClose={() => setShowLinkInput(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export function FooterEditor({ section, onUpdate }: FooterEditorProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = (section.columns?.length || 0) + 2; // Brand page + columns + bottom page

  const updateBrand = (
    field: keyof NonNullable<FooterSection["brand"]>,
    value: string
  ) => {
    onUpdate({
      brand: {
        ...section.brand,
        [field]: value,
      },
    });
  };

  const renderBrandPage = () => (
    <div className="space-y-6 ">
      <h3 className="text-lg font-medium text-gray-900">Brand Information</h3>
      <div className="space-y-4">
        <InputWithLink
          label="Brand Name"
          value={section.brand?.name || ""}
          linkValue={section.brand?.logoUrl || ""}
          onValueChange={(value) => updateBrand("name", value)}
          onLinkChange={(value) => updateBrand("logoUrl", value)}
        />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={section.brand?.email || ""}
            onChange={(e) => updateBrand("email", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-gray-700">
              Social Links
            </label>

          </div>
          {section.socialLinks?.map((social, index) => (
            <InputWithLink
              key={index}
              label={social.platform}
              value={social.platform}
              linkValue={social.link}
              onValueChange={(value) => {
                const newLinks = [...(section.socialLinks || [])];
                newLinks[index].platform = value as any;
                onUpdate({ socialLinks: newLinks });
              }}
              onLinkChange={(value) => {
                const newLinks = [...(section.socialLinks || [])];
                newLinks[index].link = value;
                onUpdate({ socialLinks: newLinks });
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );

  const renderColumnPage = (columnIndex: number) => {
    const column = section.columns?.[columnIndex];
    if (!column) return null;

    return (
      <div className="space-y-6">
        <h3 className="text-lg font-medium text-gray-900">
          Column {columnIndex + 1}
        </h3>
        <div className="space-y-4">
          <InputWithLink
            label="Column Heading"
            value={column.heading}
            linkValue=""
            onValueChange={(value) => {
              const newColumns = [...(section.columns || [])];
              newColumns[columnIndex].heading = value;
              onUpdate({ columns: newColumns });
            }}
            onLinkChange={() => {}}
          />
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-700">
                Links
              </label>
            </div>
            {column.links.map((link, linkIndex) => (
              <InputWithLink
                key={linkIndex}
                label={`Link ${linkIndex + 1}`}
                value={link.label}
                linkValue={link.link}
                onValueChange={(value) => {
                  const newColumns = [...(section.columns || [])];
                  newColumns[columnIndex].links[linkIndex].label = value;
                  onUpdate({ columns: newColumns });
                }}
                onLinkChange={(value) => {
                  const newColumns = [...(section.columns || [])];
                  newColumns[columnIndex].links[linkIndex].link = value;
                  onUpdate({ columns: newColumns });
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderBottomPage = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900">Bottom Bar</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Copyright Name
          </label>
          <input
            type="text"
            value={section.bottom?.copyrightName || ""}
            onChange={(e) =>
              onUpdate({
                bottom: { ...section.bottom, copyrightName: e.target.value },
              })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-gray-700">
              Bottom Links
            </label>

          </div>
          {section.bottom?.links?.map((link, index) => (
            <InputWithLink
              key={index}
              label={`Link ${index + 1}`}
              value={link.label}
              linkValue={link.link}
              onValueChange={(value) => {
                const newLinks = [...(section.bottom?.links || [])];
                newLinks[index].label = value;
                onUpdate({ bottom: { ...section.bottom, links: newLinks } });
              }}
              onLinkChange={(value) => {
                const newLinks = [...(section.bottom?.links || [])];
                newLinks[index].link = value;
                onUpdate({ bottom: { ...section.bottom, links: newLinks } });
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );

  const getCurrentPageContent = () => {
    if (currentPage === 0) return renderBrandPage();
    if (currentPage === totalPages - 1) return renderBottomPage();
    return renderColumnPage(currentPage - 1);
  };

  const getPageTitle = () => {
    if (currentPage === 0) return "Brand Information";
    if (currentPage === totalPages - 1) return "Bottom Bar";
    return `Column ${currentPage}`;
  };

  return (
    <div className="flex flex-col h-full">
      {/* Scrollable content area */}
      <div className="flex-1 ">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="p-1"
          >
            {getCurrentPageContent()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Fixed navigation footer */}
      <div className="flex-shrink-0 wborder surface p-4 mb-16">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 0}
            className="p-2 text-gray-500 hover:bg-gray-100 rounded-full disabled:opacity-50 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="text-center">
            <div className="text-sm font-medium text-gray-900 ">
              {getPageTitle()}
            </div>
            <div className="text-xs text-gray-500">
              Page {currentPage + 1} of {totalPages}
            </div>
          </div>
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages - 1}
            className="p-2 text-gray-500 hover:bg-gray-100 rounded-full disabled:opacity-50 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>


    </div>
  );
}
