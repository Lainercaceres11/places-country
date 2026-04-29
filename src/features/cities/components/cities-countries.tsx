import { useMemo } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { ArrowLeft } from "lucide-react";
import { useCitiesByCountry } from "../hooks/useCitiesByCountry";
import { CountryPageSkeleton } from "../skeleton/cities-countries-skeleton";
import { CitiesCountryInfo } from "./cities-country-info";
import { InputSearch } from "@components/shared";
import { CitiesCountryCard } from "./cities-country-card";
import { useImageCountry } from "@hooks/useImageCountry";
import { NotFoundCities } from "./not-found-cities";

export const CitiesCountries = () => {
  const { countryCode, country: countryName = "" } = useParams();
  const { cities, isLoading, error } = useCitiesByCountry(countryCode || "");
  const { images } = useImageCountry(countryName);
  const imageUrl = Array.isArray(images)
    ? undefined
    : images?.photos?.[0]?.src.large;

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("name") || "";

  const filteredCities = useMemo(() => {
    return cities?.data.filter((city) =>
      city.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [cities, search]);

  if (isLoading) return <CountryPageSkeleton />;

  const handleBack = () => {
    window.history.back();
  };
  if (error)
    return (
      <NotFoundCities
        countryName={countryName}
        imageUrl={imageUrl}
        handleBack={handleBack}
      />
    );

  if (!cities)
    return (
      <NotFoundCities
        countryName={countryName}
        imageUrl={imageUrl}
        handleBack={handleBack}
      />
    );

  if (cities.data.length === 0)
    return (
      <NotFoundCities
        countryName={countryName}
        imageUrl={imageUrl}
        handleBack={handleBack}
      />
    );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setSearchParams(
      (prev) => {
        const params = new URLSearchParams(prev);

        if (value) {
          params.set("name", value);
        } else {
          params.delete("name");
        }

        return params;
      },
      { replace: true },
    );
  };

  return (
    <>
      <div
        className="w-full h-60 flex flex-col justify-center text-white gap-4 grayscale bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : undefined }}
      >
        <button
          aria-label="Volver"
          onClick={handleBack}
          className="bg-transparent border-0"
        >
          <div className="flex  gap-2 ml-2 lg:ml-32 ">
            <ArrowLeft />
            <span>Volver</span>
          </div>
        </button>

        <h2 className="text-4xl font-bold ml-2 lg:ml-32">{countryName}</h2>
      </div>
      <div className="max-w-7xl mx-auto space-y-4 p-4">
        <CitiesCountryInfo countryName={countryName} />
        <div className="flex flex-wrap md:flex-nowrap md:justify-between gap-2 items-center w-full">
          <h1 className="text-2xl font-bold w-375">Ciudades principales</h1>
          <InputSearch onChange={handleChange} value={search} />
        </div>
        <ul className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredCities?.length === 0 ? (
            <p>Ciudad no encontrada</p>
          ) : (
            filteredCities?.map((city) => (
              <CitiesCountryCard key={city.id} city={city} />
            ))
          )}
        </ul>
      </div>
    </>
  );
};
