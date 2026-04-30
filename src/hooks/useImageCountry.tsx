import { useQuery } from "@tanstack/react-query";

import { getImageCountry } from "../request/getImagesCountry";
import type { ImageCountryResponse } from "./types/images-countries";

export const useImageCountry = (country: string) => {
  const {
    data: images = [],
    error,
    isLoading,
  } = useQuery<ImageCountryResponse>({
    queryKey: ["images", country],
    queryFn: () => getImageCountry(country),
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24,
    retry: 1,
    enabled: !!country,
  });

  return { images, error, isLoading };
};
