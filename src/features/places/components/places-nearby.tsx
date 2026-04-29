import { useParams } from "react-router-dom";
import { usePlacesNearby } from "../hooks/usePlacesNearby";
import { PlaceNearbyCard } from "./place-nearby-card";
import { CATERING } from "../../../const/const";
import { useState } from "react";

const TYPE_PLACES = [
  { label: "Restaurantes", value: CATERING.restaurant },
  { label: "Bares", value: CATERING.bar },
  { label: "Cafés", value: CATERING.coffee },
  { label: "Parques", value: CATERING.park },
  { label: "Hoteles", value: CATERING.hotel },
];

export function PlacesNearby() {
  const { cityName } = useParams();
  const [catering, setCatering] = useState(CATERING.restaurant);
  const { places } = usePlacesNearby(cityName || "", catering);

  return (
    <div className="max-w-6xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Lugares cercanos</h1>
      <div className="flex flex-wrap gap-2">
        {TYPE_PLACES.map((type) => (
          <button
            key={type.value}
            className={`px-4 py-2 rounded-lg ${
              catering === type.value ? "bg-blue-100" : "bg-gray-100"
            }`}
            onClick={() => setCatering(type.value)}
          >
            {type.label}
          </button>
        ))}
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {places?.features.map((place) => (
          <PlaceNearbyCard
            key={place.properties.place_id}
            place={place}
            catering={catering}
          />
        ))}
      </section>
    </div>
  );
}
