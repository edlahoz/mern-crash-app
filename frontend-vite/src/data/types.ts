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
