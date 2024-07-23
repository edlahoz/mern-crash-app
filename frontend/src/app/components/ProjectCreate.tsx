import { ChangeEvent, useEffect, useState } from "react";
import { ADD_PROJECT } from "../data/mutations/projects";
import { useMutation } from "@apollo/client";
import Modal from "./Modal";
import useForm from "../hooks/useForm";
import { ProjectStatus } from "@/app/data/types";
import { clientsState } from "../data/state";
import { useAppDataState } from "../hooks/useAppDataState";

export default function ProjectCreate() {
  const [clients] = useAppDataState(clientsState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { values, handleChange, resetForm } = useForm({
    name: "",
    description: "",
    status: Object.keys(ProjectStatus)[0],
    clientId: "",
  });
  const [addProject] = useMutation(ADD_PROJECT, {
    variables: { ...values },
  });

  function createClient() {
    addProject();
    resetForm();
    setIsModalOpen(false);
  }

  useEffect(() => {
    if (clients.length > 0) {
      handleChange({
        target: { name: "clientId", value: clients[0].id },
      } as ChangeEvent<HTMLSelectElement>);
    }
  }, []);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Create Project
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={createClient}
      >
        <h2 className="text-xl text-black font-bold mb-4">Create Project</h2>
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
    </>
  );
}
