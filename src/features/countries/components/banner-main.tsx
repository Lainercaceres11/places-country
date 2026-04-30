import { LocateFixed } from "lucide-react";

export function BannerMain() {
  return (
    <div
      className="w-full p-2 h-80 flex flex-col justify-center items-center text-white gap-4 bg-cover bg-no-repeat bg-center relative  backdrop-blur-sm"
      style={{
        backgroundImage: `url("/banner-main.webp")`,
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center space-y-2">
        <div className="uppercase flex items-center justify-center gap-2">
          <LocateFixed size={40} />{" "}
          <span className="ml-2">Explora el mundo</span>
        </div>
        <h1 className="text-4xl font-bold  drop-shadow-lg">
          Descubre Lugares Increíbles
        </h1>
        <p className="tex-large">
          Viaja por países, ciudades y lugares turísticos de todo el mundo
        </p>
      </div>
    </div>
  );
}
