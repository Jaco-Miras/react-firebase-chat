import React from "react";

import { UserInfo } from "./UserInfo/userInfo";
import { ChatList } from "./ChatList/chatList";

export const List = () => {
  return (
    <div className="flex-1">
      <UserInfo />
      <ChatList />
    </div>
  );
};
