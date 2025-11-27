import { PortfolioPage } from "./components/PortfolioPage";
import { ContactPage } from "./components/ContactPage";
import { PrivacyPolicyPage } from "./components/PrivacyPolicyPage";
import { CookieConsent } from "./components/CookieConsent";
import { ClientsSection } from "./components/ClientsSection";
import { ServicesShowcase } from "./components/ServicesShowcase";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import ClientsPage from "./pages/Clients";
import { Toaster } from "./components/ui/sonner";
import { motion, useInView, AnimatePresence, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Brain, Palette, Code, Server, Search, Megaphone } from "lucide-react";
import svgPaths from "./imports/svg-vhchzntr3y";
import Group4237030 from "./imports/Group4-2370-30";
import imgUnsplashKrRzEHPeI from "figma:asset/c66412529be7f784b7d067b46ae5b6ab9ac39bf9.png";
import img001 from "figma:asset/9c53e05df426f7a13d8e569e7b9b0def6126e7e8.png";
import img002 from "figma:asset/9e63139d7cbb5998c10ad391a05241f03594c5fc.png";
import img003 from "figma:asset/40c6e86d7832c0f4dd69f83236279aefa68c0b8e.png";
import img004 from "figma:asset/9ee73f58a7b05920413ce785f25f47fe1269a0ef.png";
import img005 from "figma:asset/decfc53e15d20b1020ae5b47f2ced070371546b8.png";
import img006 from "figma:asset/ec939cb1d65a91c1a0b574e7ffc5a14bf9f671d9.png";
import img007 from "figma:asset/1583ed51a484885363b4602b2fe5f6b05771d61b.png";
import img008 from "figma:asset/b6d27f14dda1d7a4c666b6b8ade619784773ebfb.png";
import img009 from "figma:asset/34ef58acb585897daa84c3a168eff7c7553b9776.png";
import imgUnsplashXuTjz7UD7Pi from "figma:asset/f9e5a00cb1c50ba26c2cbc74a7da8669cafb1e6b.png";
import imgLogo1 from "figma:asset/a267f97cd573dbd5e57c728561da613c7de4b4b4.png";
import imgHeroNew from "figma:asset/bc5e612983af37ed6fc822610f8b9ff46e3b3973.png";
import imgHeroLatest from "figma:asset/7a6210b8a493241797e9522dc219b4e243d4c5df.png";
import imgSolutionsBg from "figma:asset/94fcaa14c73d16100266cd54c4e254df46be5875.png";
import imgBigDataPlatform1Latest from "figma:asset/adbf55b808aca476b8779ab31aea0d54bf87192f.png";
import imgBigDataPlatform2New from "figma:asset/9f3a37c5d4285ee1039580a42ca0e893a495b5e6.png";
import imgBigDataPlatform3New from "figma:asset/26a57e65889c286a5c79a60ff04c33f7e4353852.png";
import imgBigDataPlatform4New from "figma:asset/cc430661f59f7279d512d6d406fb0e9998e68649.png";
import imgBigDataPlatform5New from "figma:asset/11cff4a6467d7ca2d0d6bb11aafbbdc986762b60.png";

