import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import StockCard from "~/components/StockCard/StockCard";
import Image from "next/image";

const CarouselContainer = () => {
  return (
    <Carousel
      show={4}
      slide={2}
      rightArrow={
        <div className="flex h-full items-center">
          <Image
            src="/assets/icons/ChevronRight.svg"
            height={20}
            width={20}
            alt="right"
          />
        </div>
      }
      leftArrow={
        <div className="flex h-full items-center">
          <Image
            src="/assets/icons/ChevronLeft.svg"
            height={20}
            width={20}
            alt="left"
          />
        </div>
      }
    >
      <StockCard name={"Microsoft"} symbol="MSFT" />
      <StockCard name={"Tesla"} symbol="TSLA" />
      <StockCard name={"Meta"} symbol="META" />
      {/* <StockCard name={"HDFC"} symbol="HDFCBANK.BSE" /> */}
      {/* <StockCard name={"Alphabet"} symbol="GOOGL" /> */}
    </Carousel>
  );
};

export default CarouselContainer;
