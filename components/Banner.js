// components/Banner.js
import { useEffect } from "react";

const Banner = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // 20 seconds

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    isVisible && (
      <div className="mt-4  bg-green-500 text-white text-center py-4">
        {message}
      </div>
    )
  );
};

export default Banner;
