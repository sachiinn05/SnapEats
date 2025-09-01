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

const ResturantCard=()=>{
    return (
  <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
    <img  className="res-logo"
    alt="res-logo"src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/4/30/4ea4293b-557f-4b8c-8ecb-4352bfed28a3_3a2a51fe-a707-4974-866d-d5ff72ddd0ca.jpeg"></img>
    <h3>BBQ</h3>
    <h4>Chicken Roll,North Indian</h4>
    <h4>4.6 Star</h4>
    <h4>45 min</h4>
  </div>
    );
};
const Body=()=>{
return(
    <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            <ResturantCard/>
             <ResturantCard/>
              <ResturantCard/>
               <ResturantCard/>
                <ResturantCard/>
                 <ResturantCard/>
             <ResturantCard/>
              <ResturantCard/>
               <ResturantCard/>
              <ResturantCard/>
               <ResturantCard/>
                <ResturantCard/>
                 <ResturantCard/>
                  <ResturantCard/>
                   <ResturantCard/>
                    <ResturantCard/>
                     <ResturantCard/>
                      <ResturantCard/>
        </div>
    </div>
)

}
const AppLayout=()=>{
    return <div className="app">
        <Header/>
        <Body/>
    </div>;
};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)

   
   
   
   
   
