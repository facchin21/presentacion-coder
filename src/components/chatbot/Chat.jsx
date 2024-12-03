import React from 'react'

export const Chat = ({messages}) => {
    return (
        <div className="h-80 overflow-y-auto border-b border-detailCoder mb-4 p-2">
            <span className="block text-center mb-4">Inicio de conversacion</span>
            {messages?.map((msg, index) => (
                <div key={index} className="mb-2 text-left">
                    <div className={`inline-block px-4 py-2 rounded-lg bg-detailCoder text-black`}>
                        {msg.content}
                    </div>
                </div>
            ))}
        </div>
    )
}
