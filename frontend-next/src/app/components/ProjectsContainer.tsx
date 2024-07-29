"use client";
import { Project } from "@/app/data/types";
import ProjectRow from "./ProjectRow";
import { useEffect } from "react";
import { projectsState } from "@/app/data/state";
import { useAppDataState } from "../hooks/useAppDataState";

type ProjectsContainerProps = {
  projects: Project[];
};

export default function ProjectsContainer({
  projects,
}: ProjectsContainerProps) {
  const [projectsData, setProjectsData] = useAppDataState(projectsState);

  useEffect(() => {
    setProjectsData(projects);
  }, []);

  const deleteProjectById = async (id: String) => {
    setProjectsData(projectsData.filter((project) => project.id !== id));
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th className="px-6 py-4 bg-gray-800 text-white text-left">
              Actions
            </th>
            <th className="px-6 py-4 bg-gray-800 text-white text-left">Name</th>
            <th className="px-6 py-4 bg-gray-800 text-white text-left">
              Description
            </th>
            <th className="px-6 py-4 bg-gray-800 text-white text-left">
              Status
            </th>
            <th className="px-6 py-4 bg-gray-800 text-white text-left">
              Client
            </th>
          </tr>
        </thead>
        <tbody>
          {projectsData.map((project) => (
            <ProjectRow
              key={project.id}
              project={project}
              onProjectDeleted={deleteProjectById}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
