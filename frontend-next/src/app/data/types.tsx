import { DocumentNode } from "graphql";
import { RecoilState } from "recoil";

export enum ProjectStatus {
  "NOT_STARTED" = "Not Started",
  "IN_PROGRESS" = "In Progress",
  "COMPLETED" = "Completed",
}

export type Client = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  clientId: string;
  client: Client;
};

export type AppState<RecoilType> = {
  atom: RecoilState<RecoilType>;
  query: DocumentNode;
};
