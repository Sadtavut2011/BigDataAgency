import imgRectangle3 from "figma:asset/e93b51b31741b43cb889c8f5394c8be873e522f1.png";

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[30px] items-start leading-[normal] left-[51px] not-italic text-black top-[42px] w-[438px]">
      <p className="relative shrink-0 text-[24px] w-full">DOAE-Website</p>
      <p className="relative shrink-0 text-[16px] w-full">Enhance government organizational communication with a fully integrated Internet and Intranet website system, developed on the WordPress platform and powered by a high-performance cloud server with auto-scaling capabilities. The solution features a modern, responsive design that works seamlessly across all devices and complies with the Government Website Standard 2.0 and WCAG 2.0 AA accessibility standards, along with advanced security mechanisms.</p>
    </div>
  );
}

function Description() {
  return (
    <div className="absolute bg-white bottom-0 left-[14.92%] overflow-clip right-[50.79%] rounded-[30px] top-0" data-name="description">
      <Frame />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[53px] not-italic text-[12px] text-black text-nowrap top-[514px] whitespace-pre">Timeline</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[457px] not-italic text-[12px] text-black text-nowrap top-[514px] whitespace-pre">2021</p>
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
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[40px] text-nowrap text-white whitespace-pre">32</p>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute bottom-0 left-[49.21%] right-0 top-0" data-name="32">
      <div className="absolute inset-0 rounded-[30px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgRectangle3} />
      </div>
    </div>
  );
}

export default function Component1() {
  return (
    <div className="relative size-full" data-name="32">
      <Description />
      <Number />
      <Component />
    </div>
  );
}