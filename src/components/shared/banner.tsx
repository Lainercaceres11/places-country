import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

type BannerProps = {
  countryName: string | undefined;
  imageUrl: string;
};

export function Banner({ countryName, imageUrl }: BannerProps) {
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-60 flex flex-col justify-center text-white gap-4 
  bg-cover bg-no-repeat bg-center relative  backdrop-blur-sm"
      style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : undefined }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10">
        <button
          aria-label="Volver"
          onClick={() => navigate(-1)}
          className="bg-transparent border-0"
        >
          <div className="flex gap-2 ml-2 lg:ml-32">
            <ArrowLeft />
            <span className="text-gray-200">Volver</span>
          </div>
        </button>

        <h2 className="text-4xl font-bold ml-2 lg:ml-32 drop-shadow-lg">
          {countryName}
        </h2>
      </div>
    </div>
  );
}
