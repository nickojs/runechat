import { Outlet } from "react-router";
import { ChatLayoutBase } from "./base.styles";
import withAuth from "../hoc/withAuth";

const ChatLayout = () => {
  return (
    <ChatLayoutBase>
      <Outlet />
    </ChatLayoutBase>
  );
};

export default withAuth(ChatLayout);
