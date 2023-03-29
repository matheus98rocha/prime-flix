import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;

  z-index: 999;
  background-color: ${props => props.theme.colors.primaryDark};

  ${({ active }) =>
    active &&
    `
    background-color:var(--light-dark);
  `}

  transition: 0.5s ease-in-out;

  .left-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }

  p {
    color: ${props => props.theme.colors.primaryWhite};
  }
`;

export const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.875rem;
  cursor: pointer;
  color: ${props => props.theme.colors.primaryWhite};;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media only screen and (max-width: 700px) {
    font-size: 1.2rem;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;
