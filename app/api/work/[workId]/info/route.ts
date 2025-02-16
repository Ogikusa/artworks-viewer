import { prisma } from "@/app/_lib/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _req: NextRequest,
  props: { params: Promise<{ workId: string }> }
) {
  const params = await props.params;

  const { workId } = params;

  const work = await prisma.work.findUnique({
    where: { id: workId },
    select: {
      id: true,
      title: true,
      viewCount: true,
      visibility: true,
      rating: true,
      WorkArtist: true,
      WorkCharacters: true,
      WorkTag: true,
    },
  });
  if (!work) return new NextResponse(null, { status: 404 });
  const workArtists = [];
  // FIX: IDではなくそのままwhereでやってもいいのかもしれないもしくはincludesで検索するのもいいかもしれない
  for (const { artistId } of work.WorkArtist) {
    const artistRow = await prisma.artist.findUnique({
      where: { id: artistId },
    });
    workArtists.push(artistRow);
  }
  const workCharacters = [];
  for (const { charactersId } of work.WorkCharacters) {
    const charactersRow = await prisma.characters.findUnique({
      where: { id: charactersId },
    });
    workCharacters.push(charactersRow);
  }
  const workTags = [];
  for (const { tagId } of work.WorkTag) {
    const tagRow = await prisma.tag.findUnique({ where: { id: tagId } });
    workTags.push(tagRow);
  }

  return NextResponse.json({
    id: work.id,
    title: work.title,
    visibility: work.visibility,
    rating: work.rating,
    viewCount: work.viewCount,
    workArtists,
    workCharacters,
    workTags,
  });
}
