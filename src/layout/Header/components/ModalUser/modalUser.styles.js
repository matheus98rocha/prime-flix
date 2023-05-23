import styled from "styled-components";

export const ModalUserStyles = styled.div`
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

  padding: 20px 0px;
  width: 200px;
  background-color: #ffff;
  -webkit-box-shadow: 0px 0px 17px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 17px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 17px 0px rgba(0, 0, 0, 0.75);

  -webkit-animation: fade-in 0.9s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in 0.9s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  position: absolute;

  right: 100px;
  top: 75px;

  display: flex;
  flex-direction: column;

  button {
    background-color: #ffff;
    border: none;
    padding: 5px;
    transition: 0.1s ease-in-out;

    &:hover {
      border: none;
      background-color: var(--light-dark);
      color: #ffff;
    }
  }
`;
