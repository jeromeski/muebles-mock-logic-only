import _ from "lodash";
import muebles from "./muebles-db.json";
import { useQuery } from "react-query";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
const mock = new MockAdapter(axios);

let { mueblesDB } = muebles;

mock.onGet("/api/e-commerce-app/products").reply(200, { mueblesDB });

mock.onGet("/api/e-commerce-app/product").reply((request) => {
  const { productId } = request.params;
  const response = _.find(mueblesDB, { id: productId });
  return [200, response];
});

mock.onPost("/api/e-commerce-app/product/save").reply((request) => {
  const data = JSON.parse(request.data);
  let product = null;

  mueblesDB = mueblesDB.map((_product) => {
    if (_product.id === data.id) {
      product = data;
      return product;
    }
    return _product;
  });

  if (!product) {
    product = data;
    mueblesDB = [...mueblesDB, product];
  }

  return [200, product];
});

async function getProducts() {
  try {
    return await axios
      .get("/api/e-commerce-app/products")
      .then((res) => res.data.mueblesDB);
  } catch (error) {
    throw new Error(error);
  }
}

export function useGetProducts() {
  return useQuery("products", () => getProducts());
}

async function getProduct(id) {
  try {
    return await axios
      .get("/api/e-commerce-app/products", { id })
      .then((res) => res.data);
  } catch (error) {
    throw new Error(error);
  }
}

export function useGetProduct() {
  return useQuery("product", (id) => getProduct(id));
}

// mock.onGet("/api/e-commerce-app/orders").reply(() => {
//   return [200, mueblesDB.orders];
// });

// mock.onGet("/api/e-commerce-app/order").reply((request) => {
//   const { orderId } = request.params;
//   const response = _.find(mueblesDB.orders, { id: orderId });
//   return [200, response];
// });
