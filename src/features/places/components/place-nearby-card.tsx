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
    <article className="group bg-white rounded-2xl p-4 flex gap-4 items-start border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">

      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-linear-to-br from-blue-100 to-blue-50 shrink-0 group-hover:scale-105 transition-transform">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>

   
      <div className="flex flex-col flex-1 gap-2 min-w-0">
     
        <div className="flex justify-between items-start gap-2">
          <h2 className="text-base font-semibold text-gray-900 leading-snug line-clamp-2">
            {name}
          </h2>

          {city && (
            <span className="text-[11px] text-gray-600 bg-gray-100 px-2 py-1 rounded-full whitespace-nowrap">
              {city}
            </span>
          )}
        </div>

      
        {(suburb || district) && (
          <p className="text-sm text-gray-500 line-clamp-1">
            {[suburb, district].filter(Boolean).join(" • ")}
          </p>
        )}

     
        {datasource?.raw?.website && (
          <a
            href={datasource.raw.website}
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors mt-1 inline-flex items-center gap-1"
          >
            Ver sitio
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        )}
      </div>
    </article>
  );
}
