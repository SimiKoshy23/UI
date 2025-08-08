import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
 
export default function SharedImageScroll() {
  const [showInSection, setShowInSection] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.5;
      setShowInSection(window.scrollY > triggerPoint);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  return (
    <div className="min-h-[200vh] bg-gray-100">
      {/* Hero section */}
      {!showInSection && (
        <motion.img
          layoutId="mascot"
          src="https://via.placeholder.com/150"
          alt="Mascot"
          className="mx-auto mt-10 w-32 h-32 rounded-lg shadow-lg"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
 
      {/* Spacer */}
      <div className="h-[100vh]" />
 
      {/* Target section */}
      {showInSection && (
        <motion.img
          layoutId="mascot"
          src="https://via.placeholder.com/150"
          alt="Mascot"
          className="mx-auto w-32 h-32 rounded-lg shadow-lg"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </div>
  );
}
