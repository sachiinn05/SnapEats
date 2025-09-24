import { CDN_URL } from "../utils/contants";

const ResturantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData;

  return (
    <div className="res-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105 w-full sm:w-80 md:w-72 lg:w-64 mx-auto min-h-[320px] flex flex-col">
      {/* Restaurant Image */}
      <img
        className="w-full h-40 object-cover"
        alt={name}
        src={CDN_URL + cloudinaryImageId}
      />

      {/* Restaurant Info */}
      <div className="p-4 flex flex-col flex-grow gap-1">
        <h3 className="text-lg font-bold text-gray-800 truncate">{name}</h3>
        <h4 className="text-gray-600 text-sm line-clamp-2">
          {cuisines.join(", ")}
        </h4>

        {/* Spacer to push rating & price to bottom */}
        <div className="flex-grow" />

        {/* Rating and Delivery Info */}
        <div className="flex justify-between items-center mt-2">
          <span
            className={`px-2 py-1 rounded text-white text-sm font-semibold ${
              parseFloat(avgRating) >= 4 ? "bg-green-500" : "bg-gray-400"
            }`}
          >
            {avgRating} ⭐
          </span>
          <span className="text-gray-600 text-sm">{sla.deliveryTime} mins</span>
        </div>

        <p className="text-gray-700 text-sm mt-1">
          Cost for Two: ₹{costForTwo / 100}
        </p>
      </div>
    </div>
  );
};
export const withPromtedLable=(ResturantCard)=>{
  return (props)=>{
    return (
      <div>
        <label>Promoted</label>
        <ResturantCard{...props}/>
      </div>
    )
  }
}
export default ResturantCard;
