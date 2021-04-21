import React from "react";
import products from "../products";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
const HomeSceen = () => {
  return (
    <>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4}>
            <Product product={product}></Product>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeSceen;
