import { api } from "./api";

export const productionsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRestorationProductions: builder.query({
      query: () => ({
        url: "/productions",
        method: "GET",
        params: { type: "Механическая" },
      }),
    }),
  }),
});

export const { useGetRestorationProductionsQuery } = productionsApi;

export const {
  endpoints: { getRestorationProductions },
} = productionsApi;
