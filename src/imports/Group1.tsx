import imgFrame2 from "figma:asset/800ea2d2bba4ecb7a2084f7a196d3fdc9639c12e.png";

function Frame() {
  return (
    <div className="absolute h-[564px] left-[775px] rounded-[30px] top-0 w-[800px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
        <div className="absolute bg-white inset-0 rounded-[30px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[30px] size-full" src={imgFrame2} />
      </div>
    </div>
  );
}

function TextProjact() {
  return (
    <div className="absolute bg-white h-[564px] left-[235px] overflow-clip rounded-[30px] top-0 w-[540px]" data-name="text-projact">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[51px] not-italic text-[24px] text-black top-[42px] w-[438px]">Doctorkeng Pain Monitoring</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[51px] not-italic text-[16px] text-black top-[101px] w-[438px]">{`A comprehensive digital platform for managing the fund for indigent patients, which connects three core components: a public-facing website for public relations and receiving donations, a case management system for staff to track patient assistance, and an executive dashboard for viewing the fund's overall statistics, such as donation totals and the number of patients under care. This solution helps to increase transparency and efficiency in fundraising, case management, and the systematic administration of the fund. `}</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[53px] not-italic text-[12px] text-black text-nowrap top-[514px] whitespace-pre">Timeline</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[457px] not-italic text-[12px] text-black text-nowrap top-[514px] whitespace-pre">2025</p>
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

function Frame1() {
  return (
    <div className="h-[76px] relative shrink-0 w-full">
      <div className="absolute left-0 size-[75px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 75">
          <g id="Ellipse 1">
            <circle cx="37.5" cy="37.5" fill="var(--fill-0, #A8A8A8)" r="37.5" />
            <circle cx="37.5" cy="37.5" fill="var(--fill-1, #A8A8A8)" r="37.5" />
          </g>
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[13px] not-italic text-[40px] text-nowrap text-white top-[14px] whitespace-pre">27</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[76px] relative shrink-0 w-full">
      <div className="absolute left-0 size-[75px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 75">
          <circle cx="37.5" cy="37.5" fill="var(--fill-0, #A8A8A8)" id="Ellipse 1" r="37.5" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[12px] not-italic text-[40px] text-nowrap text-white top-[14px] whitespace-pre">28</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[76px] relative shrink-0 w-full">
      <div className="absolute left-0 size-[75px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 75">
          <circle cx="37.5" cy="37.5" fill="var(--fill-0, black)" id="Ellipse 1" r="37.5" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[14px] not-italic text-[40px] text-nowrap text-white top-[14px] whitespace-pre">01</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[76px] relative shrink-0 w-full">
      <div className="absolute left-0 size-[75px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 75">
          <circle cx="37.5" cy="37.5" fill="var(--fill-0, #A8A8A8)" id="Ellipse 1" r="37.5" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[11px] not-italic text-[40px] text-nowrap text-white top-[14px] whitespace-pre">02</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[76px] relative shrink-0 w-full">
      <div className="absolute left-0 size-[75px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 75">
          <g id="Ellipse 1">
            <circle cx="37.5" cy="37.5" fill="var(--fill-0, #A8A8A8)" r="37.5" />
            <circle cx="37.5" cy="37.5" fill="var(--fill-1, #A8A8A8)" r="37.5" />
          </g>
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[11px] not-italic text-[40px] text-nowrap text-white top-[14px] whitespace-pre">03</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[30px] items-start left-0 top-[32px] w-[75px]">
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Frame />
      <TextProjact />
      <Frame6 />
    </div>
  );
}