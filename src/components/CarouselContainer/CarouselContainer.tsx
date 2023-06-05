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
      <StockCard name={"Apple"} price={42} />
      <StockCard name={"Microsoft"} price={42} />
      <StockCard name={"Tesla"} price={42} />
      <StockCard name={"Meta"} price={42} />
      <StockCard name={"Alphabet"} price={42} />
    </Carousel>
  );
};

export default CarouselContainer;
