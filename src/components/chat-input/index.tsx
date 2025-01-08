import React, { useState } from "react";
import {
  ChatInputContainer,
  InputOverride,
  SendBtn,
} from "./chat-input.styles";
import { useSelector } from "react-redux";
import { usernameSelector } from "../../store/auth/auth.selectors";

const ChatInput = () => {
  const [input, setInput] = useState<string>("");
  const username = useSelector(usernameSelector);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  return (
    <ChatInputContainer>
      <p>{username}:</p>
      <InputOverride onChange={inputHandler} />
      <SendBtn disabled={!input}>Send</SendBtn>
    </ChatInputContainer>
  );
};

export default ChatInput;
