import styled from "styled-components";

const ChatViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px;
  background-color: ${({ theme }) =>
    theme.colors.textSecondary}; // this should be a texture

  max-width: 600px;
`;

const MessagesContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bgDarker};

  max-height: 400px;

  overflow-y: scroll;

  padding: 8px;
`;

export { MessagesContainer, ChatViewContainer };
