import styled from "styled-components";

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputWrapper = styled("div")`
  display: flex;
  align-items: center;
`;

export const Label = styled("label")`
  color: ${({ theme }) => theme.colors.white};
  line-height: 17px;
  font-size: 12px;
  align-self: center;
`;

export const ErrorText = styled("p")`
  color: ${({ theme }) => theme.colors.vividRed};
  white-space: nowrap;
  font-family: "Crimson Text", Arial, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.8;
  margin-bottom: 5px;
  margin: 0;
`;

export const Input = styled("input")`
  width: 20px;
  height: 20px;
  margin-left: 0;
  margin-top: 0;
  padding: 0;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  appearance: none;
  border-width: 2px;
  border-radius: 0.25rem;
  border-color: #6b9cff;

  :after {
    border: 2px solid #e5e7eb;
  }

  :checked {
    color: red;
  }
`;
