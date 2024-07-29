import { cacheExchange, createClient, fetchExchange } from "urql";

export const client = createClient({
  url: import.meta.env.VITE_PUBLIC_BACKEND_URI,
  exchanges: [cacheExchange, fetchExchange],
});
