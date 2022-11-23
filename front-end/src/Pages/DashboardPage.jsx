import React from "react";
import { NavbarDashboard } from "../Components/NavbarDashboard";
import { SideDashboard } from "../Components/SideDashboard";
import { MainDashboard } from "../Components/MainDashboard";
import { FooterDashboard } from "../Components/FooterDashboard";

export const Dashboard = () => {
  return (
    <>
      <NavbarDashboard />
      <SideDashboard />
      <MainDashboard />
      {/* <FooterDashboard /> */}
    </>
  );
};
