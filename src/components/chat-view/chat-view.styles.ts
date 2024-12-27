import styled from "styled-components";

const ChatViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px;
  background-color: black;

  max-width: 600px;
`;

const MessagesContainer = styled.div`
  background-color: #3b332b;

  max-height: 400px;

  overflow-y: scroll;

  padding: 8px;
`;

export { MessagesContainer, ChatViewContainer };
