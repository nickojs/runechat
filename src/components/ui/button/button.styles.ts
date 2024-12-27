import styled from "styled-components";

const Button = styled.button`
  all: unset;
  position: relative;

  cursor: pointer;
  user-select: none;

  &:disabled {
    cursor: not-allowed;
  }
`;

export { Button };
