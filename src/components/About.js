const About = () => {
  // Button click handler
  const handleClick = () => {
    alert("✅ TailwindCSS is working perfectly!");
  };

  return (
    <div className="max-w-3xl mx-auto p-8 mt-10 bg-gradient-to-r from-yellow-200 via-orange-200 to-pink-200 rounded-3xl shadow-2xl border-4 border-yellow-500 animate-fadeIn">
      
      {/* Title */}
      <h1 className="text-6xl font-extrabold text-center bg-gradient-to-r from-pink-600 via-red-500 to-orange-500 bg-clip-text text-transparent drop-shadow-xl mb-6">
        🌟 ABOUT SNAP FOOD 🌟
      </h1>

      {/* Paragraph 1 */}
      <p className="text-xl text-gray-800 font-semibold mb-4 leading-relaxed">
        Welcome to <strong className="text-red-600">Snap Food</strong>, your
        one-stop destination for <span className="text-green-600 font-bold">delicious meals</span> 
        delivered straight to your doorstep. Inspired by apps like 
        <span className="text-purple-600 font-bold"> Swiggy</span>, we aim to bring you 
        a seamless food ordering experience with a wide range of restaurants 
        and cuisines.
      </p>

      {/* Paragraph 2 */}
      <p className="text-xl text-gray-800 font-semibold mb-6 leading-relaxed">
        Our mission is simple:{" "}
        <em className="italic text-blue-600 font-bold">
          to make good food accessible to everyone, anytime, anywhere
        </em>
        . Whether you’re craving street food, healthy meals, or gourmet dishes,
        <span className="text-orange-600 font-bold"> Snap Food</span> connects you 
        with the best local restaurants in just a few clicks.
      </p>

      {/* Why Choose Us */}
      <h2 className="text-3xl font-bold text-gray-900 mt-6 mb-3 underline decoration-wavy decoration-red-500">
        Why Choose Us?
      </h2>

      <ul className="list-disc pl-6 space-y-2 text-lg font-medium text-gray-700">
        <li><span className="text-pink-600 font-bold">🍔</span> Wide variety of restaurants & cuisines</li>
        <li><span className="text-yellow-600 font-bold">⚡</span> Fast and reliable delivery</li>
        <li><span className="text-green-600 font-bold">💳</span> Secure online payments</li>
        <li><span className="text-blue-600 font-bold">📍</span> Real-time order tracking</li>
      </ul>

      {/* Thank you text */}
      <p className="text-lg text-center mt-6 font-bold text-purple-700">
        Thank you for choosing{" "}
        <span className="text-yellow-600 font-extrabold underline">Snap Food</span>.  
        We’re here to satisfy your hunger, one order at a time! ❤️
      </p>

      {/* Test Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleClick}
          className="px-6 py-3 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white text-xl font-bold rounded-xl shadow-lg hover:scale-110 hover:shadow-red-400 transition"
        >
          🚀 Test Tailwind Button
        </button>
      </div>

      {/* Color Blocks to Test Tailwind */}
      <div className="grid grid-cols-4 gap-4 mt-6">
        <div className="h-12 bg-red-500 rounded-lg shadow-lg"></div>
        <div className="h-12 bg-green-500 rounded-lg shadow-lg"></div>
        <div className="h-12 bg-blue-500 rounded-lg shadow-lg"></div>
        <div className="h-12 bg-yellow-500 rounded-lg shadow-lg"></div>
      </div>
    </div>
  );
};

export default About;
