import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid ${props => props.theme.colors.lightGrey};
  width: 140px;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${props => props.theme.colors.white};

  z-index: 99;

  p,
  a {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-decoration: none;
    color: ${props => props.theme.colors.neutralColor};
  }

  &:hover .menu {
    opacity: 1;
    visibility: visible;
    border: 1px solid var(--primary-grey);
  }

  .menu {
    visibility: hidden;
  }
`;
