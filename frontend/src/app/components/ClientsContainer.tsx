"use client";
import { Client } from "@/app/data/types";
import { GET_CLIENTS } from "@/app/data/queries/clients";
import ClientRow from "./ClientRow";
import { useEffect } from "react";
import { useApolloClient } from "@apollo/client";
import { useRecoilState } from "recoil";
import { clientsState } from "@/app/data/state";

type ClientsContainerProps = {
  clients: Client[];
};

export default function ClientsContainer({ clients }: ClientsContainerProps) {
  const [clientData, setClientData] = useRecoilState(clientsState.atom);
  const client = useApolloClient();

  useEffect(() => {
    setClientData(clients);
  }, []);

  const refetchClients = async () => {
    const { data } = await client.query<{ clients: Client[] }>({
      query: GET_CLIENTS,
    });

    if (data && data.clients) {
      setClientData(data.clients);
    }
  };

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
            <ClientRow
              key={client.id}
              client={client}
              onClientDeleted={refetchClients}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
