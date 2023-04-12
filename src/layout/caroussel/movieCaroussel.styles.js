import styled from "styled-components";
export const MovieCarousselWrapper = styled.div`
  
  animation: fadeIn 2s;
  -webkit-animation: fadeIn 2s;
  -moz-animation: fadeIn 2s;
  -o-animation: fadeIn 2s;
  -ms-animation: fadeIn 2s;

  display: -ms-flexbox;
  display: flex;
  font-size: 0;
  margin: 0;
  padding: 0;
  border: 0;
  align-items: center;

  .buttonArrow {
    height: 418px;
    width: 45px;
    background-color: #00000018;
    border: none;
  }
`;
export const CarrouselWrapper = styled.div`
  max-width: 80vw;
  display: flex;
  align-content: stretch;
  overflow-x: auto;
  scroll-behavior: smooth;
  display: -ms-flexbox;
  display: flex;

  &::-webkit-scrollbar {
    display: none;
  }

  .image-slide {
    padding: 0.5px;
    width: 280px;
    flex: none;

    .image-item {
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin: 0px;
    }
  }
`;
