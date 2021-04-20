import React from "react";
import products from "../products";
import { Row, Col } from "react-bootstrap";

const HomeSceen = () => {
  return (
    <>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4}>
            <h3>{product.name}</h3>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeSceen;
