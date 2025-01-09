import { Outlet } from "react-router";
import { ChatContainer, ChatLayoutBase } from "./base.styles";
import withAuth from "../hoc/withAuth";

const ChatLayout = () => {
  return (
    <ChatLayoutBase>
      <ChatContainer>
        <Outlet />
      </ChatContainer>
    </ChatLayoutBase>
  );
};

export default withAuth(ChatLayout);
