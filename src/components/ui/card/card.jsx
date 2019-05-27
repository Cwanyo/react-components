import React from "react";
// import PropTypes from "prop-types";

import { CardContainer } from "./card.style";
import { deepCompare } from "../../utils/";

const Card = ({ children }) => {
  // console.log("card");
  return <CardContainer>{children}</CardContainer>;
};

Card.propTypes = {};

Card.defaultProps = {};

const arePropsEqual = (preProps, newProps) => {
  const check = deepCompare(preProps, newProps);
  // if (preProps.id === 1) {
  // }
  // console.error("sameCard", check);
  return check;
};

export default React.memo(Card, arePropsEqual);
