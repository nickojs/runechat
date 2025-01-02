import styled, { css } from "styled-components";
import authBg from "../assets/img/auth-wall.png";

const baseLayout = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const AuthLayoutBase = styled.section`
  ${baseLayout}
  background-image: url(${authBg});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

const ChatLayoutBase = styled.section`
  ${baseLayout}
`;

export { AuthLayoutBase, ChatLayoutBase };
