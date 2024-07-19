import Image from "next/image";
import Link from "next/link";

type HeaderProps = {
  title: string;
  logo: string;
};

function Header({ title, logo }: HeaderProps) {
  return (
    <header className="shadow-md p-4 bg-slate-200">
      <nav className="">
        <Link href="/">
          <span>
            <Image priority src={logo} alt={title} width={300} height={61} />
          </span>
          <span>{title}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
