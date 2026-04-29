export const getPlacesNearby = async (
  city: string,
  catering: string = "all",
) => {
  const geoRes = await fetch(
    `https://api.geoapify.com/v1/geocode/search?city=${city}&limit=1&apiKey=${import.meta.env.VITE_PLACES_KEY}`,
  );
  const geoData = await geoRes.json();

  const { lat, lon } = geoData.features[0].properties;

  const placesRes = await fetch(
    `https://api.geoapify.com/v2/places?categories=${catering}&filter=circle:${lon},${lat},5000&limit=10&apiKey=${import.meta.env.VITE_PLACES_KEY}`,
  );

  return placesRes.json();
};
