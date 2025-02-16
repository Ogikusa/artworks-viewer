import allPagesFetch from "./fetcher/allPagesFetch";
import Viewer from "./components/Viewer";

export default async function Page(
  props: {
    params: Promise<{ workId: string }>;
  }
) {
  const params = await props.params;

  const {
    workId
  } = params;

  const pages = await allPagesFetch(workId);
  return <Viewer workId={workId} images={pages} />;
}
