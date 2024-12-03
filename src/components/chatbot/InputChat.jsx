import React from 'react'

export const InputChat = ({ handleSubmit, setInput, userInput, isSending }) => {
    return (
        <form onSubmit={handleSubmit} className=" flex gap-2">
            <input
                type="text"
                className="flex-1 p-2 rounded-lg bg-gray-800 text-textCoder focus:outline-none focus:ring-2 focus:ring-detailCoder"
                placeholder="Escribe tu respuesta..."
                value={userInput}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="px-4 py-2 bg-detailCoder text-black rounded-lg hover:opacity-80"
                disabled={isSending}
            >
                {isSending ? "Enviando..." : "Enviar"}
            </button>
        </form>
    )
}
