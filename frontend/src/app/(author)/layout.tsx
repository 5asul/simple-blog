"use client";
import { ReactNode } from "react";
import Aside from "./components/Aside";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="font-sans bg-gray-50 min-h-screen flex">
      <Aside />
      <main className="flex-1 md:ml-64">
        {children}
      </main>
    </div>
  );
}