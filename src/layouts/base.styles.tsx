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

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . . ."
    ". . . ."
    "chat chat . ."
    "chat chat . .";
`;

const ChatContainer = styled.div`
  grid-area: chat;
  height: 100%;
`;

export { AuthLayoutBase, ChatLayoutBase, ChatContainer };
