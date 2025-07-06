"use client"

// Update the import path to match the actual file location and name
import Button from "@/app/shared-components/ButtonComponent"
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Star component for animated background
const Star = ({ style }: { style: React.CSSProperties }) => (
  <div
    className="absolute rounded-full bg-white opacity-80"
    style={style}
  />
);

// Floating particle component
const FloatingParticle = ({ delay, left, top }: { delay: number; left: number; top: number }) => (
  <motion.div
    className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
    style={{
      left: `${left}%`,
      top: `${top}%`,
    }}
    animate={{
      y: [-20, 20, -20],
      opacity: [0.3, 0.8, 0.3],
    }}
    transition={{
      duration: 4 + (delay % 2),
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut",
    }}
  />
);

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const [stars, setStars] = useState<React.CSSProperties[]>([]);
  const [particles, setParticles] = useState<Array<{left: number; top: number}>>([]);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Set client-side flag to avoid hydration mismatch
    setIsClient(true);

    // Generate random stars only on client side
    const generateStars = () => {
      const starArray = [];
      for (let i = 0; i < 150; i++) {
        starArray.push({
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 3 + 1}px`,
          height: `${Math.random() * 3 + 1}px`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${Math.random() * 3 + 2}s`,
        });
      }
      setStars(starArray);
    };

    // Generate random particles only on client side
    const generateParticles = () => {
      const particleArray = [];
      for (let i = 0; i < 20; i++) {
        particleArray.push({
          left: Math.random() * 100,
          top: Math.random() * 100,
        });
      }
      setParticles(particleArray);
    };

    generateStars();
    generateParticles();

    // Show button after words animation completes (1.5s for the animation + 0.2s delay)
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 1700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated Starfield Background */}
      {isClient && (
        <div className="absolute inset-0 z-0">
          {stars.map((starStyle, index) => (
            <Star key={index} style={starStyle} />
          ))}
        </div>
      )}

      {/* Floating Particles */}
      {isClient && (
        <div className="absolute inset-0 z-10">
          {particles.map((particle, index) => (
            <FloatingParticle 
              key={index} 
              delay={index * 0.2} 
              left={particle.left}
              top={particle.top}
            />
          ))}
        </div>
      )}

      {/* Galaxy Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/30 to-indigo-900/40 z-5"></div>

      {/* Radial Glow Effect */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen p-8 py-20 gap-16">
        <motion.div
          className="welcome-words flex flex-col items-center justify-center text-center w-full max-w-6xl"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Glass morphism container for text */}
          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl w-full">
            <motion.h1 
              className="text-4xl md:text-6xl font-light text-white font-nunito tracking-wide mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Welcome to the profile of
            </motion.h1>
            <motion.h1 
              className="font-bold italic text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
              style={{
                textShadow: '0 0 30px rgba(139, 69, 199, 0.5)',
              }}
            >
              NGUYEN VU THUY TRANG
            </motion.h1>
            
            {/* Animated subtitle */}
            <motion.p
              className="text-lg md:text-xl text-gray-300 mt-8 font-light tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              Full-Stack Web Developer
            </motion.p>
          </div>
        </motion.div>
        
        {showButton && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              ease: "easeOut",
              type: "spring",
              stiffness: 100 
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            {/* Glowing button effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur opacity-30 animate-pulse"></div>
            <Button
              btnName={"Discover My Journey"}
              color="text-white text-2xl md:text-3xl font-medium tracking-wide"
              onClick={() => { router.push(`/resume-details`); }}
            />
          </motion.div>
        )}

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-1 h-2 bg-white/50 rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* CSS for twinkling stars animation */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        .absolute.rounded-full.bg-white.opacity-80 {
          animation: twinkle var(--animation-duration, 2s) infinite;
        }
      `}</style>
    </section>
  );
}
