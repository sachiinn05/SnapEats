// MenuShimmer.jsx
const MenuShimmer = () => {
  return (
    <div className="menu-shimmer max-w-4xl mx-auto p-4">
      {/* Restaurant Info Shimmer */}
      <div className="animate-pulse mb-6">
        <div className="h-8 w-1/3 bg-gray-300 rounded mb-3"></div>
        <div className="h-4 w-1/2 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 w-1/3 bg-gray-200 rounded mb-2"></div>
      </div>

      {/* Menu Items Shimmer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="h-48 bg-gray-200 rounded-lg shadow-md animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MenuShimmer;
