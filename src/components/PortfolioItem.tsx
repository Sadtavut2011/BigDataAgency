import { motion } from "motion/react";

interface PortfolioItemProps {
  title: string;
  description: string;
  timeline: string;
  image: string;
  number: string;
  isActive?: boolean;
}

export function PortfolioItem({ title, description, timeline, image, number, isActive = false }: PortfolioItemProps) {
  return (
    <div className="relative h-[564px] w-full">
      {/* Number indicators on the left */}
      <div className="absolute left-0 top-[32px] w-[75px] z-10">
        <div className="size-[75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 75">
            <circle cx="37.5" cy="37.5" fill={isActive ? "black" : "#A8A8A8"} r="37.5" />
          </svg>
          <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[50%] -translate-x-1/2 not-italic text-[40px] text-nowrap text-white top-[14px] whitespace-pre">
            {number}
          </p>
        </div>
      </div>

      {/* Text content box */}
      <div className="absolute bg-white h-[564px] left-[115px] overflow-clip rounded-[30px] top-0 w-[540px] shadow-lg">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[51px] not-italic text-[24px] text-black top-[42px] w-[438px]">
          {title}
        </p>
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[51px] not-italic text-[16px] text-black top-[101px] w-[438px]">
          {description}
        </p>
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[53px] not-italic text-[12px] text-black text-nowrap top-[514px] whitespace-pre">
          Timeline
        </p>
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[457px] not-italic text-[12px] text-black text-nowrap top-[514px] whitespace-pre">
          {timeline}
        </p>
        <div className="absolute h-0 left-[53px] top-[504px] w-[434.001px]">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 434 1">
              <line stroke="#99A1AF" x2="434.001" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Image box */}
      <div className="absolute h-[564px] left-[655px] rounded-[30px] top-0 w-[800px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
          <div className="absolute bg-white inset-0 rounded-[30px]" />
          <img 
            alt={title} 
            className="absolute max-w-none object-cover rounded-[30px] size-full" 
            src={image} 
          />
        </div>
      </div>
    </div>
  );
}
