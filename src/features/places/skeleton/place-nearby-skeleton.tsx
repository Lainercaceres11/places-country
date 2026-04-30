export function PlacesNearbySkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="w-full h-60 bg-gray-300" />

      <div className="max-w-6xl mx-auto space-y-4 px-2">
        <div className="h-6 w-48 bg-gray-300 rounded" />

        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-10 w-24 bg-gray-300 rounded-lg" />
          ))}
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-48 bg-gray-300 rounded-xl" />
          ))}
        </section>
      </div>
    </div>
  );
}
