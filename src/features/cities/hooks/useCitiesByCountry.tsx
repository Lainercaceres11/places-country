import { useQuery } from "@tanstack/react-query";
import type { CitiesCountry } from "../types/cities-by-country";
import { getCitiesByCountry } from "../../../request/getCitiesByCountry";

export const useCitiesByCountry = (countryCode: string) => {
  const {
    data: cities,
    error,
    isLoading,
  } = useQuery<CitiesCountry>({
    queryKey: ["countries", "cities", countryCode],
    queryFn: () => getCitiesByCountry(countryCode),
    enabled: !!countryCode,
  });

  return { cities, error, isLoading };
};
