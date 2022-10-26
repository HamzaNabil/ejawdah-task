import React from "react";
import { LogoBottom } from "../../../assets/imgs";

function CopyRight() {
  return (
    <div className="footer__bottom text-center">
      <img
        src={LogoBottom}
        className="footer__bottom__logo"
        alt="logo-bottom"
      />
      <p className="footer__bottom__txt">
        تطوير الهيئة السعودية للبيانات والذكاء الاصطناعي
      </p>
      <hr className="line" />
      <p className="footer__bottom__copyright">
        جميع الحقوق محفوظة للمركز السعودى للأعمال الاقتصادية
        <br />
        &copy; 2021
      </p>
    </div>
  );
}

export default CopyRight;
