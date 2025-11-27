import imgRectangle1 from "figma:asset/53adc7803dba0e7e5e757a41e14e3b74bc639393.png";
import imgRectangle2 from "figma:asset/8ba38433f5efe26ba2ddd917208e814d809912c0.png";
import imgVector from "figma:asset/7e11e5e22c09276f736ec97d16fa6f812c666701.png";
import { motion } from "framer-motion";

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[579px] left-0 pointer-events-none rounded-[10px] top-0 w-[458px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[10px] size-full" src={imgRectangle1} />
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 rounded-[10px]" />
      </div>
      <div className="absolute h-[579px] left-[501px] rounded-[10px] top-[375px] w-[458px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle2} />
      </div>
      <div className="absolute h-[284px] left-[300px] top-[412px] w-[315px]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" height="284" src={imgVector} width="315" />
      </div>
      <motion.div
        className="absolute left-[501px] top-[195px]"
        animate={{ x: [-10, 10, -10] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="relative">
          <div className="bg-white h-[113px] rounded-[10px] w-[458px]">
            <div aria-hidden="true" className="absolute border-[#cb913a] border-[5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
          </div>
          <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[24px] not-italic text-[#cb913a] text-[64px] text-nowrap top-[45px] whitespace-pre">20K</p>
          <div className="absolute flex h-[98.02px] items-center justify-center left-[170px] top-[6.99px] w-0" style={{ "--transform-inner-width": "98.015625", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[270deg]">
              <div className="h-0 relative w-[98.02px]">
                <div className="absolute bottom-0 left-0 right-0 top-[-3px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99 3">
                    <line id="Line 4" stroke="var(--stroke-0, #CB913A)" strokeWidth="3" x2="98.0204" y1="1.5" y2="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[213px] not-italic text-[#cb913a] text-[24px] text-nowrap top-[45px] whitespace-pre">Complete Project</p>
        </div>
      </motion.div>
    </div>
  );
}