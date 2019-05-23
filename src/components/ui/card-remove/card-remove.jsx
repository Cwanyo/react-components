import React from "react";
// import PropTypes from "prop-types";

import { CardRemoveContainer } from "./card-remove.style";

const CardRemove = ({ onRemove }) => {
  return <CardRemoveContainer onClick={onRemove} />;
};

CardRemove.propTypes = {};

export default CardRemove;
