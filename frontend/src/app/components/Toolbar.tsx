"use client";
import { useState } from "react";
import CreateClient from "./CreateClient";

export default function Toolbar() {
  return (
    <section className="m-4 mb-0 p-4 pl-0 bg-slate-50 rounded">
      <CreateClient />
    </section>
  );
}
