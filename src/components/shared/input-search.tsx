import { SearchIcon } from "lucide-react";

type CountriesFilterProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputSearch = ({ onChange, value }: CountriesFilterProps) => {
  return (
    <div className="relative w-full">
      <label htmlFor="search" className="sr-only">
        Buscar:
      </label>

      <input
        value={value}
        onChange={onChange}
        id="search"
        name="search"
        type="search"
        placeholder="Buscar..."
        className="w-full h-12 pl-10 pr-4 border border-gray-200 rounded-2xl text-base"
      />

      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
    </div>
  );
};
