import { motion, PanInfo } from "motion/react";
import { useState } from "react";

// CMU Project Images
import imgCMULayer5 from "figma:asset/367cd00ee29321b2c0852acdca97a74a1873b01e.png";
import imgCMULogo from "figma:asset/f341b8b6b5864a5899d0fdb386e2d9dcbe817fdc.png";

// SCG Project Images
import imgSCGSingle from "figma:asset/9e66c824bf50aaea1cc124ffa4cdb5dd71fa5a2e.png";
import imgSCGLogo from "figma:asset/1ead6aa56384a8a503e59b00cde177513cfc4df7.png";

// PEA Project Images
import imgPEALayer3 from "figma:asset/f32c048d3baf531b7428fe619d8f641a9e8c2337.png";
import imgPEALogo from "figma:asset/1c54e7056f94aec9f1beaac2c0fcb9a9bab4f051.png";

// Background Image
import bgImage from "figma:asset/74e026d6ecdd51671fa1e4221f76a690165415df.png";

interface Project {
  logo: string;
  title: string;
  image: string;
  id: string;
  details?: string[];
}

export function ProjectShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects: Project[] = [
    {
      id: "cmu",
      logo: imgCMULogo,
      title: "",
      image: imgCMULayer5,
      details: [
        "SCMC (Smart Campus Management Center)",
        "CMU Move",
        "SCMC Dashboard (Digital Twin)",
        "CMU Marathon",
        "CMU Transit",
        "CMU Smart Gate",
        "CMU Smart City (Digital Signage, ERDI IoT 3D)"
      ]
    },
    {
      id: "scg",
      logo: imgSCGLogo,
      title: "",
      image: imgSCGSingle,
      details: [
        "SCG Logistics Management Platform"
      ]
    },
    {
      id: "pea",
      logo: imgPEALogo,
      title: "",
      image: imgPEALayer3,
      details: [
        "PEA Service D (ICS)",
        "PEA Service D (WOM)",
        "PEA Service D (MAMO)"
      ]
    }
  ];

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    
    if (offset > 150 || velocity > 500) {
      // Drag ขวา -> ไปโปรเจกต์ถัดไป
      setCurrentIndex((prev) => Math.min(prev + 1, projects.length - 1));
    } else if (offset < -150 || velocity < -500) {
      // Drag ซ้าย -> กลับโปรเจกต์ก่อนหน้า
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  // คำนวณตำแหน่ง x สำหรับแต่ละรูป
  const getCardPosition = (cardIndex: number) => {
    const diff = cardIndex - currentIndex;
    
    if (diff < 0) {
      // รูปที่ผ่านไปแล้ว -> ออกไปทางขวานอกจอ
      return 1200;
    }
    
    // รูปที่ยังไม่ถึง หรือ รูปปัจจุบัน
    return 0;
  };

  // คำนวณ z-index สำหรับแต่ละรูป
  const getCardZIndex = (cardIndex: number) => {
    // รูปที่อยู่ด้านบนสุด (ปัจจุบัน) จะมี z-index สูงสุด
    return 30 - cardIndex;
  };

  const renderDetailCard = (project: Project) => (
    <div className="bg-[rgba(153,161,175,0.4)] h-[510px] overflow-clip rounded-[50px] w-[501px] backdrop-blur-sm relative">
      <div className="absolute h-[104px] left-[85px] top-[89px] w-[313px]">
        <motion.img 
          key={`logo-${project.id}`}
          alt={`${project.id} logo`} 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
          src={project.logo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
      <motion.div
        key={`content-${project.id}`}
        className="absolute left-[34px] top-[225px] right-[34px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
      >
        {project.title && (
          <p className="font-['Inter',sans-serif] leading-[normal] not-italic text-[20px] text-black mb-4">
            {project.title}
          </p>
        )}
        {project.details && project.details.length > 0 && (
          <ul className={`space-y-2 ${project.title ? 'mt-3' : ''}`}>
            {project.details.map((detail, index) => (
              <motion.li
                key={`detail-${index}`}
                className="flex items-start gap-2 text-[15px] text-black/80"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.4, 
                  ease: "easeOut",
                  delay: 0.2 + (index * 0.08)
                }}
              >
                <span className="text-blue-600 mt-0.5">•</span>
                <span>{detail}</span>
              </motion.li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image - Full Screen */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Light Overlay for better contrast */}
        <div className="absolute inset-0 bg-white/10"></div>
      </div>
      
      <div className="relative w-full h-full max-w-[1920px] mx-auto overflow-hidden z-10">
        
        {/* Frame หลัก - Main Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          
          {/* Frame(detail) - บล๊อกโลโก้และตัวอักษร ด้านซ้าย */}
          <div className="absolute left-[72px] top-1/2 -translate-y-1/2 z-40">
            {renderDetailCard(projects[currentIndex])}
          </div>

          {/* Frame(card) - Container สำหรับรูปภาพ 3 รูป ด้นขวา */}
          <div className="absolute h-[490px] top-1/2 -translate-y-1/2 left-[453px] w-[986px] overflow-visible">
            
            {/* รูปภาพ 3 รูปซ้อนกัน - เหลื่อมกันทางซ้าย */}
            
            {/* PEA Card - ด้านหลังสุด (ซ้ายสุด) */}
            <motion.div
              className={`absolute h-[490px] rounded-[30px] w-[735px] shadow-2xl ${currentIndex === 2 ? "cursor-grab active:cursor-grabbing" : ""}`}
              style={{ 
                left: '80px',
                top: '0px',
                zIndex: getCardZIndex(2)
              }}
              animate={{ 
                x: getCardPosition(2),
                opacity: getCardPosition(2) > 0 ? 0 : 1
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              drag={currentIndex === 2 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              dragMomentum={false}
              onDragEnd={handleDragEnd}
            >
              <img 
                alt="PEA Project" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" 
                src={imgPEALayer3} 
              />
            </motion.div>

            {/* SCG Card - ชั้นกลาง */}
            <motion.div
              className={`absolute h-[490px] rounded-[30px] w-[735px] shadow-2xl ${currentIndex === 1 ? "cursor-grab active:cursor-grabbing" : ""}`}
              style={{ 
                left: '170px',
                top: '0px',
                zIndex: getCardZIndex(1)
              }}
              animate={{ 
                x: getCardPosition(1),
                opacity: getCardPosition(1) > 0 ? 0 : 1
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              drag={currentIndex === 1 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              dragMomentum={false}
              onDragEnd={handleDragEnd}
            >
              <img 
                alt="SCG Project" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" 
                src={imgSCGSingle} 
              />
            </motion.div>

            {/* CMU Card - ด้านหน้าสุด (ขวาสุด) */}
            <motion.div
              className={`absolute h-[490px] rounded-[30px] w-[735px] shadow-2xl ${currentIndex === 0 ? "cursor-grab active:cursor-grabbing" : ""}`}
              style={{ 
                left: '251px',
                top: '0px',
                zIndex: getCardZIndex(0)
              }}
              animate={{ 
                x: getCardPosition(0),
                opacity: getCardPosition(0) > 0 ? 0 : 1
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              drag={currentIndex === 0 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              dragMomentum={false}
              onDragEnd={handleDragEnd}
            >
              <img 
                alt="CMU Project" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" 
                src={imgCMULayer5} 
              />
            </motion.div>
          </div>
        </div>

        {/* Drag Hint - แสดงลูกศรช่วยเหลือ */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <motion.p 
            className="text-gray-500 text-sm flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {currentIndex === 0 ? (
              <>
                Drag รูปขวาเพื่อดูโปรเจกต์ถัดไป
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
                  →
                </motion.span>
              </>
            ) : currentIndex === projects.length - 1 ? (
              <>
                Drag รูปซ้ายเพื่อกลับ
                <motion.span animate={{ x: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
                  ←
                </motion.span>
              </>
            ) : (
              <>
                Drag รูปซ้าย-ขวาเพื่อดูโปรเจกต์
                <motion.span animate={{ x: [-5, 5, -5] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
                  ↔
                </motion.span>
              </>
            )}
          </motion.p>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
          {projects.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-blue-600" : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Project Counter */}
        <div className="absolute top-8 right-8 z-30">
          <motion.div
            className="bg-black/70 backdrop-blur-sm text-white px-6 py-3 rounded-full"
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span 
              className="text-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </motion.span>
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        {currentIndex > 0 && (
          <motion.button
            className="absolute left-8 top-1/2 -translate-y-1/2 z-30 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg hover:bg-white transition-colors"
            onClick={() => setCurrentIndex(currentIndex - 1)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </motion.button>
        )}

        {currentIndex < projects.length - 1 && (
          <motion.button
            className="absolute right-8 top-1/2 -translate-y-1/2 z-30 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg hover:bg-white transition-colors"
            onClick={() => setCurrentIndex(currentIndex + 1)}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.button>
        )}
      </div>
    </div>
  );
}