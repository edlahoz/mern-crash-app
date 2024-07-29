import React from "react";
import { Link } from "react-router-dom";

const routes = [
  { path: "/", label: "Home" },
  { path: "/clients", label: "Clients" },
  { path: "/projects", label: "Projects" },
];

const Nav: React.FC = () => {
  return (
    <nav className="bg-gray-800">
      <ul className="flex justify-center space-x-4">
        {routes.map((route) => (
          <li key={route.path}>
            <Link to={route.path} className="text-white hover:text-gray-300">
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
