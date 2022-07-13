import { useEffect, useState } from "react";
import { useGetProducts } from "../../api/fake-db/fake-server";
import _ from "lodash";
import { Container, Row, Col } from "react-grid-system";
import ProductCard from "../product-card";

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
    <div className="App">
      <Container>
        <Row>
          {feed ? (
            feed?.map((f) => {
              return (
                <Col xs={12} sm={6} lg={4} key={f.id}>
                  <ProductCard {...f} />
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
