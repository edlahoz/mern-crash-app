import { useState } from "react";
import { UPDATE_CLIENT } from "../data/mutations/clients";
import { useMutation } from "@apollo/client";
import Modal from "./Modal";
import useForm from "../hooks/useForm";
import { Client } from "@/app/data/types";
import { PencilIcon } from "@heroicons/react/20/solid";

type UpdateClientProps = {
  client: Client;
};

export default function ClientUpdate({ client }: UpdateClientProps) {
  const [isClientOpen, setIsClientOpen] = useState(false);
  const { values, handleChange } = useForm(client);
  const [updateClient] = useMutation(UPDATE_CLIENT, {
    variables: { ...values },
  });

  function update() {
    updateClient();
    setIsClientOpen(false);
  }

  return (
    <>
      <button
        onClick={() => setIsClientOpen(true)}
        className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <PencilIcon className="h-5 w-5 inline-block" />
      </button>
      <Modal
        isOpen={isClientOpen}
        onClose={() => setIsClientOpen(false)}
        onConfirm={update}
      >
        <h2 className="text-xl text-black font-bold mb-4">Update Client</h2>
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
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-2 rounded"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            placeholder="Phone"
            className="border border-gray-300 p-2 rounded"
            name="phone"
            value={values.phone}
            onChange={handleChange}
          />
        </form>
      </Modal>
    </>
  );
}
