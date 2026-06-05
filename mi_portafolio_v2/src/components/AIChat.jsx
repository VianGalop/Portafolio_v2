import { useState } from "react";
/* import axios from "axios"; */
import { motion, AnimatePresence } from "framer-motion";

function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    {
      role: "assistant",
      content: "Hola, soy el asistente de este portafolio. ¿Qué quieres saber?",
    },
  ]);

  async function sendMessage() {
    if (!message.trim()) return;

    const userMessage = {
      role: "user",
      content: message,
    };

    setChat((prev) => [...prev, userMessage]);
    setMessage("");

    try {
      const response = await fetch("http://localhost:3001/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: chat,
        }),
      });

      const data = await response.json();

      setChat([
        ...chat,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* BOTÓN FLOTANTE */}

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="
            bg-zinc-400
            dark:
            w-14
            h-14
            rounded-full
            dark:bg-white
            text-black
            text-2xl
            shadow-2xl
            hover:scale-110
            transition
          "
        >
          🤖
        </button>
      )}

      {/* CHAT ABIERTO */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 100,
              scale: 0.8,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
            w-[95vw]
            max-w-[420px]
            h-[80vh]
            max-h-[320px]            
            bg-zinc-900
            border
            border-zinc-700
            rounded-2xl
            overflow-hidden
            shadow-2xl
            flex
            flex-col
          "
          >
            {/* HEADER */}

            <div
              className="
              p-4
              border-b
              border-zinc-700
              flex
              justify-between
              items-center
            text-white
            "
            >
              <h2 className="font-bold">AI Assistant</h2>

              <button
                onClick={() => setIsOpen(false)}
                className="
                text-gray-400
                hover:text-white
                text-xl
              "
              >
                ✕
              </button>
            </div>

            {/* MENSAJES */}

            <div
              className="
              flex-1
              overflow-y-auto
              p-4
              space-y-4
              text-white
            "
            >
              {chat.map((msg, index) => (
                <div
                  key={index}
                  className={`
                  p-3
                  rounded-xl
                  max-w-[85%]

                  ${
                    msg.role === "user"
                      ? `
                      bg-blue-500
                      ml-auto
                    `
                      : `
                      bg-zinc-800
                    `
                  }
                `}
                >
                  {msg.content}
                </div>
              ))}
            </div>

            {/* INPUT */}

            <div className="p-4 flex gap-2">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Pregunta algo..."
                className="
                flex-1
                bg-zinc-800
                p-3
                rounded-lg
                outline-none
                text-shadow-white
                dark:text-shadow-white
              "
              />

              <button
                onClick={sendMessage}
                className="
                bg-white
                text-black
                px-5
                rounded-lg
                hover:bg-gray-200
                transition
              "
              >
                →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AIChat;
