import { useQuery } from "@tanstack/react-query";

import { getImageCountry } from "../request/getImagesCountry";

export const useImageCountry = (country: string) => {
  const {
    data: images = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["images", country],
    queryFn: () => getImageCountry(country),
  });

  return { images, error, isLoading };
};
