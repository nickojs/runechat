import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import {
  tokenSelector,
  usernameSelector,
} from "../../store/auth/auth.selectors";
import { AdmWelcomeMessageData } from "../../types/socket";

const URL =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:3003";

export interface SocketProps {
  isConnected: boolean;
  emitMessage: (data: any) => void;
}

const SocketContext = React.createContext<SocketProps>({} as SocketProps);

const socket = io(URL, { reconnection: false, autoConnect: false });

export const SocketProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [isConnected, setConnected] = useState(false);
  const token = useSelector(tokenSelector);
  const username = useSelector(usernameSelector);

  const onConnect = () => {
    setConnected(true);
    socket.emit("post-connection-data", {
      auth: token,
      username,
    });
  };

  const onAdmMessage = (data: AdmWelcomeMessageData) => {
    console.log(data);
  };

  useEffect(() => {
    if (token && socket) {
      socket.connect();

      socket.on("connect", onConnect);
      socket.on("error", (err) => {
        console.log(
          "[SocketProvider] something went wrong : ",
          JSON.stringify(err)
        );
      });

      socket.on("adm_message", onAdmMessage);
    }

    return () => {
      socket.off("connect", onConnect);
      socket.off("adm_message", onAdmMessage);
    };
  }, [socket, token]);

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
