import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useGetProducts } from "./api/fake-db/fake-server";
import _ from "lodash";
import { Container, Row, Col } from "react-grid-system";
import "./styles.css";
import ProductCard from "./components/product-card";

function App() {
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
                <Col xs={6} lg={4} key={f.id}>
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
}

const queryClient = new QueryClient();

export default function () {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}
