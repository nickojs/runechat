import { useEffect } from "react";
import { useSelector } from "react-redux";

import { withAuth } from "../../hoc/withAuth";

import Message from "../message";
import ChatInput from "../chat-input";
import { ChatViewContainer, MessagesContainer } from "./chat-view.styles";

import { Origin } from "../message/message.types";
import { allMessagesSelector } from "../../store/messages/messages.selectors";

const ChatView = () => {
  const allMessages = useSelector(allMessagesSelector);

  useEffect(() => {
    console.log(allMessages);
  }, [allMessages]);

  return (
    <ChatViewContainer>
      <MessagesContainer>
        {allMessages?.map((msg) => (
          <Message
            username={msg.sockedId}
            message={msg.message}
            origin={msg.messageOrigin as Origin}
          />
        ))}
      </MessagesContainer>
      <ChatInput />
    </ChatViewContainer>
  );
};

export default withAuth(ChatView);
