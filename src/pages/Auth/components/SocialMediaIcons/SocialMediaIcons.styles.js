import styled from "styled-components";

export const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @keyframes shake-icons {
    10% {
      transform: rotate(15deg);
    }

    20% {
      transform: rotate(-15deg);
    }

    30% {
      transform: rotate(15deg);
    }

    40% {
      transform: rotate(-15deg);
    }
  }

  svg {
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
      animation: shake-icons 0.25s;
    }
  }
`;
