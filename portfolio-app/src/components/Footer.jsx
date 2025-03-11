import { NavLink } from "react-router-dom";

const Footer = () => (
    <footer className="bg-dark text-light text-center py-3">
      <div className="container">
        <p className="mb-0">&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
      </div>
    </footer>
);

export default Footer;