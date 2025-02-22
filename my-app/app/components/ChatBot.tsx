"use client"

import { useState } from "react"
import { MessageSquare, X } from "lucide-react"

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([{ text: "Hello! I am Quickbot, How can I assist you today?", sender: "bot" }])
  const [input, setInput] = useState("")

  // Predefined responses for greetings and common phrases
  const predefinedResponses : { [key: string]: string}= {
    "hi": "Hello! How can I assist you today?",
    "hello": "Hi there! What can I do for you?",
    "hey": "Hey! How can I help you?",
    "how are you": "I'm just a bot, but I'm here to help you! How can I assist you today?",
    "good morning": "Good morning! How can I assist you today?",
    "good afternoon": "Good afternoon! What can I do for you?",
    "good evening": "Good evening! How can I help you?",
    "thanks": "You're welcome! Let me know if you need anything else.",
    "thank you": "You're welcome! Happy to help.",
    "bye": "Goodbye! Have a great day!",
    "see you later": "See you later! Feel free to reach out if you need anything.",
  }

  const toggleChat = () => setIsOpen(!isOpen)

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage = input.toLowerCase().trim()
    const newMessages = [...messages, { text: input, sender: "user" }]
    setMessages(newMessages)
    setInput("")

    // Check if the user's input matches a predefined greeting or phrase
    const botResponse = predefinedResponses[userMessage]
    if (botResponse) {
      setMessages([...newMessages, { text: botResponse, sender: "bot" }])
      return
    }

    // If no predefined response, send the message to the backend API
    try {
      const response = await fetch("https://api-zezh.onrender.com/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }),
      })

      if (!response.ok) {
        throw new Error("Failed to fetch response from the server")
      }

      const data = await response.json()
      if (data.answer) {
        setMessages([...newMessages, { text: data.answer, sender: "bot" }])
      } else {
        throw new Error("Invalid response from the server")
      }
    } catch (error) {
      console.error("Error communicating with chatbot API:", error)
      setMessages([...newMessages, { text: "Oops! Something went wrong. Please try again.", sender: "bot" }])
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-80 h-96 flex flex-col">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">QuickReach AI Chat</h3>
            <button onClick={toggleChat} className="text-white hover:text-gray-200">
              <X size={20} />
            </button>
          </div>
          <div className="flex-grow p-4 overflow-y-auto space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg max-w-xs ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white self-end ml-auto"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white self-start mr-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-4 border-t dark:border-gray-700 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
        >
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  )
}

export default ChatBot
