import React from "react";

type HeaderProps = {
  children: React.ReactNode;
};

export default function Header({ children }: HeaderProps) {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-white text-2xl font-bold">My App</h1>
        {children}
      </div>
    </header>
  );
}
