"use client";

import { RecoilRoot } from "recoil";
import { ApolloWrapper } from "../ApolloProvider";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <RecoilRoot>
      <ApolloWrapper>{children}</ApolloWrapper>
    </RecoilRoot>
  );
}
