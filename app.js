import React from "react";
import ReactDOM from "react-dom/client";

//JSX (transpiled before ir reaches the JS)-PARCEL-Babel
//? JSX => Bable transpiled it to  React.createElement=>ReactElement-JS Oblect=>HTMLElement(render)

const jsxHeading=(<h2 className="head" tabIndex={5}>Namaste React using JSX</h2>);


//?? React Functional Component
//*here is <Title/> is example of component Composition;
const Title=()=>(
    <h1 className="head" tabIndex={5}>Namaste React Title </h1>
);
const HeadingComponent=()=>(
    <div id="container">
        <Title/>
        <h1 className="heading">Namaste React from functional component</h1>
    </div>
)

const root =ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
root.render(<HeadingComponent/>)

   
   
   
   
   
