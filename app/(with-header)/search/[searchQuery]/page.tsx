import ContainerBox from "@/app/_components/ContainerBox";
import searchFetch from "./fetcher/searchFetch";
import Images from "@/app/_app-parts/Common/Images";
import NoWorksFound from "./components/NoWorksFound";
import Gallery from "@/app/_app-parts/Common/Gallery";

export default async function Page(
  props: {
    params: Promise<{ searchQuery: string }>;
  }
) {
  const params = await props.params;

  const {
    searchQuery
  } = params;

  const works = await searchFetch({ title: [searchQuery] });
  if(works.length === 0) return <NoWorksFound query={decodeURIComponent(searchQuery)} />;
  return (
    <ContainerBox>
      <Gallery images={works} />
    </ContainerBox>
  );
}
