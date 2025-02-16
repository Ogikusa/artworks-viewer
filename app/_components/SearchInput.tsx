"use client";
import {
  ChangeEventHandler,
  DetailedHTMLProps,
  InputHTMLAttributes,
  KeyboardEventHandler,
  useState,
} from "react";
import Input from "./Input";
import { useRouter } from "next/navigation";
import Button from "./Button";
import { FaSearch } from "react-icons/fa";

interface PropsType
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  isSmaller?: boolean;
}

export default function SearchInput({
  className = "",
  onKeyDown,
  value,
  onChange,
  isSmaller = false,
  ...props
}: PropsType) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    onKeyDown && onKeyDown(e);
    if (e.key !== "Enter") return;
    search();
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange && onChange(e);
    setSearchQuery(e.target.value);
  };

  function search() {
    if (!searchQuery) return;
    setSearchQuery("");
    router.push(`/search/${searchQuery}`);
  }

  return (
    <div className="flex flex-row gap-2 sm:gap-4">
      <Input
        className={`h-8 sm:h-10 w-28 sm:w-64 ${className}`}
        onKeyDown={handleKeyDown}
        value={value ?? searchQuery}
        onChange={handleChange}
        {...props}
      />
      <button className={`h-8 sm:h-10 w-8 sm:w-10`} onClick={search}>
        <FaSearch />
      </button>
    </div>
  );
}
