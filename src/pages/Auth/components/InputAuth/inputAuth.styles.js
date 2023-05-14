import styled from "styled-components";

export const InputAuthWrapper = styled.input`
  width: 350px;
  padding: 15px;

  background-color: transparent;
  border: none;
  border-radius: 16px;

  -webkit-box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.75);

  transition: box-shadow 0.3s ease-in-out;
  text-align: center;

  font-size: 1.4rem;
  font-weight: 700;
  color: black;
  font-weight: 300;

  &::placeholder {
    font-size: 1.4rem;
    font-weight: 700;
    color: black;
    font-weight: 300;
  }

  &:focus {
    background-color: transparent;

    -webkit-box-shadow: 0px 0px 14px 3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 14px 3px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 14px 3px rgba(0, 0, 0, 0.75);
  }
`;
