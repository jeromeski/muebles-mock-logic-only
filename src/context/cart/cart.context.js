import {
  useContext,
  createContext,
  useReducer,
  useMemo,
  useEffect
} from "react";
import { cartReducer, INITIAL_STATE } from "./cart.reducer";
import { useLocalStorage } from "hooks/use-local-storage";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  // upload state in local storage
  const [savedCart, saveCart] = useLocalStorage(
    `cart`,
    JSON.stringify(INITIAL_STATE)
  );

  // use local storage data to populate selected cart items
  const [state, dispatch] = useReducer(
    cartReducer,
    JSON.parse(savedCart)
    // INITIAL_STATE
  );

  // update local storage everytime there is change in cart
  useEffect(() => {
    saveCart(JSON.stringify(state));
  }, [state, saveCart]);

  const increaseQty = (item, qty) => {
    dispatch({
      type: "INCREASE_QTY",
      item,
      qty
    });
  };

  const decreaseQty = (item, qty) => {
    dispatch({
      type: "DECREASE_QTY",
      item,
      qty
    });
  };

  const deleteItem = (item) => {
    dispatch({
      type: "DELETE_ITEM",
      item
    });
  };

  const addItem = (item) => {
    dispatch({
      type: "ADD_ITEM",
      item
    });
  };

  const isInCartHandler = (id) => {
    return state.items.some((i) => i.id === id);
  };

  const applyVoucher = (item) => {
    dispatch({
      type: "APPLY_VOUCHER",
      item
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART"
    });
  };

  const values = useMemo(
    () => ({
      ...state,
      increaseQty,
      decreaseQty,
      deleteItem,
      addItem,
      isInCartHandler,
      applyVoucher,
      clearCart
    }),
    // eslint-disable-next-line
    [state]
  );

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
