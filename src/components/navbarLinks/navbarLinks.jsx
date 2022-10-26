/*eslint-disable */

import React from "react";
import sidebarLinks from "./links";

import { FormattedMessage } from "react-intl";
function NavbarLinks() {
  const { mainLinks, subLinks, subLinks2 } = sidebarLinks;
  return (
    <div className="navbar__blocks">
      {[mainLinks, subLinks, subLinks2].map((item) => (
        <nav key={JSON.stringify(item)}>
          {item?.title && <h2 className="navbar__title">{item.title}</h2>}
          <ul className="list-unstyled p-0">
            {item?.links.map((link) => (
              <li
                className={`list__item ${link?.activeLink ? "active" : ""}`}
                key={link.id}
              >
                <a href="#!">
                  {link?.icon}
                  <span className="list__item__txt">
                    <FormattedMessage
                      id={link.title}
                      defaultMessage={link.title}
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
  );
}

export default NavbarLinks;
