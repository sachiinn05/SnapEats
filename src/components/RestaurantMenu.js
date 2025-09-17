import { useParams } from "react-router-dom";
import MenuShimmer from "./MenuShimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {
  
  const { resId } = useParams();
  const {resInfo,error}=useRestaurantMenu(resId);
 
  if (!resInfo && !error) return <MenuShimmer />;

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
