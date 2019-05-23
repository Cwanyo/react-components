import React from "react";
import PropTypes from "prop-types";

import { CardImgContainer } from "./card-img.style";

const CardImg = ({ src }) => {
  return <CardImgContainer src={src} />;
};

CardImg.propTypes = {
  src: PropTypes.string
};

CardImg.defaultProps = {
  src:
    "https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
};

export default CardImg;
