import { axios, useQuery } from "../fake-db/fake-server";

async function getProduct(id) {
  console.log("id", id);
  try {
    return await axios
      .get("/api/e-commerce-app/product", { slug: id })
      .then((res) => res.data);
  } catch (error) {
    throw new Error(error);
  }
}

export function useGetProduct(id) {
  return useQuery("product", () => {
    return getProduct(id);
  });
}
