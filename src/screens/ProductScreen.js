import React from "react";
import { Row, Col, Image, Container, ListGroup, Card } from "react-bootstrap";
import Heart from "./images/heart.png";
import "../styles.css";
import products from "../products";
import { Link } from "react-router-dom";

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);
  return (
    <Container className="pt-5">
      <Row>
        <Col md={6} className="py-md-50">
          <h3 className="blue align-left">{product.name}</h3>
          <h5 className="grey align-left">{product.brand}</h5>
          <ListGroup>
            <ListGroup.Item>
              <Image
                src={product.image}
                width="auto"
                height="600"
                fluid
              ></Image>
              <Image
                src={Heart}
                className="heart"
                width="30"
                height="30"
                fluid
              ></Image>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={6} className="p-5 float-right align-center">
          <table className="table table-borderless">
            <thead className="bg-blue white">
              <tr>
                <th scope="col">Price</th>
                <th scope="col">{product.price}</th>
              </tr>
            </thead>
            <tbody className="bg-lightblue">
              <tr className="align-center">
                <th scope="row" className="grey">
                  GST
                </th>
                <td>10,650</td>
              </tr>
              <tr>
                <th scope="row" className="grey">
                  Delivery fee
                </th>
                <td>150</td>
              </tr>
              <tr>
                <th scope="row" className="grey">
                  Discount
                </th>
                <td colspan="2">0</td>
              </tr>
              <tr>
                <th scope="row" className="grey">
                  Total Price
                </th>
                <td colspan="2" className="font-weight-bold">
                  {product.price}
                </td>
              </tr>
              <tr className="table-border">
                <td colspan="4">
                  <span className="grey font-weight-bold">Quantity :</span>
                  <button className="m-2">-</button>
                  <span>1</span>
                  <button className="m-2">+</button>
                </td>
              </tr>
              <tr>
                <td colspan="4">
                  <Link to="/cart">
                    <button className="m-2">Add to Cart</button>
                  </Link>
                  <Link to="/payment">
                    <button className="m-2">Buy Now</button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col md={6} className="align-left">
          <table class="table table-responsive table-borderless pt-5">
            <tbody>
              <tr>
                <th scope="row">Description</th>
                <td>{product.description}</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <p className="pt-5">
        <strong>Related Products</strong>
      </p>
      <Row className="p-1">
        <Col md={12}>
          <Card
            style={{ width: "15rem" }}
            className="float-right pt-4 m-2 shadow"
          >
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>iPhone 11</Card.Title>
              <Card.Text>
                <p>Seller - Ajay Kumar</p>
                55,990
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{ width: "15rem" }}
            className="float-right pt-4 m-2 shadow"
          >
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>iPhone 11</Card.Title>
              <Card.Text>
                <p>Seller - Ajay Kumar</p>
                55,990
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{ width: "15rem" }}
            className="float-right pt-4 m-2 shadow"
          >
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>iPhone 11</Card.Title>
              <Card.Text>
                <p>Seller - Ajay Kumar</p>
                55,990
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{ width: "15rem" }}
            className="float-right pt-4 m-2 shadow"
          >
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>iPhone 11</Card.Title>
              <Card.Text>
                <p>Seller - Ajay Kumar</p>
                55,990
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductScreen;
