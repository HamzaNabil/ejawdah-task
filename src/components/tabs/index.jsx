import React from "react";
import { useState } from "react";
import { FormattedMessage } from "react-intl";

function Tabs() {
  const [tabs] = useState([
    {
      id: 1,
      title: "tab1.total",
      active: true,
      count: 3,
    },
    {
      id: 2,
      title: "tab2.records",
      count: 1,
    },
    {
      id: 3,
      title: "tab3.numberOfRecords",
      count: 0,
    },
    {
      id: 4,
      title: "tab4.favRecords",
      count: 3,
    },
  ]);
  return (
    <div className="content__tabs">
      {tabs?.map((tab) => (
        <button
          className={`tab__item ${tab.active ? "active" : ""}`}
          key={tab.id}
        >
          <FormattedMessage id={tab.title} defaultMessage={tab.title} />{" "}
          {tab.count}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
