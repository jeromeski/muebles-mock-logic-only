import { axios, useQuery } from "../fake-db/fake-server";

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
