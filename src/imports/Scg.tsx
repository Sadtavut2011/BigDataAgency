import imgRectangle21 from "figma:asset/f32c048d3baf531b7428fe619d8f641a9e8c2337.png";
import imgRectangle22 from "figma:asset/f69a8b3894e0713c26b4bed118a1a0ab143b6dfd.png";
import imgRectangle23 from "figma:asset/367cd00ee29321b2c0852acdca97a74a1873b01e.png";
import imgRectangle24 from "figma:asset/1ead6aa56384a8a503e59b00cde177513cfc4df7.png";

function Show() {
  return (
    <div className="absolute h-[490px] left-[515px] top-[174px] w-[1576px]" data-name="show">
      <div className="absolute blur-[2.5px] filter h-[460px] left-0 rounded-[30px] top-[15px] w-[690px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgRectangle21} />
      </div>
      <div className="absolute h-[490px] left-[calc(50%-344.5px)] top-0 translate-x-[-50%] w-[735px]">
        <img alt="" className="block max-w-none size-full" height="490" src={imgRectangle22} width="735" />
      </div>
      <div className="absolute blur-[2px] filter h-[490px] left-[841px] rounded-[30px] top-0 w-[735px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgRectangle23} />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[rgba(153,161,175,0.4)] h-[510px] left-[72px] overflow-clip rounded-[50px] top-[164px] w-[501px]">
      <div className="absolute h-[104px] left-[85px] top-[89px] w-[313px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle24} />
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[34px] not-italic text-[24px] text-black text-nowrap top-[255px] whitespace-pre">SCG Logistics Management Platform</p>
    </div>
  );
}

export default function Scg() {
  return (
    <div className="bg-white relative size-full" data-name="SCG">
      <Show />
      <Frame />
    </div>
  );
}