/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { Building, Calendar, Note, Sign } from "../../assets/imgs";
import { AiOutlineStar, IoEllipsisVertical } from "../../utils/react-icons";
import Button from "../button";

const icons = {
  Building,
  Calendar,
  Note,
  Sign,
};

function Card({ item }) {
  return (
    <div className="card__item">
      <div className="card__item__header">
        <h2 className="card__item__title">{item.title}</h2>
        <div className="card__item__actions">
          <button className="star_icon">
            <AiOutlineStar fontSize={25} />
          </button>
          <button
            className="ellipses_icon"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <IoEllipsisVertical aria-hidden={true} fontSize={25} />
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                تعديل السجل التجارى
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                تجديد السجل التجارى
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                شطب السجل التجارى
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="card__item__tags">
        {item.tags.map((tag) => (
          <div className={`card__item__tag ${tag.badge}_tag`} key={tag.id}>
            <span>{tag.title}</span>: <span>{tag.type}</span>
          </div>
        ))}
      </div>
      <div className="card__item__info">
        {item.info.map((info) => (
          <div className="card__info__item" key={info.id}>
            <img src={icons[info.icon]} alt={info.icon} />
            <div className="info__description">
              <p>{info.title}</p>
              <span>{info.subTitle}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="card__item__bottom">
        <Button text="عرض وادارة السجل" type="button" />
      </div>
    </div>
  );
}

export default Card;
