import getBase from "@/app/_lib/util/getBase";
import { AllWorksResponse } from "@/app/api/work/type";

export default async function imageThumbnailsFetch() {
  const base = getBase();
  const url = new URL("/api/work", base);
  const res = await fetch(url, { cache: "no-store" });
  const workInfos: AllWorksResponse = await res.json();
  // HACK めんどくさいので ! で強制的にやってる
  return workInfos;
};
