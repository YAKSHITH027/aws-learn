"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const FeaturesSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-24 px-6 sm:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-slate-50 to-slate-100"
    >
      <div className="max-w-6xl xl:max-w-7xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Quickly find the home you want using our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              effective search filters
            </span>
            !
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our advanced filtering system helps you discover the perfect rental
            property that matches your exact requirements and preferences.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
          {[0, 1, 2].map((index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard
                imageSrc={`/landing-search${3 - index}.png`}
                title={
                  [
                    "Trustworthy and Verified Listings",
                    "Browse Rental Listings with Ease",
                    "Simplify Your Rental Search",
                  ][index]
                }
                description={
                  [
                    "Discover the best rental options with user reviews and ratings.",
                    "Get access to user reviews and ratings for a better understanding of rental options.",
                    "Find trustworthy and verified rental listings to ensure a hassle-free experience.",
                  ][index]
                }
                linkText={["Explore", "Search", "Discover"][index]}
                linkHref={["/explore", "/search", "/discover"][index]}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const FeatureCard = ({
  imageSrc,
  title,
  description,
  linkText,
  linkHref,
}: {
  imageSrc: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}) => (
  <div className="group text-center">
    <div className="relative p-8 rounded-3xl mb-6 flex items-center justify-center h-64 bg-gradient-to-br from-white to-slate-50 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 border border-slate-200/50">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <Image
        src={imageSrc}
        width={400}
        height={400}
        className="w-full h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-110"
        alt={title}
      />
    </div>
    <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
      {title}
    </h3>
    <p className="mb-6 text-slate-600 leading-relaxed">{description}</p>
    <Link
      href={linkHref}
      className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl px-6 py-3 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
      scroll={false}
    >
      {linkText}
    </Link>
  </div>
);

export default FeaturesSection;
