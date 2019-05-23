import React from "react";
import PropTypes from "prop-types";

import { CardBoardContainer } from "./card-board.style";

const CardBoard = props => {
  const { flexWrap, flexDirection } = props;

  return (
    <CardBoardContainer flexWrap={flexWrap} flexDirection={flexDirection}>
      {props.children}
    </CardBoardContainer>
  );
};

CardBoard.propTypes = {
  flexWrap: PropTypes.oneOf(["wrap", "wrap-reverse"]),
  flexDirection: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse"
  ])
};

CardBoard.defaultProps = {
  flexWrap: "wrap",
  flexDirection: "row"
};

export default CardBoard;
