import { useState, useEffect, useRef } from "react";
import { useGetProduct } from "api/product/get-product";
import ProductDetails from "components/product-details";
import { Container, Row, Col } from "react-grid-system";
import { Link, useParams } from "react-router-dom";
import { usePrevious, useLogger } from "react-use";

import "./product-page-style.css";

const Product = () => {
  useLogger("ProductDetails");
  const { id } = useParams();
  const { mutate: getProduct, data } = useGetProduct();

  useEffect(() => {
    if (id) {
      getProduct(id);
    }
  }, [id]);

  console.log(data);

  return data ? (
    <div className="product-page">
      <Container>
        <Row>
          <Col sm={12}>
            <div className="breadcrumb">
              <Link to="/">Home</Link> / {data.title}
            </div>
            <ProductDetails {...data} />
          </Col>
        </Row>
      </Container>
    </div>
  ) : (
    <h1>Loading</h1>
  );
};

export default Product;
