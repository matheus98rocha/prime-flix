import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 25px;

  h1 {
    font-weight: 300;
    font-size: 2.4rem;
  }
  .wrapper-help-user {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    .forgot-password {
      font-size: ${(props) => props.theme.fontSizes.small};
      color: ${(props) => props.theme.colors.neutralColor};
      border-left: 1px solid rgba(255, 255, 255, 0.3);
      padding-left: 10px;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
