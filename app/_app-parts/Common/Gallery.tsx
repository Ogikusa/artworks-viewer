"use client";
import { WorkInfo } from "@/app/api/work/type";
import Image from "next/image";
import Link from "next/link";

export default function Gallery({
  images,
  quality,
  widthResolution = 150,
  width = 300,
}: {
  images: WorkInfo[];
  quality?: number;
  widthResolution?: number;
  width?: number;
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 my-2">
      {images.map((workInfo) => (
        <Link href={workInfo.viewerURL} key={workInfo.workURL}>
          <div className="w-full h-0 pb-[100%] relative">
            <Image
              className="absolute inset-0 w-full h-full object-cover"
              style={{ width }}
              src={workInfo.thumbnail?.url || ""}
              alt={workInfo.title || "サムネイル"}
              width={widthResolution}
              height={workInfo.thumbnail?.height ?? 0 % widthResolution}
              quality={quality}
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-300 text-white text-xl flex justify-center items-center p-1">
              {workInfo.title}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
