import Image from "next/image";

export default function Header() {
  return (
      <div className="px-5 py-24 bg-white/35">
        <div className="p-7 bg-transparent/15">
          <div className="flex items-end justify-between relative">
            <div className="bg-transparent/15 h-[20px] w-[260px] absolute p-0 right-[118px] top-[-70px]"></div>
            <div className="flex items-start">
              <Image
                src="/actions.svg"
                alt="Vercel Logo"
                className="mr-[40px]"
                width={182}
                height={45.5}
                priority
              />
              <Image
                src="/c4.png"
                alt="Vercel Logo"
                width={703.4}
                height={135.72}
                priority
              />
            </div>
            <Image
              src="/KRET.svg"
              alt="Vercel Logo"
              className="absolute bottom-[7px] right-[82px]"
              width={372}
              height={70}
              priority
            />
          </div>
          <h1 className="p-[82px] pb-10">
            Посмотрите фото
            <br /> и найдите свое место в зале
          </h1>
        </div>
      </div>
  );
}
