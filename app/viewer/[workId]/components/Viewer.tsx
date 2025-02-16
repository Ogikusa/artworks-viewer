"use client";
import useHash from "@/app/_lib/util/useHash";
import Image from "next/image";
import ViewController from "./ViewController";

export default function Viewer({
  workId,
  images,
}: {
  workId: string;
  images: {
    url: string;
    index: number;
    width: number;
    height: number;
  }[];
}) {
  const [hash, setHash] = useHash();
  const hashValue = hash.replace("#", "");
  const hashNum = Number.parseInt(hashValue);
  if (Number.isNaN(hashNum)) return "Invalid Page Number";
  const currentPage = images[hashNum - 1];
  return (
    <div className="h-screen w-screen">
      <div
        className="w-full h-[5%] shadow-md"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <ViewController
          galleryURL={`/work/${workId}`}
          currentPage={currentPage.index}
        />
      </div>
      <div className="w-full h-[1%]" />
      <div className="w-full h-[94%] flex justify-center items-center relative overflow-hidden">
        <div className="h-full w-auto">
          <Image
            className="h-full w-full"
            src={currentPage.url}
            width={600}
            height={currentPage.height % 600}
            quality={50}
            alt={currentPage.url}
          />
        </div>
        <div
          className="w-1/6 h-full top-0 left-0 absolute hover:bg-black opacity-5"
          onClick={(e) => {
            const nextPage = hashNum - 1;
            if (nextPage < 1) return;
            setHash("#" + nextPage);
          }}
        />
        <div
          className="w-5/6 h-full top-0 left-1/4 absolute"
          onClick={(e) => {
            const nextPage = hashNum + 1;
            if (nextPage > images.length) return;
            setHash("#" + nextPage);
          }}
        />
      </div>
    </div>
  );
}
