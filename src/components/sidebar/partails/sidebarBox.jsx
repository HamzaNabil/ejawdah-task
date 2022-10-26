/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Button from "../../button";

function Box(props) {
  const { bg, title, text, buttonTxt } = props;
  return (
    <div
      className="sidebar__footer__box"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h4 className="footer__box__title">{title}</h4>
      {text && (
        <span className="footer__box__txt">
          إذا كنت لا تعلم نوع الكيان التجارى
          <a href="#">إضغط هنا</a>
        </span>
      )}
      <Button type="anchor" text={buttonTxt} class="footer__box__link" />
    </div>
  );
}

export default Box;
