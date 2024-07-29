"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderProps = {
  title: string;
  logo: string;
};

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Clients",
    path: "/clients",
  },
  {
    name: "Projects",
    path: "/projects",
  },
];

function Header({ title, logo }: HeaderProps) {
  const pathname = usePathname();
  return (
    <header className="shadow-md p-4 bg-slate-200">
      <Link href="/">
        <span>
          <Image priority src={logo} alt={title} width={300} height={61} />
        </span>
        <span>{title}</span>
      </Link>
      <nav className="bg-orange-600 rounded mt-4">
        <ul className="flex">
          {routes.map((route) => (
            <li key={route.path} className="pt-4 pb-4">
              <Link
                className={`link p-4 text-white hover:bg-amber-600 ${
                  pathname === route.path ? "bg-amber-600" : ""
                }`}
                href={route.path}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
