import ResturantCard from "./RestaurantCard";

import { useState,useEffect } from "react";

const Body = () => {
  

  const [listofRestaurants, setListofRestaurants] = useState([]);

  useEffect(()=>{
      fetchData();
    },[]);

    const fetchData=async()=>{
      const data=await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.48061&lng=77.5045716&carousel=true&third_party_vendor=1");
      const json=await data.json();
      console.log(json);
     const restaurants =
    json?.data?.cards?.find(
      (c) => c.card?.card?.gridElements?.infoWithStyle?.restaurants
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

  setListofRestaurants(restaurants);
      
    };



  const handleTopRated = () => {
    const filteredList = listofRestaurants.filter(
      (res) => parseFloat(res.info.avgRating) >= 4.3
    );
    console.log("Filtered List:", filteredList);
    setListofRestaurants(filteredList);
  };

  if(listofRestaurants.length===0)
  {
    return <h1>Loading.....</h1>
  }
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleTopRated}>
          Top-Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {listofRestaurants.map((restaurant) => (
          <ResturantCard
            key={restaurant.info.id}
            resData={restaurant.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
