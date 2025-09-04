import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Header=()=>{
    return (
        <div className="header">
            <div className="logo">
                <img src="https://static.vecteezy.com/system/resources/previews/011/405/724/non_2x/call-food-logo-design-food-delivery-service-logo-concept-free-vector.jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>
        </div>
    )
};

const ResturantCard = ( props ) => {
    const {resData}=props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};


const resList= [
{
info: {
id: "39126",
name: "KFC",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/907859fd-2ff6-4257-a829-7c3adba9a17b_39126.JPG",
locality: "Ansal Plaza Mall",
areaName: "Knowledge Park",
costForTwo: "₹450 for two",
cuisines: [
"Burgers",
"Fast Food",
"Rolls & Wraps"
],
avgRating: 4,
parentId: "547",
avgRatingString: "4.0",
totalRatingsString: "9.3K+",
sla: {
deliveryTime: 19,
lastMileTravel: 2,
serviceability: "SERVICEABLE",
slaString: "15-20 mins",
lastMileTravelString: "2.0 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-09-04 23:00:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹179"
},
loyaltyDiscoverPresentationInfo: {
logoCtx: {
logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
},
freedelMessage: "FREE DELIVERY",
badgeType: "BADGE_TYPE_ONE_LITE"
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-42b30d9c-8f0f-43e3-9ac4-e8a48a147cbe"
},
cta: {
link: "https://www.swiggy.com/city/noida-1/kfc-ansal-plaza-mall-knowledge-park-rest39126",
type: "WEBLINK"
}
},
{
info: {
id: "591306",
name: "Dum Safar Biryani",
cloudinaryImageId: "yh9wlypx39lihi1flr8w",
locality: "Beta 2",
areaName: "Omaxe connaught Palace",
costForTwo: "₹500 for two",
cuisines: [
"Biryani",
"Kebabs",
"North Indian",
"Barbecue"
],
avgRating: 4.3,
parentId: "351013",
avgRatingString: "4.3",
totalRatingsString: "1.8K+",
sla: {
deliveryTime: 34,
lastMileTravel: 2.9,
serviceability: "SERVICEABLE",
slaString: "30-35 mins",
lastMileTravelString: "2.9 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-09-04 23:30:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹99"
},
loyaltyDiscoverPresentationInfo: {
logoCtx: {
logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
},
freedelMessage: "FREE DELIVERY",
badgeType: "BADGE_TYPE_ONE_LITE"
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-42b30d9c-8f0f-43e3-9ac4-e8a48a147cbe"
},
cta: {
link: "https://www.swiggy.com/city/noida-1/dum-safar-biryani-beta-2-omaxe-connaught-palace-rest591306",
type: "WEBLINK"
}
},
{
info: {
id: "78041",
name: "Burger King",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/15802be3-6bb4-4c92-b094-0ffb69658b40_78041.jpg",
locality: "Gamma Shopping Mall",
areaName: "Gamma 1",
costForTwo: "₹350 for two",
cuisines: [
"Burgers",
"American"
],
avgRating: 4.3,
parentId: "166",
avgRatingString: "4.3",
totalRatingsString: "22K+",
sla: {
deliveryTime: 20,
lastMileTravel: 2.8,
serviceability: "SERVICEABLE",
slaString: "15-20 mins",
lastMileTravelString: "2.8 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-09-05 05:00:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "Rxawards/_CATEGORY-Burger.png",
description: "Delivery!"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "Delivery!",
imageId: "Rxawards/_CATEGORY-Burger.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹59"
},
loyaltyDiscoverPresentationInfo: {
logoCtx: {
logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
},
freedelMessage: "FREE DELIVERY",
badgeType: "BADGE_TYPE_ONE_LITE"
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-42b30d9c-8f0f-43e3-9ac4-e8a48a147cbe"
},
cta: {
link: "https://www.swiggy.com/city/noida-1/burger-king-gamma-shopping-mall-gamma-1-rest78041",
type: "WEBLINK"
}
},
{
info: {
id: "253985",
name: "McDonald's",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/f3507e7a-f122-4696-8e44-6f98b30473fa_253985.JPG",
locality: "Ansal Plaza Mall",
areaName: "Knowledge Park",
costForTwo: "₹400 for two",
cuisines: [
"American"
],
avgRating: 4.4,
parentId: "630",
avgRatingString: "4.4",
totalRatingsString: "16K+",
sla: {
deliveryTime: 24,
lastMileTravel: 2.7,
serviceability: "SERVICEABLE",
slaString: "20-25 mins",
lastMileTravelString: "2.7 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-09-04 22:45:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
description: "Delivery!"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "Delivery!",
imageId: "Ratnesh_Badges/Rx_Awards_2025/Bolt.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹49"
},
loyaltyDiscoverPresentationInfo: {
logoCtx: {
logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
},
freedelMessage: "FREE DELIVERY",
badgeType: "BADGE_TYPE_ONE_LITE"
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-42b30d9c-8f0f-43e3-9ac4-e8a48a147cbe"
},
cta: {
link: "https://www.swiggy.com/city/noida-1/mcdonalds-ansal-plaza-mall-knowledge-park-rest253985",
type: "WEBLINK"
}
},
{
info: {
id: "362954",
name: "Burger Singh(Big Punjabi Burgers)",
cloudinaryImageId: "972a37599772cdc7df93a0855ad87591",
locality: "Alpha 1",
areaName: "Alpha 1",
costForTwo: "₹300 for two",
cuisines: [
"American",
"Indian",
"Snacks",
"Beverages",
"Desserts"
],
avgRating: 4.3,
parentId: "375065",
avgRatingString: "4.3",
totalRatingsString: "10K+",
sla: {
deliveryTime: 19,
lastMileTravel: 1.4,
serviceability: "SERVICEABLE",
slaString: "15-20 mins",
lastMileTravelString: "1.4 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-09-05 05:29:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "android/static-assets/icons/big_rx.png",
description: "bolt!"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "bolt!",
imageId: "android/static-assets/icons/big_rx.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹69"
},
loyaltyDiscoverPresentationInfo: {
logoCtx: {
logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
},
freedelMessage: "FREE DELIVERY",
badgeType: "BADGE_TYPE_ONE_LITE"
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-42b30d9c-8f0f-43e3-9ac4-e8a48a147cbe"
},
cta: {
link: "https://www.swiggy.com/city/noida-1/burger-singh-big-punjabi-burgers-alpha-1-rest362954",
type: "WEBLINK"
}
},
{
info: {
id: "70974",
name: "Rollsking",
cloudinaryImageId: "oioh0z6vpkiowfwt6ths",
locality: "Alpha 1",
areaName: "Greater Noida",
costForTwo: "₹250 for two",
cuisines: [
"Fast Food",
"Rolls & Wraps",
"North Indian",
"Snacks"
],
avgRating: 4.4,
parentId: "4697",
avgRatingString: "4.4",
totalRatingsString: "9.4K+",
sla: {
deliveryTime: 23,
lastMileTravel: 1.3,
serviceability: "SERVICEABLE",
slaString: "20-25 mins",
lastMileTravelString: "1.3 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-09-05 02:30:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "android/static-assets/icons/big_rx.png",
description: "bolt!"
},
{
imageId: "Rxawards/_CATEGORY-Rolls.png",
description: "Delivery!"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "bolt!",
imageId: "android/static-assets/icons/big_rx.png"
}
},
{
attributes: {
description: "Delivery!",
imageId: "Rxawards/_CATEGORY-Rolls.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹59"
},
loyaltyDiscoverPresentationInfo: {
logoCtx: {
logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
},
freedelMessage: "FREE DELIVERY",
badgeType: "BADGE_TYPE_ONE_LITE"
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-42b30d9c-8f0f-43e3-9ac4-e8a48a147cbe"
},
cta: {
link: "https://www.swiggy.com/city/noida-1/rollsking-alpha-1-greater-noida-rest70974",
type: "WEBLINK"
}
},
{
info: {
id: "623591",
name: "La Pino'z Pizza",
cloudinaryImageId: "vivh8cnou1ef7vcvaszq",
locality: "Alpha 2",
areaName: "Greater Noida",
costForTwo: "₹400 for two",
cuisines: [
"Pizzas",
"Pastas",
"Italian",
"Desserts",
"Beverages"
],
avgRating: 3.9,
parentId: "4961",
avgRatingString: "3.9",
totalRatingsString: "6.4K+",
sla: {
deliveryTime: 22,
lastMileTravel: 0.3,
serviceability: "SERVICEABLE",
slaString: "20-25 mins",
lastMileTravelString: "0.3 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-09-04 23:59:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "60% OFF",
subHeader: "UPTO ₹120"
},
loyaltyDiscoverPresentationInfo: {
logoCtx: {
logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
},
freedelMessage: "FREE DELIVERY",
badgeType: "BADGE_TYPE_ONE_LITE"
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "3.6",
ratingCount: "116"
},
source: "GOOGLE",
sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-42b30d9c-8f0f-43e3-9ac4-e8a48a147cbe"
},
cta: {
link: "https://www.swiggy.com/city/noida-1/la-pinoz-pizza-alpha-2-greater-noida-rest623591",
type: "WEBLINK"
}
},
{
info: {
id: "59395",
name: "Bikkgane Biryani",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/9a5a9ca9-7324-4995-b234-d6d733a98292_59395.jpg",
locality: "The Grand Venice Mall",
areaName: "Jaypee Greens",
costForTwo: "₹400 for two",
cuisines: [
"Biryani",
"Hyderabadi",
"Andhra",
"South Indian",
"North Indian",
"Mughlai",
"Kebabs"
],
avgRating: 4.4,
parentId: "5070",
avgRatingString: "4.4",
totalRatingsString: "12K+",
sla: {
deliveryTime: 33,
lastMileTravel: 4.2,
serviceability: "SERVICEABLE",
slaString: "30-35 mins",
lastMileTravelString: "4.2 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-09-05 03:00:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "Rxawards/_CATEGORY-Biryani.png",
description: "Delivery!"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "Delivery!",
imageId: "Rxawards/_CATEGORY-Biryani.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹219"
},
loyaltyDiscoverPresentationInfo: {
logoCtx: {
logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
},
freedelMessage: "FREE DELIVERY",
badgeType: "BADGE_TYPE_ONE_LITE"
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-42b30d9c-8f0f-43e3-9ac4-e8a48a147cbe"
},
cta: {
link: "https://www.swiggy.com/city/noida-1/bikkgane-biryani-the-grand-venice-mall-jaypee-greens-rest59395",
type: "WEBLINK"
}
},
{
info: {
id: "462273",
name: "Cheesecake & Co.",
cloudinaryImageId: "b318c0b4bc2169550145ace1d6e791a2",
locality: "Delta 1",
areaName: "Greater Noida",
costForTwo: "₹400 for two",
cuisines: [
"Bakery",
"Desserts"
],
avgRating: 4.6,
parentId: "387417",
avgRatingString: "4.6",
totalRatingsString: "1.8K+",
sla: {
deliveryTime: 22,
lastMileTravel: 2.8,
serviceability: "SERVICEABLE",
slaString: "20-25 mins",
lastMileTravelString: "2.8 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-09-05 00:00:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "newg.png",
description: "Gourmet"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "Gourmet",
imageId: "newg.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "₹100 OFF",
subHeader: "ABOVE ₹249",
discountTag: "FLAT DEAL"
},
loyaltyDiscoverPresentationInfo: {
logoCtx: {
logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
},
freedelMessage: "FREE DELIVERY",
badgeType: "BADGE_TYPE_ONE_LITE"
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-42b30d9c-8f0f-43e3-9ac4-e8a48a147cbe"
},
cta: {
link: "https://www.swiggy.com/city/noida-1/cheesecake-and-co-delta-1-greater-noida-rest462273",
type: "WEBLINK"
}
},
{
info: {
id: "70974",
name: "Rollsking",
cloudinaryImageId: "oioh0z6vpkiowfwt6ths",
locality: "Alpha 1",
areaName: "Greater Noida",
costForTwo: "₹250 for two",
cuisines: [
"Fast Food",
"Rolls & Wraps",
"North Indian",
"Snacks"
],
avgRating: 4.4,
parentId: "4697",
avgRatingString: "4.4",
totalRatingsString: "9.4K+",
sla: {
deliveryTime: 23,
lastMileTravel: 1.3,
serviceability: "SERVICEABLE",
slaString: "20-25 mins",
lastMileTravelString: "1.3 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-09-05 02:30:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "android/static-assets/icons/big_rx.png",
description: "bolt!"
},
{
imageId: "Rxawards/_CATEGORY-Rolls.png",
description: "Delivery!"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "bolt!",
imageId: "android/static-assets/icons/big_rx.png"
}
},
{
attributes: {
description: "Delivery!",
imageId: "Rxawards/_CATEGORY-Rolls.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹59"
},
loyaltyDiscoverPresentationInfo: {
logoCtx: {
logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
},
freedelMessage: "FREE DELIVERY",
badgeType: "BADGE_TYPE_ONE_LITE"
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-42b30d9c-8f0f-43e3-9ac4-e8a48a147cbe"
},
cta: {
link: "https://www.swiggy.com/city/noida-1/rollsking-alpha-1-greater-noida-rest70974",
type: "WEBLINK"
}
},
{
info: {
id: "623591",
name: "La Pino'z Pizza",
cloudinaryImageId: "vivh8cnou1ef7vcvaszq",
locality: "Alpha 2",
areaName: "Greater Noida",
costForTwo: "₹400 for two",
cuisines: [
"Pizzas",
"Pastas",
"Italian",
"Desserts",
"Beverages"
],
avgRating: 3.9,
parentId: "4961",
avgRatingString: "3.9",
totalRatingsString: "6.4K+",
sla: {
deliveryTime: 22,
lastMileTravel: 0.3,
serviceability: "SERVICEABLE",
slaString: "20-25 mins",
lastMileTravelString: "0.3 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-09-04 23:59:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "60% OFF",
subHeader: "UPTO ₹120"
},
loyaltyDiscoverPresentationInfo: {
logoCtx: {
logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
},
freedelMessage: "FREE DELIVERY",
badgeType: "BADGE_TYPE_ONE_LITE"
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "3.6",
ratingCount: "116"
},
source: "GOOGLE",
sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-42b30d9c-8f0f-43e3-9ac4-e8a48a147cbe"
},
cta: {
link: "https://www.swiggy.com/city/noida-1/la-pinoz-pizza-alpha-2-greater-noida-rest623591",
type: "WEBLINK"
}
},
{
info: {
id: "59395",
name: "Bikkgane Biryani",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/9a5a9ca9-7324-4995-b234-d6d733a98292_59395.jpg",
locality: "The Grand Venice Mall",
areaName: "Jaypee Greens",
costForTwo: "₹400 for two",
cuisines: [
"Biryani",
"Hyderabadi",
"Andhra",
"South Indian",
"North Indian",
"Mughlai",
"Kebabs"
],
avgRating: 4.4,
parentId: "5070",
avgRatingString: "4.4",
totalRatingsString: "12K+",
sla: {
deliveryTime: 33,
lastMileTravel: 4.2,
serviceability: "SERVICEABLE",
slaString: "30-35 mins",
lastMileTravelString: "4.2 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-09-05 03:00:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "Rxawards/_CATEGORY-Biryani.png",
description: "Delivery!"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "Delivery!",
imageId: "Rxawards/_CATEGORY-Biryani.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹219"
},
loyaltyDiscoverPresentationInfo: {
logoCtx: {
logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
},
freedelMessage: "FREE DELIVERY",
badgeType: "BADGE_TYPE_ONE_LITE"
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-42b30d9c-8f0f-43e3-9ac4-e8a48a147cbe"
},
cta: {
link: "https://www.swiggy.com/city/noida-1/bikkgane-biryani-the-grand-venice-mall-jaypee-greens-rest59395",
type: "WEBLINK"
}
},
{
info: {
id: "462273",
name: "Cheesecake & Co.",
cloudinaryImageId: "b318c0b4bc2169550145ace1d6e791a2",
locality: "Delta 1",
areaName: "Greater Noida",
costForTwo: "₹400 for two",
cuisines: [
"Bakery",
"Desserts"
],
avgRating: 4.6,
parentId: "387417",
avgRatingString: "4.6",
totalRatingsString: "1.8K+",
sla: {
deliveryTime: 22,
lastMileTravel: 2.8,
serviceability: "SERVICEABLE",
slaString: "20-25 mins",
lastMileTravelString: "2.8 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-09-05 00:00:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "newg.png",
description: "Gourmet"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "Gourmet",
imageId: "newg.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "₹100 OFF",
subHeader: "ABOVE ₹249",
discountTag: "FLAT DEAL"
},
loyaltyDiscoverPresentationInfo: {
logoCtx: {
logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
},
freedelMessage: "FREE DELIVERY",
badgeType: "BADGE_TYPE_ONE_LITE"
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-42b30d9c-8f0f-43e3-9ac4-e8a48a147cbe"
},
cta: {
link: "https://www.swiggy.com/city/noida-1/cheesecake-and-co-delta-1-greater-noida-rest462273",
type: "WEBLINK"
}
},
{
info: {
id: "628113",
name: "Subway",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/2bd3c02d-9e1f-41ef-a363-fdc6e318dcae_628113.jpg",
locality: "Commercial Belt",
areaName: "Sunrise Tower",
costForTwo: "₹350 for two",
cuisines: [
"sandwich",
"Salads",
"wrap",
"Healthy Food"
],
avgRating: 4.2,
parentId: "2",
avgRatingString: "4.2",
totalRatingsString: "2.7K+",
sla: {
deliveryTime: 27,
lastMileTravel: 1.4,
serviceability: "SERVICEABLE",
slaString: "25-30 mins",
lastMileTravelString: "1.4 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-09-05 04:00:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "android/static-assets/icons/big_rx.png",
description: "bolt!"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "bolt!",
imageId: "android/static-assets/icons/big_rx.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹69"
},
loyaltyDiscoverPresentationInfo: {
logoCtx: {
logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
},
freedelMessage: "FREE DELIVERY",
badgeType: "BADGE_TYPE_ONE_LITE"
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-42b30d9c-8f0f-43e3-9ac4-e8a48a147cbe"
},
cta: {
link: "https://www.swiggy.com/city/noida-1/subway-commercial-belt-sunrise-tower-rest628113",
type: "WEBLINK"
}
},
{
info: {
id: "28798",
name: "Domino's Pizza",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/ff0136e1-b9a4-4ff7-a035-52be6674f858_28798.JPG",
locality: "Alpha 1",
areaName: "Greater Noida",
costForTwo: "₹400 for two",
cuisines: [
"Pizzas",
"Italian",
"Pastas",
"Desserts"
],
avgRating: 4.3,
parentId: "2456",
avgRatingString: "4.3",
totalRatingsString: "9.4K+",
sla: {
deliveryTime: 25,
lastMileTravel: 1.1,
serviceability: "SERVICEABLE",
slaString: "20-25 mins",
lastMileTravelString: "1.1 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-09-04 23:59:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "android/static-assets/icons/big_rx.png",
description: "bolt!"
},
{
imageId: "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
description: "Delivery!"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "bolt!",
imageId: "android/static-assets/icons/big_rx.png"
}
},
{
attributes: {
description: "Delivery!",
imageId: "Ratnesh_Badges/Rx_Awards_2025/Bolt.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹69"
},
loyaltyDiscoverPresentationInfo: {
logoCtx: {
logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
},
freedelMessage: "FREE DELIVERY",
badgeType: "BADGE_TYPE_ONE_LITE"
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-42b30d9c-8f0f-43e3-9ac4-e8a48a147cbe"
},
cta: {
link: "https://www.swiggy.com/city/noida-1/dominos-pizza-alpha-1-greater-noida-rest28798",
type: "WEBLINK"
}
},
{
info: {
id: "222657",
name: "Biryani By Kilo",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/c2d501db-0501-42a8-b4fd-6deb636a451b_222657.JPG",
locality: "Alpha 2",
areaName: "Alpha 2",
costForTwo: "₹700 for two",
cuisines: [
"Biryani",
"Hyderabadi",
"North Indian",
"Kebabs",
"Mughlai",
"Desserts"
],
avgRating: 4.3,
parentId: "130",
avgRatingString: "4.3",
totalRatingsString: "5.9K+",
sla: {
deliveryTime: 27,
lastMileTravel: 0.3,
serviceability: "SERVICEABLE",
slaString: "25-30 mins",
lastMileTravelString: "0.3 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-09-05 01:00:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "newg.png",
description: "Gourmet"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "Gourmet",
imageId: "newg.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹89"
},
loyaltyDiscoverPresentationInfo: {
logoCtx: {
logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
},
freedelMessage: "FREE DELIVERY",
badgeType: "BADGE_TYPE_ONE_LITE"
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "3.9",
ratingCount: "144"
},
source: "GOOGLE",
sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-42b30d9c-8f0f-43e3-9ac4-e8a48a147cbe"
},
cta: {
link: "https://www.swiggy.com/city/noida-1/biryani-by-kilo-alpha-2-rest222657",
type: "WEBLINK"
}
},
{
info: {
id: "426714",
name: "Bakingo",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/13/d1d1e8d9-d8b8-483e-a163-2504828f579a_426714.JPG",
locality: "Alpha 2",
areaName: "Greater Noida",
costForTwo: "₹300 for two",
cuisines: [
"Bakery"
],
avgRating: 4.6,
parentId: "3818",
avgRatingString: "4.6",
totalRatingsString: "8.4K+",
sla: {
deliveryTime: 14,
lastMileTravel: 0.3,
serviceability: "SERVICEABLE",
slaString: "10-15 mins",
lastMileTravelString: "0.3 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-09-04 23:00:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "android/static-assets/icons/big_rx.png",
description: "bolt!"
},
{
imageId: "Rxawards/_CATEGORY-Desserts.png",
description: "Delivery!"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "bolt!",
imageId: "android/static-assets/icons/big_rx.png"
}
},
{
attributes: {
description: "Delivery!",
imageId: "Rxawards/_CATEGORY-Desserts.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹79"
},
loyaltyDiscoverPresentationInfo: {
logoCtx: {
logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
},
freedelMessage: "FREE DELIVERY",
badgeType: "BADGE_TYPE_ONE_LITE"
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-42b30d9c-8f0f-43e3-9ac4-e8a48a147cbe"
},
cta: {
link: "https://www.swiggy.com/city/noida-1/bakingo-alpha-2-greater-noida-rest426714",
type: "WEBLINK"
}
},
];


const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant, index) => (
          <ResturantCard 
            key={restaurant.info.id + "_" + index}  // ensures unique key
            resData={restaurant.info}               // pass only info object
          />
        ))}
      </div>
    </div>
  );
};

const AppLayout=()=>{
    return <div className="app">
        <Header/>
        <Body/>
    </div>;
};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)

   
   
   
   
   
