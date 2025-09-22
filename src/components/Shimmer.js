const Shimmer = () => {
  return (
    <div className="shimmer-container max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[...Array(16)].map((_, index) => (
        <div
          key={index}
          className="shimmer-card bg-gray-200 rounded-xl h-72 animate-pulse shadow-md"
        >
          {/* Optional inner placeholders for image & text */}
          <div className="h-40 bg-gray-300 rounded-t-xl"></div>
          <div className="p-4 flex flex-col gap-2">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/3"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
