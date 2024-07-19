import { useState } from "react";
import { ADD_CLIENT } from "../data/mutations/clients";
import { useMutation } from "@apollo/client";
import Modal from "./Modal";
import useForm from "../hooks/useForm";

export default function CreateClient() {
  const [isClientOpen, setIsClientOpen] = useState(false);
  const { values, handleChange, resetForm } = useForm({
    name: "",
    email: "",
    phone: "",
  });
  const [addClient] = useMutation(ADD_CLIENT, {
    variables: { ...values },
  });

  function createClient() {
    addClient();
    resetForm();
    setIsClientOpen(false);
  }

  return (
    <>
      <button
        onClick={() => setIsClientOpen(true)}
        className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Create Client
      </button>
      <Modal
        isOpen={isClientOpen}
        onClose={() => setIsClientOpen(false)}
        onConfirm={createClient}
      >
        <h2 className="text-xl text-black font-bold mb-4">Create Client</h2>
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
