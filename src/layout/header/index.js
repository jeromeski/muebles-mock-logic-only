import { CgShoppingCart } from "react-icons/cg";
import { useCart } from "context/cart/cart.context.js";
import "./header-style.css";
import { Link } from "react-router-dom";

const Header = () => {
  // const { itemsTotalCount } = useCart();
  const itemsTotalCount = 2;
  return (
    <section className="header">
      <div className="brand-name">
        <Link className="nav-link" to="/">
          <h1>
            <b>MueblesNiLolaBell</b>
          </h1>
        </Link>
      </div>
      <div className="nav-cart">
        {itemsTotalCount > 1 ? (
          <span className="nav-cart-count">{itemsTotalCount}</span>
        ) : (
          <span></span>
        )}

        <CgShoppingCart
          style={{ fontSize: "2rem", color: "lightgoldenrodyellow" }}
        />
      </div>
    </section>
  );
};

export default Header;
