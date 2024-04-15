import React from "react";

export const ChatList = () => {
  return (
    <div className="flex-2 items-center w-[30%] border-gray-300 border-r h-screen overflow-y-scroll">
      <div className="p-6">
        <h1 className="text-3xl font-semibold">Messages</h1>

        <div className="mt-5">
          <input
            type="text"
            className="bg-gray-300 border-none outline-none h-10 w-full rounded-full p-6"
            placeholder="Search"
          />
        </div>
        <div className="mt-6 flex items-center space-x-4 hover:bg-slate-300 py-3 px-1.5 rounded cursor-pointer">
          <img
            src="https://raw.githubusercontent.com/ae0000/avatar/master/j.png"
            alt="image"
            class="w-12 h-12 rounded-full"
          />
          <div class="flex flex-col">
            <span className="mb-auto text-lg font-semibold">
              Jaco Raven Miras
            </span>
            <p className="text-sm text-gray-800">as</p>
          </div>
        </div>
      </div>
    </div>
  );
};
