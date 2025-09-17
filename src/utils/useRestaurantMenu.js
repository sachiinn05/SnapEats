import { useEffect, useState } from "react";
import { API_URL } from "./contants";
const useRestaurantMenu=(resId)=>{
    const [resInfo,setResInfo]=useState(null);
     const [error, setError] = useState(null);
 useEffect(()=>{
    fetchMenu();
 },[])
  const fetchMenu = async () => {
    try {
      const response = await fetch(
        API_URL+resId
      );

      if (!response.ok) throw new Error("Failed to fetch menu data");

      const json = await response.json();

      if (!json?.data) throw new Error("Invalid data format from API");

      setResInfo(json.data);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.message);

      // Dummy fallback menu
      setResInfo({
        cards: [
          {
            card: {
              card: {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                info: {
                  name: "Dummy Restaurant",
                  cuisines: ["Test Cuisine", "Sample Food"],
                  city: "Test City",
                  avgRating: 4.5,
                },
              },
            },
          },
          {
            groupedCard: {
              cardGroupMap: {
                REGULAR: {
                  cards: [
                    {
                      card: {
                        card: {
                          categories: [
                            {
                              title: "Snacks",
                              itemCards: [
                                {
                                  card: { info: { id: "1", name: "Dummy Item 1", price: 5000 } },
                                },
                                {
                                  card: { info: { id: "1", name: "Dummy Item 1 (Duplicate)", price: 7500 } },
                                },
                              ],
                            },
                          ],
                        },
                      },
                    },
                  ],
                },
              },
            },
          },
        ],
      });
    }
  };

    return {resInfo,error};
};
export default useRestaurantMenu