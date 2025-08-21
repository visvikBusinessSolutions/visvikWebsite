// import React from "react";
// import { FaEnvelope, FaPhoneAlt, FaPaperclip } from "react-icons/fa";
// import api from "../api";

// export default function ContactPage() {
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Form ke andar ka data nikalna
//     const formData = new FormData(e.target);
//     const data = Object.fromEntries(formData.entries());

//     try {
//       await api.post("/v1/get-in-touch", data);
//       alert("Message Sent Successfully!");
//       e.target.reset(); // Form clear
//     } catch (error) {
//       console.log(error);
//       alert("Failed to send message.");
//     }
//   };
//   return (
//     <div
//       id="contact-section"
//       className="min-h-screen bg-white p-5 border border-gray-300/60 rounded-2xl m-4 md:m-10 shadow-lg"
//     >
//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Left Section */}
//         <div className="lg:w-1/2 flex flex-col space-y-8 mt-5 md:mt-12">
//           <div>
//             <h2 className="text-2xl md:text-3xl font-bold mb-4">
//               Get in Touch with Our Experts
//             </h2>
//             <p className="text-gray-600 text-base md:text-lg">
//               Whether you have a project in mind, a query, or simply want to
//               explore how we can collaborate, we’re here to help.
//             </p>
//           </div>

//           {/* Contact Info Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12">
//             {/* Sales */}
//             <div>
//               <h2 className="text-xl md:text-2xl font-bold mb-4">For Sales</h2>
//               <div className="space-y-3 text-sm md:text-base">
//                 <a href="mailto:contact@visvik.in">
//                   <div className="flex items-center gap-3">
//                     <FaEnvelope className="text-blue-500 text-lg md:text-xl" />
//                     <span>contact@visvik.in</span>
//                   </div>
//                 </a>
//                 <a href="tel:+911205058591">
//                   <div className="flex items-center gap-3 hover:text-blue-600 transition-colors duration-300">
//                     <FaPhoneAlt className="text-blue-500 text-lg md:text-xl" />
//                     <span>+91-120-5058591 (India)</span>
//                   </div>
//                 </a>
//               </div>
//             </div>

//             {/* HR */}
//             {/* <div>
//               <h2 className="text-xl md:text-2xl font-bold mb-4">For HR</h2>
//               <div className="space-y-3 text-sm md:text-base">
//                 <div className="flex items-center gap-3">
//                   <FaEnvelope className="text-blue-500 text-lg md:text-xl" />
//                   <span>contact@visvik.in</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <FaPhoneAlt className="text-blue-500 text-lg md:text-xl" />
//                   <span>+91-7838826136 | +91-7982481190</span>
//                 </div>
//               </div>
//             </div> */}
//           </div>
//         </div>

//         {/* Right Section - Form */}
//         <div className="lg:w-1/2 bg-white rounded-lg p-6 md:p-8 shadow-lg">
//           <form
//             className="grid grid-cols-1 md:grid-cols-2 gap-4"
//             method="post"
//             onSubmit={handleSubmit}
//           >
//             {/* First Row */}
//             <div>
//               <label className="block font-semibold mb-1 opacity-70 text-sm md:text-base">
//                 First Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="firstName"
//                 placeholder="Enter First Name"
//                 className="border rounded-lg w-full p-2 text-sm md:text-base"
//               />
//             </div>
//             <div>
//               <label className="block font-semibold mb-1 opacity-70 text-sm md:text-base">
//                 Last Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="lastName"
//                 placeholder="Enter Last Name"
//                 className="border rounded-lg w-full p-2 text-sm md:text-base"
//               />
//             </div>

//             {/* Second Row */}
//             <div>
//               <label className="block font-semibold mb-1 opacity-70 text-sm md:text-base">
//                 Email <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter Email Address"
//                 className="border rounded-lg w-full p-2 text-sm md:text-base"
//               />
//             </div>
//             <div>
//               <label className="block font-semibold mb-1 opacity-70 text-sm md:text-base">
//                 Mobile <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="mobileNumber"
//                 placeholder="Enter Mobile Number"
//                 className="border rounded-lg w-full p-2 text-sm md:text-base"
//               />
//             </div>

//             {/* Third Row */}
//             <div>
//               <label className="block font-semibold mb-1 opacity-70 text-sm md:text-base">
//                 Company <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="companyName"
//                 placeholder="Enter Company Name"
//                 className="border rounded-lg w-full p-2 text-sm md:text-base"
//               />
//             </div>
//             <div>
//               <label className="block font-semibold mb-1 opacity-70 text-sm md:text-base">
//                 Country <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="country"
//                 placeholder="Enter Country Name"
//                 className="border rounded-lg w-full p-2 text-sm md:text-base"
//               />
//             </div>

//             {/* Fourth Row */}
//             <div>
//               <label className="block font-semibold mb-1 opacity-70 text-sm md:text-base">
//                 Category <span className="text-red-500">*</span>
//               </label>
//               <select
//                 className="border rounded-lg w-full p-2 text-sm md:text-base"
//                 name="category"
//               >
//                 <option>Select</option>
//                 <option>Mobile App</option>
//                 <option>Web Development</option>
//                 <option>UI/UX Design</option>
//                 <option>DevOps</option>
//               </select>
//             </div>
//             <div>
//               <label className="block font-semibold mb-1 opacity-70 text-sm md:text-base">
//                 Budget <span className="text-red-500">*</span>
//               </label>
//               <select
//                 className="border rounded-lg w-full p-2 text-sm md:text-base"
//                 name="budget"
//               >
//                 <option value="lt-5000">Less than $5,000</option>
//                 <option value="5k-10k">$5k-$10k</option>
//                 <option value="10k-20k">$10k-$20k</option>
//                 <option value="20k-50k">$20k-50k</option>
//                 <option value="50k-1l">$50k-1L</option>
//               </select>
//             </div>

