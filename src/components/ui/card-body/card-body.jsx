import React from "react";
// import PropTypes from "prop-types";

import { CardBodyContainer } from "./card-body.style";

const CardBody = ({ children }) => {
  return <CardBodyContainer>{children}</CardBodyContainer>;
};

CardBody.propTypes = {};

export default CardBody;
