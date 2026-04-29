import { ArrowLeft } from "lucide-react";

type NotFoundCitiesProps = {
  countryName: string;
  imageUrl: string | undefined;
  handleBack: () => void;
};

export function NotFoundCities({
  countryName,
  imageUrl,
  handleBack,
}: NotFoundCitiesProps) {
  return (
    <>
      <div
        className="w-full h-60 flex flex-col justify-center text-white gap-4 grayscale bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : undefined }}
      >
        <button
          aria-label="Volver"
          onClick={handleBack}
          className="bg-transparent border-0"
        >
          <div className="flex  gap-2 ml-2 lg:ml-32 ">
            <ArrowLeft />
            <span>Volver</span>
          </div>
        </button>

        <h2 className="text-4xl font-bold ml-2 lg:ml-32">{countryName}</h2>
      </div>
      <p className="text-center text-2xl font-bold mt-8">
        Ciudades principales no encontradas
      </p>
    </>
  );
}
