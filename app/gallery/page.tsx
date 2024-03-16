// import React from "react";
// import { Viewer } from "@/types";
// 'use client'
import { MExoticImage } from "@/components/ExoticImage";
import { Viewer } from "@/types";
import LoadMore from "@/components/LoadMore";
import { MotionDiv } from "@/components/Motion";
import Image from "next/image";
import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import { fetchAnime } from "../action";
import Link from "next/link";
import { relative } from "path";
// interface IProps {
//   viewers: Viewer[];
// }

// const Hall = ({ viewers }: IProps) => {
//   return (
//     <main className="p-32">
//       <h1>My Gallery</h1>
//       <ul>
//         {viewers.map((viewer) => (
//           <li key={viewer.id}>
//             {viewer.name}
//             {viewer.seatNumber}
//             {viewer.tableNumber}
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// };

// export async function getServerSideProps() {
//   // Fetch data from an API, database, or file system
//   const res = await fetch("http://localhost:3000/api/viewers");
//   const viewers = await res.json();

//   return {
//     props: {
//       ...viewers,
//     },
//   };
// }

// export default Hall;

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

export default async function Page() {
  const { viewers } = await getData();

  const data = await fetchAnime(1);
  return (
    <main className="bg-secondPageBg flex min-h-screen flex-col items-center">
      <MotionDiv
        className="p-32 h-[834px] w-full bg-secondPageBg flex flex-col justify-between"
        variants={{
          visible: { backgroundColor: "#191919cc" },
        }}
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
          className="flex items-center justify-between"
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
                style={{ width: 180, height: 180,zIndex: 10, position: "relative" }}
                src="/back.svg"
                alt="Vercel Logo"
                width={0}
                height={0}
                priority
              />
            </Link>
          </MotionDiv>

          <Image
            className="relative left-[-217px] bottom-[-25px]"
            style={{ width: 1300, height: 200 }}
            src="/vectors.svg"
            alt="Vercel Logo"
            width={0}
            height={0}
            priority
          />
          <Image
            style={{ width: 387, height: 86 }}
            src="/KRET.svg"
            alt="Vercel Logo"
            width={0}
            height={0}
            priority
          />
        </MotionDiv>
        <div className="flex justify-between items-end">
          <h3>
            Отсканируйте <span className="text-light-green">qr-код</span>
            <br /> и скачайте фото из зала
            <br /> на свой телефон
          </h3>
          <div className="h-[400px] w-[400px] bg-white"></div>
        </div>
      </MotionDiv>

      <div className="w-full p-32 bg-secondPageBg flex flex-col items-center">
        <section className="w-full grid lg:grid-cols-3 gap-10">
          {data.map((item: AnimeProp, index: number) => (
            <AnimeCard key={item.id} anime={item} index={index} />
          ))}
        </section>
        <LoadMore />
      </div>
      {/* <ul>
        {viewers.map((viewer: Viewer) => (
          <li key={viewer.id}>
            {viewer.name}
            {viewer.seatNumber}
            {viewer.tableNumber}
          </li>
        ))}
      </ul> */}
    </main>
  );
}
