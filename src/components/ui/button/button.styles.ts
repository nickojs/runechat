import { css } from "styled-components";

const buttonBase = css`
  all: unset;
  position: relative;

  cursor: pointer;
  user-select: none;

  &:disabled {
    cursor: not-allowed;
  }
`;

export { buttonBase };
