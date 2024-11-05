import React, { useState } from "react";
import axios from "axios";
import "react-chat-elements/dist/main.css";
import { MessageBox, MessageList } from "react-chat-elements";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// Define the base MessageProps type
interface MessageProps {
  id: string | number;
  position?: string;
  text?: string;
  title?: string;
  focus?: boolean;
  date?: number | Date;
  dateString?: string;
  avatar?: string;
  titleColor?: string;
  forwarded?: boolean;
  replyButton?: boolean;
  removeButton?: boolean;
  status?: "waiting" | "sent" | "received" | "read";
  statusTitle?: string;
  notch?: boolean;
  copiableDate?: boolean;
  retracted?: boolean;
  className?: string;
  letterItem?: { id: string; letter: React.ReactChild };
  reply?: { message: string; photoURL: string } | any;
  type?: string;
}

// Extend MessageProps to create Message type
interface Message extends MessageProps {
  // Add any additional fields specific to Message here
  // Example:
  isEditable?: boolean; // Add a custom property for message edit functionality
  reactions?: string[]; // Array of emojis representing reactions to the message
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State to toggle chat window
  const [loading, setLoading] = useState(false); // New loading state

  const sendMessage = async () => {
    if (!input.trim()) return; // Prevent sending empty messages
    const userMessage: Message = {
      title: "Visitor",
      text: input,
      position: "right",
      type: "text",
      id: 1,
      status: "sent",
      titleColor: "black",
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/ask", {
        question: input,
      });
      console.log(response.data.response);
      const botMessage: Message = {
        title: "Zaneri Assistant",
        text: response.data.response,
        type: "text",
        position: "left",
        id: 2,
        titleColor: "#aa00ff",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && loading === false) {
      event.preventDefault(); // Prevent default form submission
      sendMessage();
    }
  };
  return (
    <div className="fixed bottom-4 right-4 z-0 ">
      <button
        className="fixed bottom-4 right-4 px-4 py-2 text-xl bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300 "
        onClick={toggleChat}
      >
        Ask Zaneri
        <p className="text-sm font-light ">Powered by AI.</p>
      </button>

      {isOpen && (
        <div className="chatbox fixed bottom-16 right-4 w-3/4 md:w-2/5 bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="bg-material-purple h-12 w-full flex flex-col items-center justify-center py-8 rounded-lg">
            <p className="text-white text-xl font-semibold w-full text-center">
              Zaneri AI Assistant
            </p>
            <p>Powered by LLM AI</p>
          </div>
          <MessageList
            className="message-list"
            lockable={true}
            toBottomHeight={"100%"}
            dataSource={messages}
            type="text"
            className="mb-8"
          />

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me something..."
            className="w-full border border-gray-300 rounded p-2"
          />
          <button
            onClick={sendMessage}
            className="mt-2 w-full bg-blue-500 text-white rounded p-2 flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <AiOutlineLoading3Quarters className="animate-spin text-2xl" />
            ) : (
              "Send"
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
