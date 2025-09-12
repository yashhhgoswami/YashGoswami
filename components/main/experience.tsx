"use client";

import { EXPERIENCE_DATA } from "@/constants";
import { motion } from "framer-motion";
import { slideInFromTop, fadeInUp, staggerContainer, slideInFromLeft } from "@/lib/motion";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-12"
    >
      <motion.h1 
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-8"
      >
        My Experience
      </motion.h1>
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-[1000px] h-full flex flex-col gap-10 px-10"
      >
        {EXPERIENCE_DATA.map((experience, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] backdrop-blur-lg bg-gradient-to-r from-[#2A0E61]/20 to-[#1A0B3A]/20 p-8 hover:shadow-[#2A0E61]/50 hover:shadow-2xl transition-all duration-500 cursor-pointer"
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Animated border gradient */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>
            
            {/* Content with z-index to stay above animated backgrounds */}
            <div className="relative z-10">
              <motion.div 
                className="flex flex-col md:flex-row md:justify-between md:items-start gap-4"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex-1">
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {experience.role}
                  </motion.h3>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                    <motion.h4 
                      className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {experience.company}
                    </motion.h4>
                    <motion.span 
                      className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      ({experience.location})
                    </motion.span>
                  </div>
                </div>
                <motion.div 
                  className="text-gray-400 text-sm font-medium group-hover:text-purple-300 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {experience.period}
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="mt-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.ul className="space-y-3">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <motion.li
                      key={achievementIndex}
                      variants={slideInFromLeft(achievementIndex * 0.1)}
                      whileHover={{ x: 10, transition: { duration: 0.2 } }}
                      className="flex items-start gap-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                    >
                      <motion.div 
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 mt-2 flex-shrink-0"
                        whileHover={{ 
                          scale: 1.5,
                          boxShadow: "0 0 10px rgba(168, 85, 247, 0.5)",
                          transition: { duration: 0.2 }
                        }}
                      ></motion.div>
                      <motion.span 
                        className="text-sm leading-relaxed"
                        whileHover={{ letterSpacing: "0.025em" }}
                        transition={{ duration: 0.2 }}
                      >
                        {achievement}
                      </motion.span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>

            {/* Floating particles effect on hover */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${20 + i * 20}%`,
                  }}
                  animate={{
                    y: [-10, -20, -10],
                    x: [-5, 5, -5],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};