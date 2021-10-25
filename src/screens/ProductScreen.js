import React from 'react'
import {Row, Col, Image, Container, ListGroup, Card} from 'react-bootstrap';
import Heart from "./images/heart.png";
import '../styles.css';

const ProductScreen = () => {
    return (
        <Container className="pt-5">
            <Row>
                <Col md={6} className="py-md-50">
                    <h3 className="blue align-left">Apple iPhone 11 (128GB) - Blue</h3>
                    <h5 className="grey align-left">Seller - Vijayendra Sharma</h5>
                    <ListGroup>
                        <ListGroup.Item>
                        <Image src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&.v=1566956144418"
                            width="250"
                            height="400" fluid>
                        </Image>
                        <Image src={Heart} className="heart"
                            width="30"
                            height="30" fluid>
                        </Image>
                        </ListGroup.Item>
                    </ListGroup>   
                </Col>  
                <Col md={6} className="p-5 float-right align-center">
                <table className="table table-borderless">
                    <thead className="bg-blue white">
                        <tr>
                        <th scope="col">Price</th>
                        <th scope="col">39,900</th>
                        </tr>
                    </thead>
                    <tbody className="bg-lightblue">
                        <tr className="align-center">
                        <th scope="row" className="grey">GST</th>
                        <td>10,650</td>
                        </tr>
                        <tr>
                        <th scope="row" className="grey">Delivery fee</th>
                        <td>150</td>
                        </tr>
                        <tr>
                        <th scope="row" className="grey">Discount</th>
                        <td colspan="2">0</td>
                        </tr>
                        <tr>
                        <th scope="row" className="grey">Total Price</th>
                        <td colspan="2" className="font-weight-bold">50,050</td>
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
                            <button className="m-2">Add to Cart</button>
                            <button className="m-2">Buy Now</button>
                        </td>
                        </tr>  
                    </tbody>
                    </table>
                </Col>
            </Row>
            <Row className="pt-5">
                <Col md={6} className="align-left">
                <table class="table table-responsive table-borderless pt-5">
                    <thead> 
                        <tr>
                        <th scope="col">Specifications</th>
                        </tr>   
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">Model Name</th>
                        <td>iPhone</td>
                        </tr>
                        <tr>
                        <th scope="row">Brand</th>
                        <td>Apple</td>
                        </tr>
                        <tr>
                        <th scope="row">Form Factor</th>
                        <td>Smartphone</td>
                        </tr>
                        <tr>
                        <th scope="row">Memory Storage</th>
                        <td>256 GB</td>
                        </tr>
                    </tbody>
                    </table>
                </Col>
            </Row>
            <p className="pt-5"><strong>Related Products</strong></p>
            <Row className="p-1">
                <Col md={12}>
                    <Card style={{ width: '15rem' }} className="float-right pt-4 m-2 shadow">
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>iPhone 11</Card.Title>
                            <Card.Text><p>Seller - Ajay Kumar</p>
                            55,990
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem' }} className="float-right pt-4 m-2 shadow">
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>iPhone 11</Card.Title>
                            <Card.Text><p>Seller - Ajay Kumar</p>
                            55,990
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem' }} className="float-right pt-4 m-2 shadow">
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>iPhone 11</Card.Title>
                            <Card.Text><p>Seller - Ajay Kumar</p>
                            55,990
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem' }} className="float-right pt-4 m-2 shadow">
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>iPhone 11</Card.Title>
                            <Card.Text><p>Seller - Ajay Kumar</p>
                            55,990
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}

export default ProductScreen

