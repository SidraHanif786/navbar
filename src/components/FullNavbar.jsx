import React from "react";
import Home from "../svgs/Home.png";
import User from "../svgs/User.png";
import Download from "../svgs/Download.png";
import Extra from "../svgs/Extra.png";
import GlobeIcon from "../svgs/GlobeIcon.png";
import Billing from "../svgs/Billing.png";
import Users from "../svgs/Users.png";
import Customers from "../svgs/CustomerSupport.png";
import LeaderBoard from "../svgs/LeaderBoard.png";
import Certificate from "../svgs/Certificates.png";
import Guide from "../svgs/Guide.png";
import Help from "../svgs/Help.png";
import Logo from "../svgs/Logo.png";

import "./scroll.css";
import Bar from "./Bar";
import { useWindowSize } from "../hooks/useWindowSize";
import SmallBar from "./SmallBar";

const FullNavbar = () => {
  const size = useWindowSize();
  console.log(size);
  const menu = [
    { icon: Home, name: "Client Area" },
    {
      icon: User,
      name: "Profile",
    },
    {
      icon: Download,
      name: "Download",
    },
    {
      icon: Extra,
      name: "Extras",
    },
    {
      icon: GlobeIcon,
      name: "Trading Academy",
    },
    {
      icon: Billing,
      name: "Billing",
    },
    {
      icon: Users,
      name: "FTMO Traders",
    },
    {
      icon: Customers,
      name: "Customer Support",
    },
    {
      icon: LeaderBoard,
      name: "Leaderboard",
    },
    {
      icon: Certificate,
      name: "Certificates",
    },
    {
      icon: Guide,
      name: "Guide",
    },
    {
      icon: Help,
      name: "Help",
    },
  ];
  return (
    <>
      {size.Width > 800 ? (
        <div className="ml-[20px] h-[100vh] pt-[25px] w-[310px] bg-[#fffcfc] overflow-y-auto scroll">
          <div className="text-[#fafafa] cursor-pointer bg-[#2a50a3] hover:bg-[#282ecf] px-[18px] py-[15px] rounded-[12px] mx-[48px] ">
            New FTMO Challenge
          </div>
          <h1 className="mt-[40px] font-[500] text-[20px] pl-[30px] mb-[10px]">
            Main menu
          </h1>
          <hr />
          {menu.map((menu) => (
            <Bar icon={menu.icon} name={menu.name} />
          ))}
        </div>
      ) : (
        <div className="ml-[20px] h-[100vh] pt-[25px] w-[100px] bg-[#fffcfc] overflow-y-auto scroll">
          <div className=" cursor-pointer bg-[#2a50a3] hover:bg-[#282ecf] p-[5px] rounded-[12px] mx-[10px] rounded-[40px] hover:p-[8px] ">
            <img className="rounded-[30px] " src={Logo} alt="logo" />
          </div>
          <h1 className="mt-[30px] font-[500] text-[20px] pl-[20px] mb-[10px]">
            Main menu
          </h1>
          <hr />
          {menu.map((menu) => (
            <SmallBar icon={menu.icon} name={menu.name} />
          ))}
        </div>
      )}
    </>
  );
};

export default FullNavbar;
