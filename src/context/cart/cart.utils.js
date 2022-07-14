// import _ from "lodash";
const noOp = () => {};

const addItemQuantity = (items, item, qty) => {
  const itemIdx = items.findIndex((c) => c.id === item.id);

  const newItems = [
    // get index 0 - itemIdx
    ...items.slice(0, itemIdx),
    // get target item while not changing other items and append target with new qty
    { ...items[itemIdx], qty: items[itemIdx].qty + qty },
    ...items.slice(itemIdx + 1)
  ];

  return newItems;
};

const removeItemQuantity = (items, product, qty) => {
  const itemIdx = items.findIndex((c) => c.id === product.id);
  if (items[itemIdx].qty <= 1) {
    const newItems = [...items];
    newItems[itemIdx].qty = qty;
    return newItems;
  }
  const newItems = [
    ...items.slice(0, itemIdx),
    { ...items[itemIdx], qty: items[itemIdx].qty - qty },
    ...items.slice(itemIdx + 1)
  ];
  return newItems;
};

const getNewItemsWithTotals = (items) => {
  return items.map((item) => {
    if (item.isVoucher === true) {
      return {
        ...item,
        itemTotal: item.salesPrice * item.qty
      };
    }
    return {
      ...item,
      itemTotal: item.listPrice * item.qty
    };
  });
};

const removeItemFromCart = (items, product) => {
  return items.filter((c) => {
    if (c.id !== product.id) {
      return c;
    }
    return null;
  });
};

const addItemToCart = (items, product, qty = 1) => {
  const itemIdx = items.findIndex((c) => c.id === product.id);
  if (itemIdx >= 0) {
    return noOp();
  }
  if (qty > 1) {
    const newProduct = { ...product, qty: qty };
    return [...items, newProduct];
  }
  const newProduct = { ...product, qty: 1, shipping: 12 };
  return [...items, newProduct];
};

const getItemsAggregateCount = (items) => {
  return items.reduce(function (totalCount, currentItem) {
    return totalCount + currentItem.qty;
  }, 0);
};
const getGrandTotal = (items) => {
  return items.reduce(function (total, item) {
    if (item.isVoucher === true) {
      return total + item.qty * item.salesPrice;
    } else return total + item.qty * item.listPrice;
  }, 0);
};

const calculateUniqueItems = (items) => items.length;

const applyVoucherToItem = (items, product) => {
  const itemIdx = items.findIndex((c) => c.id === product.id);
  // update state
  const newItems = [
    ...items.slice(0, itemIdx),
    { ...items[itemIdx], isVoucher: true },
    ...items.slice(itemIdx + 1)
  ];
  return newItems;
};

const getTotalShippingFee = (items) => {
  return items.reduce(function (total, item) {
    return total + item.shipping;
  }, 0);
};

export {
  addItemQuantity,
  removeItemQuantity,
  getNewItemsWithTotals,
  getItemsAggregateCount,
  getGrandTotal,
  removeItemFromCart,
  addItemToCart,
  calculateUniqueItems,
  getTotalShippingFee,
  applyVoucherToItem
};
