const Skeleton = ({ className }: { className?: string }) => (
  <div className={`animate-pulse bg-gray-300/70 rounded ${className}`} />
);

export const CountryPageSkeleton = () => {
  return (
    <div>
      <div className="w-full h-60 flex flex-col justify-center gap-4 bg-gray-300/40">
        <div className="flex gap-2 ml-2 lg:ml-32 items-center">
          <Skeleton className="w-6 h-6 rounded-full" />
          <Skeleton className="w-20 h-4" />
        </div>

        <Skeleton className="w-60 h-10 ml-2 lg:ml-32" />
      </div>

      <div className="max-w-7xl mx-auto space-y-4 p-4">
        <div className="space-y-2">
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-3/4 h-6" />
          <Skeleton className="w-2/4 h-6" />
        </div>

        <div className="flex flex-wrap md:flex-nowrap md:justify-between gap-2 items-center w-full">
          <Skeleton className="w-48 h-6" />
          <Skeleton className="w-full md:w-64 h-10 rounded-lg" />
        </div>

        <ul className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <li key={i} className="p-4 rounded-lg space-y-3">
              <Skeleton className="w-full h-32 rounded-md" />
              <Skeleton className="w-3/4 h-4" />
              <Skeleton className="w-1/2 h-4" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
