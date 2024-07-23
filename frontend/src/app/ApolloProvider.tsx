"use client";

import {
  ApolloLink,
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

function makeClient() {
  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_BACKEND_URI,
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link:
      typeof window === "undefined" ? ApolloLink.from([httpLink]) : httpLink,
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return <ApolloProvider client={makeClient()}>{children}</ApolloProvider>;
}
