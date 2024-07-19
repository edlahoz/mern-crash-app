import Header from "./components/Header";
import Clients from "./components/Clients";
import Toolbar from "./components/Toolbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header title="Welcome to Next.js" logo="/next.svg" />
      <Toolbar />
      <Clients />
    </main>
  );
}
