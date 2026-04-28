import { useParams } from "react-router-dom";

import { CitiesCountryCard } from "./cities-country-card";

import { CitiesCountryInfo } from "./cities-country-info";
import { useCitiesByCountry } from "./hooks/useCitiesByCountry";

export const CitiesCountries = () => {
  const { countryCode, country: countryName = "" } = useParams();
  const { cities, isLoading, error } = useCitiesByCountry(countryCode || "");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (!cities) return null;

  if (cities.data.length === 0) return <div>No cities found</div>;

  return (
    <div className="max-w-7xl mx-auto space-y-4 p-4">
      <CitiesCountryInfo countryName={countryName} />
      <h1 className="text-2xl mb-4 font-bold">Ciudades principales</h1>
      <ul className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cities.data.map((city) => (
          <CitiesCountryCard key={city.id} city={city} />
        ))}
      </ul>
    </div>
  );
};
