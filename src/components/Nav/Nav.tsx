import React from "react";
import Image from "next/image";
import Search from "../Search/Search";
import Avatar from "../Avatar/Avatar";

const Nav = () => {
  return (
    <div>
      <div className="flex justify-between">
        <Search />
        <div className="flex justify-around ">
          <div className="flex">
            <Image
              alt="message icon"
              src="/assets/icons/message.svg"
              width={32}
              height={32}
              className="ml-2"
            />
            <Image
              alt="bell icon"
              src="/assets/icons/bell.svg"
              width={32}
              height={32}
            />
          </div>
          <Avatar userName={"John Doe"} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
