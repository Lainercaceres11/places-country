import type { CountryByName } from "../features/countries/types/countries-by-name";

const URL = "https://restcountries.com/v3.1/name";

export const getCountryByName = async (
  countryName: string,
): Promise<CountryByName[] | []> => {
  const response = await fetch(`${URL}/${countryName}`);

  if (!response.ok) {
    throw new Error("Country not found");
  }

  const data = await response.json();
  return data ?? [];
};
