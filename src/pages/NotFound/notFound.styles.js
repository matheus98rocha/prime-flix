import styled from "styled-components";

export const NotFoundWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 30vh;
  gap: 10px;

  .notFound .icon {
    font-size: 40rem;
    font-weight: bold;
  }

  .notFound p {
    font-size: 1.5rem;
    color: #a0a0a0;
    font-weight: bold;
  }

  .notFound p a {
    text-decoration: none;
    font-weight: bold;
  }
`;
