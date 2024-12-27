import mockMessages from "../../assets/message-mocks";
import ChatInput from "../chat-input";
import Message from "../message";
import { Origin } from "../message/message.types";
import { ChatViewContainer, MessagesContainer } from "./chat-view.styles";

const ChatView = () => {
  return (
    <ChatViewContainer>
      <MessagesContainer>
        {mockMessages.map((msg) => (
          <Message
            username={msg.username}
            message={msg.message}
            origin={msg.origin as Origin}
          />
        ))}
      </MessagesContainer>
      <ChatInput />
    </ChatViewContainer>
  );
};

export default ChatView;
