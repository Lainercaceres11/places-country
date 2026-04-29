import type { CitiesCountry } from "@features/cities/types/cities-by-country";

const URL =
  "https://wft-geo-db.p.rapidapi.com/v1/geo/cities?types=CITY&minPopulation=100000&sort=-population&limit=10";

export const getCitiesByCountry = async (
  countryCode: string,
): Promise<CitiesCountry> => {
  const response = await fetch(`${URL}&countryIds=${countryCode}`, {
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
      "x-rapidapi-host": import.meta.env.VITE_RAPID_API_HOST,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Pais no encontrado con ciudades principales populares");
  }

  const data = await response.json();
  return data;
};
