import styled, { css } from "styled-components";
import { Origin } from "./message.types";

const senderPosition = css`
  flex-direction: row;
  p {
    text-align: left;
  }
`;
const receiverPosition = css`
  flex-direction: row-reverse;
  p {
    text-align: right;
  }
`;

const MessageContainer = styled.div<{ origin: Origin }>`
  display: flex;
  align-items: stretch;
  gap: 12px;

  font-family: "Runescape";
  font-weight: 400;

  margin-bottom: 8px;

  ${({ origin }) => (origin === "sender" ? senderPosition : receiverPosition)};
`;

const MessageBox = styled.div<{ origin: Origin }>`
  position: relative;

  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex: 1;

  background-color: #483e32;
  border-radius: ${({ origin }) =>
    origin === "sender" ? "8px 8px 8px 0" : "8px 8px 0 8px"};
`;

const MessageUsername = styled.p`
  padding: 8px;
  padding-bottom: 0;
  margin: 0;
  min-height: 16px;

  color: #ffb21f;
  font-weight: 800;
`;

const MessageContent = styled.p`
  margin: 0;
  padding: 0 8px 8px 8px;

  color: white;
`;

const MessageAvatar = styled.span`
  align-self: flex-end;

  height: 45px;
  width: 45px;

  // for mock purposes only
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuveLD9GBmmLaWk9TgXulDW7bwR9D9Xjbfnw&s");
  background-size: 200%;
  background-position: 50% 10%;
`;

export {
  MessageContainer,
  MessageBox,
  MessageUsername,
  MessageContent,
  MessageAvatar,
};
