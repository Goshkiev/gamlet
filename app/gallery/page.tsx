import LoadMore from "@/components/LoadMore";
import { MotionDiv } from "@/components/Motion";
import Image from "next/image";
import { getPhotos } from "../action";
import Link from "next/link";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default async function Page() {
  const { photos, next_cursor } = await getPhotos();
  console.log("photos", photos);
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
                style={{
                  width: 180,
                  height: 180,
                  zIndex: 10,
                  position: "relative",
                }}
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

      <div className="mx-auto max-w-[1960px] p-4">
        <section className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-3">
          {photos.map(({ id, public_id, format, blurDataUrl }) => (
            <Link
              key={public_id}
              href={`/?photoId=${id}`}
              as={`/p/${id}`}
              // ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
              shallow
              className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
            >
              <Image
                alt="Next.js Conf photo"
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: "translate3d(0, 0, 0)" }}
                placeholder="blur"
                blurDataURL={blurDataUrl}
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
              />
            </Link>
          ))}
          {/* {data.map((item: AnimeProp, index: number) => (
            <AnimeCard key={item.id} anime={item} index={index} />
          ))} */}
        </section>
        <LoadMore next_cursor={next_cursor} />
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
