import React from 'react'
import { LinkPreview } from './ui/link-preview'

export const Component3 = () => {
  return (
    <div className='flex flex-col items-center justify-center py-5'>
      <h1 className='text-textCoder text-2xl mb-3'>Componente 3</h1>
      <LinkPreview
        children={'Ver Linkedin'}
        url={'https://www.linkedin.com/in/ferminfacchin21/'}
      />
    </div>
  )
}
