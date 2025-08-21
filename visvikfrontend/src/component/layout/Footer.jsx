import React from "react";
import { CiMail } from "react-icons/ci";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaInstagramSquare,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const socialLinks = [
  { icon: FaFacebookF, link: "https://linkedin.com/in/visvikbusinesssolution" },
  {
    icon: FaInstagramSquare,
    link: "https://linkedin.com/in/visvikbusinesssolution",
  },
  {
    icon: FaLinkedinIn,
    link: "https://linkedin.com/in/visvikbusinesssolution",
  },
];
const Footer = () => {
  return (
    <>
      <div className="bg-[#011a40] text-white py-16 px-5 font-sans">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-10 justify-between">
          <div className="flex-1 min-w-[220px]">
            <h5 className="text-xl font-bold mb-6 border-b-2 border-white pb-2">
              Our Office Address
            </h5>
            <p className="mb-3 flex items-center text-gray-300">
              <FaMapMarkerAlt className="mr-3 text-yellow-400" /> C 30 Sector
              63, Noida, Uttar Pradesh (201301)
            </p>
            <p className="mb-3 flex items-center text-gray-300">
              <FaPhoneAlt className="mr-3 text-yellow-400" /> +91-120-5058591
            </p>
            <p className="mb-3 flex items-center text-gray-300">
              <CiMail className="mr-3 text-yellow-400" /> contact@visvik.in
            </p>
            <div className="flex gap-4 mt-4 justify-center sm:justify-start">
              {socialLinks.map((data, idx) => {
                const Icon = data.icon;
                return (
                  <a
                    key={idx}
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#02245b] flex items-center justify-center text-white text-lg shadow-md hover:bg-yellow-400 hover:text-[#011a40] transition"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex-1 min-w-[220px]">
            <h5 className="text-xl font-bold mb-6 border-b-2 border-white pb-2">
              Quick Links
            </h5>
            <nav className="flex flex-col space-y-2 text-gray-300">
              {[
                { href: "/About", label: "About Us" },
                { href: "/login", label: "Login" },
                { href: "/", label: "Our Services" },
                { href: "/Careers", label: "Careers" },
                { href: "/TeamPage", label: "Our Team" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <Link
                  to={href}
                  key={href}
                  href={href}
                  className="hover:text-yellow-400 hover:underline transition"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex-1 min-w-[220px]">
            <h5 className="text-xl font-bold mb-6 border-b-2 border-white pb-2">
              Service
            </h5>
            <nav className="flex flex-col space-y-2 text-gray-300">
              {[
                { href: "/website", label: "Website Development" },
                { href: "/mobile", label: "Mobile Development" },
                { href: "/software", label: "Software Development" },
                { href: "/iot_development", label: "IOT Development" },
                { href: "/devops", label: "DevOps" },
                { href: "/cloud_engineering", label: "Cloud Services" },
              ].map(({ href, label }) => (
                <Link
                  to={href}
                  key={href}
                  href={href}
                  className="hover:text-yellow-400 hover:underline transition"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex-1 min-w-[220px]">
            <h5 className="text-xl font-bold mb-6 border-b-2 border-white pb-2">
              Newsletter
            </h5>
            <p className="text-gray-400 mb-5 text-center sm:text-left">
              Subscribe to our newsletter for updates
            </p>
            <div>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-transparent border border-gray-600 rounded-md py-3 px-4 placeholder-gray-400 text-white focus:outline-none focus:border-yellow-400 transition"
              />
              <button className="text-black mt-4 w-full bg-white font-semibold py-3 rounded-full hover:bg-blue-100 hover:text-black transition">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#021b42] text-gray-300 text-center py-4 border-t border-dashed border-[#1c3c6ba8]">
        <p className="text-sm">
          © {new Date().getFullYear()}{" "}
          <a
            href="/"
            className="font-semibold text-yellow-400 hover:text-yellow-300"
          >
            visvikBusinessSolution LLP
          </a>
          <a href="/terms&conditons"> | Terms & Conditions</a>
          <a href="/privacy"> | Privacy</a>
          {/* <a
            href="/"
            className="font-semibold text-yellow-400 hover:text-yellow-300"
          >
            visvikBusinessSolution pvt ltd ,
          </a> */}
        </p>
      </div>
    </>
  );
};

export default Footer;
