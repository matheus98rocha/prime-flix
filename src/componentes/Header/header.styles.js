import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  /* position: fixed; */
  top: 0;
  width: 100%;
  height: 60px;

  z-index: 999;
  background-color: var(--dark-grey);

  .left-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }

  p {
    color: var(--primary-light);
  }
`;

export const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.875rem;
  cursor: pointer;
  color: var(--primary-light);
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
