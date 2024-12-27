import styled from "styled-components";

const ChatInputContainer = styled.div`
  display: flex;
  flex-direction: row;

  padding: 16px;

  font-weight: 800;

  border-image: ${({ theme }) => theme.borderImage.default};
  background-color: ${({ theme }) => theme.colors.bgLight};

  p {
    margin: 0;
  }
`;

const InputOverride = styled.input`
  all: unset;

  flex: 1;
  margin-left: 8px;

  background-color: transparent;
`;

export { ChatInputContainer, InputOverride };
