"use client";
import Modal from "@/app/components/Modal";
import { useState } from "react";
import { TrashIcon } from "@heroicons/react/20/solid";
import { Client } from "@/app/data/types";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../data/mutations/clients";
import { GET_CLIENTS } from "../data/queries/clients";
import ClientUpdate from "./ClientUpdate";

type ClientRowProps = {
  client: Client;
  onClientDeleted: () => void;
};

export default function ClientRow({ client, onClientDeleted }: ClientRowProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    onCompleted: onClientDeleted,
    refetchQueries: [GET_CLIENTS],
  });

  const onClientDelete = async () => {
    deleteClient();
    setIsModalOpen(false);
  };

  return (
    <>
      <tr key={client.id}>
        <td className="">
          <ClientUpdate client={client} />
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
              onConfirm={onClientDelete}
            />
          )}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">{client.name}</td>
        <td className="px-6 py-4 whitespace-nowrap">{client.email}</td>
        <td className="px-6 py-4 whitespace-nowrap">{client.phone}</td>
      </tr>
    </>
  );
}
