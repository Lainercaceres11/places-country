import type { CountriesResponse } from "../features/countries/types/countries";

const URL = "https://restcountries.com/v3.1/region";

export const getCountries = async (
  region: string = "Americas",
): Promise<CountriesResponse[] | []> => {
  try {
    const response = await fetch(`${URL}/${region}`);
    const data = await response.json();
    return data ?? [];
  } catch (error) {
    console.log("Error fetching countries", error);
    return [];
  }
};
