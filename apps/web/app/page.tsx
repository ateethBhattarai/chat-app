"use client";

import React, { useState } from "react";
import { useSocket } from "../context/SocketProvider";

const Page = () => {
  const { sendMessage } = useSocket();
  const [message, setMessage] = useState("");

  return (
    <>
      <div className="flex flex-col gap-4 items-center py-4 h-screen">
        <div className="sm:h-1/2 sm:w-1/2 p-2 border-2">All messages</div>
        <div className="flex gap-3">
          <input
            type="text"
            name="message"
            id="message"
            placeholder="Message"
            className="border border-blue-900 rounded-md px-2 py-1 shadow-md"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="py-2 px-3 bg-blue-500 hover:bg-blue-900 text-white rounded-md"
            onClick={(e) => sendMessage(message)}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;
