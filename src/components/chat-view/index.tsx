import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { withAuth } from "../../hoc/withAuth";

import { Message } from "../message";
import { ChatInput } from "../chat-input";
import { ChatViewContainer, MessagesContainer } from "./chat-view.styles";

import socketContext from "../context/socketContext";
import { allMessagesSelector } from "../../store/messages/messages.selectors";
import { usernameSelector } from "../../store/auth/auth.selectors";

import { Origin } from "../message/message.types";
import { messageObjBuilder } from "../../types/socket";
import { addMessage } from "../../store/messages/messages.slice";

const ChatView = () => {
  const { socketId, emitMessage, getAllSockets } = socketContext();
  const allMessages = useSelector(allMessagesSelector);
  const username = useSelector(usernameSelector);
  const dispatch = useDispatch();

  const sendMessage = (data: string) => {
    if (!data) return;
    const msgObj = messageObjBuilder(data, socketId, username);
    emitMessage(msgObj);
    dispatch(
      addMessage({
        ...msgObj,
        messageOrigin: "sender",
      })
    );
  };

  console.log(allMessages);

  useEffect(() => {
    getAllSockets();
  }, []);

  return (
    <ChatViewContainer>
      <MessagesContainer>
        {allMessages?.map((msg) => (
          <Message
            key={msg.message}
            username={msg.username}
            message={msg.message}
            origin={msg.messageOrigin as Origin}
          />
        ))}
      </MessagesContainer>
      <ChatInput onSend={sendMessage} />
    </ChatViewContainer>
  );
};

export default withAuth(ChatView);
