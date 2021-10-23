import React from "react";
import "./Header.css";
import { LinkContainer } from "react-router-bootstrap";
import Cart from "./images/shopping-cart.png";
import Heart from "./images/heart.png";
import Profile from "./images/user.png";
import { Nav } from "react-bootstrap";

function Header() {
  return (
    <div>
      <header>
        <LinkContainer to="/">
          <div className="logo">
            <h1>BizMade</h1>
          </div>
        </LinkContainer>
        <nav>
          <ul className="nav-links">
            <li>
              <LinkContainer to="/wishlist">
                <Nav.Link>
                  {/* <img src={Heart} alt="wishlist" /> */}
                  <i className="far fa-heart"></i>
                  Wishlist
                </Nav.Link>
              </LinkContainer>
            </li>
            <li>
              <LinkContainer to="/cart">
                <Nav.Link>
                  {" "}
                  {/* <img src={Cart} alt="cart" /> */}
                  <i className="fas fa-shopping-cart"></i>
                  Cart
                </Nav.Link>
              </LinkContainer>
            </li>
            <li>
              <LinkContainer to="/profile">
                <Nav.Link>
                  {/* <img src={Profile} alt="profile" /> */}
                  <i className="far fa-user"></i>
                  Profile
                </Nav.Link>
              </LinkContainer>
            </li>
          </ul>
        </nav>
        <LinkContainer to="/login">
          <Nav.Link className="auth-btn">
            <button>Sign Up / Log In</button>
          </Nav.Link>
        </LinkContainer>
      </header>
    </div>
  );
}

export default Header;
