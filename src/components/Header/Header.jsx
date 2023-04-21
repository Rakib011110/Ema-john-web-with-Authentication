import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut().then().catch();
  };
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signUp">Sign Up</Link>
        <Link>
          {user && <span className="text-white"> {user.email} </span>}{" "}
          <button className="logOutbtn" onClick={handleLogOut}>
            Sign Out{" "}
          </button>{" "}
        </Link>
      </div>
    </nav>
  );
};

export default Header;
