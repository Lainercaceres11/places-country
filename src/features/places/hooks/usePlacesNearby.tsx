import { useQuery } from "@tanstack/react-query";
import type { PlacesNearbyResponse } from "../types/places-nearby";
import { getPlacesNearby } from "@request/getPlacesNearby";

export const usePlacesNearby = (city: string, catering: string) => {
  const {
    data: places,
    error,
    isLoading,
  } = useQuery<PlacesNearbyResponse>({
    queryKey: ["places-nearby", city, catering],
    queryFn: () => getPlacesNearby(city, catering),
  });
  return { places, error, isLoading };
};
