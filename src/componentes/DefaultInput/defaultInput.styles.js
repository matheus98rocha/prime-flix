import styled from "styled-components";

export const InputWrapper = styled.input`
  width: ${(props) => props.width};

  background-color: none;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};

  font-size: 17px;
  padding: 0 16px;
  border-radius: 6px;
  line-height: 48px;

  &:focus {
    transition: 0.4s;
    border-color: ${(props) => props.theme.colors.primary};

    -webkit-box-shadow: 0px 0px 4px 0px ${(props) => props.theme.colors.primary};
    -moz-box-shadow: 0px 0px 4px 0px ${(props) => props.theme.colors.primary};
    box-shadow: 0px 0px 4px 0px ${(props) => props.theme.colors.primary};
  }
`;
