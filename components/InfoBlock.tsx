import Image from "next/image";

interface IInfoBlock {
  prefix?: string;
  title: string;
  postfix?: string;
}

export const InfoBlock = ({ prefix, title, postfix }: IInfoBlock) => {
  return (
    <div className="w-[728px] h-[208px] flex">
      <div className="flex flex-col w-[51.5px] h-[100%] justify-between">
        <div className="bg-white h-[13px]"></div>
        <div className="flex flex-1">
          <div className="bg-white/35 w-full"></div>
          <div className="bg-white/35 w-full flex">
            <div className="bg-transparent/15 w-full"></div>
          </div>
        </div>
        <div className="bg-white w-[51.5px] h-[13px]"></div>
      </div>
      <div className="bg-white/35 w-full flex">
        <div className="bg-transparent/15 w-full py-7 px-2.5">
          <div className="flex flex-col">
            <span className="text-3xl">{prefix}</span>
            <span className="text-9xl uppercase tracking-[-.04em] leading-[96px]">{title}</span>
            <span className="text-xl">{postfix}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[51.5px] h-[100%] justify-between">
        <div className="bg-white h-[13px]"></div>
        <div className="flex flex-1">
          <div className="bg-white/35 w-full flex">
            <div className="bg-transparent/15 w-full"></div>
          </div>
          <div className="bg-white/35 w-full"></div>
        </div>
        <div className="bg-white w-[51.5px] h-[13px]"></div>
      </div>
    </div>
  );
};
