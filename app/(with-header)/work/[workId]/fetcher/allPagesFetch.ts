import getBase from "@/app/_lib/util/getBase";
import { AllPagesResponse } from "@/app/api/work/type";

export default async function allPagesFetch(workId: string) {
  const base = getBase();
  const url = new URL(`/api/work/${workId}/all-pages`, base);
  const res = await fetch(url, { cache: "no-store" });
  const pages: AllPagesResponse = await res.json();
  const pagesWithURLs = pages.map((v) => {
    return {
      ...v,
      anchorURL: `/viewer/${workId}#${v.index}`,
      url: `/api/img/${workId}/${v.index}`,
    };
  });
  return pagesWithURLs;
}
