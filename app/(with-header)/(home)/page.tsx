import ContainerBox from "@/app/_components/ContainerBox";
import { Metadata } from "next";
import GalleryView from "./components/GalleryView";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "ギャラリー",
};

export default function Gallery() {
  return <GalleryView />;
}
 