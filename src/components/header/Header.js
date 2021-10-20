import React from "react";
import "./Header.css";
import Cart from "./images/shopping-cart.png";
import Heart from "./images/heart.png";
import Profile from "./images/user.png";

function Header() {
  return (
    <div>
      <header>
        <div className="logo">
          <h1>BizMade</h1>
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="/">
                <img src={Heart} alt="wishlist" />
                Wishlist
              </a>
            </li>
            <li>
              <a href="/">
                {" "}
                <img src={Cart} alt="cart" />
                Cart
              </a>
            </li>
            <li>
              <a href="/">
                <img src={Profile} alt="profile" />
                Profile
              </a>
            </li>
          </ul>
        </nav>
        <a className="auth-btn" href="/">
          <button>Sign Up / Log In</button>
        </a>
      </header>
    </div>
  );
}

export default Header;
