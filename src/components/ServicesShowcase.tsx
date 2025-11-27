import { motion, useScroll, useTransform } from "motion/react";
import { useState, useRef } from "react";
import imgItSolution from "figma:asset/9a8eda1423d80ec8424f4664546cfd28cfbb5be3.png";
import imgAppWebDev from "figma:asset/19273ade2cfbe6cccb632d2943f55e4efc0bd9c0.png";
import imgAws from "figma:asset/2f87cbee9bbec5a69aa64aaf721cbc345485166d.png";
import imgMarketing from "figma:asset/4efc092391f7379479b964a669e9306007524ea5.png";

interface ServiceContent {
  id: string;
  title: string;
  image: string;
  text: string;
  secondaryText?: string;
}

const services: ServiceContent[] = [
  {
    id: "it-solution",
    title: "IT Solution",
    image: imgItSolution,
    text: "We provide strategic consulting, implementation, and managed services across the digital infrastructure."
  },
  {
    id: "app-web-dev",
    title: "App and Web Development",
    image: imgAppWebDev,
    text: "We are the architects of your digital success, crafting powerful App & Web experiences. Designed with user-centric principles and built on cutting-edge, stable technology."
  },
  {
    id: "aws",
    title: "Amazon Cloud Services",
    image: imgAws,
    text: "Expertly set up, manage, and optimize your presence on Amazon Cloud Services (AWS)."
  },
  {
    id: "marketing",
    title: "Project Marketing",
    image: imgMarketing,
    text: "Driving targeted marketing strategies for projects ranging from small-scale initiatives to major corporate ventures."
  }
];

export function ServicesShowcase() {
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef(null);
  const tabsRef = useRef(null);
  
  // Track scroll progress สำหรับ image content
  const { scrollYProgress: imageScrollProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  // เปลี่ยนให้เลื่อนลงมาแทน (จาก -300 ไป 370)
  const imageY = useTransform(imageScrollProgress, [0, 1], [-300, 370]);
  
  // Track scroll progress สำหรับ tabs - ค่อยๆเลื่อนขึ้นมา
  const { scrollYProgress: tabsScrollProgress } = useScroll({
    target: tabsRef,
    offset: ["start end", "start start"]
  });
  
  // Transform: เริ่มจากด้านล่าง (100px) -> ขึ้นมา (0px)
  const tabsY = useTransform(tabsScrollProgress, [0, 1], [100, 0]);
  const tabsOpacity = useTransform(tabsScrollProgress, [0, 0.5, 1], [0, 0.5, 1]);

  return (
    <section ref={sectionRef} className="relative bg-white">
      <div className="relative">
        {/* Tab Headers Row - ค่อยๆเลื่อนขึ้นมา และบัง ArchitectsSection */}
        <motion.div 
          ref={tabsRef}
          className="grid grid-cols-4 relative z-40 sticky top-[80px]"
          style={{ 
            y: tabsY,
            opacity: tabsOpacity 
          }}
        >
          {services.map((service, index) => (
            <button
              key={service.id}
              className={`relative px-6 py-6 text-center border-b transition-colors duration-300 cursor-pointer ${
                activeService === index
                  ? "bg-[#2E3C52] border-[#2E3C52]/50"
                  : "bg-white border-gray-200/50"
              }`}
              onMouseEnter={() => setActiveService(index)}
            >
              <h3
                className={`text-sm uppercase tracking-wide transition-colors duration-300 ${
                  activeService === index ? "text-white" : "text-gray-900"
                }`}
              >
                {service.title}
              </h3>
              {/* Vertical divider line */}
              {index < services.length - 1 && (
                <div className="absolute top-0 right-0 bottom-0 w-px bg-gray-200" />
              )}
            </button>
          ))}
        </motion.div>

        {/* Full Width Image Container with Hover Zones */}
        <div className="relative h-screen overflow-hidden -mt-16">
          {/* Background Images Layer */}
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`absolute inset-0 ${activeService === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              {/* Background Image - Full Width */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content Text - Left Center with Glass Effect and Parallax */}
              <motion.div
                className="absolute left-12 top-1/2 -translate-y-1/2 z-10"
                style={{ y: imageY }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeService === index ? 1 : 0
                }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-8 max-w-2xl shadow-2xl">
                  <div className="text-white space-y-4">
                    <p className="text-lg leading-relaxed">
                      {service.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}

          {/* Hover Zones with Vertical Dividers - Overlay on top */}
          <div className="absolute inset-0 grid grid-cols-4 z-20 pointer-events-auto">
            {services.map((service, index) => (
              <div
                key={`hover-${service.id}`}
                className="relative cursor-pointer"
                onMouseEnter={() => setActiveService(index)}
              >
                {/* Vertical divider lines - only show on right edge except last item */}
                {index < services.length - 1 && (
                  <div className="absolute top-0 right-0 bottom-0 w-[2px] bg-white/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}