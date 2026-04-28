import { Link } from "react-router-dom";
import { useImageCountry } from "../../hooks/useImageCountry";
import type { CountriesResponse } from "./types/countries";

type CountriesCardProps = {
  country: CountriesResponse;
};

export function CountriesCard({ country }: CountriesCardProps) {
  const { images, isLoading } = useImageCountry(country.name.common);
  const imageUrl =
    images && !Array.isArray(images) && images.photos[0]
      ? images.photos[0].src.large
      : undefined;
  return (
    <article className="flex flex-col gap-4 md:gap-6 relative border border-transparent rounded-4xl shadow-md">
      {isLoading ? (
        <div className="w-full h-60 bg-gray-100 animate-pulse" />
      ) : (
        <Link to={`${country.cca2}/${country.name.common}`}>
          <img
            className="w-full h-54 object-cover rounded-md hover:cursor-pointer hover:scale-3d transition-all duration-300"
            src={imageUrl}
            alt={country.name.common}
          />
        </Link>
      )}
      <p className="absolute top-0 left-0 bg-white rounded-md p-1 ml-2 mt-2 text-gray-700">
        {country.region}
      </p>
      <div className="bg-white p-4 space-y-1">
        <h2 className="text-1xl font-bold">
          {" "}
          <span className="font-semibold">{country.cca2}</span>{" "}
          {country.name.common}
        </h2>
        <p className="text-sm text-gray-600 line-clamp-3">
          {country.flags.alt}
        </p>

        <p className="text-sm my-2">Capital: {country.capital}</p>
        <p>{country.cca2}</p>
      </div>
    </article>
  );
}
