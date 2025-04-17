import React from "react";
import Navbar from "./navbar";

interface Props {
  children: React.ReactNode;
}

export default function ({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}
