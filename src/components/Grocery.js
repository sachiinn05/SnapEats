const Grocery = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-50 to-green-100 p-6">
      
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-4 text-center">
        🛒 Our Grocery Online Store
      </h1>

      {/* Subtitle / Message */}
      <p className="bg-white shadow-md rounded-xl p-6 text-center text-gray-700 max-w-lg">
        We have a lot of amazing child components planned for you,  
        but <span className="font-semibold text-red-500">😔 it’s still under development.</span>  
        Stay tuned for exciting updates!
      </p>

      {/* Coming Soon Button */}
      <button
        className="mt-6 px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition-all"
      >
        Coming Soon 🚀
      </button>
    </div>
  );
};

export default Grocery;
