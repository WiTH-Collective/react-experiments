import React from "react";
import { Link } from "react-router-dom";

const Chef = props => {
  // let buttonClass = "button-primary";
  // props.classNames ? buttonClass += " " + props.classNames : null;
  return (
    <Link className="Chef" to={"/"}>
      <div className="chefImageBackground" />
      <button className={""}>
        {props.buttonText}
        <span />
      </button>
    </Link>
  );
};

export default Chef;
