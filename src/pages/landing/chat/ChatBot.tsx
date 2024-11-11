import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "react-chat-elements/dist/main.css";
import { MessageBox, MessageList } from "react-chat-elements";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Api from "../../../utils/api";
import ChatThread from "./ChatThread";

// Define the base MessageProps type
export interface MessageProps {
  id: string | number;
  position?: string;
  text?: string;
  title?: string;
  focus?: boolean;
  date?: number | Date;
  dateString?: string;
  avatar?: string;
  titleColor?: string;
  status?: "waiting" | "sent" | "received" | "read";
  reply?: { message: string; photoURL: string } | any;
  type?: string;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<MessageProps[]>([
    // {
    //   id: 0,
    //   text: "Hello! I’m Zaneri, here to assist you with any questions about Shawn Barbel. What would you like to know?",
    //   title: "Zaneri Assistant",
    //   position: "left",
    //   type: "text",
    //   titleColor: "#aa00ff",
    // },

    {
      id: 1,
      text: (
        <div className="">
          Here are a few questions you could ask:
          <ul
            style={{
              listStyleType: "disc",
              marginLeft: "1.2em",
              marginTop: "0.5em",
            }}
            className="text-sm"
          >
            <li>Tell me about Shawn's background.</li>
            <li>What are some of Shawn's recent projects?</li>
            <li>Can you share Shawn's key skills?</li>
          </ul>
        </div>
      ) as any, // Casting as `any` to allow JSX in `text`
      title: "Zaneri Assistant",
      position: "system",
      type: "text",
      titleColor: "#aa00ff",
    },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State to toggle chat window
  const [loading, setLoading] = useState(false); // New loading state
  const screenHeight = window.screen.height;

  const sendMessage = async () => {
    if (!input.trim()) return; // Prevent sending empty messages
    const userMessage: MessageProps = {
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
      const response = await axios.post(Api.AskChatBot, {
        question: input,
      });
      console.log(response.data.response);
      const botMessage: MessageProps = {
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
      const systemMessage = {
        id: 1,
        text: (
          <div className="">
            Something is not right....Zaneri may be asleep.Zzzzzzzzzz
          </div>
        ) as any, // Casting as `any` to allow JSX in `text`
        title: "Zaneri Assistant",
        position: "system",
        type: "text",
        titleColor: "#aa00ff",
      };
      setMessages((prev) => [...prev, systemMessage]);
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
    <>
      {isOpen ? (
        <div
          className={`z-10 fixed h-full pb-12 justify-end flex flex-col items-end w-full bg-black bg-opacity-50`}
        >
          <div className="w-full h-full relative">
            <div className="w-4/5 md:w-[500px] lg:w-[400px] h-4/5 absolute bottom-4 right-0 flex flex-col items-center bg-gray-100 mr-4 rounded-lg shadow-md ">
              <div className="bg-material-purple w-full h-16 flex flex-col items-center justify-center relative rounded-t-lg shadow-md">
                <button
                  onClick={toggleChat}
                  className="absolute top-4 right-4 z-10 flex items-center justify-center"
                >
                  <p className="text-2xl">X</p>
                </button>
                <p className="text-white text-lg font-semibold">
                  Zaneri&trade;
                </p>
                <p className="text-white">AI Powered Chatbot</p>
              </div>
              <ChatThread messages={messages} />
              <div className="p-4 w-full flex flex-col">
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
            </div>
          </div>
        </div>
      ) : (
        <button
          className=" fixed bottom-4 right-4 px-12 hover:border hover:border-white py-2 text-xl bg-material-purple  text-white rounded-full shadow-lg animate-bounce hover:bg-blue-600 transition duration-300 "
          onClick={toggleChat}
        >
          Ask Zaneri&trade;
          <p className="text-sm font-light ">Powered by AI.</p>
        </button>
      )}
    </>
  );
};

export default ChatBot;
