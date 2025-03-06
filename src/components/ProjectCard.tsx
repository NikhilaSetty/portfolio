import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  details?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div 
        className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        whileHover={{ y: -5 }}
        onClick={() => setIsOpen(true)}
      >
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <span 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
          >
            Learn More <ExternalLink size={16} />
          </span>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed inset-x-4 top-[10%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[600px] bg-white rounded-xl shadow-2xl z-50 overflow-hidden"
            >
              <div className="relative">
                <img src={image} alt={title} className="w-full h-64 object-cover" />
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-gray-600 mb-6">{details || description}</p>
                <a 
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View on GitHub <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};