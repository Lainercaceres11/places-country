import { BarChart, Coffee, Hotel, TreePine, Utensils } from "lucide-react";
import { CATERING } from "../../../const/const";
import type { PlacesNearbyResponse } from "../types/places-nearby";

type PlaceNearbyCardProps = {
  place: PlacesNearbyResponse["features"][0];
  catering: string;
};

export function PlaceNearbyCard({ place, catering }: PlaceNearbyCardProps) {
  const { name, city, suburb, district, datasource } = place.properties;

  const iconMap = {
    [CATERING.restaurant]: Utensils,
    [CATERING.bar]: BarChart,
    [CATERING.coffee]: Coffee,
    [CATERING.park]: TreePine,
    [CATERING.hotel]: Hotel,
  };

  const Icon = iconMap[catering] || Utensils;

  return (
    <article className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-4 flex gap-4 items-start border border-gray-100">
      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-blue-50 shrink-0">
        <Icon className="w-8 h-8" />
      </div>

      <div className="flex flex-col flex-1 gap-1">
        <div className="flex justify-between items-start">
          <h2 className="text-base font-semibold text-gray-800 leading-tight">
            {name}
          </h2>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {city}
          </span>
        </div>

        <p className="text-sm text-gray-500">
          {suburb} • {district}
        </p>

        {datasource?.raw?.website && (
          <a
            href={datasource.raw.website}
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm text-blue-600 hover:text-blue-800 hover:underline mt-1 w-fit"
          >
            Visit website →
          </a>
        )}
      </div>
    </article>
  );
}
