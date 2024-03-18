"use client";
import { MotionDiv } from "@/components/Motion";
import Image from "next/image";
import Link from "next/link";
import { Hall } from "@/components/Hall";
import Search, { SearchProp } from "@/components/Search";
import { useState } from "react";

async function getData() {
  const res = await fetch("http://localhost:3000/api/viewers");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Page() {

  const [selectedOption, setSelectedOption] = useState<SearchProp | null>(null);

  return (
    <main className="bg-white flex min-h-screen flex-col items-center">
      <MotionDiv
        className="p-32 h-[1500px] w-full bg-white flex flex-col "
        initial="hidden"
        animate="visible"
        transition={{
          delay: 0.35,
          ease: "easeInOut",
          duration: 0.5,
        }}
        viewport={{ amount: 0 }}
      >
        <MotionDiv
          className="flex items-center"
          variants={{
            hidden: { opacity: 0, x: -507 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{
            ease: "easeInOut",
            duration: 1,
          }}
          viewport={{ amount: 0 }}
        >
          <MotionDiv
            className="flex items-center justify-start"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 1,
              ease: "easeInOut",
              duration: 0.5,
            }}
            viewport={{ amount: 0 }}
          >
            <Link href="/">
              <Image
                style={{
                  width: 180,
                  height: 180,
                  zIndex: 10,
                  position: "relative",
                }}
                src="/back-w.svg"
                alt="Vercel Logo"
                width={0}
                height={0}
                priority
              />
            </Link>
          </MotionDiv>

          <Image
            className="relative left-[-178px] bottom-[-25px]"
            style={{ width: 1300, height: 200 }}
            src="/vectors-w.svg"
            alt="Vercel Logo"
            width={0}
            height={0}
            priority
          />
          <Image
            style={{ width: 387, height: 86 }}
            src="/KRET-b.svg"
            alt="Vercel Logo"
            width={0}
            height={0}
            priority
          />
        </MotionDiv>
        <div className="flex mt-[50px] mb-[100px]">
          <h2 className="text-black">
            Вы можете найти свое
            <br />
            место на <span className="text-light-green">карте сайта</span>
          </h2>
        </div>
        <Search
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </MotionDiv>

      <div className="pb-0 bg-another-gray w-full flex justify-center h-[2340px]">
        <div className="bg-white relative w-[1656px]">
          <div className="top-[-350px] absolute">
            <Hall activeTable={selectedOption?.value} />
          </div>
        </div>
      </div>
    </main>
  );
}
