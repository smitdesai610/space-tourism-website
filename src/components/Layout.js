import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "../assets/styles/scss/layout.scss";

export default function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
