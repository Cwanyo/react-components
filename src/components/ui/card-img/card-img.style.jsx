import styled from "styled-components";

export const CardImgContainer = styled.div`
  background-color: crimson;

  height: 180px;

  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
