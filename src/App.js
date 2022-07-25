import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartProvider from "context/cart/cart.context";
import Header from "layout/header";
import Home from "./pages/home";
import Product from "./pages/product";
import Cart from "./pages/cart";
import "./styles.css";

import { setConfiguration } from "react-grid-system";
setConfiguration({
  containerWidths: [
    540,
    740 * 0.75,
    960 * 0.75,
    1140 * 0.75,
    1540 * 0.75,
    1810 * 0.75
  ]
});

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/furniture/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

const queryClient = new QueryClient();

export default function () {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <App />
      </CartProvider>
    </QueryClientProvider>
  );
}
