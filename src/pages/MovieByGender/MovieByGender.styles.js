import styled from "styled-components";

export const MovieByGenderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 20px;
  gap: 20px;

  .subtitle-wrapper{
    width: 40vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;

    h1{
      font-size: 1rem;
      color: ${props => props.theme.colors.neutralGrey};
    }
  }
`;
