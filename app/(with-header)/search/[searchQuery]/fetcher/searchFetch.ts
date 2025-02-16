import getBase from "@/app/_lib/util/getBase";
import { AllWorksResponse } from "@/app/api/work/type";

interface SearchQuery {
  title: string[];
}

export default async function searchFetch(query: SearchQuery) {
  const base = getBase();
  const url = new URL("/api/work", base);
  //TODO 複数検索可能にする
  url.searchParams.append("q", query.title[0]);
  const res = await fetch(url, { cache: "no-store" });
  const workInfos: AllWorksResponse = await res.json();
  return workInfos;
};
