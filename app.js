import React from "react";
import ReactDOM from "react-dom/client";

//JSX (transpiled before ir reaches the JS)-PARCEL-Babel
//? JSX => Bable transpiled it to  React.createElement=>ReactElement-JS Oblect=>HTMLElement(render)

const jsxHeading=(<h2 className="head" tabIndex={5}>Namate React using JSX</h2>);
console.log(jsxHeading);

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

   
   
   
   
   
