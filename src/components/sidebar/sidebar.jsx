/* eslint-disable-next-line jsx-a11y/anchor-is-valid */

import React from "react";
import { SidebarBg1, SidebarBg2 } from "../../assets/imgs";

import NavbarLinks from "../navbarLinks/navbarLinks";
import Box from "./partails/sidebarBox";
import CopyRight from "./partails/copyRight";
import SidebarHeader from "./partails/sidebarHeader";

function SideBar({ openSidebar }) {
  return (
    <div className={`sidebar ${openSidebar ? "showSide" : ""}`}>
      <div className="sidebar__upper">
        <SidebarHeader />
        <NavbarLinks />
      </div>

      {/* Sidebar Footer */}
      <div className="sidebar__footer">
        <Box
          bg={SidebarBg1}
          title="إصدار سجل تجارى"
          text={true}
          buttonTxt=" ابدأ الآن"
        />
        <Box
          bg={SidebarBg2}
          title=" إصدار رخصة فورية لسجل تجارى قائم"
          text={false}
          buttonTxt=" إصدار الرخص التجارية"
        />

        <CopyRight />
      </div>
    </div>
  );
}

export default SideBar;
