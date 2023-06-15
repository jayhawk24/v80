import React from 'react'
import Nav from "~/components/Nav/Nav";
import CarouselContainer from "~/components/CarouselContainer/CarouselContainer";
import LiveChart from "~/components/LiveChart/LiveChart";
import AppContextProvider from '~/context/AppContext';

const Dashboard = () => {
  return (
    <AppContextProvider>
      <div className="mx-5 my-2 grid grid-cols-12">
        <div className="col-span-12">
          <Nav />
          <h1 className="text-xl font-semibold">My Portfolio</h1>
          <CarouselContainer />
          <LiveChart />
        </div>
      </div>
    </AppContextProvider>
  )
}

export default Dashboard