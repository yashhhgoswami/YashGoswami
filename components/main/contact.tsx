"use client";

import { CONTACT_DATA } from "@/constants";
import { motion } from "framer-motion";
import { slideInFromTop, staggerContainer, fadeInUp } from "@/lib/motion";
import Link from "next/link";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-12 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/2 w-64 h-64 bg-pink-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-16 relative z-10"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
          Let&apos;s Connect!
        </h1>
        <p className="text-gray-400 text-lg max-w-[600px] mx-auto">
          Ready to bring your ideas to life? Let&apos;s start a conversation and create something amazing together.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-[1200px] px-10 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONTACT_DATA.map((contact, index) => (
            <motion.div
              key={contact.name}
              variants={fadeInUp}
              whileHover={{
                scale: 1.08,
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <Link
                href={contact.link}
                target={contact.name === "Email" ? "_self" : "_blank"}
                rel={contact.name === "Email" ? "" : "noreferrer noopener"}
                className="block"
              >
                {/* Main card container with enhanced styling */}
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl border-2 border-transparent hover:border-purple-500/50 transition-all duration-500 h-full overflow-hidden shadow-2xl hover:shadow-purple-500/25">
                  
                  {/* Dynamic gradient background overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-10 group-hover:opacity-25 transition-all duration-500`}></div>
                  
                  {/* Animated border gradient */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{ padding: '2px' }}>
                    <div className="w-full h-full rounded-3xl bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95"></div>
                  </div>
                  
                  {/* Glowing orbs */}
                  <motion.div
                    className={`absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r ${contact.color} rounded-full opacity-0 group-hover:opacity-80 blur-sm`}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  <motion.div
                    className={`absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r ${contact.color} rounded-full opacity-0 group-hover:opacity-60 blur-sm`}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  />
                  
                  <div className="relative z-10">
                    {/* Enhanced icon container */}
                    <motion.div
                      className={`flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${contact.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      whileHover={{ 
                        rotateY: 180,
                        scale: 1.1,
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      {contact.icon ? (
                        <contact.icon className="w-10 h-10 text-white drop-shadow-lg" />
                      ) : (
                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white font-bold text-xl backdrop-blur-sm">
                          @
                        </div>
                      )}
                    </motion.div>

                    {/* Enhanced platform name */}
                    <motion.h3
                      className="text-3xl font-bold text-center mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-purple-200 group-hover:to-cyan-200 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {contact.name}
                    </motion.h3>

                    {/* Enhanced username/email */}
                    <motion.p
                      className="text-center mb-4 font-mono text-base text-gray-300 group-hover:text-white group-hover:scale-105 transition-all duration-300"
                      whileHover={{ letterSpacing: "0.05em" }}
                      transition={{ duration: 0.2 }}
                    >
                      {contact.username}
                    </motion.p>

                    {/* Enhanced description */}
                    <motion.p
                      className="text-gray-300 text-center text-sm group-hover:text-gray-200 transition-colors duration-300 leading-relaxed"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {contact.description}
                    </motion.p>

                    {/* Enhanced hover indicator */}
                    <motion.div
                      className="flex justify-center mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3, ease: "backOut" }}
                    >
                      <motion.div
                        className={`px-4 py-2 rounded-full bg-gradient-to-r ${contact.color} text-white text-sm font-semibold shadow-lg flex items-center gap-2`}
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Connect Now
                        <motion.svg 
                          className="w-4 h-4" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </motion.svg>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Enhanced floating particles */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-2 h-2 bg-gradient-to-r ${contact.color} rounded-full opacity-0 group-hover:opacity-70`}
                        style={{
                          left: `${10 + (i * 15) % 80}%`,
                          top: `${15 + (i * 20) % 70}%`,
                        }}
                        animate={{
                          y: [-8, -25, -8],
                          x: [-4, 8, -4],
                          scale: [0.3, 1.5, 0.3],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 3 + i * 0.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </div>

                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 skew-x-12 transition-opacity duration-700"
                    animate={{ x: [-100, 400] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};