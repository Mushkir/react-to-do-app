import React from "react";
import TheNavBar from "../components/TheNavBar";
import { Outlet } from "react-router-dom";

const GuestLayout = () => {
  return (
    <div>
      <TheNavBar />
      <Outlet />
    </div>
  );
};

export default GuestLayout;
