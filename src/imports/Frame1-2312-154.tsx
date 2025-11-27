import imgRectangle23 from "figma:asset/9e66c824bf50aaea1cc124ffa4cdb5dd71fa5a2e.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[490px] left-[251px] rounded-[30px] top-0 w-[735px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgRectangle23} />
      </div>
    </div>
  );
}