import styled from "styled-components";

export const AuthWrapper = styled.div`
  height: 100vh;
  width: 100vw;

  background-color: ${(props) => props.theme.colors.primaryWhite};

  display: grid;
  grid-template-columns: 1fr 1fr;
`;
