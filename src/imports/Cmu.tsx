import imgRectangle21 from "figma:asset/f32c048d3baf531b7428fe619d8f641a9e8c2337.png";
import imgRectangle22 from "figma:asset/d3e7eafc6d45ed7f3c236cfc5abc8fbbf43d1bcb.png";
import imgRectangle23 from "figma:asset/367cd00ee29321b2c0852acdca97a74a1873b01e.png";
import imgRectangle24 from "figma:asset/f341b8b6b5864a5899d0fdb386e2d9dcbe817fdc.png";

function Show() {
  return (
    <div className="absolute h-[490px] left-[453px] overflow-clip top-[174px] w-[873px]" data-name="show">
      <div className="absolute blur-[2.5px] filter h-[421px] left-0 rounded-[30px] top-[34px] w-[632px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgRectangle21} />
      </div>
      <div className="absolute h-[460px] left-[calc(50%-31.5px)] top-[15px] translate-x-[-50%] w-[690px]">
        <div className="absolute inset-[-1.09%_-0.72%]">
          <img alt="" className="block max-w-none size-full" height="470" src={imgRectangle22} width="700" />
        </div>
      </div>
      <div className="absolute h-[490px] left-[138px] rounded-[30px] top-0 w-[735px]">
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
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[34px] not-italic text-[20px] text-black text-nowrap top-[255px] whitespace-pre">SCMC (Smart Campus Management Center)</p>
    </div>
  );
}

export default function Cmu() {
  return (
    <div className="bg-white relative size-full" data-name="cmu">
      <Show />
      <Frame />
    </div>
  );
}