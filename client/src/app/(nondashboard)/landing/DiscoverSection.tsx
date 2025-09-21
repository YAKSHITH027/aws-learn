"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const DiscoverSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={containerVariants}
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)]"></div>

      <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-white mb-6">
            Discover Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Dream Home
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-4">
            Find your Dream Rental Property Today!
          </p>
          <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Searching for your dream rental property has never been easier. With
            our user-friendly search feature, you can quickly find the perfect
            home that meets all your needs. Start your search today and discover
            your dream rental property!
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 text-center">
          {[
            {
              imageSrc: "/landing-icon-wand.png",
              title: "Search for Properties",
              description:
                "Browse through our extensive collection of rental properties in your desired location.",
            },
            {
              imageSrc: "/landing-icon-calendar.png",
              title: "Book Your Rental",
              description:
                "Once you've found the perfect rental property, easily book it online with just a few clicks.",
            },
            {
              imageSrc: "/landing-icon-heart.png",
              title: "Enjoy your New Home",
              description:
                "Move into your new rental property and start enjoying your dream home.",
            },
          ].map((card, index) => (
            <motion.div key={index} variants={itemVariants}>
              <DiscoverCard {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const DiscoverCard = ({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  title: string;
  description: string;
}) => (
  <div className="group px-6 py-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
    <div className="relative mb-6">
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-2xl mx-auto w-16 h-16 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-500">
        <Image
          src={imageSrc}
          width={32}
          height={32}
          className="w-8 h-8 filter brightness-0 invert"
          alt={title}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
      {title}
    </h3>
    <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
      {description}
    </p>
  </div>
);

export default DiscoverSection;
