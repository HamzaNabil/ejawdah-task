/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";

function Button(props) {
  return props.type === "button" ? (
    <button> {props.text}</button>
  ) : (
    <a href="#" className={props.class}>
      {props.text}
    </a>
  );
}

export default Button;
