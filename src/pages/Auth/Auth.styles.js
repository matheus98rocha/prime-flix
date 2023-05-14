import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const AuthWrapper = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.primaryWhite};

  .main-content {
    @-webkit-keyframes puff-in-center {
      0% {
        -webkit-transform: scale(2);
        transform: scale(2);
        -webkit-filter: blur(4px);
        filter: blur(4px);
        opacity: 0;
      }
      100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-filter: blur(0px);
        filter: blur(0px);
        opacity: 1;
      }
    }
    @keyframes puff-in-center {
      0% {
        -webkit-transform: scale(2);
        transform: scale(2);
        -webkit-filter: blur(4px);
        filter: blur(4px);
        opacity: 0;
      }
      100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-filter: blur(0px);
        filter: blur(0px);
        opacity: 1;
      }
    }

    /* Animation */
    -webkit-animation: puff-in-center 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
      both;
    animation: puff-in-center 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) both;

    width: 1100px;
    height: 400px;

    display: grid;
    grid-template-columns: 30% auto;

    background: rgba(255, 255, 255, 0.19);
    border-radius: 16px;

    -webkit-box-shadow: 0px 0px 35px 23px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 35px 23px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 35px 23px rgba(0, 0, 0, 0.75);

    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);

    .create-user-wrapper {
      background: rgba(255, 255, 255, 0.57);
      border-radius: 16px 0px 0px 16px;
      /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.3);

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 50px;
      flex-direction: column;

      h1 {
        font-weight: 300;
        font-size: 2.4rem;
      }

      h2 {
        font-size: 2.4rem;
        font-weight: 700;
      }
    }

    .login-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 20px;

      gap: 20px;

      h1 {
        font-weight: 300;
        font-size: 2.4rem;
      }

      .input-field {
        width: 350px;
        padding: 15px;

        background-color: transparent;
        border: none;
        border-radius: 16px;

        -webkit-box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.75);

        transition: box-shadow 0.3s ease-in-out;
        text-align: center;

        font-size: 1.4rem;
        font-weight: 700;
        color: black;
        font-weight: 300;

        &::placeholder {
          font-size: 1.4rem;
          font-weight: 700;
          color: black;
          font-weight: 300;
        }

        &:focus {
          -webkit-box-shadow: 0px 0px 14px 3px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 0px 0px 14px 3px rgba(0, 0, 0, 0.75);
          box-shadow: 0px 0px 14px 3px rgba(0, 0, 0, 0.75);
        }
      }
      .wrapper-help-user {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        .forgot-password {
          font-size: ${(props) => props.theme.fontSizes.small};
          color: ${(props) => props.theme.colors.neutralColor};
          border-left: 1px solid rgba(255, 255, 255, 0.3);
          padding-left: 10px;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
`;

export const BackgroundImage = styled(LazyLoadImage)`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;