// Animated Background Component
function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
      
      {/* Animated grid */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px"
        }}
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px"]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Floating orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-500/10 blur-3xl"
          style={{
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Particle effect */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            y: [-20, -100],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

// Animated Section Wrapper
function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// Hero Section with Parallax
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  // Parallax transforms - different speeds for different layers
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const logoScale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const logoOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with slower parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <img
          alt=""
          className="absolute object-cover size-full"
          src="https://images.unsplash.com/photo-1601132359864-c974e79890ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMHRlY2hub2xvZ3klMjBkaWdpdGFsfGVufDF8fHx8MTc2NDA1NDY3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-900/50 to-black/70" />
      </motion.div>

      {/* Content with faster parallax */}
      <motion.div 
        className="relative z-10 text-center px-8 max-w-6xl mx-auto"
        style={{ y: textY }}
      >
        <motion.div
          className="mb-12"
          style={{ scale: logoScale, opacity: logoOpacity }}
        >
          <img alt="Logo" className="h-[154px] mx-auto" src={imgLogo1} />
        </motion.div>

        <motion.h1
          className="text-white text-5xl md:text-7xl mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Big Data Solutions
        </motion.h1>

        <motion.p
          className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Transforming data into actionable insights with cutting-edge technology
        </motion.p>

        <motion.div
          className="mt-12 flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.button
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Solutions
          </motion.button>
          <motion.button
            className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg border border-white/30 hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}

// About Section with Parallax
function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax for text (slower) and 3D model (faster)
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const modelY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const modelScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

  return (
    <section ref={ref} className="relative py-32 pb-64 pt-64 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content with Parallax and Frosted Glass Background */}
          <motion.div style={{ y: textY }}>
            <AnimatedSection>
              <div className="backdrop-blur-md bg-white/80 border border-white/40 rounded-2xl p-8 shadow-lg">
                <h2 className="text-gray-900 text-4xl md:text-5xl mb-8">
                  ABOUT US
                </h2>
                
                <p className="text-gray-700 text-lg leading-relaxed">
                  Big Data Agency Co.,Ltd was Established in 2015 as a subsidiary of Appworks's Co., Ltd. 
                  The main business objectives are to provide IT Solution, to design and develop applications 
                  for mobiles and website, to setup, maintain and consult for Amazon Cloud Services, to market 
                  for both small scale and big scale projects, and to make our own new innovations.
                </p>
              </div>
            </AnimatedSection>
          </motion.div>

          {/* Right Side - 3D Model with Parallax */}
          <motion.div style={{ y: modelY, scale: modelScale }}>
            <AnimatedSection delay={0.4}>
              <div className="relative w-full max-w-[600px] mx-auto" style={{ aspectRatio: '959/954' }}>
                <div className="scale-[0.65] origin-top-left">
                  <Group4237030 />
                </div>
              </div>
            </AnimatedSection>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Architects Section - New Section After About Us
function ArchitectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  return (
    <section className="sticky top-[80px] z-0 py-48 overflow-hidden relative">
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl text-gray-900 leading-tight">
              Architects<br />
              Of Tomorrow's <span className="text-[#2f80a8]">Solutions</span>
            </h2>
          </motion.div>

          {/* Right Side - Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gray-800 text-lg leading-relaxed">
              We are the architects of tomorrow's solutions. BDA seamlessly integrates cutting-edge IT 
              infrastructure, dynamic App & Web creation, and optimized AWS Cloud platforms, all fueled by our 
              commitment to relentless innovation—transforming market challenges into groundbreaking 
              opportunities.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Combined About and Architects Section with Continuous Background
function AboutAndArchitectsSection() {
  return (
    <div className="relative">
      {/* Continuous Background Image for both sections */}
      <div className="absolute inset-0">
        <img
          src={imgSolutionsBg}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* About Section Content */}
      <AboutSection />
      
      {/* Architects Section Content */}
      <ArchitectsSection />
    </div>
  );
}

// Solution Card Component
interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function SolutionCard({ icon, title, description, index }: SolutionCardProps) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <motion.div
        className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl h-full flex flex-col items-center text-center shadow-lg"
        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="mb-6"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl mb-4">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </motion.div>
    </AnimatedSection>
  );
}

