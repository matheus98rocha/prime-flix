import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .control-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    height: 100px;
  }

  @media only screen and (max-width: 700px) {
    padding: 20px;
    gap: 20px;
  }
`;
