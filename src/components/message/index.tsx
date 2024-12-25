import {
  MessageBox,
  MessageContainer,
  MessageContent,
  MessageUsername,
} from "./message.styles";
import { MessageProps } from "./message.types";

const Message = ({ username, message, origin = "sender" }: MessageProps) => {
  return (
    <MessageContainer origin={origin}>
      {/* <MessageAvatar background={avatar} /> */}

      <MessageBox origin={origin}>
        <MessageUsername>{username}</MessageUsername>
        <MessageContent>{message}</MessageContent>
      </MessageBox>
    </MessageContainer>
  );
};

export default Message;
