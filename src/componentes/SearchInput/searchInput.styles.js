import styled from "styled-components";

export const SearchInputWrapper = styled.input`
  height: 40px;
  width: 400px;
  padding: 0px 15px;
  border-radius: 5px;
  border: 1px solid var(--primary-grey);

  font-size: 1.2rem;
  color: var(--dark-grey);
  background-color: white;

  input:focus {
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  @media only screen and (max-width: 700px) {
    input {
      width: 300px;
      margin-right: 5px;

      font-size: 1rem;
    }
  }
`;
