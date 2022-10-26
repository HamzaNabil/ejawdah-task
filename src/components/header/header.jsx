import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SDAIA_logo } from "../../assets/imgs";
import langAction from "../../redux/actions";
import { FaBars } from "../../utils/react-icons";

function Header({ setOpenSidebar, openSidebar }) {
  const lang = useSelector((state) => state.language?.lang);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="header__logo">
        <img src={SDAIA_logo} alt="sdaia logo" />
      </div>
      <ul className="header__actions list-unstyled">
        <li>
          <a
            href="#!"
            className={lang === "en" ? "active" : ""}
            onClick={() => dispatch(langAction("en"))}
          >
            En
          </a>
        </li>
        <li>
          <a
            href="#!"
            className={lang === "ar" ? "active" : ""}
            onClick={() => dispatch(langAction("ar"))}
          >
            ع
          </a>
        </li>
        <li onClick={() => setOpenSidebar(!openSidebar)}>
          <FaBars fontSize={20} />
        </li>
      </ul>
    </header>
  );
}

export default Header;
