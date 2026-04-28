import { useQuery } from "@tanstack/react-query";
import type { CountryByName } from "../types/countries-by-name";
import { getCountryByName } from "../../../request/getCountryByName";

export const useCountryByName = (countryName: string) => {
  const {
    data: country,
    error,
    isLoading,
  } = useQuery<CountryByName[]>({
    queryKey: ["country", countryName],
    queryFn: () => getCountryByName(countryName),
    enabled: !!countryName,
  });

  return { country, error, isLoading };
};
