import styled from "styled-components";

export const CardBoardContainer = styled.div`
  background-color: blueviolet;

  display: flex;
  flex-wrap: ${props => props.flexWrap};
  flex-direction: ${props => props.flexDirection};
`;
