import styled, { css } from "styled-components";

const baseFormStyle = css`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 800;
`;

const FormLabel = styled.label`
  ${baseFormStyle}
`;

const FormInput = styled.input`
  all: unset;
  ${baseFormStyle}
`;

const FormInputContainer = styled.div`
  margin: 8px 0;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  min-height: 22px;

  span {
    color: red;
  }
`;

export { FormInputContainer, FormLabel, FormInput, ErrorContainer };
