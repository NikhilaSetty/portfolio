import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  level: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ title, level }) => {
  return (
    <motion.div 
      className="bg-gray-100 rounded-lg p-6"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div 
          className="bg-blue-600 h-2.5 rounded-full" 
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        ></motion.div>
      </div>
    </motion.div>
  );
};