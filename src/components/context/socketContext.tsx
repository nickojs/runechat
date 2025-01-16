import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import {
  tokenSelector,
  usernameSelector,
} from "../../store/auth/auth.selectors";
import { MessageObject } from "../../types/socket";
import { addMessage, clearMessages } from "../../store/messages/messages.slice";

const URL =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:3003";

export interface SocketProps {
  isConnected: boolean;
  emitMessage: (data: any) => void;
}

const SocketContext = React.createContext<SocketProps>({} as SocketProps);

const socket = io(URL, { reconnection: true, autoConnect: false });

export const SocketProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [isConnected, setConnected] = useState(false);
  const token = useSelector(tokenSelector);
  const username = useSelector(usernameSelector);
  const dispatch = useDispatch();

  const onConnect = () => {
    setConnected(true);
    socket.emit("post-connection-data", {
      auth: token,
      username,
    });
  };

  const onAdmMessage = (data: MessageObject) => {
    console.log(data);
    dispatch(addMessage(data));
  };

  const onError = (error: any) => {
    console.log(
      "[SocketProvider] something went wrong : ",
      JSON.stringify(error)
    );
  };

  const onDisconnection = () => {
    setConnected(false);
    dispatch(clearMessages());
    console.log("user disconnected");
  };

  useEffect(() => {
    if (token && socket) {
      socket.connect();

      socket.on("connect", onConnect);
      socket.on("error", onError);
      socket.on("disconnect", onDisconnection);

      socket.on("adm_message", onAdmMessage);
    }

    return () => {
      socket.off("connect", onConnect);
      socket.off("adm_message", onAdmMessage);
      socket.off("error", onError);
      socket.off("disconnect", onDisconnection);
    };
  }, [socket, token]);

  useEffect(() => {
    console.log(socket.disconnected);
  }, [socket]);

  const emitMessage = (data: any) => {
    socket.emit("message", data);
  };

  return (
    <SocketContext.Provider
      value={{
        isConnected,
        emitMessage,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default (): SocketProps => {
  const context = useContext(SocketContext);
  return context;
};
