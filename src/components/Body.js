import ResturantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import userOnlineStatus from "../utils/userOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchtext] = useState("");
  const onlineStatus = userOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.48061&lng=77.5045716"
      );
      const json = await data.json();

      const restaurants =
        json?.data?.cards?.find(
          (c) => c.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  if (!onlineStatus)
    return (
      <h1 className="text-red-600 text-center text-2xl mt-10">
        Looks like you are offline! Please check your internet connection.
      </h1>
    );

  const handleTopRated = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => parseFloat(res.info.avgRating) >= 4.3
    );
    setFilteredRestaurants(filteredList);
  };

  if (filteredRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
   <div className="body p-4 bg-gradient-to-r from-yellow-100 via-orange-200 to-pink-100">

      {/* Filter Section */}
      <div className="filter flex flex-wrap justify-center items-center gap-4 mb-6">
        <div className="search flex gap-2">
          <input
            type="text"
            placeholder="Search Restaurants..."
            className="border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={searchText}
            onChange={(e) => setSearchtext(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            onClick={() => {
              const filtered = listOfRestaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          onClick={handleTopRated}
        >
          Top-Rated
        </button>

        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          onClick={() => setFilteredRestaurants(listOfRestaurants)}
        >
          Reset
        </button>
      </div>

      {/* Restaurants Grid - Swiggy-like */}
      <div className="res-container flex flex-wrap justify-center gap-6">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
            className="w-full sm:w-80 md:w-72 lg:w-64 transform hover:scale-105 transition-transform"
          >
            <ResturantCard resData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
