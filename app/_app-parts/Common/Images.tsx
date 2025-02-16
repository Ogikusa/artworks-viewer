import Image from "next/image";
import Link from "next/link";

export interface WorkInfo {
  name?: string;
  anchorURL: string;
  url: string;
  width: number;
  height: number;
}

export default function Images({
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
    <div className="flex flex-wrap">
      {images.map((workInfo) => (
        <Link href={workInfo.anchorURL} key={workInfo.url}>
          <div className="w-48 h-96 flex items-center justify-center flex-col">
            <Image
              style={{ width }}
              src={workInfo.url}
              alt={workInfo?.name || "サムネイル"}
              width={widthResolution} //TODO これって結局どうすればいいんだ
              height={workInfo.height % widthResolution}
              quality={quality}
            />
            {workInfo.name && <span>{workInfo.name}</span>}
          </div>
        </Link>
      ))}
    </div>
  );
}
