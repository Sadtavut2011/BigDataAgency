import imgRectangle25 from "figma:asset/a10a1694f5ad1236f7ecc180fad802b8a32dce4f.png";
import imgRectangle24 from "figma:asset/23960b93573dfea47721f9828b739d1bb828394e.png";
import imgRectangle21 from "figma:asset/2700e4d30c25e3bacde346284b3b6f6c296bbace.png";
import imgRectangle22 from "figma:asset/a1538c5ddc453ca55b48b97a8043cf3efdcac708.png";
import imgRectangle23 from "figma:asset/367cd00ee29321b2c0852acdca97a74a1873b01e.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute blur-[2.5px] filter h-[354px] left-0 rounded-[30px] top-[68px] w-[531px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgRectangle25} />
      </div>
      <div className="absolute blur-[2.5px] filter h-[383px] left-[57px] rounded-[30px] top-[54px] w-[575px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgRectangle24} />
      </div>
      <div className="absolute blur-[2.5px] filter h-[421px] left-[113px] rounded-[30px] top-[34px] w-[632px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgRectangle21} />
      </div>
      <div className="absolute h-[460px] left-[calc(50%+25px)] top-[15px] translate-x-[-50%] w-[690px]">
        <div className="absolute inset-[-1.09%_-0.72%]">
          <img alt="" className="block max-w-none size-full" height="470" src={imgRectangle22} width="700" />
        </div>
      </div>
      <div className="absolute h-[490px] left-[251px] rounded-[30px] top-0 w-[735px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgRectangle23} />
      </div>
    </div>
  );
}