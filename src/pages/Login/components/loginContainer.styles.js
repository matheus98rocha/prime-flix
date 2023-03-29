import styled from "styled-components";

export const LoginContainerWrapper = styled.form`
  height: 50vh;
  width: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 50px;
  gap: 20px;

  border-radius: 20px;

  background-color: ${(props) => props.theme.colors.transparentDark};

  input,
  button {
    width: 100%;
  }
`;
