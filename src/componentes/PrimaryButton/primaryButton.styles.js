import styled from "styled-components";

export const ButtonWrapper = styled.button`
  width: ${(props) => props.width};

  background-color: ${(props) =>
    props.category === "sucess"
      ? props.theme.colors.sucess
      : props.category === "warning"
      ? props.theme.colors.warning
      : props.category === "default" && props.theme.colors.neutralGrey};

  line-height: 48px;
  padding: 0 16px;
  color: ${(props) => props.theme.colors.primaryWhite};
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
