import { NavLink } from "react-router-dom";

function Redirect() {
    return (
      <div>
        <h1>Error 404 - This page does not exist. Please return to the <NavLink to="/">homepage</NavLink></h1>
      </div>
    )
}
  
export default Redirect
  