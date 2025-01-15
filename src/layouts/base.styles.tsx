import styled, { css } from "styled-components";
import authBg from "../assets/img/auth-wall.png";
import osrsBg from "../assets/img/osrs-bg.jpg";

const baseLayout = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const generateBg = (imageSrc: string) => css`
  background-image: url(${imageSrc});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

const AuthLayoutBase = styled.section`
  ${baseLayout}
  ${generateBg(authBg)}
`;

const ChatLayoutBase = styled.section`
  ${baseLayout}
  ${generateBg(osrsBg)}

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
