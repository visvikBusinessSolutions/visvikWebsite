import React from "react";
import { FaEnvelope, FaPhoneAlt, FaPaperclip } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white p-5 border border-gray-300/60 rounded-2xl m-6 md:m-14 shadow-lg">
      <div className="flex flex-col lg:flex-row gap-8 ">
        <div className="lg:w-1/2 flex flex-col space-y-8 mt-5 md:mt-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Get in Touch with Our Experts
            </h2>
            <p className="text-gray-600 text-lg">
              Whether you have a project in mind, a query, or simply want to
              explore how we can collaborate, we’re here to help.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-8 md:mt-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">For Sales</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-blue-500 text-xl" />
                  <span>sales@visvik.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-blue-500 text-xl" />
                  <span>+91-9711440630 (India)</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">For HR</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-blue-500 text-xl" />
                  <span>hr@visvik.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-blue-500 text-xl" />
                  <span>+91-8447702224</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="lg:w-1/2 bg-white rounded-lg p-6 shadow-lg">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Row */}
            <div>
              <label className="block font-semibold mb-1 opacity-70">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter First Name"
                className="border rounded-lg w-full p-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 opacity-70">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="border rounded-lg w-full p-2"
              />
            </div>

            {/* Second Row */}
            <div>
              <label className="block font-semibold mb-1 opacity-70">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="border rounded-lg w-full p-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 opacity-70">
                Mobile <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="border rounded-lg w-full p-2"
              />
            </div>

            {/* Third Row */}
            <div>
              <label className="block font-semibold mb-1 opacity-70">
                Company <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Company Name"
                className="border rounded-lg w-full p-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 opacity-70">
                Country <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Country Name"
                className="border rounded-lg w-full p-2"
              />
            </div>

            {/* Fourth Row */}
            <div>
              <label className="block font-semibold mb-1 opacity-70">
                Category <span className="text-red-500">*</span>
              </label>
              <select className="border rounded-lg w-full p-2">
                <option>Select</option>
                <option>Mobile App</option>
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>DevOps</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1 opacity-70">
                Budget <span className="text-red-500">*</span>
              </label>
              <select className="border rounded-lg w-full p-2">
                <option>Select</option>
                <option>Less than $5,000</option>
                <option>$5k-$10k</option>
                <option>$10k-$200k</option>
                <option>$20k-50k</option>
                <option>$50k-1L</option>
              </select>
            </div>

            {/* Message Box */}
            <div className="col-span-2">
              <label className="block font-semibold mb-1 opacity-70">
                Tell Us. We Are Listening{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <textarea
                  placeholder="Enter Your Requirements"
                  className="border rounded-lg w-full p-3 h-24"
                ></textarea>
                <FaPaperclip className="absolute bottom-3 right-3 text-gray-400" />
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-span-2">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded-lg font-semibold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
