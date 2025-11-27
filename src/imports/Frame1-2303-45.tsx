import imgRectangle21 from "figma:asset/a5b2b2b19aca1481ff0f9a77b773dbf3ebe49afe.png";
import imgRectangle22 from "figma:asset/762f91fda7dad2013defec4a3b3380e70728ab12.png";
import imgRectangle23 from "figma:asset/f32c048d3baf531b7428fe619d8f641a9e8c2337.png";

export default function Frame() {
  return (
    <div className="relative size-full">
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