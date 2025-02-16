import getBase from "@/app/_lib/util/getBase";
import { WorkInfoResponse } from "@/app/api/work/type";

export default async function getWorkInfo(workId: string) {
  const base = getBase();
  const url = new URL(`/api/work/${workId}/info`, base);
  const res = await fetch(url, { cache: "no-store" });
  const info: WorkInfoResponse = await res.json();
  return info;
}
