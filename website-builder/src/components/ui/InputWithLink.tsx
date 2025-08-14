"use client";

import React, {useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LinkInput } from "./LinkInput";


interface InputWithLinkProps {
  label: string;
  value: string;
  linkValue: string;
  onValueChange: (value: any) => void;
  onLinkChange: (value: any) => void;
}

export default function InputWithLink({
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
