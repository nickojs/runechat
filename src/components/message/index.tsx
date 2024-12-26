import {
  MessageAvatar,
  MessageBox,
  MessageContainer,
  MessageContent,
  MessageUsername,
} from "./message.styles";
import { MessageProps } from "./message.types";

const Message = ({ username, message, origin = "sender" }: MessageProps) => {
  return (
    <MessageContainer origin={origin}>
      {/* placeholder for now */}
      <MessageAvatar />

      <MessageBox origin={origin}>
        <MessageUsername>{username}</MessageUsername>
        <MessageContent>{message}</MessageContent>
      </MessageBox>
    </MessageContainer>
  );
};

export default Message;
