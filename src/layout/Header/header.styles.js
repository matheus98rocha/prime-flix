import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0px 150px;

  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;

  z-index: 999;
  background-color: var(--dark-black);

  ${({ active }) =>
    active &&
    `
    background-color:var(--light-dark);
  `}

  transition: 0.5s ease-in-out;

  p {
    color: ${(props) => props.theme.colors.primaryWhite};
  }
`;

export const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.875rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primaryWhite};
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

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  .user-name {
    font-size: 1.1rem;
    font-weight: bold;
  }

  &:hover {
    cursor: pointer;
  }

  .user-image-wrapper {
    height: 40px;
    width: 40px;

    border-radius: 10px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
`;
