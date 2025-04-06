"use client";

import { motion } from "framer-motion";

type SectionContentProps = {
  title: string;
  content: string;
};

export default function SectionContent({
  title,
  content,
}: SectionContentProps) {
  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 0.5, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-2xl shadow-lg max-w-2xl text-center relative z-10"
    >
      <h2 className="text-2xl font-bold mb-4 text-black">{title}</h2>
      <p className="text-black">{content}</p>
    </motion.div>
  );
}
