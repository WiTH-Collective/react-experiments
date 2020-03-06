import React from "react";

const ButtonPrimary = props => {
  let classes = "button-primary";
  if (props.isBlack) classes += " button-black";
  return (
    <button className={classes}>
      {props.buttonText}
      <span />
    </button>
  );
};

export default ButtonPrimary;
