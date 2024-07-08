import { api } from "./api";

export const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSortProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
        params: { type: "Сортовой" },
      }),
    }),
    getListProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
        params: { type: "Листовой" },
      }),
    }),
    getTrubProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
        params: { type: "Трубная" },
      }),
    }),
  }),
});

export const {
  useGetSortProductsQuery,
  useGetListProductsQuery,
  useGetTrubProductsQuery,
} = productsApi;

export const {
  endpoints: { getSortProducts, getListProducts, getTrubProducts },
} = productsApi;
