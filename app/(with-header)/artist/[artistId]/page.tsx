import ContainerBox from "@/app/_components/ContainerBox";

export default async function Artist({
  params,
}: {
  params: Promise<{ artistId: string }>;
}) {
  const { artistId } = await params;
  return <ContainerBox></ContainerBox>;
}
