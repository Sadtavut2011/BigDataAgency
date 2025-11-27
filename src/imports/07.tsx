import imgFrame5 from "figma:asset/dda8a1f1cc661af92915e994c6af49dc12169bcf.png";

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[30px] items-start left-[51px] not-italic text-black top-[42px] w-[438px]">
      <p className="leading-[normal] relative shrink-0 text-[24px] w-full">TVOP IDA BI DASHBOARD</p>
      <div className="leading-[normal] relative shrink-0 text-[16px] w-full">
        <p className="mb-0">A Business Intelligence (BI) dashboard solution designed to transform complex raw data into easy-to-understand, interactive visual reports. It allows users to track Key Performance Indicators (KP|s), analyze trends, and quickly discover insights.</p>
        <p>Customizable for various objectives, from monitoring operational data to performing strategic analysis, this platform empowers organizations to make precise and timely data-driven decisions.</p>
      </div>
    </div>
  );
}

function Description() {
  return (
    <div className="absolute bg-white bottom-0 left-[14.92%] overflow-clip right-[50.79%] rounded-[30px] top-0" data-name="description">
      <Frame1 />
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
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[40px] text-nowrap text-white whitespace-pre">07</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bottom-0 left-[49.21%] right-0 rounded-[30px] top-0">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgFrame5} />
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="07">
      <Description />
      <Number />
      <Frame />
    </div>
  );
}