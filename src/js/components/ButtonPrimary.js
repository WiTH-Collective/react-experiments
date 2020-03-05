import React from "react";

const ButtonPrimary = props => {
  let buttonClass = "button-primary";
  props.classNames ? buttonClass += " " + props.classNames : null;
  return (
    <button className={buttonClass}>
      {props.buttonText}
      <span />
    </button>
  );
};

export default ButtonPrimary;
