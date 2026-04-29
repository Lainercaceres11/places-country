import { useImageCountry } from "@hooks/useImageCountry";
import type { CitiesCountry } from "../types/cities-by-country";
import { Link } from "react-router-dom";

type CitiesCountryCardProps = {
  city: CitiesCountry["data"][0];
};

export const CitiesCountryCard = ({ city }: CitiesCountryCardProps) => {
  const { images, isLoading, error } = useImageCountry(`${city.name}`);
  const imageUrl =
    images && !Array.isArray(images) && images.photos[0]
      ? images.photos[0].src.large
      : undefined;

  if (error) return <div>Error</div>;

  return (
    <>
      <li>
        <article className="flex flex-col gap-2 bg-gray-100 p-4 rounded-md">
          {isLoading ? (
            <div className="w-full h-60 bg-gray-100 animate-pulse" />
          ) : (
            <Link to={`/${city.name}`}>
              <img
                className="w-full h-54 object-cover rounded-md hover:cursor-pointer hover:scale-3d transition-all duration-300"
                src={imageUrl}
                alt={city.name}
              />
            </Link>
          )}
          <h2 className="text-large font-bold">{city.name}</h2>
          <p>{city.country}</p>
          <div className="flex justify-start items-center gap-4">
            <p className="text-sm">{city.latitude}</p>
            <p className="text-sm">{city.longitude}</p>
          </div>
        </article>
      </li>
    </>
  );
};
