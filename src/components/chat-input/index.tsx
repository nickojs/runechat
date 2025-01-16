import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  ChatInputContainer,
  InputOverride,
  SendBtn,
} from "./chat-input.styles";
import { usernameSelector } from "../../store/auth/auth.selectors";
import useKeyDown from "../../hooks/useKeydown";

interface ChatInputProps {
  onSend: (message: string) => void;
}

export const ChatInput = ({ onSend }: ChatInputProps) => {
  const [input, setInput] = useState<string>("");
  const username = useSelector(usernameSelector);
  const isEnterPressed = useKeyDown("Enter");

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  const sendMessageHandler = () => {
    onSend(input);
    setInput("");
  };

  useEffect(() => {
    if (isEnterPressed && input.length > 0) {
      sendMessageHandler();
    }
  }, [isEnterPressed, input]);

  return (
    <ChatInputContainer>
      <p>{username}:</p>
      <InputOverride onChange={inputHandler} value={input} />
      <SendBtn disabled={!input} onClick={sendMessageHandler}>
        Send
      </SendBtn>
    </ChatInputContainer>
  );
};
