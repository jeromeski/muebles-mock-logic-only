import deepClone from "../../utils/deep-clone";
import {
  removeItemQuantity,
  addItemQuantity,
  getNewItemsWithTotals,
  getItemsAggregateCount,
  getGrandTotal,
  removeItemFromCart,
  addItemToCart,
  calculateUniqueItems,
  getTotalShippingFee,
  applyVoucherToItem
} from "./cart.utils";

const INITIAL_STATE = {
  items: [],
  itemsTotalCount: 0,
  uniqueItemsCount: null,
  grandTotal: 0,
  totalShippingFee: 0,
  isEmpty: true
};

const cartReducer = (origState, action) => {
  const state = deepClone(origState);
  switch (action.type) {
    case "INCREASE_QTY": {
      const items = addItemQuantity(state.items, action.item, action.qty);
      return generateFinalState(state, items);
    }
    case "DECREASE_QTY": {
      const items = removeItemQuantity(state.items, action.item, action.qty);
      return generateFinalState(state, items);
    }
    case "DELETE_ITEM": {
      const items = removeItemFromCart(state.items, action.item);
      return generateFinalState(state, items);
    }

    case "ADD_ITEM": {
      const items = addItemToCart(state.items, action.item, action.qty);
      return !items ? state : generateFinalState(state, items);
    }

    case "APPLY_VOUCHER": {
      const items = applyVoucherToItem(state.items, action.item);
      return generateFinalState(state, items);
    }

    case "CLEAR_CART": {
      return {
        ...INITIAL_STATE
      };
    }
    default:
      return state;
  }
};

const generateFinalState = (state, items) => {
  const uniqueItemsCount = calculateUniqueItems(items);

  return {
    ...JSON.parse(JSON.stringify(state)),
    items: getNewItemsWithTotals(items),
    itemsTotalCount: getItemsAggregateCount(items),
    uniqueItemsCount,
    grandTotal: getGrandTotal(items),
    totalShippingFee: getTotalShippingFee(items),
    isEmpty: uniqueItemsCount === 0
  };
};

export { INITIAL_STATE, cartReducer };
