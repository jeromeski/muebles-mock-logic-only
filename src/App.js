import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartProvider from "context/cart/cart.context";
import Header from "layout/header";
import Home from "./pages/home";
import Product from "./pages/product";
import Cart from "./pages/cart";
import "./styles.css";
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
