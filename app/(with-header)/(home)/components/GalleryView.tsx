import imageThumbnailsFetch from "../fetcher/imageThumbnailsFetch";
import Gallery from "@/app/_app-parts/Common/Gallery";

export default async function GalleryView() {
  const data = shuffle(await imageThumbnailsFetch());
  return (
    <div>
      <Gallery images={data} quality={25} widthResolution={140} />
    </div>
  );
}

function shuffle<T>(array: T[]): T[] {
  let m = array.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [array[m], array[i]] = [array[i], array[m]];
  }
  return array;
}
