import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useCitiesByCountry } from "../hooks/useCitiesByCountry";
import { CountryPageSkeleton } from "../skeleton/cities-countries-skeleton";
import { CitiesCountryInfo } from "./cities-country-info";
import { Banner, InputSearch } from "@components/shared";
import { CitiesCountryCard } from "./cities-country-card";
import { useImageCountry } from "@hooks/useImageCountry";
import { NotFoundCities } from "./not-found-cities";
import { useQueryState } from "@hooks/useQueryState";
import { PLACE_HOLDER_IMAGE } from "../../../const/const";

export const CitiesCountries = () => {
  const { countryCode, country: countryName = "" } = useParams();
  const { cities, isLoading, error } = useCitiesByCountry(countryCode || "");
  const navigate = useNavigate();
  const { images } = useImageCountry(countryName);

  const { value, setValue } = useQueryState("name");

  const filteredCities = useMemo(() => {
    return cities?.data.filter((city) =>
      city.name.toLowerCase().includes(value.toLowerCase()),
    );
  }, [cities, value]);

  if (isLoading) return <CountryPageSkeleton />;

  const imageData = Array.isArray(images) ? undefined : images;
  const imageUrl = imageData?.photos?.[0]?.src?.landscape ?? PLACE_HOLDER_IMAGE;

  const handleBack = () => {
    navigate(-1);
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

    setValue(value);
  };

  return (
    <>
      <Banner countryName={countryName} imageUrl={imageUrl || ""} />
      <div className="max-w-7xl mx-auto space-y-4 p-4">
        <CitiesCountryInfo countryName={countryName} />
        <div className="flex flex-wrap md:flex-nowrap md:justify-between gap-2 items-center w-full">
          <h1 className="text-2xl font-bold w-375">Ciudades principales</h1>
          <InputSearch onChange={handleChange} value={value} />
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
