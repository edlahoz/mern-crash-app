import "@/index.css";
import Router from "./components/Router/Router";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header>
          <Nav />
        </Header>
        <Outlet />
      </Router>
    </>
  );
}

export default App;
