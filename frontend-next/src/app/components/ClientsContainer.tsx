"use client";
import { Client } from "@/app/data/types";
import ClientRow from "./ClientRow";
import { clientsState } from "@/app/data/state";
import { useAppDataState } from "../hooks/useAppDataState";

type ClientsContainerProps = {
  clients: Client[];
};

export default function ClientsContainer({ clients }: ClientsContainerProps) {
  const [clientData] = useAppDataState(clientsState, clients);

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Clients</h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th className="px-6 py-4 bg-gray-800 text-white text-left">
              Actions
            </th>
            <th className="px-6 py-4 bg-gray-800 text-white text-left">Name</th>
            <th className="px-6 py-4 bg-gray-800 text-white text-left">
              Email
            </th>
            <th className="px-6 py-4 bg-gray-800 text-white text-left">
              Phone
            </th>
          </tr>
        </thead>
        <tbody>
          {clientData.map((client) => (
            <ClientRow key={client.id} client={client} />
          ))}
        </tbody>
      </table>
    </>
  );
}
