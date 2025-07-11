import Header from "@/components/header";
import React from "react";

export default function RSLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <Header />
      <div className="px-4 my-2">{children}</div>
    </div>
  );
}
