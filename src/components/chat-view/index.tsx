import mockMessages from "../../assets/message-mocks";
import Message from "../message";
import { Origin } from "../message/message.types";
import { MessagesContainer } from "./chat-view.styles";

const ChatView = () => {
  return (
    <MessagesContainer>
      {mockMessages.map((msg) => (
        <Message
          username={msg.username}
          message={msg.message}
          origin={msg.origin as Origin}
        />
      ))}
    </MessagesContainer>
  );
};

export default ChatView;
