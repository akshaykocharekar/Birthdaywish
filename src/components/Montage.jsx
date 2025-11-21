import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";

// Import your images here
import pic1 from "../assets/pic1.jpeg";
import pic2 from "../assets/pic2.jpeg";
import pic3 from "../assets/pic3.jpeg";
import pic4 from "../assets/pic4.jpeg";
import pic5 from "../assets/pic5.jpeg";
import pic6 from "../assets/pic6.jpeg";

export default function Montage() {
  const images = [pic1, pic2, pic3, pic4, pic5, pic6];
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowConfetti(false), 6000);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to from-purple-200 to-pink-200 flex flex-col items-center py-10 overflow-hidden relative">
      {showConfetti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-purple-700 mb-6"
      >
        Hope you liked the surprise 🎂💛
      </motion.h1>

      {/* Floating Balloons (Background) */}
      <motion.div
        initial={{ y: 200 }}
        animate={{ y: -800 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute left-10 text-6xl opacity-40"
      >
        🎈
      </motion.div>

      <motion.div
        initial={{ y: 300 }}
        animate={{ y: -900 }}
        transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
        className="absolute right-16 text-7xl opacity-40"
      >
        🎈
      </motion.div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 max-w-3xl">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            className="rounded-xl overflow-hidden shadow-lg border-4 border-white"
          >
            <img src={img} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>

      {/* Ending message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: images.length * 0.2 + 0.5 }}
        className="text-lg mt-10 text-purple-700 font-medium"
      >
        Made with ❤️ just for you.
      </motion.p>
    </div>
  );
}
