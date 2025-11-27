import imgFrame25 from "figma:asset/b1ddc4c7d7f41a970f225975bf4473d4e355d7a1.png";

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[30px] items-start leading-[normal] left-[51px] not-italic text-black top-[42px] w-[438px]">
      <p className="relative shrink-0 text-[24px] w-full">Mythopoeia</p>
      <p className="relative shrink-0 text-[16px] w-full">{`Game Character Design inspiration from world of Middle-Earth that well known around the world.We have evolution system and dress up monster including player avatars. Gameplay is use the Monster for fighting with other gamer in the "Tirn Base Board Game" by toss the dice. In addition to training the monster with "AR Technology" by the magic card.`}</p>
    </div>
  );
}

function Description() {
  return (
    <div className="absolute bg-white bottom-0 left-[14.92%] overflow-clip right-[50.79%] rounded-[30px] top-0" data-name="description">
      <Frame />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[53px] not-italic text-[12px] text-black text-nowrap top-[514px] whitespace-pre">Timeline</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[457px] not-italic text-[12px] text-black text-nowrap top-[514px] whitespace-pre">2014</p>
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
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[40px] text-nowrap text-white whitespace-pre">27</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bottom-0 left-[49.21%] right-0 rounded-[30px] top-0">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgFrame25} />
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="27">
      <Description />
      <Number />
      <Frame1 />
    </div>
  );
}