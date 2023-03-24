import React from 'react'

const Button = ({buttonText}) => {

  return (
    <button className='bg-zinc-600 hover:bg-slate-500 text-white uppercase text-lg font-semibold py-2 px-4 border border-gray-400 w-full'>{buttonText}</button>
  )
}



export default Button