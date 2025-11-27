import imgFrame14 from "figma:asset/6999bab882f817d1ce1511a8624cb26536590c73.png";

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[30px] items-start left-[51px] not-italic text-black top-[42px] w-[438px]">
      <p className="leading-[normal] relative shrink-0 text-[24px] w-full">SCMC Dashboard (Digital Twin)</p>
      <div className="leading-[normal] relative shrink-0 text-[16px] w-full">
        <p className="mb-0">A centralized Digital Twin dashboard for the Smart Campus Management Center (SCMC) that consolidates and displays key data from across the university in real-time on realistic 3D and 2D maps.</p>
        <p>{`Administrators can monitor comprehensive insights on a single screen, from utility data for each building (electricity/water consumption) and environmental conditions (PM 2.5/temperature) to the number of personnel in an area and the status of security systems. This solution provides management with a complete overview for data-driven decision-making and maximizes the efficiency of the university's resource management.`}</p>
      </div>
    </div>
  );
}

function Description() {
  return (
    <div className="absolute bg-white bottom-0 left-[14.92%] overflow-clip right-[50.79%] rounded-[30px] top-0" data-name="description">
      <Frame />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[53px] not-italic text-[12px] text-black text-nowrap top-[514px] whitespace-pre">Timeline</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[457px] not-italic text-[12px] text-black text-nowrap top-[514px] whitespace-pre">2020</p>
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
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[40px] text-nowrap text-white whitespace-pre">16</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bottom-0 left-[49.21%] right-0 rounded-[30px] top-0">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgFrame14} />
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="16">
      <Description />
      <Number />
      <Frame1 />
    </div>
  );
}