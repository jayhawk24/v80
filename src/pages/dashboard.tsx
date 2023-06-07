import React from "react";
import { type NextPage } from "next";
import Nav from "~/components/Nav/Nav";
import CarouselContainer from "~/components/CarouselContainer/CarouselContainer";
import LiveChart from "~/components/LiveChart/LiveChart";

const Dashboard: NextPage = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="mx-5 my-2 grid grid-cols-12">
        <div className="col-span-12">
          <Nav />
          <h1 className="text-xl font-semibold">My Portfolio</h1>
          <CarouselContainer />
          <LiveChart name="Apple" symbol="AAPL" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
