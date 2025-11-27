import imgFrame3 from "figma:asset/a5b2b2b19aca1481ff0f9a77b773dbf3ebe49afe.png";

function Description() {
  return (
    <div className="absolute bg-white bottom-0 left-[14.92%] overflow-clip right-[50.79%] rounded-[30px] top-0" data-name="description">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[51px] not-italic text-[24px] text-black top-[42px] w-[438px]">PEA Service D (WOM)</p>
      <div className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[51px] not-italic text-[16px] text-black top-[101px] w-[438px]">
        <p className="mb-0">An all-in-one management platform for service-based businesses that combines essential tools in</p>
        <p>one place. It enables business owners to manage customer appointments via a calendar, analyze key business data like revenue and popular services through a BI (Business Intelligence) dashboard, and manage customer data (CRM) to view service histories. This solution streamlines complex workflows, increases operational efficiency, and leverages data for professional business growth.</p>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[53px] not-italic text-[12px] text-black text-nowrap top-[514px] whitespace-pre">Timeline</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[457px] not-italic text-[12px] text-black text-nowrap top-[514px] whitespace-pre">2024</p>
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
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[40px] text-nowrap text-white whitespace-pre">05</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bottom-0 left-[49.21%] right-0 rounded-[30px] top-0">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgFrame3} />
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="05">
      <Description />
      <Number />
      <Frame />
    </div>
  );
}