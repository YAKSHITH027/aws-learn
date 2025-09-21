"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CallToActionSection = () => {
  return (
    <div className="relative py-24 overflow-hidden">
      <Image
        src="/landing-call-to-action.jpg"
        alt="Renthub Search Section Background"
        fill
        className="object-cover object-center"
      />
      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/90"></div>
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16"
      >
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Find Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Dream Rental Property
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Discover a wide range of rental properties in your desired location
            with our advanced search technology.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-white text-slate-800 hover:bg-slate-100 font-semibold rounded-xl px-8 py-4 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Searching
            </button>
            <Link
              href="/signup"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              scroll={false}
            >
              Sign Up Now
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default CallToActionSection;
