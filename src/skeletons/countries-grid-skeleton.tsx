export const CountriesGridSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-0">
      <h1 className="text-2xl mb-4">Todos los países</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 border border-transparent rounded-lg shadow-md overflow-hidden animate-pulse"
          >
            <div className="w-full h-54 bg-gray-100" />

            <div className="bg-white p-4 space-y-2">
              <div className="h-5 w-3/4 bg-gray-100 rounded" />
              <div className="h-4 w-full bg-gray-100 rounded" />
              <div className="h-4 w-5/6 bg-gray-100 rounded" />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
