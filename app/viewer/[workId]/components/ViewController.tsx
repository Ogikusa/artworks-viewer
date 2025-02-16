import Link from "next/link";

interface PropsType {
  galleryURL: string;
  currentPage: number;
}

export default function ViewController({ galleryURL, currentPage }: PropsType) {
  return (
    <div className="w-full h-full">
      <Link href={galleryURL}>ギャラリーへ戻る</Link>
      {currentPage}
    </div>
  );
}
