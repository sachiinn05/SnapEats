import { useParams } from "react-router-dom";
import MenuShimmer from "./MenuShimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, error } = useRestaurantMenu(resId);

  if (!resInfo && !error) return <MenuShimmer />;

  const restaurantInfoCard = resInfo?.cards?.find(
    (card) =>
      card.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  )?.card?.card?.info;

  const name = restaurantInfoCard?.name || "Unknown Restaurant";
  const cuisines = restaurantInfoCard?.cuisines || [];
  const city = restaurantInfoCard?.city || "Unknown City";
  const avgRating = restaurantInfoCard?.avgRating || "N/A";

  const regularCards =
    resInfo?.cards?.find((c) => c.groupedCard)?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards || [];

  const itemCards = regularCards.flatMap((c) => {
    const card = c.card?.card;
    if (card?.itemCards) return card.itemCards;
    if (card?.categories) return card.categories.flatMap((cat) => cat.itemCards || []);
    return [];
  });

  return (
    <div className="menu min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50 p-6">
      {/* Restaurant Info Card */}
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto mb-6">
        <h1 className="text-3xl font-bold mb-2">{name}</h1>
        <p className="text-gray-600 mb-1">{cuisines.join(", ")}</p>
        <p className="text-gray-600 mb-1">{city}</p>
        <p className="text-yellow-500 font-semibold">⭐ {avgRating}</p>

        {error && (
          <div className="text-red-600 mt-4 font-semibold">
            ⚠️ Could not fetch live data. Showing dummy menu for testing.
          </div>
        )}
      </div>

      {/* Menu Items */}
      <div className="max-w-4xl mx-auto grid gap-4">
        <h2 className="text-2xl font-bold mb-4">Menu Items ({itemCards.length})</h2>
        {itemCards.map((item, index) => (
          <div
            key={`${item.card.info.id}-${index}`}
            className="bg-white rounded-lg shadow p-4 flex justify-between items-center hover:shadow-xl transition-shadow"
          >
            <span className="font-medium text-gray-800">{item.card.info.name}</span>
            <span className="font-semibold text-green-600">
              ₹{item.card.info.price / 100}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
