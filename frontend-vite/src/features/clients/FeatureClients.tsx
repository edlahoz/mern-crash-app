import { useFetchClients } from "./clientsSlice";

export default function FeatureClients() {
  const clients = useFetchClients();
  return (
    <div>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <span>{client.name}</span>
            <span>{client.phone}</span>
            <span>{client.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
