"use client";
import Modal from "@/app/components/Modal";
import { useState } from "react";
import { TrashIcon } from "@heroicons/react/20/solid";
import { Project } from "@/app/data/types";
import { useMutation } from "@apollo/client";
import { DELETE_PROJECT } from "../data/mutations/projects";
import ProjectUpdate from "./ProjectUpdate";

type ProjectRowProps = {
  project: Project;
  onProjectDeleted: (id: string) => void;
};

export default function ProjectRow({
  project,
  onProjectDeleted,
}: ProjectRowProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: project.id },
    onCompleted: () => onProjectDeleted(project.id),
  });

  const onProjectDelete = async () => {
    deleteProject();
    setIsModalOpen(false);
  };

  return (
    <>
      <tr key={project.id}>
        <td className="">
          <ProjectUpdate project={project} />
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            <TrashIcon className="h-5 w-5 inline-block" />
          </button>
          {isModalOpen && (
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onConfirm={onProjectDelete}
            />
          )}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">{project.name}</td>
        <td className="px-6 py-4 whitespace-nowrap">{project.description}</td>
        <td className="px-6 py-4 whitespace-nowrap">{project.status}</td>
        <td className="px-6 py-4 whitespace-nowrap">{project.client?.name}</td>
      </tr>
    </>
  );
}
