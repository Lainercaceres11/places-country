export const CountriesGridSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="w-full h-64 bg-gray-200" />

      <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-0 space-y-4 mt-4">
        <div className="bg-white shadow-md rounded-md w-full px-4 py-4 space-y-4">
          <div className="h-10 w-full bg-gray-200 rounded-md" />

          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-8 w-24 bg-gray-200 rounded-md" />
            ))}
          </div>
        </div>

        <div className="h-6 w-48 bg-gray-200 rounded" />

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <div className="w-full h-40 bg-gray-200" />

              <div className="p-4 space-y-2">
                <div className="h-5 w-3/4 bg-gray-200 rounded" />
                <div className="h-4 w-full bg-gray-200 rounded" />
                <div className="h-4 w-5/6 bg-gray-200 rounded" />
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};
