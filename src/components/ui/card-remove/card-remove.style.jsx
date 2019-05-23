import styled from "styled-components";

export const CardRemoveContainer = styled.div`
  position: absolute;

  background-color: rgba(0, 0, 0, 0.2);

  width: 30px;
  height: 30px;
  border-radius: 50%;
  /* text-align: center; */

  top: 5px;
  right: 5px;

  transition: background-color 0.25s ease;

  :hover {
    background-color: rgba(0, 0, 0, 1);
  }

  ::after {
    position: absolute;

    content: "x";
    color: white;

    font-size: 1rem;
    font-weight: 500;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    /* vertical-align: middle; */
  }
`;
