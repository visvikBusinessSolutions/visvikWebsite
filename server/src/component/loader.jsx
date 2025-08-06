import React from "react";

function Loader({ size = 6, color = "blue-600" }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <div
        className={`animate-spin rounded-full h-${size} w-${size} border-t-2 border-b-2 border-${color}`}
      ></div>
    </div>
  );
}

export default Loader;
