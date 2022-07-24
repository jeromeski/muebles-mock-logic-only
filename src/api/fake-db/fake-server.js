import _ from "lodash";
import muebles from "./muebles-db.json";
import { useQuery, useMutation } from "react-query";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
const mock = new MockAdapter(axios);

let { mueblesDB } = muebles;

mock.onGet("/api/e-commerce-app/products").reply(200, { mueblesDB });

mock.onGet("/api/e-commerce-app/product").reply((request) => {
  const { slug } = request;
  // const response = slug;
  const response = _.find(mueblesDB, function (obj) {
    if (obj.slug === slug) {
      return true;
    }
  });
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

export { axios, useQuery, useMutation };

// mock.onGet("/api/e-commerce-app/orders").reply(() => {
//   return [200, mueblesDB.orders];
// });

// mock.onGet("/api/e-commerce-app/order").reply((request) => {
//   const { orderId } = request.params;
//   const response = _.find(mueblesDB.orders, { id: orderId });
//   return [200, response];
// });
