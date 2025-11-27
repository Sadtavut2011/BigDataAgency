import { motion } from "motion/react";
import imgClientsSection from "figma:asset/1c54e7056f94aec9f1beaac2c0fcb9a9bab4f051.png";
import imgClientsSection1 from "figma:asset/1ead6aa56384a8a503e59b00cde177513cfc4df7.png";
import imgClientsSection2 from "figma:asset/f341b8b6b5864a5899d0fdb386e2d9dcbe817fdc.png";
import imgClientsSection3 from "figma:asset/b56a960e14eebdeb237aa1de0abeeb4b0c10f420.png";
import imgClientsSection4 from "figma:asset/5f7b5f6357e411a9f6836782de7179a44fbc1d6a.png";
import imgClientsSection5 from "figma:asset/7b7cf0ea960afadeb074bccb796a2ecd548c0a83.png";
import imgClientsSection6 from "figma:asset/2fc0af16dec787ef77b4035f8ae2096cd7a2f2f5.png";
import imgClientsSection7 from "figma:asset/445732485894e1def46d3de3dd015876341de406.png";
import imgClientsSection8 from "figma:asset/4b3f6c90bf59580e575823a7133ef016771c508d.png";
import imgClientsSection9 from "figma:asset/52858a3def95f98100f8ea53a8d8cffd382eb67e.png";
import imgClientsSection10 from "figma:asset/f2c1db9676a506e216e195a08e569d77389224d8.png";
import imgClientsSection11 from "figma:asset/d2753acd7014541bd8bfb267439b7491e53ec4e3.png";
import imgClientsSection12 from "figma:asset/4d01dcc9e22077820000413da2e5288862e9cfbc.png";
import imgClientsSection13 from "figma:asset/f1ca400c1722733a005fecac4283a1d1815ffb75.png";
import imgClientsSection14 from "figma:asset/79eabddd1d8fe2187708f0f2ce7df18a5eceacdc.png";
import imgClientsSection15 from "figma:asset/1df75608a18a1466bac1835da6367393334dc242.png";
import imgClientsSection16 from "figma:asset/06332470446853de0123eb61054eca89fbc91087.png";
import imgClientsSection17 from "figma:asset/82f56054432e46ad833a8783e99d10cc2ebf9a50.png";
import imgClientsSection18 from "figma:asset/027c71f8cfda1b236c08e30e2c87158ff78fbcd5.png";
import imgClientsSection19 from "figma:asset/a06a5ee1d9e680e0deeb2fa40e3ea5e4ad3ee960.png";
import imgClientsSection20 from "figma:asset/43989f9c12acefcdc9a0c22129945e965800ebcf.png";
import imgClientsSection21 from "figma:asset/ef533372f7cf5dc48cb98b95937661e323867479.png";

interface ClientLogoProps {
  image: string;
  index: number;
}

function ClientLogo({ image, index }: ClientLogoProps) {
  return (
    <motion.div
      className="bg-white h-[120px] rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[220px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <div className="flex h-[120px] items-center justify-center w-[220px] p-6">
        <div className="h-full relative shrink-0 w-full">
          <img
            alt="Client logo"
            className="absolute inset-0 max-w-none object-contain size-full"
            src={image}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function ClientsSection() {
  const logos = [
    imgClientsSection,
    imgClientsSection1,
    imgClientsSection2,
    imgClientsSection3,
    imgClientsSection4,
    imgClientsSection5,
    imgClientsSection6,
    imgClientsSection7,
    imgClientsSection8,
    imgClientsSection9,
    imgClientsSection10,
    imgClientsSection11,
    imgClientsSection12,
    imgClientsSection13,
    imgClientsSection14,
    imgClientsSection15,
    imgClientsSection16,
    imgClientsSection17,
    imgClientsSection18,
    imgClientsSection19,
    imgClientsSection20,
    imgClientsSection21,
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 mb-16">
        <motion.h2
          className="text-3xl md:text-4xl text-center text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Clients
        </motion.h2>
      </div>

      {/* First row - scrolling right to left */}
      <div className="relative overflow-hidden py-4">
        <motion.div
          className="flex gap-12"
          animate={{
            x: [0, -2800]
          }}
          transition={{
            duration: 70,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <ClientLogo key={`row1-${index}`} image={logo} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}