import type { ImageCountryResponse } from "../hooks/types/images-countries";

export const getImageCountry = async (
  country: string,
): Promise<ImageCountryResponse> => {
  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${country}`,
      {
        headers: {
          Authorization: import.meta.env.VITE_PEXELS_ACCESS_KEY,
        },
      },
    );
    const data = await response.json();
    return data ?? null;
  } catch (error) {
    console.log("Error fetching images for country", error);
    throw error;
  }
};
