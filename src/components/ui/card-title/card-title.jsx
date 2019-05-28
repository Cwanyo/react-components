import React from "react";
// import PropTypes from "prop-types";

import { CardTitleContainer } from "./card-title.style";

const CardTitle = ({ children }) => {
  return <CardTitleContainer>{children}</CardTitleContainer>;
};

CardTitle.propTypes = {};

export default CardTitle;
