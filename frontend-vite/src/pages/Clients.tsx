import React from "react";
import FeatureClients from "@/features/clients/FeatureClients";
import PageContainer from "./PageContainer";

const Clients: React.FC = () => {
  return (
    <PageContainer>
      <FeatureClients />
    </PageContainer>
  );
};

export default Clients;
