import React, { useEffect, useRef } from "react";
import { MessageProps } from "./ChatBot";
import ChatBubble from "./ChatBubble";

type Props = {
  messages: MessageProps[];
};

const ChatThread = ({ messages }: Props) => {
  // Create a ref for the message list container
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the bottom of the message list with a slight delay
  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };
  // Call scrollToBottom every time messages are updated
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <div className="flex flex-1 flex-col items-center p-4 overflow-y-auto">
      {messages.map((msg, i) => (
        <ChatBubble key={i} message={msg} />
      ))}
      <div ref={messagesEndRef} /> {/* Ref to scroll to */}
    </div>
  );
};

export default ChatThread;
