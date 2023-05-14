import styled, { css } from "styled-components";

export const WrapperButton = styled.button`
  width: 200px;
  padding: 15px;

  background-color: transparent;
  border: none;
  border-radius: 16px;

  font-size: 1.1rem;
  font-weight: 300;
  font-weight: bold;

  -webkit-box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.75);

  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    -webkit-box-shadow: 0px 0px 14px 3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 14px 3px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 14px 3px rgba(0, 0, 0, 0.75);
  }

  ${({ type }) =>
    type === "reverse" &&
    css`
      background-color: rgba(0, 0, 0, 0.815);
      color: white;
    `}
`;