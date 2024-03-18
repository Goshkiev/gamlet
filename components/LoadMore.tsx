"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";

import { getPhotos } from "../app/action";
import AnimeCard, { AnimeProp } from "./AnimeCard";
import { ImageProps } from "@/types";
import Link from "next/link";
interface ILoadMore {
  next_cursor: string;
}
function LoadMore({ next_cursor }: ILoadMore) {
  const { ref, inView } = useInView();
  const [nextCursor, setNextCursor] = useState(next_cursor);
  const [data, setData] = useState<ImageProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (inView && nextCursor) {
      setIsLoading(true);
      // Add a delay of 500 milliseconds
      const delay = 500;

      const timeoutId = setTimeout(() => {
        getPhotos(nextCursor).then((res) => {
          setData([...data, ...res.photos]);
          setNextCursor(res.next_cursor);
        });

        setIsLoading(false);
      }, delay);

      // Clear the timeout if the component is unmounted or inView becomes false
      return () => clearTimeout(timeoutId);
    }
  }, [inView, data, isLoading, nextCursor]);
  // col-span-4 - 3 картинки
  // col-span-3 -4 картинки
  return (
    <>
      <section className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-3">
        {/* {data.map((item: AnimeProp, index: number) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))} */}
        {data.map(({ id, public_id, format, blurDataUrl }) => (
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
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          {inView && isLoading && nextCursor && (
            <Image
              src="./spinner.svg"
              alt="spinner"
              width={56}
              height={56}
              className="object-contain"
            />
          )}
        </div>
      </section>
    </>
  );
}

export default LoadMore;
