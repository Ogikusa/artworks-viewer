import Button from "@/app/_components/Button";
import ContainerBox from "@/app/_components/ContainerBox";
import { importFromFolder } from "@/app/_lib/actions/import";
import { useFormStatus } from "react-dom";

export default async function Page() {
  return (
    <ContainerBox>
      <h2 className="text-xl">設定</h2>
      <hr />
    </ContainerBox>
  );
}
