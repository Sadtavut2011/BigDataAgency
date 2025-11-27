function DataErrors() {
  return (
    <div className="absolute contents left-[944px] top-[285px]" data-name="Data errors">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1065px] not-italic text-[36px] text-black text-center text-nowrap top-[371px] translate-x-[-50%] whitespace-pre">DATA ERRORS</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1065px] not-italic text-[64px] text-black text-center text-nowrap top-[285px] translate-x-[-50%] whitespace-pre">60%</p>
      <div className="absolute h-0 left-[945px] top-[362px] w-[242px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 242 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" x2="242" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Cost() {
  return (
    <div className="absolute contents left-[541px] top-[285px]" data-name="cost">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[662px] not-italic text-[36px] text-black text-center text-nowrap top-[371px] translate-x-[-50%] whitespace-pre">COST</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[662px] not-italic text-[64px] text-black text-center text-nowrap top-[285px] translate-x-[-50%] whitespace-pre">70%</p>
      <div className="absolute h-0 left-[541px] top-[362px] w-[242px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 242 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" x2="242" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Time() {
  return (
    <div className="absolute contents left-[139px] top-[285px]" data-name="time">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[260px] not-italic text-[36px] text-black text-center top-[371px] translate-x-[-50%] w-[132px]">TIME</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[260px] not-italic text-[64px] text-black text-center text-nowrap top-[285px] translate-x-[-50%] whitespace-pre">70%</p>
      <div className="absolute h-0 left-[139px] top-[362px] w-[242px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 242 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" x2="242" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <DataErrors />
      <Cost />
      <Time />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[253px] not-italic text-[64px] text-black text-center text-nowrap top-[57px] translate-x-[-50%] whitespace-pre">Reduce</p>
    </div>
  );
}