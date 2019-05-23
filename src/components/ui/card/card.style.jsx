import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #fff;

  position: relative;

  margin: 5px;
  /* flex: 1 0 100%; */
  width: calc((100% - (1 * 5px * 2)) / 1);

  @media screen and (min-width: 576px) {
    /* flex: 1 0 calc((100% - (2 * 5px * 2)) / 2);
    max-width: calc((100% - (2 * 5px * 2)) / 2); */
    width: calc((100% - (2 * 5px * 2)) / 2);
  }
  @media screen and (min-width: 992px) {
    /* flex: 1 0 calc((100% - (3 * 5px * 2)) / 3);
    max-width: calc((100% - (3 * 5px * 2)) / 3); */
    width: calc((100% - (3 * 5px * 2)) / 3);
  }
  @media screen and (min-width: 1200px) {
    /* flex: 1 0 calc((100% - (4 * 5px * 4)) / 4);
    max-width: calc((100% - (4 * 5px * 2)) / 4); */
    width: calc((100% - (4 * 5px * 2)) / 4);
  }

  display: flex;
  flex-direction: column;
`;
