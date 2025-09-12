import ResturantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText,setSearchtext]=useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.48061&lng=77.5045716"
      );

      const json = await data.json();
      // console.log("API Response:", json);

      const restaurants =
        json?.data?.cards?.find(
          (c) => c.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants); // keep a backup
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const handleTopRated = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => parseFloat(res.info.avgRating) >= 4.3
    );
    setFilteredRestaurants(filteredList);
  };

  if (filteredRestaurants.length === 0) {
    return <Shimmer/>;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchtext(e.target.value);}}/>
           <button onClick={() => {
              console.log(searchText);
               const filtered = listOfRestaurants.filter((restaurant) =>
               restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
             );
                setFilteredRestaurants(filtered); 
            }}>
           Search
          </button>

        </div>
        <button className="filter-btn" onClick={handleTopRated}>
          Top-Rated Restaurants
        </button>
        <button
          className="filter-btn"
          onClick={() => setFilteredRestaurants(listOfRestaurants)}
        >
          Reset
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id} 
            to={`/restaurants/${restaurant.info.id}`} 
          >
            <ResturantCard resData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
