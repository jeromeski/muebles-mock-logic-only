import { axios, useQuery, useMutation } from "../fake-db/fake-server";

async function getProduct(id) {
  // console.log("product id -->", id);
  try {
    return await axios
      .get("/api/e-commerce-app/product", { slug: id })
      .then((res) => res.data);
  } catch (error) {
    throw new Error(error);
  }
}

export function useGetProduct() {
  return useMutation((id) => getProduct(id), {});
}

/*
export function useGetProduct(id) {
  return useMutation("product", () => {
    return getProduct(id);
  });
}

*/
