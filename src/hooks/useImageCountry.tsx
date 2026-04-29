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
  });

  return { images, error, isLoading };
};
