import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartProvider from "context/cart/cart.context";
import Header from "layout/header";
import Home from "./pages/home";
import Product from "./pages/product";
import Cart from "./pages/cart";
import Search from "./pages/search";
import "./styles.css";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        
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
