import styled from "styled-components";

export const LoginWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.primaryWhite};

  .login-container {
    height: 60vh;
    width: 60vh;

    border-radius: 20px;

    background-color: var(--dark-black);
  }
`;
