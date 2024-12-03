import React from 'react'
import { RiCloseCircleFill } from 'react-icons/ri'
import imageLogo from '../../assets/CodiBot_logo.png'

export const HeaderChat = ({handleStete}) => {
    return (
        <header className="bg-bgCoder text-detailCoder text-center mb-3 rounded-md">
            <h2 className="text-2xl">Bienvenido a 
                <img src={imageLogo} alt="Imagen de codiBot"
                className='h-auto w-full pointer-events-none' />
            </h2>
            <p className="text-md">Te ayudo a encontrar tu curso/carrera ideal</p>
            <RiCloseCircleFill  size={25}
                    className="text-detailCoder transition-all duration-300
                    cursor-pointer top-4 absolute right-4 hover:scale-1051" 
                    onClick={handleStete}/>
        </header>
    )
}
