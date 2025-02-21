import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      name
      description
      status
      clientId
      client {
        id
        name
      }
    }
  }
`;
