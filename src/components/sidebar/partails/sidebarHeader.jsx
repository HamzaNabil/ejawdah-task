import React from "react";
import { FormattedMessage } from "react-intl";
import { Logo } from "../../../assets/imgs";
import { BiUser, MdLogout } from "../../../utils/react-icons";

function SidebarHeader() {
  return (
    <div className="sidebar__header">
      <div className="sidebar__logo mb-3">
        <img src={Logo} alt="logo" draggable="false" />
      </div>
      <p className="sidebar__welcome text-white">
        <FormattedMessage id="header.welcome" defaultMessage={"Welcome"} />
      </p>
      <div className="sidebar__userInfo d-flex align-items-center justify-content-between">
        <BiUser color="white" fontSize={30} />
        <p className="userInfo__name m-0 text-white">
          <FormattedMessage id="welcom.username" defaultMessage={"username"} />
        </p>
        <MdLogout color="white" fontSize={30} />
      </div>
    </div>
  );
}

export default SidebarHeader;
