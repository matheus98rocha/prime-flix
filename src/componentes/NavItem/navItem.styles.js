import styled from "styled-components";

export const NavItemWrapper = styled.div`
  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .link-active .line-link {
    position: relative;
    bottom: 20px;
    height: 4px;
    width: 96%;
    background-color: var(--primary-light);
    border-radius: 3px;

    -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    transition: 2s ease-in-out;
  }

  .link-active {
    width: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    color: var(--primary-light);
    text-decoration: none;
    font-weight: bold;
  }

  .link {
    color: white;
    text-decoration: none;
    font-weight: bold;

    transition: 100ms ease-in-out;
  }

  .link .line-link {
    display: none;
  }

  .link:hover {
    color: var(--primary-light);
    transform: scale(1.05);
  }
`;
