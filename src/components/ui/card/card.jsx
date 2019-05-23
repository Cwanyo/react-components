import React from "react";
// import PropTypes from "prop-types";

import { CardContainer } from "./card.style";
import { deepCompare } from "../../utils";

const Card = ({ children }) => {
  console.log(1);
  return <CardContainer>{children}</CardContainer>;
};

Card.propTypes = {};

Card.defaultProps = {};

const arePropsEqual = (preProps, newProps) => {
  console.log(preProps, newProps);
  return true;
};

export default React.memo(Card, arePropsEqual);

// export default Card;
