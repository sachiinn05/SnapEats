const About = () => {
  const handleClick = () => {
    alert("✅ TailwindCSS is working perfectly!");
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center py-10">
      <div className="max-w-3xl w-full mx-auto p-6 bg-white rounded-xl shadow-md border border-pink-200">
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-pink-700 mb-4">
          🌟 About Snap Food 🌟
        </h1>

        {/* Paragraph 1 */}
        <p className="text-lg text-gray-700 mb-4">
          Welcome to <span className="text-pink-600 font-bold">Snap Food</span>, your
          one-stop destination for <span className="text-green-600 font-semibold">delicious meals</span> 
          delivered straight to your doorstep. Inspired by 
          <span className="text-purple-600 font-semibold"> Swiggy</span>, we aim to 
          bring you a seamless food ordering experience with a wide range of 
          restaurants and cuisines.
        </p>

        {/* Paragraph 2 */}
        <p className="text-lg text-gray-700 mb-6">
          Our mission is simple:{" "}
          <span className="italic text-pink-600 font-semibold">
            to make good food accessible to everyone, anytime, anywhere
          </span>. Whether you’re craving street food, healthy meals, or gourmet 
          dishes, <span className="text-orange-600 font-bold">Snap Food</span> 
          connects you with the best local restaurants in just a few clicks.
        </p>

        {/* Why Choose Us */}
        <h2 className="text-2xl font-bold text-pink-700 mb-3">
          Why Choose Us?
        </h2>

        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>🍔 Wide variety of restaurants & cuisines</li>
          <li>⚡ Fast and reliable delivery</li>
          <li>💳 Secure online payments</li>
          <li>📍 Real-time order tracking</li>
        </ul>

        {/* Thank you text */}
        <p className="text-center mt-6 text-gray-800 font-medium">
          Thank you for choosing{" "}
          <span className="text-pink-600 font-bold">Snap Food</span>.  
          We’re here to satisfy your hunger, one order at a time! ❤️
        </p>

        {/* Test Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleClick}
            className="px-5 py-2 bg-pink-500 text-white font-semibold rounded-lg shadow hover:bg-pink-600 transition"
          >
            🚀 Test Tailwind
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
