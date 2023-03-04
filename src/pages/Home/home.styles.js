import styled from "styled-components";

export const HomeWrapper = styled.div`
  .control-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    height: 100px;
    padding-top: 40px;
  }

  @media only screen and (max-width: 700px) {
    padding: 20px;
    gap: 20px;
  }
`;
