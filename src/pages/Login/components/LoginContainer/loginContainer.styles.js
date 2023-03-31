import styled from "styled-components";

export const LoginContainerWrapper = styled.form`
  height: 39vh;
  width: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 20px;
  gap: 25px;

  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.transparentDark};

  input {
    width: 100%;
  }

  -webkit-box-shadow: 0px 0px 16px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 16px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 16px -1px rgba(0, 0, 0, 0.75);

  hr {
    border: -1px solid black;
    border-radius: 5px;
    width: 100%;
    border-radius: 20px;
  }

  .main-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 13px;

    width: 100%;
  }
`;
