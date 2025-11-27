import { motion, useInView } from "motion/react";
import { useRef } from "react";
import bgClients from "figma:asset/58d7f15232eb21cbf58c7358281aa7ddd6d421e2.png";
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
import imgRectangle7 from "figma:asset/0530a8d835d1ddb76fcf8875a5a8d138eb26ccdb.png";
import imgClientsSection10 from "figma:asset/d2753acd7014541bd8bfb267439b7491e53ec4e3.png";
import imgClientsSection11 from "figma:asset/4d01dcc9e22077820000413da2e5288862e9cfbc.png";
import imgClientsSection12 from "figma:asset/f1ca400c1722733a005fecac4283a1d1815ffb75.png";
import imgClientsSection13 from "figma:asset/79eabddd1d8fe2187708f0f2ce7df18a5eceacdc.png";
import imgClientsSection14 from "figma:asset/1df75608a18a1466bac1835da6367393334dc242.png";
import imgClientsSection15 from "figma:asset/06332470446853de0123eb61054eca89fbc91087.png";
import imgClientsSection16 from "figma:asset/82f56054432e46ad833a8783e99d10cc2ebf9a50.png";
import imgClientsSection17 from "figma:asset/027c71f8cfda1b236c08e30e2c87158ff78fbcd5.png";
import imgClientsSection18 from "figma:asset/a06a5ee1d9e680e0deeb2fa40e3ea5e4ad3ee960.png";
import imgClientsSection19 from "figma:asset/43989f9c12acefcdc9a0c22129945e965800ebcf.png";
import imgClientsSection20 from "figma:asset/ef533372f7cf5dc48cb98b95937661e323867479.png";
import imgSamsung from "figma:asset/56e6ad0fe88f7aa7970619809c5ff864e3f8d542.png";
import imgHp from "figma:asset/9407a970f18148b963fee8ee75bf102b781c4df5.png";
import imgLine from "figma:asset/42f2aedf163e529c30d1047acd7b807e5f54e0fb.png";
import imgOracle from "figma:asset/f80605b9e675d3d42fbce168ef4b01fcb6cba085.png";
import imgDell from "figma:asset/6be7e09ecb2e43ea5c674a960f7def1e42c9b1fa.png";
import imgMaplnfo from "figma:asset/8bb5e782cc2f3c0732901fb2b887d7e90bb37fd7.png";
import imgAppworks from "figma:asset/034b60568a8dc31e4b2bc72596ff5cad5eba6e79.png";
import imgKirimaru from "figma:asset/498360edb96278282b40c41fcad30b0454798ef2.png";
import imgVmware from "figma:asset/093e558dec29cf1ec1e3dc550f7cd9737919d6c3.png";

interface ClientLogoProps {
  image: string;
  index: number;
}

function ClientLogo({ image, index }: ClientLogoProps) {
  return (
    <motion.div
      className="bg-white h-[120px] rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <div className="flex h-[120px] items-center justify-center w-full p-6">
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

interface PartnerLogoProps {
  image: string;
  index: number;
  name: string;
}

function PartnerLogo({ image, index, name }: PartnerLogoProps) {
  return (
    <motion.div
      className="h-[85px] relative shrink-0 w-full flex items-center justify-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.1, y: -5 }}
    >
      <img
        alt={name}
        className="max-w-full max-h-full object-contain"
        src={image}
      />
    </motion.div>
  );
}

export default function Clients() {
  const partnersRef = useRef(null);
  const isPartnersInView = useInView(partnersRef, { once: true, margin: "-100px" });

  const clientLogos = [
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
    imgRectangle7,
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
  ];

  const partners = [
    { image: imgSamsung, name: "Samsung" },
    { image: imgHp, name: "HP" },
    { image: imgLine, name: "LINE" },
    { image: imgOracle, name: "Oracle" },
    { image: imgDell, name: "Dell" },
    { image: imgMaplnfo, name: "MapInfo" },
    { image: imgAppworks, name: "Appworks" },
    { image: imgKirimaru, name: "Kirimaru" },
    { image: imgVmware, name: "VMware" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">      
      <main className="pt-32 pb-20 relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={bgClients} 
            alt="Background" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl text-[#2e3c52] mb-4 uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              TRUSTED BY
            </motion.h1>
            <motion.h2
              className="text-black mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              INDUSTRY LEADERS AND INNOVATORS
            </motion.h2>
            <motion.p
              className="text-gray-700 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              We partner with these forward-thinking organizations to transform complex data into strategic business advantage and sustainable growth.
            </motion.p>
          </motion.div>

          {/* Client Logos Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {clientLogos.map((logo, index) => (
              <ClientLogo key={index} image={logo} index={index} />
            ))}
          </motion.div>

          {/* Business Partners Section */}
          <div className="mt-32">
            <div ref={partnersRef} className="mb-16">
              <div className="flex items-center justify-center gap-8">
                {/* Left line */}
                <motion.div
                  className="h-0.5 w-32 md:w-64 bg-black"
                  initial={{ scaleX: 0 }}
                  animate={isPartnersInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{ transformOrigin: "right" }}
                />
                
                {/* Title */}
                <motion.h2
                  className="text-4xl md:text-5xl text-gray-900 uppercase whitespace-nowrap"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isPartnersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Business Partners
                </motion.h2>
                
                {/* Right line */}
                <motion.div
                  className="h-0.5 w-32 md:w-64 bg-black"
                  initial={{ scaleX: 0 }}
                  animate={isPartnersInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{ transformOrigin: "left" }}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
              {partners.map((partner, index) => (
                <PartnerLogo
                  key={index}
                  image={partner.image}
                  index={index}
                  name={partner.name}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}