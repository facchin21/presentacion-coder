import { ButtonChat } from "./ButtonChat";
import { HeaderChat } from "./HeaderChat";
import React, { useState } from "react";
import { InputChat } from "./InputChat";
import { Chat } from "./Chat";
import axios from "axios";

const ChatBox = () => {
    const [isActive, setIsActive] = useState(false);
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSending) return; // Evitar múltiples envíos simultáneos

        const userMessage = { role: "user", content: userInput };
        const newMessage = [...messages, userMessage];
        setMessages(newMessage);
        setUserInput('');
        setIsSending(true); // Indicamos que la solicitud está en proceso

        try {
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: "gpt-4", // Verifica que tienes acceso a este modelo
                    messages: [
                        { role: 'system', content: "Actúa como un chatbot orientado a asignar un curso según las necesidades del usuario." },
                        ...newMessage,
                    ]
                },
                {
                    headers: {
                        'Authorization': 'Bearer ', // Reemplaza con tu clave API de OpenAI
                        'Content-Type': 'application/json'
                    }
                }
            );

            const botMessage = response.data.choices[0].message.content;
            setMessages([...newMessage, { role: 'assistant', content: botMessage }]);

        } catch (error) {
            console.error('Error:', error);
            if (error.response?.status === 404) {
                alert("API no encontrada. Verifica la URL y la configuración.");
            } else if (error.response?.status === 429) {
                alert("Demasiadas solicitudes. Por favor espera un momento.");
            }
        } finally {
            setIsSending(false); // Finalizar el proceso de envío
        }
    };
    const handleActive = () => {
        setIsActive((prevState) => !prevState);
    }

    return (
        <>
            <ButtonChat onChange={handleActive} />
            <div className={`fixed ${isActive ? "origin-center block" : " hidden"}
            bottom-4 right-4 z-50
            w-full max-w-md mx-auto bg-bgCoder text-textCoder 
            p-4 rounded-lg shadow-md shadow-gray-600
            transition-transform duration-1000`}>
                <HeaderChat handleStete={handleActive}/>
                <Chat messages={messages} />
                <InputChat handleSubmit={handleSubmit}
                    setInput={setUserInput}
                    userInput={userInput}
                    isSending={isSending} />
            </div >
        </>
    );
};

export default ChatBox;
