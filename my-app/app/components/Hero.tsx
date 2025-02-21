"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
// import { useTheme } from "next-themes";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 dark:from-blue-600 dark:to-purple-700 animate-gradient-x"></div>
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-yellow-300 dark:bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/3 w-1/3 h-1/3 bg-pink-300 dark:bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-blue-300 dark:bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            QuickReach AI – Powering Brands with Websites, AI Chatbots & High-Performance Marketing
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
            Fast, scalable, and AI-driven solutions that transform your brand&apos;s digital presence
          </p>
          <ScrollLink to="contact" smooth={true} duration={500}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
            >
              Get a Free Consultation
            </motion.button>
          </ScrollLink>
        </motion.div>
      </div>
      <ScrollLink
        to="services"
        smooth={true}
        duration={500}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <ArrowDown size={32} className="text-gray-600 dark:text-gray-400" />
        </motion.div>
      </ScrollLink>
    </section>
  );
};

export default Hero;
