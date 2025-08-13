"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface LinkInputProps {
  value: string;
  onChange: (value: string) => void;
  onClose: () => void;
}

export function LinkInput({ value, onChange, onClose }: LinkInputProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="absolute right-0 top-0 z-50 bg-white shadow-lg rounded-lg p-3 w-64"
    >
      <div className="flex flex-col gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Enter URL"
          autoFocus
        />
        <button
          onClick={onClose}
          className="self-end p-2 text-green-500 hover:bg-green-50 rounded-full"
        >
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
