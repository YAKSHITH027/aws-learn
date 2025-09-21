import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const FooterSection = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50 py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.03),transparent_50%)]"></div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div className="mb-8 lg:mb-0">
            <Link
              href="/"
              className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300"
              scroll={false}
            >
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                RENT
              </span>
              <span className="text-white">IFUL</span>
            </Link>
            <p className="text-slate-400 mt-2 max-w-md">
              Your trusted partner in finding the perfect rental property.
              Discover your dream home with our advanced search technology.
            </p>
          </div>

          <nav className="mb-8 lg:mb-0">
            <ul className="flex flex-wrap gap-6 lg:gap-8">
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-white transition-colors duration-300 font-medium"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-white transition-colors duration-300 font-medium"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-slate-300 hover:text-white transition-colors duration-300 font-medium"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-slate-300 hover:text-white transition-colors duration-300 font-medium"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-slate-300 hover:text-white transition-colors duration-300 font-medium"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="p-3 bg-slate-800/50 hover:bg-blue-600 rounded-xl transition-all duration-300 transform hover:scale-110"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="h-5 w-5 text-slate-300 hover:text-white"
              />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="p-3 bg-slate-800/50 hover:bg-pink-600 rounded-xl transition-all duration-300 transform hover:scale-110"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="h-5 w-5 text-slate-300 hover:text-white"
              />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="p-3 bg-slate-800/50 hover:bg-blue-500 rounded-xl transition-all duration-300 transform hover:scale-110"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="h-5 w-5 text-slate-300 hover:text-white"
              />
            </a>
            <a
              href="#"
              aria-label="Linkedin"
              className="p-3 bg-slate-800/50 hover:bg-blue-700 rounded-xl transition-all duration-300 transform hover:scale-110"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="h-5 w-5 text-slate-300 hover:text-white"
              />
            </a>
            <a
              href="#"
              aria-label="Youtube"
              className="p-3 bg-slate-800/50 hover:bg-red-600 rounded-xl transition-all duration-300 transform hover:scale-110"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                className="h-5 w-5 text-slate-300 hover:text-white"
              />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-700/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="text-slate-400 text-sm">
              © 2024 Renthub. All rights reserved.
            </span>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-slate-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-slate-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-slate-400 hover:text-white transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
