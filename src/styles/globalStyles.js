import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

body {
  font-family: 'sans-serif';
  background-color: white;
  transition: 1s;
}

:root {
  --primary-light: #ffff;
  --primary-dark: #161616;
  --light-dark: #1A1A1A;
  --primary-grey: #cccccce3;
  --dark-grey: #7a7a7ae3;
  --primary-blue: #116feb;
}

@media only screen and (max-width: 700px) {
  h1,
  h2,
  h3,
  p,
  strong,
  span {
    font-size: 97%;
  }
}

button:hover{
  cursor: pointer;
  filter: brightness(0.8);
}

`;

export default GlobalStyle;
