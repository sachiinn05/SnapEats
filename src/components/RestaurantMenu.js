import { useParams } from "react-router-dom";
import MenuShimmer from "./MenuShimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  // ✅ Declare state BEFORE conditional return
  const [openCategory, setOpenCategory] = useState(null);

  const { resInfo, error } = useRestaurantMenu(resId);

  if (!resInfo && !error) return <MenuShimmer />;

  // ✅ Extract Restaurant Info
  const restaurantInfoCard = resInfo?.cards?.find(
    (card) =>
      card.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  )?.card?.card?.info;

  const name = restaurantInfoCard?.name || "Unknown Restaurant";
  const cuisines = restaurantInfoCard?.cuisines || [];
  const city = restaurantInfoCard?.city || "Unknown City";
  const avgRating = restaurantInfoCard?.avgRating || "N/A";
  const costForTwo = restaurantInfoCard?.costForTwoMessage || "—";
  const deliveryTime = restaurantInfoCard?.sla?.deliveryTime || "—";

  // ✅ Extract Offers
  const offers =
    resInfo?.cards?.find(
      (c) => c.card?.card?.gridElements?.infoWithStyle?.offers
    )?.card?.card?.gridElements?.infoWithStyle?.offers || [];

  // ✅ Extract Menu Sections
  const regularCards =
    resInfo?.cards?.find((c) => c.groupedCard)?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards || [];

  const menuCategories = regularCards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <div className="menu min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50 p-6">
      {/* Restaurant Info Card */}
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto mb-6">
        <h1 className="text-3xl font-bold mb-2">{name}</h1>
        <p className="text-gray-600">{cuisines.join(", ")}</p>
        <p className="text-gray-600">{city}</p>
        <div className="flex gap-4 mt-2">
          <span className="text-yellow-500 font-semibold">⭐ {avgRating}</span>
          <span className="text-gray-700">{costForTwo}</span>
          <span className="text-gray-700">⏱ {deliveryTime} mins</span>
        </div>
        {error && (
          <div className="text-red-600 mt-4 font-semibold">
            ⚠️ Could not fetch live data. Showing dummy menu for testing.
          </div>
        )}
      </div>

      {/* Offers Section */}
      {offers.length > 0 && (
        <div className="max-w-4xl mx-auto mb-6">
          <h2 className="text-2xl font-bold mb-4">🔥 Offers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="bg-white shadow rounded-xl p-4 flex items-center justify-between"
              >
                <span className="font-semibold text-gray-800">
                  {offer.info.header}
                </span>
                <span className="text-gray-500 text-sm">
                  {offer.info.couponCode !== "NO CODE REQUIRED"
                    ? `Use Code: ${offer.info.couponCode}`
                    : offer.info.primaryDescription}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Menu Categories */}
      <div className="max-w-4xl mx-auto">
        {menuCategories.map((category, index) => {
          const catInfo = category.card.card;
          const isOpen = openCategory === index;

          return (
            <div key={index} className="mb-4 border-b pb-2">
              <button
                onClick={() => toggleCategory(index)}
                className="w-full flex justify-between items-center text-left py-3 px-2 bg-white rounded-lg shadow hover:bg-gray-50 transition"
              >
                <h2 className="text-xl font-semibold">{catInfo.title}</h2>
                <span className="text-gray-500 text-lg">
                  {isOpen ? "▲" : "▼"}
                </span>
              </button>

              {isOpen && (
                <div className="grid gap-4 mt-3 px-2">
                  {catInfo.itemCards.map((item) => {
                    const info = item.card.info;
                    return (
                      <div
                        key={info.id}
                        className="bg-white rounded-lg shadow p-4 flex justify-between hover:shadow-xl transition"
                      >
                        <div>
                          <h3 className="font-medium text-gray-800">
                            {info.name}
                          </h3>
                          {info.description && (
                            <p className="text-gray-500 text-sm">
                              {info.description}
                            </p>
                          )}
                          <p className="text-green-600 font-semibold mt-1">
                            ₹{info.price / 100}
                          </p>
                        </div>
                        {info.imageId && (
                          <img
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/${info.imageId}`}
                            alt={info.name}
                            className="w-24 h-24 rounded-lg object-cover"
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