//             {/* Message Box */}
//             <div className="col-span-1 md:col-span-2">
//               <label className="block font-semibold mb-1 opacity-70 text-sm md:text-base">
//                 Tell Us. We Are Listening{" "}
//                 <span className="text-red-500">*</span>
//               </label>
//               <div className="relative">
//                 <textarea
//                   placeholder="Enter Your Requirements"
//                   name="message"
//                   className="border rounded-lg w-full p-3 h-24 text-sm md:text-base"
//                 ></textarea>
//                 <FaPaperclip className="absolute bottom-3 right-3 text-gray-400" />
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="col-span-1 md:col-span-2">
//               <button
//                 type="submit"
//                 className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded-lg font-semibold text-sm md:text-base"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { FaEnvelope, FaPhoneAlt, FaPaperclip } from "react-icons/fa";
import api from "../../api";

export default function ContactPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      await api.post("/v1/get-in-touch", data);
      alert("Message Sent Successfully!");
      e.target.reset(); // Form clear
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }
  };

  return (
    <div
      id="contact-section"
      className="min-h-screen bg-white p-5 border border-gray-300/60 rounded-2xl m-4 md:m-10 shadow-lg"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="lg:w-1/2 flex flex-col space-y-8 mt-5 md:mt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Get in Touch with Our Experts
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Whether you have a project in mind, a query, or simply want to
              explore how we can collaborate, we’re here to help.
            </p>
          </div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12">
            {/* Sales */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4">For Sales</h2>
              <div className="space-y-3 text-sm md:text-base">
                <a href="mailto:contact@visvik.in">
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-blue-500 text-lg md:text-xl" />
                    <span>contact@visvik.in</span>
                  </div>
                </a>
                <a href="tel:+911205058591">
                  <div className="flex items-center gap-3 hover:text-blue-600 transition-colors duration-300">
                    <FaPhoneAlt className="text-blue-500 text-lg md:text-xl" />
                    <span>+91-120-5058591 (India)</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="lg:w-1/2 bg-white rounded-lg p-6 md:p-8 shadow-lg">
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            method="post"
            onSubmit={handleSubmit}
          >
            {/* First Row */}
            <div>
              <label className="block font-semibold mb-1 opacity-70 text-sm md:text-base">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                className="border rounded-lg w-full p-2 text-sm md:text-base"
                required
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 opacity-70 text-sm md:text-base">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                className="border rounded-lg w-full p-2 text-sm md:text-base"
                required
              />
            </div>

            {/* Second Row */}
            <div>
              <label className="block font-semibold mb-1 opacity-70 text-sm md:text-base">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                className="border rounded-lg w-full p-2 text-sm md:text-base"
                required
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 opacity-70 text-sm md:text-base">
                Mobile <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="mobileNumber"
                placeholder="Enter Mobile Number"
                className="border rounded-lg w-full p-2 text-sm md:text-base"
                required
              />
            </div>

            {/* Third Row */}
            <div>
              <label className="block font-semibold mb-1 opacity-70 text-sm md:text-base">
                Company <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                placeholder="Enter Company Name"
                className="border rounded-lg w-full p-2 text-sm md:text-base"
                required
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 opacity-70 text-sm md:text-base">
                Country <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="country"
                placeholder="Enter Country Name"
                className="border rounded-lg w-full p-2 text-sm md:text-base"
                required
              />
            </div>

            {/* Fourth Row */}
            <div>
              <label className="block font-semibold mb-1 opacity-70 text-sm md:text-base">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                className="border rounded-lg w-full p-2 text-sm md:text-base"
                name="category"
                required
              >
                <option value="">Select</option>
                <option>Mobile App</option>
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>DevOps</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1 opacity-70 text-sm md:text-base">
                Budget <span className="text-red-500">*</span>
              </label>
              <select
                className="border rounded-lg w-full p-2 text-sm md:text-base"
                name="budget"
                required
              >
                <option value="">Select</option>
                <option value="lt-5000">Less than $5,000</option>
                <option value="5k-10k">$5k-$10k</option>
                <option value="10k-20k">$10k-$20k</option>
                <option value="20k-50k">$20k-50k</option>
                <option value="50k-1l">$50k-1L</option>
              </select>
            </div>

            {/* Message Box */}
            <div className="col-span-1 md:col-span-2">
              <label className="block font-semibold mb-1 opacity-70 text-sm md:text-base">
                Tell Us. We Are Listening{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <textarea
                  placeholder="Enter Your Requirements"
                  name="message"
                  className="border rounded-lg w-full p-3 h-24 text-sm md:text-base"
                  required
                ></textarea>
                <FaPaperclip className="absolute bottom-3 right-3 text-gray-400" />
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded-lg font-semibold text-sm md:text-base"
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
