import { useCountryByName } from "@features/countries/hooks/useCountryByName";
import { Landmark, MapPin, MapPinHouse, PersonStanding } from "lucide-react";

type CitiesCountryProps = {
  countryName: string;
};

export const CitiesCountryInfo = ({ countryName }: CitiesCountryProps) => {
  const { country } = useCountryByName(countryName || "");
  return (
    <div className="flex justify-center items-center gap-4 flex-wrap">
      <div className="bg-gray-100 rounded-md w-75 h-25 flex flex-col items-center justify-center">
        <Landmark />
        <p className="text-sm">Capital</p>
        <p className="font-bold text-large">{country?.[0]?.capital}</p>
      </div>
      <div className="bg-gray-100 rounded-md w-75 h-25 flex flex-col items-center justify-center">
        <MapPin />
        <p className="text-sm">Región</p>
        <p className="font-bold text-large">{country?.[0]?.region}</p>
      </div>

      <div className="bg-gray-100 rounded-md w-75 h-25 flex flex-col items-center justify-center">
        <PersonStanding />
        <p className="text-sm">Población</p>
        <p className="font-bold text-large">{country?.[0]?.population}</p>
      </div>

      <div className="bg-gray-100 rounded-md w-75 h-25 flex flex-col items-center justify-center">
        <MapPinHouse />
        <p className="text-sm">Subregión</p>
        <p className="font-bold text-large">{country?.[0]?.subregion}</p>
      </div>
    </div>
  );
};
