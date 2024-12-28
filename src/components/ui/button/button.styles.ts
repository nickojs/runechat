import { css } from "styled-components";

const buttonBase = css`
  all: unset;
  position: relative;

  cursor: pointer;
  user-select: none;

  &:disabled {
    cursor: not-allowed;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
`;

export { buttonBase };
