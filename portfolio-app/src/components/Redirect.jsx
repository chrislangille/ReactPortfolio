import { NavLink } from "react-router-dom";

function Redirect() {
  return (
    <div className="redirect-section">
      <h1>Error 404 - This page does not exist.</h1>
      <h2>
        Please return to the{" "}
        <NavLink to="/" className="redirect-link">
          homepage
        </NavLink>
      </h2>
    </div>
  );
}

export default Redirect;
