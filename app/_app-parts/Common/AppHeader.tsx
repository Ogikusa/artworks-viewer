import Link from "next/link";
import SearchInput from "../../_components/SearchInput";
import { IoSettingsSharp } from "react-icons/io5";

interface PropsType {}

export default function Header({}: PropsType) {
  return (
    <header className="w-full my-0 h-12 lg:h-16 bg-white shadow-sm flex flex-row items-center">
      <div>
        <h1 className=" sm:text-xl sm:ml-2">
          <Link href="/">{process.env.NEXT_PUBLIC_APP_NAME}</Link>
        </h1>
      </div>

      <div className="mx-0 sm:mx-4 flex-grow flex justify-end">
        <SearchInput />
        <Link href="/setting" className="flex items-center">
          <IoSettingsSharp />
        </Link>
      </div>
    </header>
  );
}
