// components/Layout.tsx
import React from "react";

import SubNavbar from "../../components/SubNavbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <SubNavbar /> {/* Include the main navbar */}
      <main>{children}</main> {/* Render the page content */}
    </div>
  );
}