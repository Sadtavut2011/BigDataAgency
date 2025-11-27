import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface Portfolio {
  title: string;
  description: string;
  timeline: string;
  image: string;
  number: string;
  category: string;
}

interface StackedPortfolioCarouselProps {
  portfolios: Portfolio[];
}

export function StackedPortfolioCarousel({ portfolios }: StackedPortfolioCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

  const handleNext = () => {
    if (currentIndex < portfolios.length - 1) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Color palette for cards
  const cardColors = [
    "from-blue-900 to-blue-700",
    "from-emerald-400 to-emerald-300",
    "from-purple-600 to-purple-400",
    "from-orange-500 to-orange-400",
    "from-pink-500 to-pink-400",
    "from-cyan-500 to-cyan-400",
  ];

  const getCardPosition = (cardIndex: number) => {
    const diff = cardIndex - currentIndex;
    
    if (diff < 0) {
      // Previous cards - stack on the left
      return {
        x: -50 + (diff * 20),
        y: 0,
        scale: 0.85 + (diff * 0.05),
        opacity: 0.3,
        zIndex: 10 + diff,
        rotateY: 25,
      };
    } else if (diff === 0) {
      // Current card - center
      return {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        zIndex: 30,
        rotateY: 0,
      };
    } else {
      // Next cards - stack on the right
      return {
        x: 50 + (diff * 20),
        y: 0,
        scale: 0.85 - (diff * 0.05),
        opacity: 0.6 - (diff * 0.15),
        zIndex: 30 - diff,
        rotateY: -25 + (diff * -5),
      };
    }
  };

  return (
    <div className="relative w-full max-w-[1400px] mx-auto px-8 py-20">
      {/* Cards Stack */}
      <div className="relative h-[500px] flex items-center justify-center">
        <div className="relative w-full h-full perspective-[2000px]">
          {portfolios.slice(Math.max(0, currentIndex - 1), Math.min(portfolios.length, currentIndex + 4)).map((portfolio, idx) => {
            const actualIndex = Math.max(0, currentIndex - 1) + idx;
            const position = getCardPosition(actualIndex);
            const colorClass = cardColors[actualIndex % cardColors.length];

            return (
              <motion.div
                key={portfolio.number}
                className="absolute left-1/2 top-1/2 w-[900px] h-[400px]"
                style={{
                  originX: 0.5,
                  originY: 0.5,
                }}
                initial={false}
                animate={{
                  x: `calc(-50% + ${position.x}px)`,
                  y: `calc(-50% + ${position.y}px)`,
                  scale: position.scale,
                  opacity: position.opacity,
                  zIndex: position.zIndex,
                  rotateY: position.rotateY,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                {/* Card */}
                <div className={`w-full h-full rounded-3xl bg-gradient-to-br ${colorClass} shadow-2xl overflow-hidden`}>
                  <div className="p-12 flex items-center justify-between h-full">
                    {/* Left Content */}
                    <div className="flex-1 pr-8 text-white">
                      <motion.h3 
                        className="text-4xl mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: actualIndex === currentIndex ? 1 : 0.7, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {portfolio.title}
                      </motion.h3>
                      <motion.p 
                        className="text-lg leading-relaxed mb-8 line-clamp-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: actualIndex === currentIndex ? 1 : 0.7, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {portfolio.description}
                      </motion.p>
                      
                      {actualIndex === currentIndex && (
                        <motion.button
                          className="px-8 py-3 bg-white/20 backdrop-blur-sm border-2 border-white rounded-full hover:bg-white/30 transition-colors flex items-center gap-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View Project
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 4l6 6-6 6"/>
                          </svg>
                        </motion.button>
                      )}
                    </div>

                    {/* Right Image */}
                    <div className="w-[400px] h-full flex items-center justify-center">
                      <motion.div
                        className="w-full h-[320px] rounded-2xl overflow-hidden shadow-xl bg-white/10 backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: actualIndex === currentIndex ? 1 : 0.7, scale: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <img
                          src={portfolio.image}
                          alt={portfolio.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Dot Indicator on Card */}
                  {actualIndex === currentIndex && (
                    <motion.div 
                      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {portfolios.slice(0, Math.min(5, portfolios.length)).map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentIndex ? "bg-white w-8" : "bg-white/50"
                          }`}
                        />
                      ))}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-8 mt-16">
        <motion.button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="group flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          whileHover={{ scale: currentIndex === 0 ? 1 : 1.05 }}
          whileTap={{ scale: currentIndex === 0 ? 1 : 0.95 }}
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="group-hover:-translate-x-1 transition-transform"
          >
            <path d="M15 18l-6-6 6-6"/>
          </svg>
          <span className="text-gray-700 uppercase tracking-wider">Prev</span>
        </motion.button>

        {/* Progress Bar */}
        <div className="flex items-center gap-3">
          <span className="text-gray-500 text-sm">{currentIndex + 1}</span>
          <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gray-900 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / portfolios.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <span className="text-gray-500 text-sm">{portfolios.length}</span>
        </div>

        <motion.button
          onClick={handleNext}
          disabled={currentIndex === portfolios.length - 1}
          className="group flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-full shadow-lg hover:shadow-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          whileHover={{ scale: currentIndex === portfolios.length - 1 ? 1 : 1.05 }}
          whileTap={{ scale: currentIndex === portfolios.length - 1 ? 1 : 0.95 }}
        >
          <span className="uppercase tracking-wider">Next</span>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="group-hover:translate-x-1 transition-transform"
          >
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </motion.button>
      </div>
    </div>
  );
}
