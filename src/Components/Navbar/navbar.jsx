import React, { useContext } from "react";
import "./navbar.css";
import logo from "../../Assets/logo.png";
import { CoinContext } from "../../Context/coinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd": {
        setCurrency({
          name: "usd",
          symbol: "$",
        });
        break;
      }
      case "eur": {
        setCurrency({
          name: "eur",
          symbol: "€",
        });
        break;
      }
      case "inr": {
        setCurrency({
          name: "inr",
          symbol: "₹",
        });
        break;
      }
      default: {
        setCurrency({
          name: "usd",
          symbol: "$",
        });
        break;
      }
    }
  };

  return (
    <div className="navbar">
      <div className="navLeft">
        <Link to={'/'}>
          <img src={logo} alt="" className="logo" />
          </Link>
        <h1>TokenTribe</h1>
       
      </div>
      <ul>
      <Link to={'/'}><li>Home</li></Link>  
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="navRight">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="inr">INR</option>
          <option value="eur">EUR</option>
        </select>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
