import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    console.log(err)
 return (
    <div className="error">
        <h1>Oops!!!</h1>
        <h2>Something went worng!!</h2>
        <h3>{err.status}:{err.statusText}</h3>
        <img alt="error-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfTqYOdBdAMcDBZxPK93VyqUeb0iY8TnJZZlGi-oqrMyE4MrRyCsTTVL5W-67acNE9_zc&usqp=CAU"></img>


    </div>
 )
}
export default Error;