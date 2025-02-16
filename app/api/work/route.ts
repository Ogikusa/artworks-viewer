import { prisma } from "@/app/_lib/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { WorkInfo } from "./type";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const searchQuery = req.nextUrl.searchParams.get("q") ?? undefined;
  const works = await prisma.work.findMany({
    where: {
      title: {
        contains: searchQuery ? decodeURIComponent(searchQuery) : undefined,
      },
    },
  });
  const workInfos: WorkInfo[] = [];
  for (const work of works) {
    const workInfo = await workToWorkInfo(work);
    if (!workInfo) continue;
    workInfos.push(workInfo);
  }
  return NextResponse.json(workInfos);
}

type Work = {
  id: string;
  title: string;
  visibility: string;
  viewCount: number;
  rating: number;
  seriesId: string | null;
  folderName: string;
};

async function workToWorkInfo(work: Work): Promise<WorkInfo | undefined> {
  const imageRow = await prisma.workImage.findFirst({
    where: { index: 1, workId: work.id },
  });
  if (!imageRow) return undefined;
  return {
    id: work.id,
    title: work.title,
    workURL: `/work/${work.id}`,
    viewerURL: `/viewer/${work.id}#1`,
    thumbnail: {
      url: `/api/img/${work.id}/1`,
      width: imageRow.width,
      height: imageRow.height,
    },
  };
}