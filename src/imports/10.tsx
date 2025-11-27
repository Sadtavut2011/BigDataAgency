import imgFrame8 from "figma:asset/367cd00ee29321b2c0852acdca97a74a1873b01e.png";

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[30px] items-start leading-[normal] left-[51px] not-italic text-black top-[42px] w-[438px]">
      <div className="relative shrink-0 text-[24px] w-full">
        <p className="mb-0">SCMC (Smart Campus</p>
        <p>Management Center)</p>
      </div>
      <p className="relative shrink-0 text-[16px] w-full">An all-in-one smart command center for comprehensive surveillance and security management across the entire university. This system uses Al technology to analyze footage from CCTV cameras in conjunction with various sensors to automatically detect incidents-ranging from alerts for suspicious persons or vehicles, accidents, and heavy traffic, to environmental monitoring of factors like PM 2.5 dust and water levels. Upon detection, it instantly sends an alert with the location and corresponding images to the security team via the LINE application. This is done to enhance incident response efficiency and create a safer, smarter environment within the university.</p>
    </div>
  );
}

function Description() {
  return (
    <div className="absolute bg-white bottom-0 left-[14.92%] overflow-clip right-[50.79%] rounded-[30px] top-0" data-name="description">
      <Frame1 />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[53px] not-italic text-[12px] text-black text-nowrap top-[514px] whitespace-pre">Timeline</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[457px] not-italic text-[12px] text-black text-nowrap top-[514px] whitespace-pre">2018</p>
      <div className="absolute h-0 left-[53px] top-[504px] w-[434.001px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 434 1">
            <line id="Line 1" stroke="var(--stroke-0, #99A1AF)" x2="434.001" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Number() {
  return (
    <div className="absolute bg-black bottom-[86.7%] box-border content-stretch flex gap-[10px] items-center justify-center left-0 px-[11px] py-[13px] right-[95.24%] rounded-[37.5px] top-0" data-name="number">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[40px] text-nowrap text-white whitespace-pre">10</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bottom-0 left-[49.21%] right-0 rounded-[30px] top-0">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgFrame8} />
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="10">
      <Description />
      <Number />
      <Frame />
    </div>
  );
}