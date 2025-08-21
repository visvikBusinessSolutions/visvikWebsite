import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { BeatLoader, ClipLoader, PulseLoader } from "react-spinners";

const LoaderPopup = () => {
  const [showPopup, setShowPopup] = useState(true);
  //   const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 2000); // 2 seconds ke baad popup hide ho jayega
    return () => clearTimeout(timer);
  }, []);

  //   const handleHomeClick = () => {
  //     navigate("/");
  //     setShowPopup(false);
  //   };

  if (!showPopup) return null;

  return (
    // <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
    //   <div className="bg-white p-8 rounded-xl shadow-2xl text-center w-80">
    //     {/* Spinner with pulse animation */}
    //     <div className="flex justify-center mb-6">
    //       <div className="relative w-16 h-16">
    //         {/* Outer ring */}
    //         <div className="absolute inset-0 rounded-full border-4 border-blue-300 border-t-blue-600 animate-spin"></div>
    //         {/* Inner pulse dot */}
    //         <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
    //       </div>
    //     </div>

    //     <p className="text-lg font-medium text-gray-700 mb-6">Please wait...</p>

    //     <button
    //       onClick={handleHomeClick}
    //       className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
    //     >
    //       Go to Home
    //     </button>
    //   </div>
    // </div>
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-white">
      <div className="text-center">
        {/* Classic Spinner */}
        {/* <div className="mx-auto mb-6 w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div> */}
        {/* <ClipLoader size={60} color="#4F46E5" speedMultiplier={1.2} />
        <BeatLoader color="#f86c6b" />
        <PulseLoader color="#4A90E2" />
        {/* Loading Text */}
        {/* <p className="text-base font-medium text-blue-700 mb-4">
          Loading, please wait...
        </p> */}

        <div className="flex flex-col items-center justify-center h-screen bg-white space-y-6">
          {/* Logo with blinking */}
          <img
            src="/logo-without-bg.png"
            alt="Loading..."
            className="w-28 h-28 animate-pulse"
          />

          {/* Progress bar */}
          <div className="progress-bar w-48 h-2 bg-gray-200 rounded-full overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full bg-blue-500 progress-fill"></div>
          </div>
        </div>

        {/* Optional Home Button */}
        {/* <button
          onClick={handleHomeClick}
          className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors"
        >
          Go to Home
        </button> */}
      </div>
    </div>
  );
};

export default LoaderPopup;