// Solutions Section
function SolutionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const productsRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [flippedCardIndex, setFlippedCardIndex] = useState<number | null>(null);
  
  // State for Products Accordion
  const [activeProduct, setActiveProduct] = useState(0);
  const [expandedItems, setExpandedItems] = useState<boolean[]>([true, false, false, false, false]);

  // Ref for Reduce stats animation
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const [timeValue, setTimeValue] = useState(0);
  const [costValue, setCostValue] = useState(0);
  const [errorValue, setErrorValue] = useState(0);

  // Add useInView for products and awards sections
  const productsInView = useInView(productsRef, { once: true, amount: 0.2 });
  const awardsRef = useRef(null);
  const awardsInView = useInView(awardsRef, { once: true, amount: 0.2 });

  // Auto-slide effect for awards - every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000); // 5 seconds

    return () => clearInterval(timer);
  }, []);

  // Counter animation for stats
  useEffect(() => {
    if (statsInView) {
      // Animate TIME from 0 to 70
      let timeCounter = 0;
      const timeInterval = setInterval(() => {
        timeCounter += 1;
        if (timeCounter >= 70) {
          setTimeValue(70);
          clearInterval(timeInterval);
        } else {
          setTimeValue(timeCounter);
        }
      }, 30);

      // Animate COST from 0 to 70
      let costCounter = 0;
      const costInterval = setInterval(() => {
        costCounter += 1;
        if (costCounter >= 70) {
          setCostValue(70);
          clearInterval(costInterval);
        } else {
          setCostValue(costCounter);
        }
      }, 30);

      // Animate DATA ERRORS from 0 to 60
      let errorCounter = 0;
      const errorInterval = setInterval(() => {
        errorCounter += 1;
        if (errorCounter >= 60) {
          setErrorValue(60);
          clearInterval(errorInterval);
        } else {
          setErrorValue(errorCounter);
        }
      }, 30);

      return () => {
        clearInterval(timeInterval);
        clearInterval(costInterval);
        clearInterval(errorInterval);
      };
    }
  }, [statsInView]);

  const solutions = [
    {
      icon: <Brain className="w-12 h-12 text-blue-600" />,
      title: "Brainstorming Ideas",
      shortTitle: "Brainstorming",
      description: "We start by understanding your vision and goals, conducting in-depth research to identify opportunities and challenges. Our team collaborates to generate innovative ideas that align with your business objectives.",
      image: "https://images.unsplash.com/photo-1650831433364-3bbd0f2d2f01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbnN0b3JtaW5nJTIwaWRlYXMlMjB0ZWFtfGVufDF8fHx8MTc2MzcxMzgxNXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: <Palette className="w-12 h-12 text-blue-600" />,
      title: "Product Design",
      shortTitle: "Product Design",
      description: "Our designers create intuitive and visually stunning interfaces that enhance user experience. We focus on usability, aesthetics, and brand consistency to deliver designs that resonate with your audience.",
      image: "https://images.unsplash.com/photo-1666317411591-924603dbe861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZGVzaWduJTIwd2lyZWZyYW1lfGVufDF8fHx8MTc2MzcxMzgxNXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: "Front-End Development",
      shortTitle: "Front-End",
      description: "We build responsive and interactive user interfaces using modern frameworks and technologies. Our front-end solutions ensure seamless performance across all devices and browsers.",
      image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjM2NDMxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: <Server className="w-12 h-12 text-blue-600" />,
      title: "Back-End Development",
      shortTitle: "Back-End",
      description: "Our backend developers create robust, scalable server-side solutions that power your applications. We implement secure APIs, databases, and cloud infrastructure to ensure optimal performance.",
      image: "https://images.unsplash.com/photo-1641156803026-0b819059b04d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBiYWNrZW5kJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzYzNzEzODE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: <Search className="w-12 h-12 text-blue-600" />,
      title: "SEO Optimization",
      shortTitle: "SEO",
      description: "We optimize your digital presence to improve search engine rankings and drive organic traffic. Our SEO strategies include keyword research, technical optimization, and content enhancement.",
      image: "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW8lMjBvcHRpbWl6YXRpb24lMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYzNzEzODE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: <Megaphone className="w-12 h-12 text-blue-600" />,
      title: "Digital Marketing",
      shortTitle: "Digital Marketing",
      description: "We develop comprehensive digital marketing strategies to grow your brand and reach your target audience. From social media campaigns to content marketing, we drive engagement and conversions.",
      image: "https://images.unsplash.com/photo-1547621008-d6d6d2e28e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc29jaWFsJTIwbWVkaWF8ZW58MXx8fHwxNzYzNjE0OTUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const products = [
    { 
      image: imgBigDataPlatform1Latest, 
      title: "Big Data Platform",
      description: "focused on data liquidity and allowing you to put your dataset to work with predictive analytics models, dashboards, and machine learning capabilities that can collect, analyze, and quicklymake use of data."
    },
    { 
      image: imgBigDataPlatform2New, 
      title: "Panya.AI",
      description: "Building AI never been this easy. Drag drop your AI modules in our designer. Integrate your application with our RESTful api by send the input to your unique endpoint and get your result. That's it!."
    },
    { 
      image: imgBigDataPlatform3New, 
      title: "Messaging Management",
      description: "VIP Messaging management tools for helping vendor to create simple message template that can be sent across all connected channels/platforms (eg. Line OA, Facebbok Messenger, SMS, Email)."
    },
    { 
      image: imgBigDataPlatform4New, 
      title: "Digital Signage",
      description: "focused on data liquidity and allowing you to put your dataset to work with predictive analytics models, dashboards, and machine learning capabilities that can collect, analyze, and quicklymake use of data."
    },
    { 
      image: imgBigDataPlatform5New, 
      title: "Boost",
      description: "Interactive lifestyle platform with multiplayer and real-time screen interactive games that has main screen on the public display screen (eg. LED on the BTS or the Bangkok Skytrain station)."
    }
  ];

  const awards = [
    { image: img001, year: "2015", title: "Most Innovation Awards 2015" },
    { image: img002, year: "2015", title: "NSP Innovation Awards 2015" },
    { image: img003, year: "2015", title: "RSP Innovation Awards 2015" },
    { image: img004, year: "2010", title: "Technology Street 2010" },
    { image: img005, year: "2010", title: "i-CREATe 2010" },
    { image: img006, year: "2007", title: "Trophy shelf in faculty of engineering CMU" },
    { image: img007, year: "2007", title: "Battle Crossword RPG Game 2007" },
    { image: img008, year: "2005", title: "National Software Contest Thailand" },
    { image: img009, year: "2005", title: "Thailand ICT Awards 2005" }
  ];

  const displayedAwards = awards.slice(0, 3);
  const totalSlides = Math.ceil(awards.length / 3);

  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-gray-100 to-gray-300 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <img
          src={imgSolutionsBg}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Title */}
        <div ref={ref} className="mb-20 mt-12">
          <div className="flex items-center justify-center gap-8 mb-8">
            <motion.div
              className="h-0.5 w-32 md:w-64 bg-gray-400"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ transformOrigin: "right" }}
            />
            
            <motion.h2
              className="text-center text-gray-900 text-5xl md:text-6xl whitespace-nowrap"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Workflow Steps
            </motion.h2>
            
            <motion.div
              className="h-0.5 w-32 md:w-64 bg-gray-400"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          {/* Description */}
          <motion.p
            className="text-gray-700 text-lg md:text-xl text-center max-w-5xl mx-auto mt-0 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            A cutting-edge workflow leveraging the latest high-quality technology to transform your vision into a robust, future-proof solution that delivers sustainable impact and excellence.
          </motion.p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32 mt-48">
          {/* Left Side - Flowchart */}
          <div className="relative">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              {/* Connecting Lines */}
              <motion.path
                d="M 130 80 L 200 80 L 200 160 L 130 160"
                stroke="rgba(0,0,0,0.15)"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              <motion.path
                d="M 370 80 L 440 80 L 440 160 L 370 160"
                stroke="rgba(0,0,0,0.15)"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.5, delay: 0.7 }}
              />
              <motion.path
                d="M 370 240 L 440 240 L 440 320 L 370 320"
                stroke="rgba(0,0,0,0.15)"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.5, delay: 0.9 }}
              />
              <motion.path
                d="M 130 320 L 200 320 L 200 400 L 285 400"
                stroke="rgba(0,0,0,0.15)"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.5, delay: 1.1 }}
              />
            </svg>

            <div className="relative space-y-8" style={{ zIndex: 1 }}>
              {/* Row 1 - 2 cards */}
              <div className="grid grid-cols-2 gap-8">
                {solutions.slice(0, 2).map((solution, index) => (
                  <motion.button
                    key={index}
                    className={`relative p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                      activeIndex === index
                        ? 'bg-white border-blue-600 shadow-lg shadow-blue-600/20'
                        : 'bg-white/80 border-gray-300 hover:border-gray-400'
                    }`}
                    onClick={() => setActiveIndex(index)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="mb-3 text-blue-600">
                      {solution.icon}
                    </div>
                    <h3 className="text-sm uppercase tracking-wide text-gray-900">
                      {solution.shortTitle}
                    </h3>
                  </motion.button>
                ))}
              </div>

              {/* Row 2 - 2 cards offset */}
              <div className="grid grid-cols-2 gap-8 ml-12">
                {solutions.slice(2, 4).map((solution, index) => (
                  <motion.button
                    key={index + 2}
                    className={`relative p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                      activeIndex === index + 2
                        ? 'bg-white border-blue-600 shadow-lg shadow-blue-600/20'
                        : 'bg-white/80 border-gray-300 hover:border-gray-400'
                    }`}
                    onClick={() => setActiveIndex(index + 2)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                  >
                    <div className="mb-3 text-blue-600">
                      {solution.icon}
                    </div>
                    <h3 className="text-sm uppercase tracking-wide text-gray-900">
                      {solution.shortTitle}
                    </h3>
                  </motion.button>
                ))}
              </div>

              {/* Row 3 - 2 cards */}
              <div className="grid grid-cols-2 gap-8">
                {solutions.slice(4, 6).map((solution, index) => (
                  <motion.button
                    key={index + 4}
                    className={`relative p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                      activeIndex === index + 4
                        ? 'bg-white border-blue-600 shadow-lg shadow-blue-600/20'
                        : 'bg-white/80 border-gray-300 hover:border-gray-400'
                    }`}
                    onClick={() => setActiveIndex(index + 4)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: (index + 4) * 0.1 }}
                  >
                    <div className="mb-3 text-blue-600">
                      {solution.icon}
                    </div>
                    <h3 className="text-sm uppercase tracking-wide text-gray-900">
                      {solution.shortTitle}
                    </h3>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Details */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl overflow-hidden shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={solutions[activeIndex].image}
                    alt={solutions[activeIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="mb-2">{solutions[activeIndex].icon}</div>
                    <h3 className="text-2xl uppercase tracking-wide">
                      {solutions[activeIndex].title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="p-8">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {solutions[activeIndex].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Reduce Statistics Section */}
        <div ref={statsRef} className="mt-64 mb-48">
          {/* Title Section */}
          <div className="mb-20">
            <div className="flex items-center justify-center gap-8 mb-8">
              {/* Left line */}
              <motion.div
                className="h-0.5 w-32 md:w-64 bg-gray-400"
                initial={{ scaleX: 0 }}
                animate={statsInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ transformOrigin: "right" }}
              />
              
              {/* Title */}
              <motion.h2
                className="text-center text-gray-900 text-4xl md:text-5xl whitespace-nowrap uppercase"
                initial={{ opacity: 0, y: -20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Optimize Performance
              </motion.h2>
              
              {/* Right line */}
              <motion.div
                className="h-0.5 w-32 md:w-64 bg-gray-400"
                initial={{ scaleX: 0 }}
                animate={statsInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              />
            </div>
          </div>

          <div>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-32 max-w-6xl mx-auto">
              {/* FASTER TIME */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div
                  className="text-gray-900 text-6xl md:text-7xl mb-6"
                  initial={{ scale: 0 }}
                  animate={statsInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                >
                  {timeValue}%
                </motion.div>
                {/* Animated Line - Duration matches counter (70 * 30ms = 2.1s) */}
                <div className="h-px bg-gray-300 mb-6 mx-auto overflow-hidden" style={{ width: '242px', maxWidth: '100%' }}>
                  <motion.div
                    className="h-full bg-gray-500"
                    initial={{ scaleX: 0 }}
                    animate={statsInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 2.1, ease: "linear", delay: 0.4 }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>
                <p className="text-gray-700 text-3xl md:text-4xl whitespace-nowrap">FASTER TIME</p>
              </motion.div>

              {/* LOWER COST */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div
                  className="text-gray-900 text-6xl md:text-7xl mb-6"
                  initial={{ scale: 0 }}
                  animate={statsInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
                >
                  {costValue}%
                </motion.div>
                {/* Animated Line - Duration matches counter (70 * 30ms = 2.1s) */}
                <div className="h-px bg-gray-300 mb-6 mx-auto overflow-hidden" style={{ width: '242px', maxWidth: '100%' }}>
                  <motion.div
                    className="h-full bg-gray-500"
                    initial={{ scaleX: 0 }}
                    animate={statsInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 2.1, ease: "linear", delay: 0.5 }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>
                <p className="text-gray-700 text-3xl md:text-4xl whitespace-nowrap">LOWER COST</p>
              </motion.div>

              {/* Data Accuracy */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.div
                  className="text-gray-900 text-6xl md:text-7xl mb-6"
                  initial={{ scale: 0 }}
                  animate={statsInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
                >
                  {errorValue}%
                </motion.div>
                {/* Animated Line - Duration matches counter (60 * 30ms = 1.8s) */}
                <div className="h-px bg-gray-300 mb-6 mx-auto overflow-hidden" style={{ width: '242px', maxWidth: '100%' }}>
                  <motion.div
                    className="h-full bg-gray-500"
                    initial={{ scaleX: 0 }}
                    animate={statsInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 1.8, ease: "linear", delay: 0.6 }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>
                <p className="text-gray-700 text-3xl md:text-4xl whitespace-nowrap">DATA ACCURACY</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Products Section - Now inside the same container */}
        <div ref={productsRef} className="mt-96">
          <div className="mb-32">
            <div className="flex items-center justify-center gap-8">
              {/* Left line */}
              <motion.div
                className="h-0.5 w-32 md:w-64 bg-gray-400"
                initial={{ scaleX: 0 }}
                animate={productsInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ transformOrigin: "right" }}
              />
              
              {/* Title */}
              <motion.h2
                className="text-4xl md:text-5xl text-gray-900 uppercase whitespace-nowrap"
                initial={{ opacity: 0, y: 20 }}
                animate={productsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Our Products
              </motion.h2>
              
              {/* Right line */}
              <motion.div
                className="h-0.5 w-32 md:w-64 bg-gray-400"
                initial={{ scaleX: 0 }}
                animate={productsInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              />
            </div>
          </div>

          {/* New 2-column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Image with Number and Title */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={productsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="sticky top-32"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeProduct}
                    src={products[activeProduct].image}
                    alt={products[activeProduct].title}
                    className="w-full h-[500px] object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
                
                {/* Overlay with number and title */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProduct}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-white/60 text-6xl mb-2">
                        {String(activeProduct + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-white text-3xl">
                        {products[activeProduct].title}
                      </h3>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Accordion List */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={productsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              {products.map((product, index) => {
                const isExpanded = expandedItems[index];
                const isActive = activeProduct === index;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={productsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`border-l-4 transition-all duration-300 ${
                      isActive ? 'border-blue-600' : 'border-gray-300'
                    }`}
                  >
                    {/* Header - Always visible */}
                    <button
                      onClick={() => {
                        setActiveProduct(index);
                        const newExpanded = [...expandedItems];
                        newExpanded[index] = !newExpanded[index];
                        setExpandedItems(newExpanded);
                      }}
                      className="w-full text-left px-6 py-4 bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-4">
                        <span className={`text-2xl transition-colors duration-300 ${
                          isActive ? 'text-blue-600' : 'text-gray-400'
                        }`}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h4 className={`text-xl transition-colors duration-300 ${
                          isActive ? 'text-blue-600' : 'text-gray-900'
                        }`}>
                          {product.title}
                        </h4>
                      </div>
                      
                      {/* Plus/Minus Icon */}
                      <motion.div
                        animate={{ rotate: isExpanded ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`text-2xl ${isActive ? 'text-blue-600' : 'text-gray-400'}`}
                      >
                        +
                      </motion.div>
                    </button>

                    {/* Description - Expandable */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isExpanded ? "auto" : 0,
                        opacity: isExpanded ? 1 : 0
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-gray-50">
                        <p className="text-gray-700 leading-relaxed">
                          {product.description}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Awards Section - Now inside the same container */}
        <div ref={awardsRef} className="mt-96">
          <div className="mb-16">
            <div className="flex items-center justify-center gap-8">
              {/* Left line */}
              <motion.div
                className="h-0.5 w-32 md:w-64 bg-gray-400"
                initial={{ scaleX: 0 }}
                animate={awardsInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ transformOrigin: "right" }}
              />
              
              {/* Title */}
              <motion.h2
                className="text-4xl md:text-5xl text-gray-900 uppercase whitespace-nowrap"
                initial={{ opacity: 0, y: 20 }}
                animate={awardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                AWARDS
              </motion.h2>
              
              {/* Right line */}
              <motion.div
                className="h-0.5 w-32 md:w-64 bg-gray-400"
                initial={{ scaleX: 0 }}
                animate={awardsInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              />
            </div>
          </div>

          {/* Awards Carousel Container */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {awards.slice(currentSlide * 3, currentSlide * 3 + 3).map((award, index) => (
                  <AwardCard key={`${currentSlide}-${index}`} {...award} index={index} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <motion.button
              onClick={() => setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides)}
              className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Previous
            </motion.button>

            {/* Slide Indicators */}
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-gray-900 w-8' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={() => setCurrentSlide((currentSlide + 1) % totalSlides)}
              className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Next →
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Product Card Component
interface ProductCardProps {
  image: string;
  title: string;
  description?: string;
  index: number;
}

function ProductCard({ image, title, description, index }: ProductCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <AnimatedSection delay={index * 0.1}>
      <div className="relative h-[300px] perspective-1000">
        <motion.div
          className="relative w-full h-full cursor-pointer"
          onClick={() => setIsFlipped(!isFlipped)}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front - Image */}
          <motion.div
            className="absolute inset-0 rounded-3xl overflow-hidden backface-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            <motion.div
              className="relative h-full group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                alt={title}
                className="absolute inset-0 object-cover size-full"
                src={image}
              />
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl text-center px-8">{title}</h3>
              </div>
              <div className="absolute bottom-4 right-4 text-white/70 text-sm">
                Click to learn more
              </div>
            </motion.div>
          </motion.div>

          {/* Back - Description */}
          {description && (
            <motion.div
              className="absolute inset-0 bg-white rounded-3xl overflow-hidden backface-hidden border border-black"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              <div className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic p-11 h-full flex flex-col">
                <p className="text-[20px] text-black mb-8">{title}</p>
                <p className="text-[16px] text-[rgba(0,0,0,0.5)] leading-relaxed">
                  {description}
                </p>
                <div className="mt-auto text-sm text-black/50">
                  Click to go back
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}



// Award Card Component
interface AwardCardProps {
  image: string;
  year: string;
  title: string;
  index: number;
}

function AwardCard({ image, year, title, index }: AwardCardProps) {
  return (
    <AnimatedSection delay={index * 0.05}>
      <motion.div
        className="relative h-[395px] rounded-lg overflow-hidden shadow-lg group cursor-pointer"
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <img
          alt={title}
          className="absolute inset-0 object-cover size-full"
          src={image}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-6 transform transition-transform duration-300 group-hover:-translate-y-2"
        >
          <p className="text-2xl mb-2">{year}</p>
          <p className="text-sm text-gray-700">{title}</p>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
}

// Scroll Progress Indicator
function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Calculate scroll percentage
      const totalScroll = documentHeight - windowHeight;
      const currentProgress = (scrollTop / totalScroll) * 100;
      
      setScrollProgress(Math.min(Math.max(currentProgress, 0), 100));
      
      // Show button when scrolled down
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  // Ensure strokeDashoffset is never NaN
  const safeStrokeDashoffset = isNaN(strokeDashoffset) ? circumference : strokeDashoffset;

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        onClick={scrollToTop}
        className="relative w-20 h-20 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Background circle */}
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <circle
            cx="40"
            cy="40"
            r={radius}
            fill="#2c3e50"
            stroke="transparent"
            strokeWidth="8"
          />
          {/* Progress circle */}
          <circle
            cx="40"
            cy="40"
            r={radius}
            fill="transparent"
            stroke="#ec4899"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={safeStrokeDashoffset}
            strokeLinecap="round"
            style={{
              transition: "stroke-dashoffset 0.1s ease"
            }}
          />
        </svg>
        
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-sm font-bold">
            {Math.round(scrollProgress)}%
          </span>
        </div>
      </motion.button>
    </motion.div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "portfolio" | "contact" | "privacy policy" | "clients">("home");

  const handleNavigate = (page: string) => {
    if (page === "portfolio") {
      setCurrentPage("portfolio");
    } else if (page === "home") {
      setCurrentPage("home");
    } else if (page === "contact") {
      setCurrentPage("contact");
    } else if (page === "privacy policy") {
      setCurrentPage("privacy policy");
    } else if (page === "clients") {
      setCurrentPage("clients");
    }
    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-white">
      <AnimatedBackground />
      <Header onNavigate={handleNavigate} />
      
      {currentPage === "home" ? (
        <main className="pt-[110px]">
          <HeroSection />
          <AboutAndArchitectsSection />
          <ServicesShowcase />
          <SolutionsSection />
          <ClientsSection />
        </main>
      ) : currentPage === "portfolio" ? (
        <main className="pt-[110px]">
          <PortfolioPage />
        </main>
      ) : currentPage === "contact" ? (
        <main className="pt-[110px]">
          <ContactPage onNavigate={handleNavigate} />
        </main>
      ) : currentPage === "clients" ? (
        <ClientsPage />
      ) : (
        <main className="pt-[110px]">
          <PrivacyPolicyPage />
        </main>
      )}
      
      <Footer />
      <ScrollProgress />
      <Toaster />
      <CookieConsent onNavigate={handleNavigate} />
    </div>
  );
}