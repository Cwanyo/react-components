import React from "react";
// import PropTypes from "prop-types";

import { CardTitleContainer } from "./card-title.style";
// import deepCompare from "../../utils/deep-compare";

const CardTitle = ({ children }) => {
  return <CardTitleContainer>{children}</CardTitleContainer>;
};

CardTitle.propTypes = {};

export default CardTitle;

// const arePropsEqual = (preProps, newProps) => {
//   const check = deepCompare(preProps, newProps);
//   console.log(preProps);
//   // console.error("sameTitle", check);
//   return check;
// };

// export default React.memo(CardTitle, arePropsEqual);
