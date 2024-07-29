import { query } from "@/app/ApolloClientRSC";
import { Project } from "@/app/data/types";
import { GET_PROJECTS } from "@/app/data/queries/projects";
import ProjectsContainer from "@/app/components/ProjectsContainer";

export default async function Projects() {
  const { data, error } = await query<{ projects: Project[] }>({
    query: GET_PROJECTS,
    fetchPolicy: "no-cache",
  });

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>No data</p>;
  }

  return <ProjectsContainer projects={data.projects} />;
}
