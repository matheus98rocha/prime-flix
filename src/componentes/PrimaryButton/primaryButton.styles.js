import styled from "styled-components";

export const ButtonWrapper = styled.button`
  width: ${(props) => props.width};

  background-color: ${(props) =>
    props.category === "action"
      ? props.theme.colors.primary
      : props.category === "sucess"
      ? props.theme.colors.sucess
      : props.category === "warning"
      ? props.theme.colors.warning
      : props.category === "default" && props.theme.colors.neutralGrey};

  line-height: 48px;
  padding: 0 16px;
  color: ${(props) => props.theme.colors.primaryWhite};
  font-weight: bold;
  font-size: 1.2rem;
  -webkit-font-smoothing: antialiased;
  border: none;
  border-radius: 6px;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
