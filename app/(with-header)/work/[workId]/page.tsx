import Images from "@/app/_app-parts/Common/Images";
import ContainerBox from "@/app/_components/ContainerBox";
import allPagesFetch from "./fetcher/allPagesFetch";
import getWorkInfo from "@/app/_lib/common-fetcher/workInfo";
import Button from "@/app/_components/Button";

interface ParamsType {
  params: Promise<{
    workId: string;
  }>;
}

export default async function Page(props: ParamsType) {
  const params = await props.params;

  const {
    workId
  } = params;

  const workInfo = await getWorkInfo(workId);
  const pages = await allPagesFetch(workId);
  return (
    <ContainerBox>
      <p>タイトル: {workInfo.title}</p>
      <p>作者: {workInfo.workArtists.map((v) => v?.name).join(", ")}</p>
      <p>
        タグ:{" "}
        {workInfo.workTags
          .map(
            (v) => v?.sexual && (v.sexual === "female" ? "♀" : "♂") + v?.name
          )
          .join(", ")}
      </p>
      <Images images={pages} />
    </ContainerBox>
  );
}
