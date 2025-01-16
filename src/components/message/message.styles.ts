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
const systemPosition = css`
  flex-direction: row;
  p {
    text-align: center;
  }
`;

const regularMsg = css<{ origin: Origin }>`
  background-color: ${({ theme }) => theme.colors.bgPrimary};

  border-radius: ${({ origin, theme }) =>
    origin === "sender" ? theme.borderRadius.left : theme.borderRadius.right};
`;

const adminMsg = css`
  position: relative;

  padding: 8px 0px;
  border-image: ${({ theme }) => theme.borderImage.default};
  box-shadow: -1px 1px 5px black;
  background-color: transparent;
  border-radius: 0;

  p {
    color: ${(props) => props.theme.systemColors.default};
    text-shadow: -1px 1px 4px black;
    font-weight: 800;
    margin: 0;
    padding: 0;
  }
`;

const resolveOrigin = (origin: Origin) => {
  switch (origin) {
    case "receiver":
      return receiverPosition;
    case "sender":
      return senderPosition;
    case "system":
      return systemPosition;
    default:
      break;
  }
};

const MessageContainer = styled.div<{ origin: Origin }>`
  display: flex;
  align-items: stretch;
  gap: 12px;

  margin-bottom: 8px;

  ${({ origin }) => resolveOrigin(origin)};
`;

const MessageBox = styled.div<{ origin: Origin }>`
  position: relative;

  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex: 1;

  ${({ origin }) => (origin === "system" ? adminMsg : regularMsg)}
`;

const MessageUsername = styled.p`
  padding: 8px;
  padding-bottom: 0;
  margin: 0;
  min-height: 16px;

  color: ${({ theme }) => theme.colors.title};
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
