import React from "react";
import {
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
  Icon8,
} from "../../assets/imgs";

const icons = { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8 };

function SubCard({ item }) {
  return (
    <div className="subcard__item">
      <div className="subcard__item__header">
        <h3 className="subcard__item__header__title">{item.title}</h3>
        <img
          className="subcard__item__header__img"
          src={icons[item.image]}
          alt={item.image}
        />
      </div>
      <div className="subcard__item__info">
        {item?.details?.map((info) => (
          <div className="info__item" key={info.id}>
            <p className="info__item__title">{info.title} </p>
            <p
              className={`info__item__desc ${
                item.amount && "amount__currency__flag"
              }`}
            >
              {info.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubCard;
