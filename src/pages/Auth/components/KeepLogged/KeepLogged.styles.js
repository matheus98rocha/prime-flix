import styled from "styled-components";

export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.colors.primaryWhite};
`;

export const CheckboxInput = styled.input`
  display: none;
`;

export const CheckboxStyled = styled.span`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;

  background: rgba(255, 255, 255, 0.42);
  border-radius: 3px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  ${CheckboxInput}:checked + & {
    background-color: ${(props) => props.theme.colors.neutralColor};
    border-color: ${(props) => props.theme.colors.neutralColor};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.lightGrey};
  }
`;

export const CheckboxLabel = styled.span`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.neutralColor};
`;
