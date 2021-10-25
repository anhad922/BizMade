import React from "react";
import Facebook from "./images/facebook.png";
import Instagram from "./images/instagram.png";
import LinkedIn from "./images/linkedin.png";
import Twitter from "./images/twitter.png";
// import "./Footer.css";
import { Container, Row, Col, Nav } from "react-bootstrap";

function Footer() {
  return (
    // <div>
    //   <footer>
    //     <div className="copyright">
    //       <h3>&copy;2021 BizMade All right reserved</h3>
    //     </div>
    //     <nav>
    //       <ul className="nav-links">
    //         <li>
    //           <a href="/">
    //             <img src={Facebook} alt="facebook" />
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/">
    //             <img src={Instagram} alt="instagram" />
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/">
    //             <img src={Twitter} alt="twitter" />
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/">
    //             <img src={LinkedIn} alt="linkedin" />
    //           </a>
    //         </li>
    //       </ul>
    //     </nav>
    //   </footer>
    // </div>
    <footer>
      {" "}
      <Container>
        <Row>
          <Col className="text-center py-3">
            &copy;2021 BizMade All right reserved
          </Col>
          <Col>
            <Nav className="ml-auto">
              <Nav.Link>
                <i class="fab fa-facebook-square"></i>
              </Nav.Link>
              <Nav.Link>
                <i class="fab fa-instagram-square"></i>
              </Nav.Link>
              <Nav.Link>
                <i class="fab fa-linkedin"></i>
              </Nav.Link>
              <Nav.Link>
                <i class="fab fa-twitter-square"></i>
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
