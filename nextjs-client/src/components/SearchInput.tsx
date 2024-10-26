import { SearchInputProps } from "@/types";

export default function SearchInput({
  value,
  onChange,
  onKeyDown,
}: SearchInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder="Search..."
      className="w-full px-4 py-2 rounded-md text-black placeholder-gray-400 border border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
    />
  );
}
