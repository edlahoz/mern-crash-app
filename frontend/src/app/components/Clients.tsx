import { query } from "@/app/ApolloClientRSC";
import { Client } from "@/app/data/types";
import { GET_CLIENTS } from "@/app/data/queries/clients";
import ClientsContainer from "@/app/components/ClientsContainer";

export default async function Clients() {
  const { data, error } = await query<{ clients: Client[] }>({
    query: GET_CLIENTS,
    fetchPolicy: "no-cache",
  });

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>No data</p>;
  }

  return <ClientsContainer clients={data.clients} />;
}
