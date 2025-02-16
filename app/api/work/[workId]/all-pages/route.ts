import { prisma } from "@/app/_lib/prisma/client";
import { NextResponse } from "next/server";

interface ParamsType {
  params: Promise<{
    workId: string;
  }>;
}

export async function GET(request: Request, props: ParamsType) {
  const params = await props.params;

  const {
    workId
  } = params;

  const images = await prisma.workImage.findMany({
    where: { workId },
  });
  const sortedImages = images.sort((imageA, imageB) => {
    if (imageA.index === imageB.index) return 0;
    return imageA.index > imageB.index ? 1 : -1;
  });

  const res = sortedImages.map((info) => {
    const { width, height, index } = info;
    return {
      width,
      height,
      index: index + 1, //zero starting into one starting
    };
  });

  return NextResponse.json(res);
}
