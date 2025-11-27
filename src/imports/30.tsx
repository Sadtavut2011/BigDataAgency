import imgRectangle5 from "figma:asset/48688d82f62c92f6a6dac06b4f9a08b45268f31b.png";

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[30px] items-start left-[51px] not-italic text-black top-[42px] w-[438px]">
      <p className="leading-[normal] relative shrink-0 text-[24px] w-full">Sriphat Staff Application</p>
      <div className="leading-[normal] relative shrink-0 text-[16px] w-full">
        <p className="mb-0">{`Sriphat Staff Management & Medical Cost Estimation System`}</p>
        <p>A comprehensive web application designed for end-to-end management of medical personnel. The system seamlessly integrates workflows—from employee data management and QR-code time attendance to a Smart Cost Estimation module that accurately estimates medical expenses (Surgery/ICU) and calculates insurance benefits. It also includes gamification features to support learning and encourage internal engagement within the organization.</p>
      </div>
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
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[40px] text-nowrap text-white whitespace-pre">30</p>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute bottom-0 left-[49.21%] right-0 top-0" data-name="30">
      <div className="absolute inset-0 rounded-[30px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
          <img alt="" className="absolute h-[200.63%] left-0 max-w-none top-[-60.58%] w-full" src={imgRectangle5} />
        </div>
      </div>
    </div>
  );
}

export default function Component1() {
  return (
    <div className="relative size-full" data-name="30">
      <Description />
      <Number />
      <Component />
    </div>
  );
}