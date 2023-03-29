import styled from "styled-components";

export const LoginWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.black};
`;
