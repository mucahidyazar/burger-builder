import React from "react";

const navigationItem = props => (
  <li className="navigation-items__item">
    <a
      href={props.link}
      className={
        props.active
          ? "navigation-items__link-active"
          : "navigation-items__link"
      }
    >
      {props.children}
    </a>
  </li>
);

export default navigationItem;
