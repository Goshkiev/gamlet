import Image from "next/image";

export const Decor = () => {
  return (
    <div className="relative h-full flex justify-between mt-[100px]">
      <div className="relative left-[-130px]">
        <Image
          src="/circle.svg"
          alt="decor-element-circle"
          width={614}
          height={674}
          priority
        />
      </div>
      <div>
        <Image
          src="/RDX.png"
          alt="decor-element-RDX"
          width={532}
          height={120}
          priority
        />
      </div>
    </div>
  );
};
