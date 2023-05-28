import React from "react";
import { type NextPage } from "next";
import Sidebar from "~/components/Sidebar/Sidebar";
import Nav from "~/components/Nav/Nav";

const Dashboard: NextPage = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-10">
        <Nav />
      </div>
    </div>
  );
};

export default Dashboard;
