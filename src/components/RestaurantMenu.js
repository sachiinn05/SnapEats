import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.48061&lng=77.5045716&restaurantId=${resId}&submitAction=ENTER`
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

  if (!resInfo && !error) return <Shimmer />;

  const restaurantInfoCard = resInfo?.cards?.find(
    (card) => card.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  )?.card?.card?.info;

  const name = restaurantInfoCard?.name || "Unknown Restaurant";
  const cuisines = restaurantInfoCard?.cuisines || [];
  const city = restaurantInfoCard?.city || "Unknown City";
  const avgRating = restaurantInfoCard?.avgRating || "N/A";

  const regularCards =
    resInfo?.cards?.find((c) => c.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const itemCards = regularCards.flatMap((c) => {
    const card = c.card?.card;
    if (card?.itemCards) return card.itemCards;
    if (card?.categories) return card.categories.flatMap((cat) => cat.itemCards || []);
    return [];
  });

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{city}</h3>
      <h3>⭐ {avgRating}</h3>

      {error && (
        <div style={{ color: "red", marginTop: "10px" }}>
          ⚠️ Could not fetch live data. Showing dummy menu for testing.
        </div>
      )}

      <h2>Menu Items ({itemCards.length})</h2>
      <ul>
        {itemCards.map((item, index) => (
          <li key={`${item.card.info.id}-${index}`}>
            {item.card.info.name} - ₹{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
