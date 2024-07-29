"use client";
import CreateClient from "./CreateClient";
import ProjectCreate from "./ProjectCreate";

export default function Toolbar() {
  return (
    <section className="m-4 mb-0 p-4 pl-0 bg-slate-600 rounded">
      <CreateClient />
      <ProjectCreate />
    </section>
  );
}
