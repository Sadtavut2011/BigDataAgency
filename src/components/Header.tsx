import { motion } from "motion/react";
import { useState, useEffect } from "react";
import imgLogo from "figma:asset/a52d412596ba90701c0f024d4cd3a952582bfc98.png";

interface HeaderProps {
  onNavigate?: (page: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (item: string) => {
    if (item === "PORTFOLIO" && onNavigate) {
      onNavigate("portfolio");
    } else if (item === "HOME" && onNavigate) {
      onNavigate("home");
    } else if (item === "CONTACT" && onNavigate) {
      onNavigate("contact");
    } else if (item === "PRIVACY POLICY" && onNavigate) {
      onNavigate("privacy policy");
    } else if (item === "CLIENTS" && onNavigate) {
      onNavigate("clients");
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={`bg-white transition-shadow duration-300 ${isScrolled ? "shadow-lg" : ""}`}>
        <div className="h-[55px] flex items-center justify-center px-8">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleClick("HOME")}>
            <div className="size-[27px]">
              <img alt="Logo" className="object-cover size-full" src={imgLogo} />
            </div>
            <p className="font-['Inria_Serif:Regular',sans-serif] text-[#2f596f] text-[10px]">
              Big Data Agency co., ltd.
            </p>
          </div>
        </div>
      </div>
      <motion.nav
        className="bg-[#2E3C52]/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="h-[55px] flex items-center justify-end px-8 gap-6">
          {["HOME", "PORTFOLIO", "CLIENTS", "PRIVACY POLICY", "CONTACT"].map((item, i) => (
            <motion.a
              key={item}
              onClick={() => handleClick(item)}
              className="font-['Inter',sans-serif] text-white text-[16px] hover:text-blue-400 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </motion.nav>
    </motion.header>
  );
}
