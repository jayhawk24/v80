import React from "react";
import { type NextPage } from "next";
import Dashboard from "~/components/Dashboard/Dashboard";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <Dashboard />
    </div>
  );
};

export default Home;
