import React from 'react'
import { IoChatbox } from 'react-icons/io5'

export const ButtonChat = ({onChange}) => {
    return (
        <button className="bg-detailCoder w-14 h-14 flex items-center justify-center
            rounded-full fixed bottom-4 right-4 z-50 transtion-all duration-300
            hover:scale-105 hover:-translate-y-1 hover:opacity-90"
            onClick={() => onChange((prevState) => !prevState)}>
            <IoChatbox size={24} className="transiton-all 
                    duration-300 hover:scale-105"/>
        </button>
    )
}
