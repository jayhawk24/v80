import React from "react";
import { type NextPage } from "next";
import Nav from "~/components/Nav/Nav";
import CarouselContainer from "~/components/CarouselContainer/CarouselContainer";
import LiveChart from "~/components/LiveChart/LiveChart";

const Dashboard: NextPage = () => {
  const API_KEY = "3WONBXU6F6QKQGKD";

  return (
    <div className="mx-5 my-2 grid grid-cols-12">
      <div className="col-span-12">
        <Nav />
        <h1 className="text-xl font-semibold">My Portfolio</h1>
        <CarouselContainer />
        <LiveChart name="Apple" symbol="AAPL" />
      </div>
    </div>
  );
};

export default Dashboard;
