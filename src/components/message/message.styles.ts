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

  ${({ origin }) => (origin === "sender" ? senderPosition : receiverPosition)};
`;

const MessageBox = styled.div<{ origin: Origin }>`
  position: relative;

  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex: 1;

  padding: 0 16px 8px 16px;

  background-color: #cab995;
  border-radius: ${({ origin }) =>
    origin === "sender" ? "8px 8px 8px 0" : "8px 8px 0 8px"};

  box-shadow: 0 0 4px #483f37;
`;

const MessageUsername = styled.p`
  padding: 8px;
  margin: 0;
  min-height: 16px;

  color: white;
  font-weight: 800;
`;

const MessageContent = styled.p`
  margin: 0;
  padding: 0 8px 8px 8px;
`;

export { MessageContainer, MessageBox, MessageUsername, MessageContent };
