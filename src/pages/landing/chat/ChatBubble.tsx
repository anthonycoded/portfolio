import React from "react";
import { MessageProps } from "./ChatBot";

type Props = {
  message: MessageProps;
};

const ChatBubble: React.FC<Props> = ({ message }) => {
  const isUserMessage = message.position === "right";
  const isSystemMessage = message.position === "system";

  return (
    <div
      className={`flex ${
        isUserMessage ? "justify-end" : "justify-start"
      } mb-4 w-full`}
    >
      <div
        className={`max-w-xs px-4 py-2 rounded-lg shadow-md ${
          isSystemMessage
            ? "bg-white text-gray-800 rounded-bl-none"
            : isUserMessage
            ? "bg-blue-300 text-white rounded-br-none"
            : "bg-gray-200 text-gray-800 rounded-bl-none"
        }`}
      >
        {message.title && (
          <p
            className="font-bold"
            style={{
              color: message.titleColor || "white",
            }}
          >
            {message.title}
          </p>
        )}
        <div>{message.text}</div>
      </div>
    </div>
  );
};

export default ChatBubble;
