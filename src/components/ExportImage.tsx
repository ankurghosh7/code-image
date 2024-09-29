import React from "react";
import { FiDownload } from "react-icons/fi";

const ExportImage = () => {
  return (
    <button className="fixed bottom-10 right-8 size-14 rounded-full bg-orange-600 hover:bg-orange-700 transition-colors duration-300 shadow-xl shadow-white/25  hover:shadow-orange-800/80 flex items-center justify-center">
      <FiDownload className="size-7" />
    </button>
  );
};

export default ExportImage;
