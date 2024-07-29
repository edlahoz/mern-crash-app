import { atom } from "recoil";
import { AppState, Client, Project } from "@/app/data/types";
import { GET_CLIENTS } from "./queries/clients";
import { GET_PROJECTS } from "./queries/projects";

export const clientsAtom = atom<Client[]>({
  key: "clients",
  default: [],
});

export const projectsAtom = atom<Project[]>({
  key: "projects",
  default: [],
});

export const clientsState: AppState<Client[]> = {
  atom: clientsAtom,
  query: GET_CLIENTS,
};

export const projectsState: AppState<Project[]> = {
  atom: projectsAtom,
  query: GET_PROJECTS,
};
