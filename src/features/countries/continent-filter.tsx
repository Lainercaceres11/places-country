import { CONTINENTS } from "../../const/const";

type ContinentFilterProps = {
  onRegion: (region: string) => void;
  region: string;
};

export function ContinentFilter({ onRegion, region }: ContinentFilterProps) {
  return (
    <div className="flex flex-wrap justify-start items-center gap-2">
      {CONTINENTS.map((continent) => (
        <button
          onClick={() => onRegion(continent)}
          key={continent}
          className={`bg-gray-200 rounded-2xl text-1xl w-25 h-8 hover:bg-gray-300 transition-all duration-300 ${continent === region ? "bg-green-800 text-white transition-all" : ""} `}
        >
          {continent}
        </button>
      ))}
    </div>
  );
}
