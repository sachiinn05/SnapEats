import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-red-50 to-red-100 p-6">
      
      {/* Title */}
      <h1 className="text-5xl font-extrabold text-red-600 mb-4">Oops!!!</h1>
      
      {/* Subtitle */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Something went wrong!!
      </h2>

      {/* Error Details */}
      <h3 className="text-gray-600 mb-6">
        {err.status} : {err.statusText}
      </h3>

      {/* Error Image */}
      <img
        alt="error-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfTqYOdBdAMcDBZxPK93VyqUeb0iY8TnJZZlGi-oqrMyE4MrRyCsTTVL5W-67acNE9_zc&usqp=CAU"
        className="w-72 h-72 object-cover rounded-xl shadow-lg border-4 border-white"
      />

      {/* Button to go back */}
      <button
        onClick={() => (window.location.href = "/")}
        className="mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all"
      >
        Go Home
      </button>
    </div>
  );
};

export default Error;
