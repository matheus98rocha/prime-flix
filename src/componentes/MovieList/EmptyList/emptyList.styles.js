import styled from "styled-components";

export const EmptyListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 80vh;

  animation: fadeIn 2s;
  -webkit-animation: fadeIn 2s;
  -moz-animation: fadeIn 2s;
  -o-animation: fadeIn 2s;
  -ms-animation: fadeIn 2s;
  
  h2 {
    color: var(--dark-grey);
  }
`;
