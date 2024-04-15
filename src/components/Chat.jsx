import React from "react";
import { Messages } from "./Messages";
import { InputSend } from "./InputSend";

export const Chat = () => {
  return (
    <div className="flex-1">
      <div className="p-4 border border-gray-300">
        <div className="flex items-center space-x-4">
          <img
            src="https://raw.githubusercontent.com/ae0000/avatar/master/j.png"
            alt="image"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex flex-col ml-2">
            <span className="mb-auto text-lg font-semibold">
              Jaco Raven Miras
            </span>
            <p className="text-sm text-gray-800">Online</p>
          </div>
        </div>
      </div>

      <Messages />

      <InputSend />
    </div>
  );
};
