import React from "react";
import { Container } from "react-bootstrap";
import { TopNavbar } from "./TopNavbar";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <TopNavbar />
      <main className="main">
        <Container>{children}</Container>
      </main>

      {/* footer */}
      <footer className=" bg-warning text-dark text-center py-5">
        &copy; right all reserverd by nisha paudel pandey
      </footer>
    </div>
  );
};
