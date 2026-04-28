import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../../../request/getCountries";

export const useCountries = (region: string = "Americas") => {
  const {
    data: countries = [],
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["countries", region],
    queryFn: () => getCountries(region),
  });

  return { countries, error, isLoading, refetch };
};
