import React from 'react'

interface ButtonLgProps {
    text: string
}

const ButtonLg: React.FC<ButtonLgProps> = ({ text }) => {
    return (
        <div className='mb-[1rem] ml-[1rem] mr-[1rem] mt-[0.62rem] flex h-[3rem] items-center justify-center rounded-xl bg-gray-1200 text-body2 font-medium text-white'>
            {text}
        </div>
    )
}

export default ButtonLg
