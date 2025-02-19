import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ToggleButton: React.FC = () => {
    const [selected, setSelected] = useState<'직접' | '온라인'>('직접')

    return (
        <div
            className='relative flex h-[2.5rem] w-full cursor-pointer items-center rounded-10 bg-gray-300'
            onClick={() =>
                setSelected(selected === '직접' ? '온라인' : '직접')
            }>
            <motion.div
                className='shadow-slider absolute flex h-[2.1rem] w-1/2 flex-1 items-center justify-center rounded-xl bg-white text-body2 font-medium text-gray-1300'
                animate={{ x: selected === '온라인' ? '98%' : '2%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}>
                {selected}
            </motion.div>
            <div className='flex flex-1 items-center justify-center text-body2 font-normal text-gray-800'>
                직접
            </div>
            <div className='flex flex-1 items-center justify-center text-body2 font-normal text-gray-800'>
                온라인
            </div>
        </div>
    )
}

export default ToggleButton
