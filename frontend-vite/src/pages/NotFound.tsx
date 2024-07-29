import React from "react";
import PageContainer from "./PageContainer";

const NotFound: React.FC = () => {
  return (
    <PageContainer>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </PageContainer>
  );
};

export default NotFound;
