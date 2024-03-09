import Image from "next/image";

export const Footer = () => {
  return (
    <div className="relative">
      <div className="absolute w-[2114px] left-[-116px] top-[-918px]">
        <Image
          src="/white-elements.svg"
          alt="decor-elements"
          width={2064}
          height={955}
          priority
        />
      </div>
      <div className="absolute left-[180px] top-[-660px] font-w-700 leading-[147px] text-10xl">
        КОСНИТЕСЬ
        <br />
        ЭКРАНА
      </div>
      <div className="absolute right-[-40px] top-[-918px]">
        <Image
          src="/touch-screen-btn.svg"
          alt="touch-element"
          width={614}
          height={674}
          priority
        />
      </div>
    </div>
  );
};
