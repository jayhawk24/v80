import React from "react";
import { type NextPage } from "next";
import Sidebar from "~/components/Sidebar/Sidebar";
import Nav from "~/components/Nav/Nav";

const Dashboard: NextPage = () => {
  return (
    <div className="grid grid-cols-12">
      <Sidebar />
      <Nav />
    </div>
  );
};

export default Dashboard;
