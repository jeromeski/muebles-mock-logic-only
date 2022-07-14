import { useEffect, useState } from "react";
import { useGetProducts } from "api/product/get-all-products";
import _ from "lodash";
import { Container, Row, Col } from "react-grid-system";
import ProductCard from "../product-card";
import "./product-feed-style.css";

const ProductFeed = () => {
  const { data } = useGetProducts();
  const [feed, setFeed] = useState();
  useEffect(() => {
    if (data && data?.length) {
      const getShuffledItems = () => {
        const shuffledItems = _.shuffle(data);
        setFeed(shuffledItems.slice(0, 12));
      };
      getShuffledItems();
    }
  }, [data]);
  return (
    <div className="product-feed">
      <Container>
        <Row>
          {feed ? (
            feed?.map((f) => {
              return (
                <Col xs={6} sm={6} md={4} lg={3} key={f.id}>
                  <div className="card-wrap">
                    <ProductCard {...f} />
                  </div>
                </Col>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default ProductFeed;
