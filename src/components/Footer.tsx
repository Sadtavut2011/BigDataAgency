import { motion, useInView } from "motion/react";
import { useRef } from "react";

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

export function Footer() {
  return (
    <footer className="relative bg-[#2E3C52] text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatedSection>
            <div>
              <h3 className="text-xl mb-6">BANGKOK</h3>
              <p className="text-sm mb-2">BIG DATA AGENCY CO., LTD. (Head office)</p>
              <p className="text-sm text-gray-400 mb-4">
                408/141 Phaholyothin Place Building, 33nd Floor,
                <br />
                Payathai, Bangkok, Thailand 10400
              </p>
              <p className="text-sm text-gray-400">(+66)52 009 373</p>
              <p className="text-sm text-gray-400">admin@bad.co.th</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div>
              <h3 className="text-xl mb-6">CHIANG MAI</h3>
              <p className="text-sm mb-2">BIG DATA AGENCY CO., LTD. (Branch)</p>
              <p className="text-sm text-gray-400 mb-4">
                333 Moo 4 T.Tasala, A.Muang,
                <br />
                Chiang Mai, Thailand 50000
              </p>
              <p className="text-sm text-gray-400">(+66)89 866 7679</p>
              <p className="text-sm text-gray-400">(+66)52 009 373</p>
              <p className="text-sm text-gray-400">admin@bad.co.th</p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-[#2f596f] text-xs mb-1">
            Develop by : Big Data Agency co., ltd.
          </p>
          <p className="text-[#2f596f] text-xs">
            All Rights Reserved. Privacy Policy and Terms of Use
          </p>
        </div>
      </div>
    </footer>
  );
}
