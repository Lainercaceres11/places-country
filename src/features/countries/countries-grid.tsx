import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

import { CountriesGridSkeleton } from "../../skeletons/countries-grid-skeleton";
import { CountriesCard } from "./countries-card";
import { ContinentFilter } from "./continent-filter";
import { useCountries } from "./hooks/useCountries";
import { InputSearch } from "../../components/shared";

export function CountriesGrid() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("name") || "";
  const { countries, error, isLoading } = useCountries(
    searchParams.get("region") || "Americas",
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      if (value) {
        params.set("name", value);
      } else {
        params.delete("name");
      }

      return params;
    });
  };

  const filteredCountries = useMemo(() => {
    return countries.filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase()),
    );
  }, [countries, search]);

  const handleRegion = (region: string) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set("region", region);
      return params;
    });

    countries.filter((country) => country.region === region);
  };

  if (isLoading) return <CountriesGridSkeleton />;

  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-0 space-y-4">
      <div className="bg-white shadow-md rounded-md w-full px-4 py-2 space-y-4 ">
        <InputSearch value={search} onChange={handleChange} />
        <ContinentFilter
          region={searchParams.get("region") || "Americas"}
          onRegion={handleRegion}
        />
      </div>
      <h1 className="text-2xl">Todos los países</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredCountries.length === 0
          ? "No se encontraron resultados"
          : filteredCountries.map((country) => (
              <CountriesCard key={country.name.common} country={country} />
            ))}
      </section>
    </div>
  );
}
