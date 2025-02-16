import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";
import { prisma } from "@/app/_lib/prisma/client";
import getWorksFolder from "@/app/_lib/util/getWorksFolder";

interface ParamsType {
  params: Promise<{
    workId: string;
    page: string;
  }>;
}

export async function GET(request: Request, props: ParamsType) {
  const params = await props.params;

  const {
    workId,
    page
  } = params;

  const worksFolder = getWorksFolder();
  const work = await prisma.work.findUnique({ where: { id: workId } });
  if (!work) {
    return new NextResponse(null, { status: 404 });
  }
  const files = fs.readdirSync(path.join(worksFolder, work.folderName));
  const file = files.filter((file) => file.split(".").at(0) == page)?.at(0);
  if (!file) {
    console.warn(`Not found in ${workId} at ${page}`);
    return new NextResponse(null, { status: 404 });
  }
  const fileExt = path.extname(file);
  const fileBuffer = fs.readFileSync(
    path.join(worksFolder, work.folderName, file)
  );
  const headers = new Headers();
  headers.append("Content-Type", `image/${fileExt}`);
  headers.append("Content-Disposition", "inline");
  return new NextResponse(fileBuffer, { headers });
}
