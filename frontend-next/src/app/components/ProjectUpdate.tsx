import { useState, useEffect, ChangeEvent } from "react";
import { UPDATE_PROJECT } from "../data/mutations/projects";
import { useMutation } from "@apollo/client";
import Modal from "./Modal";
import useForm from "../hooks/useForm";
import { Project } from "@/app/data/types";
import { PencilIcon } from "@heroicons/react/20/solid";
import { ProjectStatus } from "@/app/data/types";
import { clientsState } from "../data/state";
import { useAppDataState } from "../hooks/useAppDataState";

type ProjectUpdateProps = {
  project: Project;
};

export default function ProjectUpdate({ project }: ProjectUpdateProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clients] = useAppDataState(clientsState);
  const { values, handleChange, setValues } = useForm(project);
  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: { ...values },
  });

  function update() {
    updateProject();
    setIsModalOpen(false);
  }

  useEffect(() => {
    setValues(project);
    if (clients.length > 0) {
      handleChange({
        target: {
          name: "status",
          value: Object.entries(ProjectStatus).find(
            ([key, value]) => value === project.status
          )?.[0],
        },
      } as ChangeEvent<HTMLSelectElement>);
    }
  }, [clients]);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <PencilIcon className="h-5 w-5 inline-block" />
      </button>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={update}
        >
          <h2 className="text-xl text-black font-bold mb-4">Update Project</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 p-2 rounded"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Description"
              className="border border-gray-300 p-2 rounded"
              name="description"
              value={values.description}
              onChange={handleChange}
            />
            <select
              className="border border-gray-300 p-2 rounded"
              name="status"
              value={values.status}
              onChange={handleChange}
            >
              {Object.entries(ProjectStatus).map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </select>
            <select
              className="border border-gray-300 p-2 rounded"
              name="clientId"
              value={values.clientId}
              onChange={handleChange}
            >
              {clients.map((client) => (
                <option key={client.id} value={client.id}>
                  {client.name}
                </option>
              ))}
            </select>
          </form>
        </Modal>
      )}
    </>
  );
}
