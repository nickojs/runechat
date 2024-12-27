import React, { useState } from "react";
import {
  ChatInputContainer,
  InputOverride,
  SendBtn,
} from "./chat-input.styles";

const ChatInput = () => {
  const [input, setInput] = useState<string>("");

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  return (
    <ChatInputContainer>
      <p>username:</p>
      <InputOverride onChange={inputHandler} />
      <SendBtn disabled={!input}>Send</SendBtn>
    </ChatInputContainer>
  );
};

export default ChatInput;
