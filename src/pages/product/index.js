import { useGetProduct } from "api/product/get-product";
import ProductDetails from "components/product-details";
import { Container, Row, Col } from "react-grid-system";
import { Link, useParams } from "react-router-dom";
import "./product-page-style.css";

const Product = () => {
  const { id } = useParams();
  const { data } = useGetProduct(id);

  return (
    <div className="product-page">
      <Container>
        <Row>
          <Col sm={12}>
            <div className="breadcrumb">
              <Link to="/">Home</Link> / {data?.title}
            </div>
            <ProductDetails {...data} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Product;
