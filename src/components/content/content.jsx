/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../card/card";
import SubCard from "../card/sub-card";
import Tabs from "../tabs";
import ContentHeader from "./partials/contentHeader";

function Content() {
  const { data } = useFetch("./data.json"); // custom hook

  return (
    <div className="content">
      <ContentHeader title="content.title1" />

      <Tabs />

      <div className="card__items">
        {data?.cardItems?.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

      <ContentHeader title="content.title2" />

      <div className="subcard__items">
        {data?.statisitcsItems?.map((item) => (
          <SubCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Content;
